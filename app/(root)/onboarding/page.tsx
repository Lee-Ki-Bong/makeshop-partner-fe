"use client";

import { useState } from "react";
import type { UpdatePartnerAgreementDto } from "@/api/generated";
import { useOnboardMutation } from "@/hooks/useOnboardMutation";

export default function OnboardingPage() {
  const [agreements, setAgreements] = useState<UpdatePartnerAgreementDto>({
    termsOfUse: false,
    privacyPolicy: false,
    marketingSms: false,
    marketingEmail: false,
  });

  const { mutate: useOnboard, isPending } = useOnboardMutation();

  const handleSubmit = () => {
    if (!agreements.termsOfUse || !agreements.privacyPolicy) {
      alert("필수 약관에 모두 동의해주세요.");
      return;
    }
    useOnboard(agreements);
  };

  const toggleAgreement = (key: keyof UpdatePartnerAgreementDto) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          파트너 서비스 이용 동의
        </h1>

        {/* 체크박스 리스트 */}
        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreements.termsOfUse}
              onChange={() => toggleAgreement("termsOfUse")}
            />
            <span>이용약관 동의 (필수)</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreements.privacyPolicy}
              onChange={() => toggleAgreement("privacyPolicy")}
            />
            <span>개인정보 처리방침 동의 (필수)</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreements.marketingSms}
              onChange={() => toggleAgreement("marketingSms")}
            />
            <span>SMS 마케팅 수신 동의 (선택)</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreements.marketingEmail}
              onChange={() => toggleAgreement("marketingEmail")}
            />
            <span>이메일 마케팅 수신 동의 (선택)</span>
          </label>
        </div>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? "처리 중..." : "동의하고 시작하기"}
        </button>
      </div>
    </main>
  );
}

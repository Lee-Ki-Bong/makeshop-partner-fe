"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Service as PartnerService } from "@/api/generated";

interface PartnerAgreementResponse {
  success: boolean;
  operation: string;
  message: string;
  data: any; // TODO: PartnerAgreementDto 로 교체 권장
}

export const usePartnerAgreement = (enabled: boolean) => {
  const addLog = useAuthStore((state) => state.addLog);
  const router = useRouter();

  const query = useQuery<PartnerAgreementResponse>({
    queryKey: ["partner-agreement"],
    queryFn: PartnerService.partnerAgreementControllerGet,
    enabled, // 의존성 명시적 설정
    retry: false,
  });

  // 성공 핸들링
  useEffect(() => {
    if (query.isSuccess) {
      addLog({
        status: "success",
        data: query.data,
        timestamp: new Date().toISOString(),
      });
    }
  }, [query.isSuccess]);

  // 실패 핸들링
  useEffect(() => {
    if (query.isError) {
      const err: any = query.error;

      const backendError = err?.body ?? {
        message: err.message ?? "알 수 없는 오류",
        statusCode: err.status ?? "Unknown",
      };

      const statusCode = backendError.statusCode;

      addLog({
        status: "error",
        error: backendError,
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        if (statusCode === 401) {
          addLog({
            status: "error",
            error: "인증되지 않은 요청 → 로그인 필요",
            timestamp: new Date().toISOString(),
          });
          router.push("/signin");
        }

        if (statusCode === 404) {
          addLog({
            status: "error",
            error: "이용 약관 정보가 존재하지 않습니다.",
            timestamp: new Date().toISOString(),
          });
        }
      }, 2000);
    }
  }, [query.isError]);

  return query;
};

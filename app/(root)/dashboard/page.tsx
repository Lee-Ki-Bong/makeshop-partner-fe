"use client";

import { useMe } from "@/hooks/useMe";
import { usePartnerAgreement } from "@/hooks/usePartnerAgreement";

export default function DashboardPage() {
  const me = useMe();

  const pa = usePartnerAgreement(me.isSuccess);

  if (me.isLoading) return <div>Loading...</div>;
  if (me.isError) return null; // useMe 내부에서 라우팅 처리됨

  if (pa.isLoading) return <div>약관 로딩 중...</div>;
  if (pa.isError) return <div>약관 에러</div>;

  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}

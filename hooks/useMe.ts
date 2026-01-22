"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ApiResponseDto, Service } from "@/api/generated";

interface MeResponse {
  success: boolean;
  operation: string;
  message: string;
  data: any; // 혹은 UserInfo 타입
}

export const useMe = () => {
  const addLog = useAuthStore((state) => state.addLog);
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);
  const router = useRouter();

  const query = useQuery<ApiResponseDto>({
    queryKey: ["me"],
    queryFn: Service.meControllerGetMe,
    retry: false,
  });

  // console.log("[useMe]", {
  //   isFetching: query.isFetching,
  //   isLoading: query.isLoading,
  //   isSuccess: query.isSuccess,
  //   dataUpdatedAt: query.dataUpdatedAt,
  // });

  // 성공 핸들링
  useEffect(() => {
    // ❌ 아직 성공 상태가 아니면 판단할 수 없음
    // - 초기 로딩 중
    // - 혹은 에러 상태
    if (!query.isSuccess) return;

    // ❌ React Query가 기존 캐시 데이터를 유지한 채
    //    백그라운드에서 최신 데이터를 재요청 중인 상태
    // → 이 시점의 data는 "과거 데이터"일 수 있으므로
    //    절대 라우팅 / 상태 판단에 사용하면 안 된다
    if (query.isFetching) return;

    // ✅ 여기부터는
    // - 서버에서 최신 /me 응답을 수신 완료했고
    // - 이 데이터는 "지금 시점의 진실"이라고 가정해도 안전한 상태
    const flags = query.data.data?.flags;

    // ❗ 파트너 정보도 없고 약관 동의도 안 된 경우
    // → 최초 사용자 or 아직 온보딩을 완료하지 않은 상태
    // → 온보딩 페이지로 유도
    if (flags?.hasPartner === false && flags?.agreed === false) {
      addLog({
        status: "error",
        error: `PB에 사용자 정보가 없습니다 → 동의(연동) 절차가 필요합니다.`,
        timestamp: new Date().toISOString(),
      });

      router.push("/onboarding");
      return; // 이후 로직 실행 방지
    }

    // ✅ 정상 사용자 상태
    // - 파트너 정보 존재
    // - 또는 약관 동의 완료 상태
    // → 현재 /me 데이터를 전역 사용자 상태로 저장
    addLog({
      status: "success",
      data: query.data,
      timestamp: new Date().toISOString(),
    });

    setUser(query.data.data); // 유저 데이터 저장
  }, [
    query.isSuccess, // 성공 여부가 바뀌는 시점
    query.isFetching, // 백그라운드 재요청 완료 시점
    query.dataUpdatedAt, // 실제 데이터가 갱신된 시점
  ]);

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
        error: backendError || { message: err.message, statusCode },
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        if (statusCode === 401) {
          addLog({
            status: "error",
            error: `로그인 페이지로 리다이렉트`,
            timestamp: new Date().toISOString(),
          });
          clearUser();
          router.push("/signin");
        }
      }, 2000);
    }
  }, [query.isError]);

  return query;
};

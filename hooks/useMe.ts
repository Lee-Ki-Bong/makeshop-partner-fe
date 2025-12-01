"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserService } from "@/api/generated";

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

  const query = useQuery<MeResponse>({
    queryKey: ["me"],
    queryFn: UserService.meControllerGetMe,
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

      setUser(query.data.data); // 유저 데이터 저장
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

        if (statusCode === 404) {
          addLog({
            status: "error",
            error: `PB에 사용자 정보가 없습니다 → 동의(연동) 절차가 필요합니다.`,
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

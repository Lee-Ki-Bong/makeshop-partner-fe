"use client";

import { useQuery } from "@tanstack/react-query";
import { me } from "@/api/partner-api";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
    queryFn: me,
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

      const backendError = err?.response?.data || null;
      const statusCode = err?.response?.status || "Unknown";

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

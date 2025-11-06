"use client";

import { useMutation } from "@tanstack/react-query";
import { startOAuthFlow } from "@/api/partner-api";
import { useAuthStore } from "@/stores/useAuthStore";

export const useStartOAuth = () => {
  const addLog = useAuthStore((state) => state.addLog);

  return useMutation({
    mutationFn: startOAuthFlow,

    onSuccess: (res) => {
      addLog({
        status: "success",
        data: res,
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        addLog({
          status: "success",
          data: "인증 서버로 이동",
          timestamp: new Date().toISOString(),
        });
      }, 1400);

      // ✅ 인증 서버로 이동 (로그인 화면/동의 화면으로 유저를 보냄)
      if (res?.data?.authorizeUrl) {
        // ✅ 0.7초 후에 이동 (로그 확인 가능)
        setTimeout(() => {
          window.location.href = res.data.authorizeUrl;
        }, 2800);
      }
    },

    onError: (error: any) => {
      const backendError = error?.response?.data || null; // ✅ 404 JSON도 포함됨
      const statusCode = error?.response?.status || "Unknown";

      addLog({
        status: "error",
        error: backendError || { message: error.message, statusCode },
        timestamp: new Date().toISOString(),
      });
    },
  });
};

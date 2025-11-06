// hooks/useStartOAuth.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { startOAuthFlow } from "@/api/partner-api";
import { useAuthStore } from "@/stores/useAuthStore";

export const useStartOAuth = () => {
  const addLog = useAuthStore((state) => state.addLog);

  return useMutation({
    mutationFn: startOAuthFlow,

    onSuccess: (data) => {
      addLog({
        status: "success",
        data,
        timestamp: new Date().toISOString(),
      });
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

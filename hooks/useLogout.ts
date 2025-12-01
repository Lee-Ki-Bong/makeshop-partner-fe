"use client";

import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/partner-api";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { AuthService } from "@/api/generated";

export const useLogout = () => {
  const router = useRouter();
  const addLog = useAuthStore((state) => state.addLog);
  const clearUser = useAuthStore((s) => s.clearUser);

  return useMutation({
    mutationFn: AuthService.logoutControllerLogout,

    onSuccess: (res) => {
      addLog({
        status: "success",
        data: res,
        timestamp: new Date().toISOString(),
      });
      clearUser();
      // 쿠키 제거는 서버에서 하고 있으므로 클라이언트는 이동만
      router.push("/signin");
    },

    onError: (err: any) => {
      const backendError = err?.response?.data || null; // ✅ 404 JSON도 포함됨
      const statusCode = err?.response?.status || "Unknown";

      addLog({
        status: "error",
        error: backendError || { message: err.message, statusCode },
        timestamp: new Date().toISOString(),
      });

      clearUser();
      console.error("Logout error:", err);
      router.push("/signin");
    },
  });
};

"use client";

import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { ensureDeviceId } from "@/lib/device";
import { AuthService, StartOAuthResponseDto } from "@/api/generated";

export const useStartOAuth = (screenHint?: string) => {
  const addLog = useAuthStore((state) => state.addLog);

  return useMutation({
    mutationFn: async () => {
      // 디바이스 ID 생성
      const deviceId = ensureDeviceId();

      // 회원가입이면 screenHint=signup 전달
      return AuthService.startOAuthControllerStartOauth(deviceId, screenHint)
        .then((res) => res)
        .catch((error) => {
          throw error; // AxiosError는 그대로 throw (response 포함)
        });
    },

    onSuccess: (res) => {
      addLog({
        status: "success",
        data: res,
        timestamp: new Date().toISOString(),
      });

      const data = res.data as StartOAuthResponseDto;

      if (data.authorizeUrl) {
        setTimeout(() => {
          addLog({
            status: "success",
            data: `파트너 백앤드에서 받은 authorizeUrl 로 리다이렉트 ${data.authorizeUrl}`,
            timestamp: new Date().toISOString(),
          });
        }, 1400);

        // ✅ 인증 서버로 이동 (로그인 화면/동의 화면으로 유저를 보냄)
        // ✅ 0.7초 후에 이동 (로그 확인 가능)
        setTimeout(() => {
          window.location.href = data.authorizeUrl;
        }, 2800);
      }
    },

    onError: (err: any) => {
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
    },
  });
};

"use client";

import { useMutation } from "@tanstack/react-query";
import { CreatePartnerAgreementDto, UserService } from "@/api/generated";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";

export const useOnboardMutation = () => {
  const addLog = useAuthStore((state) => state.addLog);
  const clearUser = useAuthStore((state) => state.clearUser);
  const router = useRouter();

  return useMutation({
    mutationFn: async (dto: CreatePartnerAgreementDto) => {
      return UserService.userRegistrationControllerRegister(dto) // OpenAPI 기반 API 연결
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    },

    onSuccess: (data) => {
      addLog({
        status: "success",
        data: data,
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        addLog({
          status: "success",
          data: `로그인 페이지로 리다이렉트`,
          timestamp: new Date().toISOString(),
        });
        clearUser();
        router.push("/signin");
      }, 2000);
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

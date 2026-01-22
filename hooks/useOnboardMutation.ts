"use client";

import { useMutation } from "@tanstack/react-query";
import { CreatePartnerAgreementDto, Service } from "@/api/generated";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export const useOnboardMutation = () => {
  const addLog = useAuthStore((state) => state.addLog);
  const clearUser = useAuthStore((state) => state.clearUser);
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (dto: CreatePartnerAgreementDto) => {
      return Service.userRegistrationControllerRegister(dto) // OpenAPI 기반 API 연결
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    },

    onSuccess: async (data) => {
      addLog({
        status: "success",
        data: data,
        timestamp: new Date().toISOString(),
      });

      addLog({
        status: "success",
        data: `메인 페이지로 리다이렉트`,
        timestamp: new Date().toISOString(),
      });
      // clearUser();
      await queryClient.invalidateQueries({ queryKey: ["me"] });
      router.push("/");
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

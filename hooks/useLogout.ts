"use client";

import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/partner-api";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      // 쿠키 제거는 서버에서 하고 있으므로 클라이언트는 이동만
      router.push("/signin");
    },

    onError: (err: any) => {
      console.error("Logout error:", err);
      router.push("/signin");
    },
  });
};

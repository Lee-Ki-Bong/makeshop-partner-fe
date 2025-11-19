"use client";

import { useQuery } from "@tanstack/react-query";
import { me } from "@/api/partner-api";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";

export const useMe = () => {
  const addLog = useAuthStore((state) => state.addLog);

  const query = useQuery({
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
    }
  }, [query.isError]);

  return query;
};

"use client";

import { useAuthStore } from "@/stores/useAuthStore";

export default function AuthResultPanel() {
  const oauthLogs = useAuthStore((state) => state.oauthLogs);

  if (!oauthLogs || oauthLogs.length === 0) {
    return <p className="text-sm text-gray-500 p-4">로그인 응답이 없습니다.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-semibold text-lg">OAuth 응답 로그</h2>

      {oauthLogs.map((log, index) => {
        const isSuccess = log.status === "success";
        const payload = isSuccess ? log.data : log.error;

        return (
          <div
            key={index}
            className={`p-3 rounded-md text-sm ${
              isSuccess ? "bg-green-700 text-white" : "bg-red-700 text-white"
            }`}
          >
            {/* 상태 + 시간 */}
            <div className="flex justify-between">
              <span>{isSuccess ? "✅ 성공" : "❌ 실패"}</span>
              <span className="opacity-70">{log.timestamp}</span>
            </div>

            {/* 응답 JSON 출력 */}
            <pre className="mt-2 overflow-auto text-xs">
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>
        );
      })}
    </div>
  );
}

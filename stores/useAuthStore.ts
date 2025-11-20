import { create } from "zustand";

export interface OAuthLog {
  status: "success" | "error"; // 결과 상태
  timestamp: string; // 언제 발생했는지 (ISO 시간)
  data?: any; // 성공 시 응답 데이터
  error?: any; // 실패 시 에러 정보
}

interface AuthState {
  // 성공 응답 관련
  oauthLogs: OAuthLog[]; // 누적 저장되는 로그 배열
  addLog: (log: OAuthLog) => void;
  clearLogs: () => void;

  // 유저 관련
  user: any;
  isLoggedIn: boolean; // 로그인 여부
  setUser: (data: any) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  oauthLogs: [],
  addLog: (log) =>
    set((state) => ({
      oauthLogs: [...state.oauthLogs, log], // 새 로그를 누적(push)
    })),
  clearLogs: () => set({ oauthLogs: [] }), // 로그 전체 삭제 (필요시만 사용)
  setUser: (data) => set({ user: data, isLoggedIn: true }),
  clearUser: () => set({ user: null, isLoggedIn: false }),
}));

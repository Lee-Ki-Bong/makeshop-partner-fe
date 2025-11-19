import axios from "axios";

const partnerApi = axios.create({
  baseURL: "http://localhost:3002", // 파트너 백앤드
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 중요한 인증 세션용
});

export interface OAuthResponse {
  authorizeUrl: string;
}

export interface DeviceInfo {
  device_id: string;
  user_agent: string;
}

export const startOAuthFlow = async (deviceInfo: DeviceInfo): Promise<any> => {
  return partnerApi
    .post("/partner/oauth/start", deviceInfo)
    .then((res) => res.data)
    .catch((error) => {
      // ✅ AxiosError는 그대로 throw (response 포함)
      throw error;
    });
};

export const me = async () => {
  return partnerApi
    .get("partner/me")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

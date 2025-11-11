import axios from "axios";

const partnerApi = axios.create({
  baseURL: "http://localhost:3002", // 파트너 백앤드
  headers: {
    "Content-Type": "application/json",
  },
});

export interface OAuthResponse {
  authorizeUrl: string;
}

export const startOAuthFlow = async (): Promise<any> => {
  return partnerApi
    .get("/partner/oauth/start")
    .then((res) => res.data)
    .catch((error) => {
      // ✅ AxiosError는 그대로 throw (response 포함)
      throw error;
    });
};

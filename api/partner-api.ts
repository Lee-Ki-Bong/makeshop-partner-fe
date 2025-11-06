import axios from "axios";

const partnerApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface OAuthResponse {
  authorizationUrl: string;
}

export const startOAuthFlow = async (): Promise<OAuthResponse> => {
  return partnerApi
    .get("/partner/oauth/start")
    .then((res) => res.data)
    .catch((error) => {
      // ✅ AxiosError는 그대로 throw (response 포함)
      throw error;
    });
};

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

export const startOAuthFlow = async (deviceId: string): Promise<any> => {
  return partnerApi
    .get("/oauth/start", { params: { deviceId } })
    .then((res) => res.data)
    .catch((error) => {
      throw error; // AxiosError는 그대로 throw (response 포함)
    });
};

export const me = async () => {
  return partnerApi
    .get("/me")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const logout = async () => {
  return partnerApi
    .post("/logout")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3002", // 파트너 백앤드
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 중요한 인증 세션용
});

axiosInstance.interceptors.response.use(
  (r) => r,
  (err) => {
    console.error("Axios error:", err);
    throw err;
  }
);


/* AUTO GENERATED — DO NOT EDIT */
import { axiosInstance } from "./axios-instance";

export const getOauthStart = async (params?: any): Promise<any> => {
  return axiosInstance.get("/oauth/start", { params })
    .then(res => res.data)
    .catch(error => { throw error; });
};

export const getMe = async (params?: any): Promise<any> => {
  return axiosInstance.get("/me", { params })
    .then(res => res.data)
    .catch(error => { throw error; });
};

export const postLogout = async (body?: any, params?: any): Promise<any> => {
  return axiosInstance.post("/logout", body, { params })
    .then(res => res.data)
    .catch(error => { throw error; });
};

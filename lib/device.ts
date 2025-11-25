"use client";

export const ensureDeviceId = () => {
  const KEY = "ms_device_id"; // @TODO constants.ts 로 관리
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
};

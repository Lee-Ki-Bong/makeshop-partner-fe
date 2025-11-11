export const ensureDeviceId = (): string => {
  const KEY = "ms_device_id";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
};

export const collectDeviceInfo = () => {
  const device_id = ensureDeviceId();
  const user_agent = navigator.userAgent || "";
  return { device_id, user_agent };
};

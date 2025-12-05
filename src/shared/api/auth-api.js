import instance from "./instance";

export const register = async (payload) => {
  const { data } = await authInstance.post("/auth/register", payload);
  return data;
};

export const login = async (payload) => {
  const { data } = await authInstance.post("/auth/login", payload);
  instance.defaults.headers["Autorization"] = `Bearer ${payload.accessToken}`;
  return data;
};

export const logout = async () => {
  await instance.post("/logout");
  instance.defaults.headers["Autorization"] = "";
};

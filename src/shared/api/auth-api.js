import instance from "./instance";

export const register = async (payload) => {
  const { data } = await instance.post("/auth/register", payload);
  return data;
};

export const login = async (payload) => {
  const { data } = await instance.post("/auth/login", payload);

  instance.defaults.headers["Authorization"] = `Bearer ${data.accessToken}`;

  return data;
};

export const logout = async () => {
  await instance.post("/auth/logout");
  instance.defaults.headers["Authorization"] = "";
};

export const refresh = async (payload) => {
  const { data } = await instance.post("/auth/refresh", payload);
  return data;
};

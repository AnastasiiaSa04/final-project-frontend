import axios from "axios";
import { dispatchLogout, dispatchTokens } from "./tokenService";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { auth } = store.getState();

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          { refreshToken: auth.refreshToken }
        );

        instance.defaults.headers["Authorization"] =
          `Bearer ${data.accessToken}`;

        dispatchTokens(data);

        return instance(originalRequest);
      } catch (e) {
        dispatchLogout();
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;

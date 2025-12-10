import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../shared/api/auth-api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authApi.register(payload);
      return data;
    } catch (error) {
      const message =
        (error?.response?.data?.message &&
          String(error.response.data.message)) ||
        (error?.message && String(error.message)) ||
        "Unknown error";
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authApi.login(payload);
      return data;
    } catch (error) {
      const message =
        (error?.response?.data?.message &&
          String(error.response.data.message)) ||
        (error?.message && String(error.message)) ||
        "Unknown error";
      return rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
    } catch (error) {
      return rejectWithValue(error?.message || "Logout error");
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const { refreshToken } = getState().auth;

    if (!refreshToken) {
      return rejectWithValue("No refresh token");
    }

    try {
      const { data } = await authApi.refresh({ refreshToken });
      return data;
    } catch (error) {
      let message = "Unknown error";

      const backendMessage = error?.response?.data?.message;

      if (typeof backendMessage === "string") {
        message = backendMessage;
      } else if (
        typeof backendMessage === "object" &&
        backendMessage !== null
      ) {
        message = Object.values(backendMessage)[0];
      } else if (error?.message) {
        message = error.message;
      }

      return rejectWithValue(message);
    }
  }
);

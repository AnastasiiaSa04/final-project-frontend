import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const initialState = {
  user: null,
  loading: false,
  error: null,
  accessToekn: null,
  refreshToken: null,
  isRegisterSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.isRegisterSuccess = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default authSlice.reducer;

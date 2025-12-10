import { createSelector } from "@reduxjs/toolkit";

export const selectAuthRequest = createSelector(
  (state) => state.auth.loading,
  (state) => state.auth.error,
  (loading, error) => ({ loading, error })
);

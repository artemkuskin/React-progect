import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk("app/logout", async () => {
    localStorage.removeItem("token");
  });
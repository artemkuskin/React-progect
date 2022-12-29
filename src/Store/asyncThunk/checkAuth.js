import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk("app/checkAuth", async () => {
    const user = localStorage.getItem("token");
    return { check: true, user: user };
  });
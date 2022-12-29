import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "../../services/AuthService";

export const login = createAsyncThunk(
    "app/getUser",
    async ({ email, password }, {getState}) => {
      const response = await AuthServices.login(email, password);
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  );
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "../../services/AuthService";

export const registration = createAsyncThunk(
    "app/registration",
    async ({ email, password }) => {
      const response = await AuthServices.registration(email, password);
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  );
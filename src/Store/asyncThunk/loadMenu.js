import { createAsyncThunk } from "@reduxjs/toolkit";
import MenuServices from "../../services/MenuServices";

export const loadMenu = createAsyncThunk("app/loadMenu", async () => {
    const response = await MenuServices.fetchMenu();
    return response.data;
  });
  
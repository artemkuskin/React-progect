import { createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../../services/OrderService";

export const setOrder = createAsyncThunk("app/setOrder", async (elem) => {
    const response = await OrderService.order(elem);
    return response.data;
  });
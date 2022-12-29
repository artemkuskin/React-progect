import { createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../../services/OrderService";

export const getOrders = createAsyncThunk("app/getOrders", async (params) => {
    const response = await OrderService.getOrder(params);
    return response.data;
  });
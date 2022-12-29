import { createAsyncThunk } from "@reduxjs/toolkit";
import Serach from "../../services/SearchService";

export const getSearch = createAsyncThunk("app/getSearch", async (elem) => {
    const response = await Serach.getSearchElem(elem);
    return response.data;
  });
  
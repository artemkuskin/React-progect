import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AuthServices from "../services/AuthService";
import MenuServices from "../services/MenuServices";
import OrderService from "../services/OrderService";
import Serach from "../services/SearchService";

const initialState = {
  searchElem: [],
  allOrders: [],
  productOrder: [],
  orderSum: 0,
  user: {},
  openModalOrder: false,
  isAuth: false,
  isLoading: false,
  menu2: {},
  category: "pizza",
  basket: [],
  sum: 0,
  modal: {
    category: "sizes",
    open: false,
    elem: {},
    sizes: {},
    breads: {},
    vegetables: {},
    fillings: {},
    arrFill: [],
    sauses: {},
    allFiling: {},
    modalSum: 0,
    isActive2: false,
  },
};

export const loadMenu = createAsyncThunk("app/loadMenu", async () => {
  const response = await MenuServices.fetchMenu();
  //console.log(response);
  return response.data;
});

export const login = createAsyncThunk(
  "app/getUser",
  async ({ email, password }) => {
    const response = await AuthServices.login(email, password);
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

export const registr = createAsyncThunk(
  "app/registration",
  async ({ email, password }) => {
    const response = await AuthServices.registration(email, password);
    // console.log(email);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

export const getSearch = createAsyncThunk("app/getSearch", async (elem) => {
  const response = await Serach.getSearchElem(elem);
  console.log(response);
  //localStorage.setItem("token", response.data.token);
  return response.data;
});

export const logout = createAsyncThunk("app/logout", async () => {
  localStorage.removeItem("token");
});

export const setOrder = createAsyncThunk("app/setOrder", async (elem) => {
  const response = await OrderService.order(elem);
  // console.log(elem, "............................");
  console.log(response.data, ">>>>>>>>>>>>>>>>>>>.");
  return response.data;
});

export const getOrders = createAsyncThunk("app/getOrders", async () => {
  const response = await OrderService.getOrder();
  console.log(response.data, ">>>>>>>>>>>>>>>>>>>.");
  return response.data;
});

export const checkAuth = createAsyncThunk("app/checkAuth", async () => {
  const user = localStorage.getItem("token");
  return { check: true, user: user };
});

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    addBasket(state, action) {
      const index = state.basket.findIndex((i) => i.id === action.payload.id);

      if (index === -1) {
        state.basket.push(action.payload);
      } else {
        for (let key in state.basket) {
          if (state.basket[key].id === action.payload.id) {
            state.basket[key].amount += action.payload.amount;
          }
        }
      }
    },
    changeModalCategory(state, action) {
      state.modal.category = action.payload;
    },
    deletemodalElem(state, action) {
      state.modal.isActive2 =
        state.modal.allFiling[state.modal.category]?.id === action.payload.id
          ? true
          : false;
    },
    openModal(state, action) {
      state.modal.open = action.payload;
      state.modal.allFiling = {};
      state.modal.allFiling.vegetables = [];
      state.modal.arrFill = [];
    },
    openModalOrders(state, action) {
      state.openModalOrder = action.payload;
    },
    getMenu(state, action) {
      state.menu2 = action.payload;
    },
    deleteBasket(state, action) {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload
      );
    },
    updateSum(state, action) {
      state.sum = state.basket.reduce(
        (prev, curr) => prev + curr.price * curr.amount,
        0
      );
    },
    modalElem(state, action) {
      state.modal.elem = action.payload;
    },
    addFillings(state, action) {
      if (!Array.isArray(state.modal.allFiling[state.modal.category])) {
        state.modal[state.modal.category].name = action.payload.name;
        state.modal[state.modal.category].id = action.payload._id;
        state.modal[state.modal.category].price = action.payload.price;
        state.modal[state.modal.category].category = action.payload.category;
        state.modal.allFiling[state.modal.category] =
          state.modal[state.modal.category];
      } else {
        state.modal[state.modal.category].name = action.payload.name;
        state.modal[state.modal.category].id = action.payload._id;
        state.modal[state.modal.category].price = action.payload.price;
        state.modal[state.modal.category].category = action.payload.category;
        state.modal.arrFill.push(state.modal[state.modal.category]);
        state.modal.allFiling[state.modal.category] = [
          ...new Map(
            state.modal.arrFill.map((item) => [item.id, item])
          ).values(),
        ];
      }
    },
    addModalSum(state, action) {
      state.modal.modalSum = state.modal.elem.price;
      let sum = 0;
      for (let key in state.modal.allFiling) {
        if (key !== "vegetables") {
          state.modal.modalSum += state.modal.allFiling[key].price;
        }
      }
      for (let key in state.modal.allFiling.vegetables) {
        sum += state.modal.allFiling.vegetables[key].price;
      }
      state.modal.modalSum += sum;
    },
    modalDeleteElem(state, action) {
      for (let key in state.modal.allFiling) {
        if (state.modal.allFiling[key].id === action.payload.id) {
          delete state.modal.allFiling[key];
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.allOrders = action?.payload?.orders;
      state.orderSum = action?.payload?.sumAllOrders;
    }),
      builder.addCase(registr.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.token;
      }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.token;
      }),
      builder.addCase(logout.fulfilled, (state, action) => {
        state.isAuth = false;
        state.user = {};
      }),
      builder.addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = action.payload.check;
        state.user = action.payload.user;
      }),
      builder.addCase(getSearch.fulfilled, (state, action) => {
        state.searchElem = action.payload.foundProducts;
      }),
      builder.addCase(loadMenu.fulfilled, (state, action) => {
        state.menu2 = action.payload;
      });
  },
});

export const appReducer = appSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { checkAuth } from "./asyncThunk/checkAuth";
import { getOrders } from "./asyncThunk/getOrders";
import { getSearch } from "./asyncThunk/getSearch";
import { loadMenu } from "./asyncThunk/loadMenu";
import { login } from "./asyncThunk/login";
import { logout } from "./asyncThunk/loguot";
import { registration } from "./asyncThunk/registration";
import { setOrder } from "./asyncThunk/setOrder";

const initialState = {
  category: "pizza",
  menu2: {},
  basket: [],
  sum: 0,
  searchElem: [],
  isLoad: false,
  order: {},
  maxPageOrder: 0,
  allOrders: [],
  productOrder: [],
  orderSum: 0,
  user: {},
  openModalOrder: false,
  isAuth: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    load(state, action) {
      state.isLoad = true;
    },
    loadFalse(state, action) {
      state.isLoad = false;
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
    deleteAllElemBasket(state, action) {
      state.basket = [];
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
    deleteElemBasket(state, action) {
      delete state.modal.allFiling[action.payload];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.allOrders = action?.payload?.orders.docs;
      state.maxPageOrder = action.payload.orders.total;
      state.orderSum = action?.payload?.sumAllOrders;
    }),
      builder.addCase(registration.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.token;
      }),
      //     builder.addCase(setOrder.fulfilled, (state, action) => {
      //       const order = {
      //         products: [],
      //       };
      //       for (let key in state.basket) {
      //         const elem = {};
      //         elem.id = state.basket[key].id;
      //         elem.amount = state.basket[key].amount;
      //         elem.additives = [];
      //         for (let key2 in state.basket[key].filling) {
      //           const fillings = state.basket[key].filling[key2];
      //           Array.isArray(fillings)
      //             ? fillings.forEach((el) => elem.additives.push(el.id))
      //             : elem.additives.push(fillings.id);
      //         }
      //         order.products.push(elem);
      //         // console.log(state.order);
      //         console.log(order);
      //       }
      // //return order
      //     }),
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

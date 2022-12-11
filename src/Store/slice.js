import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AuthServices from "../services/AuthService";
import MenuServices from "../services/MenuServices";

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  menu2: [],
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
    sauces: {},
    allFiling: {},
    modalSum: 0,
    isActive2: false,
  },
};

console.log(initialState.isAuth);

export const loadMenu = createAsyncThunk("app/loadMenu", async () => {
  async () => {
    const response = await MenuServices.fetchMenu();
    console.log(response);
    return response.data;
  };
});

export const getUser = createAsyncThunk(
  "app/getUser",
  async ({ email, password }) => {
    try {
      const response = await AuthServices.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.messege);
    }
  }
);

export const registr = createAsyncThunk(
  "app/registration",
  async ({ email, password }) => {
    try {
      const response = await AuthServices.registration(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.messege);
    }
  }
);

export const logout = createAsyncThunk("app/logout", async () => {
  try {
    const response = await AuthServices.logout();
    localStorage.removeItem("token");
  } catch (e) {
    console.log(e.response?.data?.messege);
  }
});

export const checkAuth = createAsyncThunk("app/checkAuth", async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/refresh`, {
      withCredentials: true,
    });
    // console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    console.log(123423134134121234123);
    return response.data;
  } catch (e) {
    console.log(e.response?.data?.messege);
  }
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
    // modalDeleteElem(state, action) {
    // state.modal.allFiling[action.payload.category] = {}
    // },
    addFillings(state, action) {
      if (!Array.isArray(state.modal.allFiling[state.modal.category])) {
        state.modal[state.modal.category].name = action.payload.name;
        state.modal[state.modal.category].id = action.payload.id;
        state.modal[state.modal.category].price = action.payload.price;
        state.modal[state.modal.category].category = action.payload.category;
        state.modal.allFiling[state.modal.category] =
          state.modal[state.modal.category];
      } else {
        state.modal[state.modal.category].name = action.payload.name;
        state.modal[state.modal.category].id = action.payload.id;
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
    builder.addCase(registr.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user;
    }),
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.user;
      }),
      builder.addCase(logout.fulfilled, (state, action) => {
        state.isAuth = false;
        state.user = {};
      }),
      builder.addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.user;
      }),
      builder.addCase(loadMenu.fulfilled, (state, action) => {
             state.menu2.push(action.payload);
          });
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getUser.fulfilled, (state, action) => {
  //     state.isAuth = true;
  //     state.user = action.payload.user;
  //   });
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(logout.fulfilled, (state, action) => {
  //     state.isAuth = false;
  //     state.user = {}
  //   });
  // },

  // extraReducers: (builder) => {
  //   builder.addCase(checkAuth.fulfilled, (state, action) => {
  //     state.isAuth = true;
  //     state.user = action.payload.user
  //   });
  // },

  // extraReducers: (builder) => {
  //   builder.addCase(loadMenu.fulfilled, (state, action) => {
  //     state.menu2 = action.payload;
  //   });
  // },
});

export const appReducer = appSlice.reducer;

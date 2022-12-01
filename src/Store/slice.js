import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../api/getMenu";

const initialState = {
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
    sauces: {},
    allFiling: {},
    modalSum: 0,
  },
};

export const loadMenu = createAsyncThunk("app/loadMenu", async () => {
  const menu = await getMenu();
  return menu;
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
    openModal(state, action) {
      state.modal.open = action.payload;
      state.modal.allFiling = {};
    },
    getMenu(state, action) {
      state.menu2 = action.payload;
    },
    deleteBasket(state, action) {
      state.basket = state.basket.filter((product) => product.id !== action.payload);
    },
    updateSum(state, action) {
      state.sum = state.basket.reduce((prev, curr) => prev + curr.price * curr.amount, 0);
    },
    modalElem(state, action) {
      state.modal.elem = action.payload;
    },
    // modalDeleteElem(state, action) {
    //  state.modal.allFiling[action.payload.category] = {}
    // },
    addSize(state, action) {
      state.modal.sizes.name = action.payload.name;
      state.modal.sizes.id = action.payload.id;
      state.modal.sizes.price = action.payload.price;
      state.modal.sizes.category = action.payload.category;
      state.modal.allFiling.sizes = state.modal.sizes;
    },
    addBread(state, action) {
      state.modal.breads.name = action.payload.name;
      state.modal.breads.id = action.payload.id;
      state.modal.breads.price = action.payload.price;
      state.modal.breads.category = action.payload.category;
      state.modal.allFiling.breads = state.modal.breads;
    },
    addSous(state, action) {
      state.modal.sauces.name = action.payload.name;
      state.modal.sauces.id = action.payload.id;
      state.modal.sauces.price = action.payload.price;
      state.modal.sauces.category = action.payload.category;
      state.modal.allFiling.sauces = state.modal.sauces;
    },
    addFilling(state, action) {
      
      state.modal.fillings.name = action.payload.name;
      state.modal.fillings.id = action.payload.id;
      state.modal.fillings.price = action.payload.price;
      state.modal.fillings.category = action.payload.category;
      state.modal.arrFill.push(state.modal.fillings);
      state.modal.allFiling.fillings = [...new Map(state.modal.arrFill.map(item =>
        [item.id, item])).values()]; 
    },
    addVeget(state, action) {
      state.modal.vegetables.name = action.payload.name;
      state.modal.vegetables.id = action.payload.id;
      state.modal.vegetables.price = action.payload.price;
      state.modal.vegetables.category = action.payload.category;
      state.modal.allFiling.vegetables = state.modal.vegetables;
    },
    addModalSum(state, action) {
      state.modal.modalSum = state.modal.elem.price;
      for (let key in state.modal.allFiling) {
        state.modal.modalSum += state.modal.allFiling[key].price;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadMenu.fulfilled, (state, action) => {
      state.menu2 = action.payload;
    });
  },
});

export const appReducer = appSlice.reducer;

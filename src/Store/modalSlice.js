import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModalCategory(state, action) {
      state.category = action.payload;
    },
    openModal(state, action) {
        state.open = action.payload;
        state.allFiling = {};
        state.allFiling.vegetables = [];
        state.arrFill = [];
      },
      modalElem(state, action) {
        state.elem = action.payload;
      },
      addFillings(state, action) {
        if (!Array.isArray(state.allFiling[state.category])) {
          state[state.category].name = action.payload.name;
          state[state.category].id = action.payload._id;
          state[state.category].price = action.payload.price;
          state[state.category].category = action.payload.category;
          state.allFiling[state.category] =
            state[state.category];
        } else {
          state[state.category].name = action.payload.name;
          state[state.category].id = action.payload._id;
          state[state.category].price = action.payload.price;
          state[state.category].category = action.payload.category;
          state.arrFill.push(state[state.category]);
          state.allFiling[state.category] = [
            ...new Map(
              state.arrFill.map((item) => [item.id, item])
            ).values(),
          ];
        }
      },
      addModalSum(state, action) {
        state.modalSum = state.elem.price;
        let sum = 0;
        for (let key in state.allFiling) {
          if (key !== "vegetables") {
            state.modalSum += state.allFiling[key].price;
          }
        }
        for (let key in state.allFiling.vegetables) {
          sum += state.allFiling.vegetables[key].price;
        }
        state.modalSum += sum;
      },
  },
});

export const modalReducer = modalSlice.reducer

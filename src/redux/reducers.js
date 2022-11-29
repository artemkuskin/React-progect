import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "pizza",
  basket: [],
  modal: {
    category: "sizes",
    open: false
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectedCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getBasket(state, action) {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const modalCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.modal.category = action.payload;
    },
  },
});

export const openModalSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        openModal(state, action) {
            state.modal.open = action.payload
        }
    }
})

// export const deleteElemSlice = createSlice({
//     name: 'delete',
//     initialState,
//     reducers: {
//         deleteBasket(state, action) {
//           state.basket = state.basket.splice(action.payload, 1)
//         }
//     }
// })

export const categoryReducer = categorySlice.reducer;
export const basketReducer = basketSlice.reducer;
export const modalCategoryReducer = modalCategorySlice.reducer;
export const openModalReducer = openModalSlice.reducer
//export const deleteBasketReducer = deleteElemSlice.reducer

// const categoryMenuReducer = (state = initState.category, action) => {
//   switch (action.type) {
//     case pizza:
//       return (state = action.type);
//       case burgers:
//       return (state = action.type);
//       case sandwiches:
//       return (state = action.type);
//       case shaurma:
//       return (state = action.type);
//       case chicken:
//       return (state = action.type);
//       case salads:
//       return (state = action.type);
//       case drinks:
//         return (state = action.type);
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   category: categoryMenuReducer,
// });

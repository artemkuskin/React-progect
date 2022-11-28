import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "pizza",
  basket: []
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
         selectedCategory(state, action) {
            state.category = action.payload
         }
    }
})

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        getBasket(state, action) {
            state.basket = [...state.basket, action.payload]
        }
    }
})

export const categoryReducer =  categorySlice.reducer
export const basketReducer = basketSlice.reducer

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

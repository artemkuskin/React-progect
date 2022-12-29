import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import { appReducer } from "./mainSlice";
import { modalReducer } from "./modalSlice";


const rootReducer = combineReducers({
  appReducer,
  toastr: toastrReducer,
  modal: modalReducer
  
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

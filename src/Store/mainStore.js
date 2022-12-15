import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { appReducer } from "./slice";

const rootReducer = combineReducers({
  appReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux"; 

import { basketReducer, categoryReducer } from "./reducers";

//export const store = createStore(rootReducer)

const rootReducer = combineReducers({
    categoryReducer,
    basketReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
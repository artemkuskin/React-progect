import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; 

import { appReducer, openModalReducer } from "./slice";

//export const store = createStore(rootReducer)

const rootReducer = combineReducers({
    appReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
    
}
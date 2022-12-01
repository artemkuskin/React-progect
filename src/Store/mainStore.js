import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; 

import { appReducer, openModalReducer } from "./slice";

//export const store = createStore(rootReducer)

const rootReducer = combineReducers({
    appReducer,
   //categoryReducer,
   // basketReducer,
   // modalCategoryReducer,
   // openModalReducer,
    //deleteBasketReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
    
}
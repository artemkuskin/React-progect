import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; 

import { basketReducer, categoryReducer, modalCategoryReducer, openModalReducer } from "./reducers";

//export const store = createStore(rootReducer)

const rootReducer = combineReducers({
    categoryReducer,
    basketReducer,
    modalCategoryReducer,
    openModalReducer,
    //deleteBasketReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
    
}
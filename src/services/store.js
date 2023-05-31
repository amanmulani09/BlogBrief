 import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { artiCleApi } from "./article";
 export const store = configureStore({
    reducer:{
        [artiCleApi.reducerPath]:artiCleApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(artiCleApi.middleware)
    }
 })
import { configureStore } from "@reduxjs/toolkit";
import { airbnbReducer } from "./airbnb/airbnb-slice";
import { commentReducer } from "./comments/comments-slice";
 
export const store = configureStore({
    reducer:{
        AIRBNB: airbnbReducer,
        COMMENTS:commentReducer,
    },
 })
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./storeSlice"
const Appstore = configureStore({
    reducer:{
         list:listReducer
    }
})
export  default Appstore;
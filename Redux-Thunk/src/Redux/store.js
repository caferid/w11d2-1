import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import basketSlice from "./basketSlice";
import todosSlice from "./todosSlice";
import categoriesReducer from "./categoriesSlice";



export const store=configureStore({
    reducer:{
        counter:counterSlice,
        todos:todosSlice,
        category:categoriesReducer,
        basket:basketSlice
    }
})
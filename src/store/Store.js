import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './todoSlice.js'

export const Store = configureStore({
    reducer : blogReducer
}) 
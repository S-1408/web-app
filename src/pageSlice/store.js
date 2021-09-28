import {configureStore} from "@reduxjs/toolkit";
import pageReducer from './pageSlice'
export const store= configureStore({
    reducer:{
        pages:pageReducer,
        posts:pageReducer,
        allPost:pageReducer,
        tags:pageReducer,
        authors:pageReducer
    },
 
})
import {configureStore} from "@reduxjs/toolkit";
import actionSlice from "./actionSlice";


const store = configureStore({
    reducer:{
        taskTest : actionSlice,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})

export default store;

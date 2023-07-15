import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducer/loadingReducer";

const reducer = {
    loading: loadingReducer,

};

const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;

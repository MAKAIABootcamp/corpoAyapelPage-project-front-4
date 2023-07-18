import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducer/loadingReducer";
import { suscriptionDonationReducer } from "../reducer/suscriptionDonationReducer";

const reducer = {
    loading: loadingReducer,
    suscriptionDonation: suscriptionDonationReducer,

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

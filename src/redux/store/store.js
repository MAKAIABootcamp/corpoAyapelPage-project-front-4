import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducer/loadingReducer";
import { suscriptionDonationReducer } from "../reducer/suscriptionDonationReducer";
import { dataReducer } from "../reducer/dataReducer";

const reducer = {
    loading: loadingReducer,
    suscriptionDonation: suscriptionDonationReducer,
    data: dataReducer,

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

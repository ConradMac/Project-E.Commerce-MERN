import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const store = configureStore({
    reducer: rootReducer,
    // the middleware is an array of functions that will be executed in the order they are defined
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
    devTools: true,
});

export default store;

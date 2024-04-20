import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const store = configureStore({
    // the reducer is the root reducer that will be used to create the store
    reducer: rootReducer,
    // the middleware is an array of functions that will be executed in the order they are defined. getDefaultMiddleware is a function that returns the default middleware that comes with Redux Toolkit. We are passing an object to this function with the serializableCheck key set to false. This is because the default middleware checks if the action payload is serializable. Since we are using createAsyncThunk, the action payload is not serializable, so we need to disable this check.
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
    // the devTools key is set to true to enable the Redux DevTools extension
    devTools: true,
});

export default store;

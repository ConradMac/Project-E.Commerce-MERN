import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../api/api";

export const adminLogin = createAsyncThunk("auth/admin_login", async (info) => {
    console.log(info);
    try {
        const { data } = await api.post("/admin-login", info, { withCredentials: true });
        console.log(data);
    } catch (error) {
        // cette ligne fait reference a notre fichier response dans le backend.
        console.log(error.response.data);
    }
});

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: "false",
        userInfo: "",
    },
    reducer: {},
    extraReducers: () => {},
});

export default authReducer.reducer;

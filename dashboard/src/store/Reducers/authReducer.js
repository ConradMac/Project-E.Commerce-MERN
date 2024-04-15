import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const adminLogin = createAsyncThunk("auth/admin_login", async (info) => {
    console.log(info);
    try {
        const { data } = await api.post("/admin/login", info, { withCredentials: true });
        console.log(data);
    } catch (cons) {}
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

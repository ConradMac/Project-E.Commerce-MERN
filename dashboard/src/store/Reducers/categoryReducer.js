import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

export const admin_Login = createAsyncThunk("auth/admin_login", async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
        const { data } = await api.post("/admin-login", info, { withCredentials: true });
        localStorage.setItem("accessToken", data.token);
        // console.log(data)
        return fulfillWithValue(data);
    } catch (error) {
        // console.log(error.response.data)
        return rejectWithValue(error.response.data);
    }
});

export const categoryReducer = createSlice({
    name: "category",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: "",
        categories: [],
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = "";
        },
    },
    extraReducers: (builder) => {
        builder;
        // .addCase(admin_Login.pending, (state, { payload }) => {
        //     state.loader = true;
        // })
        // .addCase(admin_Login.rejected, (state, { payload }) => {
        //     state.loader = false;
        //     state.errorMessage = payload.error;
        // })
        // .addCase(admin_Login.fulfilled, (state, { payload }) => {
        //     state.loader = false;
        //     state.successMessage = payload.message;
        //     state.token = payload.token;
        //     state.role = returnRole(payload.token);
        // });
    },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;

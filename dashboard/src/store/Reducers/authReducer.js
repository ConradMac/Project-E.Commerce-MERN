import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../api/api";

// createAsyncThunk takes two arguments: the first argument is the name of the action, and the second argument is an async function that will be executed when the action is dispatched. The async function takes two arguments: the first argument is the payload that was passed to the action, and the second argument is an object that contains information about the action, such as the dispatch function and the getState function.
export const admin_Login = createAsyncThunk("auth/admin_login", async (info) => {
    console.log(info);
    try {
        // ici, je veux passer les informations de l'utilisateur au backend pour qu'il puisse les vérifier. data est un nomé donné pour toutes les datas qui seront envoyées au backend.
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
        // On fait apparaître les messages d'erreur et de succès, ainsi que le loader et les informations de l'utilisateur grave a hot-toast que l'on a installé.
        successMessage: "",
        errorMessage: "",
        loader: "false",
        userInfo: "",
    },
    reducer: {},
    extraReducers: () => {},
});

export default authReducer.reducer;

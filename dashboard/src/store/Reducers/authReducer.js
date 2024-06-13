import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../api/api";

// createAsyncThunk takes two arguments: the first argument is the name of the action, and the second argument is an async function that will be executed when the action is dispatched. The async function takes two arguments: the first argument is the payload that was passed to the action, and the second argument is an object that contains information about the action, such as the dispatch function and the getState function.
export const admin_Login = createAsyncThunk("auth/admin_login", async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
        // ici, je veux passer les informations de l'utilisateur au backend pour qu'il puisse les vérifier. data est un nomé donné pour toutes les datas qui seront envoyées au backend.
        const { data } = await api.post("/admin-login", info, { withCredentials: true });
        localStorage.setItem("accessToken", data.token);
        console.log(data);
        return fulfillWithValue(data);
    } catch (error) {
        // cette ligne fait reference a notre fichier response dans le backend.
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
});

export const seller_register = createAsyncThunk(
    "auth/seller_register",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            console.log(info);
            const { data } = await api.post("/seller-register", info, { withCredentials: true });
            localStorage.setItem("accessToken", data.token);
            console.log(data);
            return fulfillWithValue(data);
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
);

export const seller_login = createAsyncThunk(
    "auth/seller_login",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        console.log(info);
        try {
            // ici, je veux passer les informations de l'utilisateur au backend pour qu'il puisse les vérifier. data est un nomé donné pour toutes les datas qui seront envoyées au backend.
            const { data } = await api.post("/seller-login", info, { withCredentials: true });
            console.log(data);
            localStorage.setItem("accessToken", data.token);
            return fulfillWithValue(data);
        } catch (error) {
            // cette ligne fait reference a notre fichier response dans le backend.
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        // On fait apparaître les messages d'erreur et de succès, ainsi que le loader et les informations de l'utilisateur grave a hot-toast que l'on a installé.
        successMessage: "",
        errorMessage: "",
        loader: false, // Utilisez false plutôt que "false"
        userInfo: "",
    },
    // Ce reducer définit une action pour effacer le message d'erreur
    reducers: {
        // Action "messageClear" : elle est déclenchée pour effacer le message d'erreur dans l'état
        messageClear: (state, _) => {
            // Mise à jour de l'état : la propriété "errorMessage" est réinitialisée à une chaîne vide
            state.errorMessage = "";
        },
    },
    extraReducers: (builder) => {
        // On ajoute un gestionnaire pour l'action admin_Login.pending. L'action admin_Login.pending est automatiquement déclenchée par Redux Toolkit lorsqu'une action asynchrone commence à s'exécuter. Dans ce cas, nous voulons simplement définir loader sur true pour afficher le spinner de chargement.
        builder
            .addCase(admin_Login.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(admin_Login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(admin_Login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
            })

            // seller
            .addCase(seller_register.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(seller_register.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_register.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
            })

            //seller login
            .addCase(seller_login.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(seller_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
            });
    },
});

// Exportation de l'action messageClear depuis la tranche Redux authReducer
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;

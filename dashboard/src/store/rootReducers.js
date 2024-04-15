import { combineReducers } from "redux";
import authReducer from "./Reducers/authReducer"; // Assurez-vous que le chemin vers authReducer est correct

const rootReducer = {
    auth: authReducer,
};

export default rootReducer;

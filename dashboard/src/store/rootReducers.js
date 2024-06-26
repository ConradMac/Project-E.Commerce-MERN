import { combineReducers } from "redux";
import authReducer from "./Reducers/authReducer"; // Assurez-vous que le chemin vers authReducer est correct
import categoryReducer from "./Reducers/categoryReducer";

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
};

export default rootReducer;

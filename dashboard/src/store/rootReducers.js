import { combineReducers } from "redux";
import authReducer from "./Reducers/authReducer"; // Assurez-vous que le chemin vers authReducer est correct
import categoryReducer from "./Reducers/categoryReducer";
import productReducer from "./Reducers/productReducer";

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
};

export default rootReducer;

import { combineReducers } from "redux";
import getProductDetailsReducer from "./getProductDetailsReducer";
import cartItemsReducer from "./cartItemsReducer";

export default combineReducers({
  getProductDetailsReducer,
  cartItemsReducer
});
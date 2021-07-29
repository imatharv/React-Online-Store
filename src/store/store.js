import {createStore, applyMiddleware} from "redux";
import addToCartReducer from "../reducer/addToCartReducer";
import logger from "redux-logger";

const store = createStore(addToCartReducer, applyMiddleware(logger));
export default store; 
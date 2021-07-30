import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import combineReducers from "../reducer/combineReducers";

const store = createStore(combineReducers, applyMiddleware(logger));
export default store;
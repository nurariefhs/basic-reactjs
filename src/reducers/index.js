import { combineReducers } from "redux";
import name from "./nameReducer";
import isLogin from "./isLoginReducer";

const allReducers = combineReducers({
    name,
    isLogin
});

export default allReducers;
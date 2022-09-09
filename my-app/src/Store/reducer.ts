import { combineReducers } from "redux";
import LoginReducer from "./Reducers/LoginReducer";

export default combineReducers({
  login: LoginReducer,
});

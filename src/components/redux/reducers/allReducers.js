import { combineReducers, applyMiddleware } from "redux";
import selectedUser from "./selectedUser";
import user from "./user";
import { routerMiddleware } from "react-router-redux";
import { routerReducer } from "react-router-redux";
import filterUser from "./filterUser";

const allReducers = combineReducers({
  users: user,
  selectedUser: selectedUser,
  filterUser: filterUser,
  router: routerReducer
});

export default allReducers;

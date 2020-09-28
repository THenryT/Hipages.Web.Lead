import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

import { leadReducer, LeadStateType } from "./leadReducer";
import { History } from "history";

export type RootStateType = {
  leadPage: LeadStateType;
  routerReducer: RouterState;
};

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    leadPage: leadReducer,
  });

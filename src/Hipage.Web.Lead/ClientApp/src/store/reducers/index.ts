import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

import { leadReducer, LeadPageStateType } from "./leadReducer";
import { History } from "history";

export type RootStateType = {
  leadPage: LeadPageStateType;
  routerReducer: RouterState;
};

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    leadPage: leadReducer,
  });

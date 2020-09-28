import { all } from "redux-saga/effects";
import leadSaga from "./leadSaga";

export const rootSaga = function* root() {
  yield all([...leadSaga]);
};

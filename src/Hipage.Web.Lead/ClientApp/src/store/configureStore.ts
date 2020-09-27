import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSageMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { createLogger } from "redux-logger";
import { History } from "history";
import { rootSaga } from "./sagas";

export default function configureStore(history: History) {
  const dev = process.env.NODE_ENV === "development";

  const sagaMiddleware = createSageMiddleware();

  const logger = createLogger();

  let middleware = dev
    ? [logger, sagaMiddleware, routerMiddleware(history)]
    : [sagaMiddleware, routerMiddleware(history)];

  const rootReducer = combineReducers({
    router: connectRouter(history),
  });

  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

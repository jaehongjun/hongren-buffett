import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers";
import sagas from "./store/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducers, enhancer);
sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

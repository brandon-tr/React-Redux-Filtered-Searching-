import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import {
  ConnectedRouter as Router,
  routerMiddleware
} from "react-router-redux/es";
import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware } from "redux";
import reducer from "./components/redux/reducers/allReducers";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

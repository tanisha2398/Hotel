import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import hotelReducer from "./store/reducers/hotels";
import orderReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  hotelData: hotelReducer

  // auth: authReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

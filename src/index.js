import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./i18n";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./reduxToolkit/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

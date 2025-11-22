import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContextProvider";

ReactDOM.render(
  <BrowserRouter>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

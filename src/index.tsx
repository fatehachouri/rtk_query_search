import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./store/productsApi";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ApiProvider api={productsApi}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
);


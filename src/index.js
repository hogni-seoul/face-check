import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Global Style
import GlobalStyle from "Styles/GlobalStyle";

// Context
import { AuthProvider } from "Context/AuthProvider";

// Reducer
import reducer, { initialState } from "Context/AuthReducer";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider reducer={reducer} initialState={initialState}>
      <App />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

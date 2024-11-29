import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

import { GoogleOAuthProvider } from "@react-oauth/google";

// const clientId = import.meta.env.GOOGLE_CLIENT_ID;
const clientId =
  "79886345736-m9qkupb4jaqp34ukqkibtirsjot6u7tc.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-3ymfqt2ur1k4pnj6.us.auth0.com"
     clientId="GV7eF2wJ03qcgtPtkca9mTr1hoH4m5WR"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
       
        <App />
       
      
    </Auth0Provider>
  </React.StrictMode>
);

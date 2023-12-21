import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { THEME } from "@/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

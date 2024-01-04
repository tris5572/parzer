import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "./index.css";
import { THEME } from "@/misc/theme";
import { App } from "@/components/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

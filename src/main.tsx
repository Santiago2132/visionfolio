import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { MouseProvider } from "./contexts/MouseContext.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MouseProvider>
      <App />
    </MouseProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./dashboard/components/theme-provider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="dashboard-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

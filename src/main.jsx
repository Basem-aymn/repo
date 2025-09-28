import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import "./i18n";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>
);

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import ExpressPage from "./pages/ExpressPage";
import StandardPage from "./pages/StandardPage";
import OvernightPage from "./pages/OvernightPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/express" element={<ExpressPage />} />
        <Route path="/standard" element={<StandardPage />} />
        <Route path="/overnight" element={<OvernightPage />} />
      </Routes>
    </Router>
  );
}

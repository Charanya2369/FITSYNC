import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingScreen from "./pages/LandingScreen";
import Register from "./pages/Register";
import Login from "./pages/Login";

import HomePage from "./pages/HomePage";  // You may keep it for info screen

import UserTypeSelection from "./pages/UserTypeSelection";

// CUSTOMER PAGES
import CustomerSetup from "./pages/CustomerSetup";
import BodyScan from "./pages/BodyScan";
import ScanResult from "./pages/ScanResult";
import FitnessPlan from "./pages/FitnessPlan";
import CottonSell from "./pages/CottonSell";

// RETAILER & MANUFACTURER
import RetailerDashboard from "./pages/RetailerDashboard";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import BrandRecommendation from "./pages/BrandRecommendation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing screen */}
        <Route path="/" element={<LandingScreen />} />

        {/* Register + Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Optional HomePage (information only) */}
        <Route path="/homepage" element={<HomePage />} />

        {/* Select role (Customer / Retailer / Manufacturer) */}
        <Route path="/choose-role" element={<UserTypeSelection />} />

        {/* CUSTOMER FLOW */}
        <Route path="/customer/setup" element={<CustomerSetup />} />
        <Route path="/customer/scan" element={<BodyScan />} />
        <Route path="/customer/scan-result" element={<ScanResult />} />
        <Route path="/customer/fitness" element={<FitnessPlan />} />
        <Route path="/customer/cotton-sell" element={<CottonSell />} />

        {/* RETAILER */}
        <Route path="/retailer/dashboard" element={<RetailerDashboard />} />

        {/* MANUFACTURER */}
        <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard />} />

        {/* Brand suggestions */}
        <Route path="/brand-recommendation" element={<BrandRecommendation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

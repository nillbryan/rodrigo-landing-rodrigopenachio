import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/styles/tokens.css";
import { storeUTMParams } from "./utils/analytics";
import CookieBanner from "./components/CookieBanner";
import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  useEffect(() => {
    // Store UTM parameters on initial load
    storeUTMParams();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/obrigado" element={<ThankYou />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;

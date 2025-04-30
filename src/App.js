import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Meny from "./pages/Meny";
import Pizza from "./pages/Pizza";
import Hitta from "./pages/Hitta";
import Kontakta from "./pages/Kontakta";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/meny" element={<Meny />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/kebab" element={<Meny />} /> {/* eller egen kebab-sida */}
        <Route path="/sallad" element={<Meny />} />{" "}
        {/* eller egen sallad-sida */}
        <Route path="/dryck" element={<Meny />} /> {/* eller egen dryck-sida */}
        <Route path="/hitta" element={<Hitta />} />
        <Route path="/kontakta" element={<Kontakta />} />
        {/* Fallback till Home om ingen route matchar */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

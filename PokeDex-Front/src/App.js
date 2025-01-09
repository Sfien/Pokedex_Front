// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil: liste des pokemons */}
        <Route path="/" element={<HomePage />} />

        {/* Page de détail: toutes les infos de ce pokemon */}
        <Route path="/pokemon/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompetitionPage from "./pages/CompetitionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competition" element={<CompetitionPage />} />
    </Routes>
  );
}
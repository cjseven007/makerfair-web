import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompetitionPage from "./pages/CompetitionPage";
import Footer from "./components/Footer";
import { HOME } from "./data/home";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competition" element={<CompetitionPage />} />
      </Routes>
            <Footer
        logo={HOME.footer.logo}
        socials={HOME.footer.socials}
        title="PETROBOTS Maker Fair 2026"
        address={HOME.footer.address}
        note={HOME.footer.note}
      />
    </div>
  );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import SaibaMais from '@/pages/SaibaMais';
import Integrantes from '@/pages/Integrantes';
import Propostas from '@/pages/Propostas';
import Contato from '@/pages/Contato';
import Home from '@/pages/Home';
import { Footer } from '@/components/Footer';
export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plataforma" element={<SaibaMais />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/propostas" element={<Propostas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
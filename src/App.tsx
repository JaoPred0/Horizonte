import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import SaibaMais from '@/pages/SaibaMais';
import Integrantes from '@/pages/Integrantes';
import Propostas from '@/pages/Propostas';
import Contato from '@/pages/Contato';
import Home from '@/pages/Home';
export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/propostas" element={<Propostas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
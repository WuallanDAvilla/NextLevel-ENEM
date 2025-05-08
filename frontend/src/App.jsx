import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Ranking from "./pages/Ranking";
import Materias from "./pages/Materias"; //  Importa a página de perfil

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/materiaS" element={<Materias />} /> {/*  Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;


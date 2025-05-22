import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import PrivateRoute from "./pages/PrivateRoute";
import Materias from "./pages/Materias";

import Artes from "./pages/QuizMaterias/Artes";
import Biologia from "./pages/QuizMaterias/Biologia";
import Conectivos from "./pages/QuizMaterias/Conectivos";
import EducacaoFisica from "./pages/QuizMaterias/EducacaoFisica";
import Espanhol from "./pages/QuizMaterias/Espanhol";
import Filosofia from "./pages/QuizMaterias/Filosofia"
import Fisica from "./pages/QuizMaterias/Fisica";
import Geografia from "./pages/QuizMaterias/Geografia";
import Historia from "./pages/QuizMaterias/Historia";
import Ingles from "./pages/QuizMaterias/Ingles";
import LinguaPortuguesa from "./pages/QuizMaterias/LinguaPortuguesa";
import Matematica from "./pages/QuizMaterias/Matematica";
import Quimica from "./pages/QuizMaterias/Quimica";
import Sociologia from "./pages/QuizMaterias/Sociologia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>}/>
        <Route path="/ranking" element={<PrivateRoute> <Ranking /> </PrivateRoute>} />
        <Route path="/materias" element={<PrivateRoute> <Materias /> </PrivateRoute>} />
        <Route path="/cadastro" element={<PrivateRoute> <Cadastro /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Artes" element={<PrivateRoute> <Artes /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Biologia" element={<PrivateRoute> <Biologia /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Conectivos" element={<PrivateRoute> <Conectivos /> </PrivateRoute>} />
        <Route path="/QuizMaterias/EducacaoFisica" element={<PrivateRoute> <EducacaoFisica /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Espanhol" element={<PrivateRoute> <Espanhol /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Filosofia" element={<PrivateRoute> <Filosofia /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Fisica" element={<PrivateRoute> <Fisica /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Geografia" element={<PrivateRoute> <Geografia /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Historia" element={<PrivateRoute> <Historia /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Ingles" element={<PrivateRoute> <Ingles /> </PrivateRoute>} />
        <Route path="/QuizMaterias/LinguaPortuguesa" element={<PrivateRoute> <LinguaPortuguesa /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Matematica" element={<PrivateRoute> <Matematica /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Quimica" element={<PrivateRoute> <Quimica /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Sociologia" element={<PrivateRoute> <Sociologia /> </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

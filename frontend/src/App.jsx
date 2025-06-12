// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Materias from "./pages/Materias";
import Ranking from "./pages/Ranking";
import Redacao from "./pages/Redacao";
import QuizPage from "./pages/QuizPage";
import Perfil from "./pages/Perfil"; // Importa a nova página de perfil
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas Privadas (Protegidas) */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/materias"
          element={
            <PrivateRoute>
              <Materias />
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/:materia"
          element={
            <PrivateRoute>
              <QuizPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ranking"
          element={
            <PrivateRoute>
              <Ranking />
            </PrivateRoute>
          }
        />
        <Route
          path="/redacao"
          element={
            <PrivateRoute>
              <Redacao />
            </PrivateRoute>
          }
        />

        {/* NOVA ROTA DE PERFIL */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

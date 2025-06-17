// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

// Importe suas páginas
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Materias from "./pages/Materias";
import QuizPage from "./pages/QuizPage";
import Ranking from "./pages/Ranking";
import Redacao from "./pages/Redacao";
import Perfil from "./pages/Perfil";
import PrivateRoute from "./pages/PrivateRoute"; // Seu componente de rota privada

function App() {
  const [user, loading] = useAuthState(auth);

  // Enquanto o Firebase verifica o estado de autenticação, mostramos um loader.
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#0d3e63",
          color: "white",
        }}
      >
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas: Só acessíveis se o usuário NÃO estiver logado */}
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/cadastro"
          element={!user ? <Cadastro /> : <Navigate to="/home" />}
        />

        {/* Rotas Privadas: Envolvidas pelo PrivateRoute */}
        <Route
          path="/home"
          element={<PrivateRoute><Home /></PrivateRoute>}
        />
        <Route
          path="/materias"
          element={<PrivateRoute><Materias /></PrivateRoute>}
        />
        <Route
          path="/materias/:materia"
          element={<PrivateRoute><QuizPage /></PrivateRoute>}
        />
        <Route
          path="/ranking"
          element={<PrivateRoute><Ranking /></PrivateRoute>}
        />
        <Route
          path="/redacao"
          element={<PrivateRoute><Redacao /></PrivateRoute>}
        />
        <Route
          path="/perfil"
          element={<PrivateRoute><Perfil /></PrivateRoute>}
        />

        {/* Rota de fallback */}
        <Route path="*" element={<Navigate to={user ? "/home" : "/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

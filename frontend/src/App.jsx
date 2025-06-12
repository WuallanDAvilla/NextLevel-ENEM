import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PrivateRoute from "./pages/PrivateRoute";
import Materias from "./pages/Materias";
import QuizPage from "./pages/QuizPage";
import Redacao from "./pages/Redacao";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/redacao"
          element={
            <PrivateRoute>
              {" "}
              <Redacao />{" "}
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              {" "}
              <Home />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/ranking"
          element={
            <PrivateRoute>
              {" "}
              <Ranking />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias"
          element={
            <PrivateRoute>
              {" "}
              <Materias />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/:materia" // :materia é o parâmetro dinâmico
          element={
            <PrivateRoute>
              <QuizPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PrivateRoute from "./pages/PrivateRoute";
import Materias from "./pages/Materias";

import Artes from "./pages/materias/Artes";
import Biologia from "./pages/materias/Biologia";
import Conectivos from "./pages/materias/Conectivos";
import EducacaoFisica from "./pages/materias/EducacaoFisica";
import Espanhol from "./pages/materias/Espanhol";
import Filosofia from "./pages/materias/Filosofia";
import Fisica from "./pages/materias/Fisica";
import Geografia from "./pages/materias/Geografia";
import Historia from "./pages/materias/Historia";
import Ingles from "./pages/materias/Ingles";
import LinguaPortuguesa from "./pages/materias/LinguaPortuguesa";
import Matematica from "./pages/materias/Matematica";
import Quimica from "./pages/materias/Quimica";
import Sociologia from "./pages/materias/Sociologia";

function App() {
  return (
    <Router>
      <Routes>
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
          path="/materias/Artes"
          element={
            <PrivateRoute>
              {" "}
              <Artes />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Biologia"
          element={
            <PrivateRoute>
              {" "}
              <Biologia />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Conectivos"
          element={
            <PrivateRoute>
              {" "}
              <Conectivos />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/EducacaoFisica"
          element={
            <PrivateRoute>
              {" "}
              <EducacaoFisica />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Espanhol"
          element={
            <PrivateRoute>
              {" "}
              <Espanhol />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Filosofia"
          element={
            <PrivateRoute>
              {" "}
              <Filosofia />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Fisica"
          element={
            <PrivateRoute>
              {" "}
              <Fisica />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Geografia"
          element={
            <PrivateRoute>
              {" "}
              <Geografia />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Historia"
          element={
            <PrivateRoute>
              {" "}
              <Historia />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Ingles"
          element={
            <PrivateRoute>
              {" "}
              <Ingles />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/LinguaPortuguesa"
          element={
            <PrivateRoute>
              {" "}
              <LinguaPortuguesa />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Matematica"
          element={
            <PrivateRoute>
              {" "}
              <Matematica />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Quimica"
          element={
            <PrivateRoute>
              {" "}
              <Quimica />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/materias/Sociologia"
          element={
            <PrivateRoute>
              {" "}
              <Sociologia />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

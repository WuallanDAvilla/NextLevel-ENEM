import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Materias from "./pages/Materias"
import Fisica from "./pages/QuizMaterias/Fisica"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>}/>
        <Route path="/quiz" element={<PrivateRoute> <Quiz /> </PrivateRoute>} />
        <Route path="/ranking" element={<PrivateRoute> <Ranking /> </PrivateRoute>} />
        <Route path="/materias" element={<PrivateRoute> <Materias /> </PrivateRoute>} />
        <Route path="/QuizMaterias/Fisica" element={<PrivateRoute> <Fisica /> </PrivateRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;

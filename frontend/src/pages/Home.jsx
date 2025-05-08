import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // já exportado no seu config
import { signOut } from "firebase/auth";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // leva de volta ao login
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>Bem-vindo ao Quiz Prepara Aí!</h1>

      <div className="home-buttons">
        <Link to="/quiz">
          <button>Começar o Quiz</button>
        </Link>
        <Link to="/ranking">
          <button>Ver Ranking</button>
        </Link>
      </div>

      {/* Botão de logout */}
      <button
        onClick={handleLogout}
        className="logout-button"
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          background: "#e53935",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
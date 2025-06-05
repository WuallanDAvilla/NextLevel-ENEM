import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; // autenticação
import Logo from "../assets/Logo.png"; 
import UsuarioAsset from "../assets/Usuario.png";
import "../styles/Materias.css";

import Geografia from "../assets/Materias/Geografia.png";
import Matematica from "../assets/Materias/Matematica.png";
import LinguaPortuguesaImg from "../assets/Materias/LinguaPortuguesa.png";
import Historia from "../assets/Materias/Historia.png";
import Filosofia from "../assets/Materias/Filosofia.png";
import Sociologia from "../assets/Materias/Sociologia.png";
import Biologia from "../assets/Materias/Biologia.png";
import Artes from "../assets/Materias/Artes.png";
import Ingles from "../assets/Materias/Ingles.png";
import Espanhol from "../assets/Materias/Espanhol.png";
import Fisica from "../assets/Materias/Fisica.png";
import Quimica from "../assets/Materias/Quimica.png";
import EducacaoFisicaImg from "../assets/Materias/EducacaoFisica.png";
import Conectivos from "../assets/Materias/Conectivos.png";

// Conteúdo das matérias
const conteudoMatriz = {
  Geografia: {
    nomeExibicao: "Geografia",
    texto: "Explore os continentes, climas e culturas do nosso planeta.",
    imagem: Geografia,
    rota: "/materias/geografia",
  },
  Matematica: {
    nomeExibicao: "Matemática",
    texto: "Desvende os segredos dos números, formas e equações.",
    imagem: Matematica,
    rota: "/materias/matematica",
  },
  LinguaPortuguesa: {
    nomeExibicao: "Língua Portuguesa",
    texto: "Aprimore sua gramática, interpretação e escrita.",
    imagem: LinguaPortuguesaImg,
    rota: "/materias/linguaportuguesa",
  },
  Fisica: {
    nomeExibicao: "Física",
    texto: "Entenda as leis que regem o universo, do átomo às galáxias.",
    imagem: Fisica,
    rota: "/materias/fisica",
  },
  Quimica: {
    nomeExibicao: "Química",
    texto: "Descubra as transformações da matéria e suas propriedades.",
    imagem: Quimica,
    rota: "/materias/quimica",
  },
  Historia: {
    nomeExibicao: "História",
    texto: "Viaje pelo tempo e compreenda os eventos que moldaram o mundo.",
    imagem: Historia,
    rota: "/materias/historia",
  },
  Filosofia: {
    nomeExibicao: "Filosofia",
    texto: "Reflita sobre as grandes questões da existência e do conhecimento.",
    imagem: Filosofia,
    rota: "/materias/filosofia",
  },
  Sociologia: {
    nomeExibicao: "Sociologia",
    texto: "Analise as estruturas sociais e as relações humanas.",
    imagem: Sociologia,
    rota: "/materias/sociologia",
  },
  Biologia: {
    nomeExibicao: "Biologia",
    texto: "Estude a vida em todas as suas formas e complexidades.",
    imagem: Biologia,
    rota: "/materias/biologia",
  },
  Artes: {
    nomeExibicao: "Artes",
    texto: "Explore a criatividade e as diversas manifestações artísticas.",
    imagem: Artes,
    rota: "/materias/artess",
  },
  Ingles: {
    nomeExibicao: "Inglês",
    texto: "Desenvolva suas habilidades na língua global da comunicação.",
    imagem: Ingles,
    rota: "/materias/ingles",
  },
  Espanhol: {
    nomeExibicao: "Espanhol",
    texto: "Aprenda uma das línguas mais faladas no mundo.",
    imagem: Espanhol,
    rota: "/materias/espanhol",
  },
  EducacaoFisica: {
    nomeExibicao: "Educação Física",
    texto: "Movimente-se e aprenda sobre saúde e bem-estar.",
    imagem: EducacaoFisicaImg,
    rota: "/materias/educacaofisica",
  },
};

export default function Materias() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState({
    titulo: "",
    texto: "",
    imagem: "",
    rota: "",
  });

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Carregar dados do usuário autenticado, similar ao Home.jsx
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName || user.email.split("@")[0];
      setUsername(displayName);
    } else {
      navigate("/"); // Redireciona se não estiver logado
    }
  }, [navigate]);

  useEffect(() => {
    document.body.classList.add("materias-page-active");
    return () => {
      document.body.classList.remove("materias-page-active");
    };
  }, []);

  const abrirPopup = (materiaKey) => {
    const data = conteudoMatriz[materiaKey];
    if (data) {
      setPopupData({
        titulo: data.nomeExibicao,
        texto: data.texto || "Conteúdo em breve.",
        imagem: data.imagem || "",
        rota: data.rota,
      });
      setPopupVisible(true);
    } else {
      console.warn(`Matéria com chave "${materiaKey}" não encontrada.`);
    }
  };

  const fecharPopup = () => {
    setPopupVisible(false);
  };

  const handleClickOutsidePopup = (event) => {
    if (event.target.id === "popupOverlay") {
      fecharPopup();
    }
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <div className="materias-page-container">
      <header className="home-header">
        <div className="logo-section">
          <img src={Logo} alt="Next Level ENEM" className="logo" />
          <h1>NextLevelENEM</h1>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <Link to="/home" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/ranking" className="nav-link">
                Ranking
              </Link>
            </li>
            <li>
              <Link to="/redacao" className="nav-link">
                Redação
              </Link>
            </li>
          </ul>
        </nav>

        <div className="user-section">
          <Link to="/perfil" className="profile-link">
            <div className="user-avatar">
              {username ? username.charAt(0).toUpperCase() : ""}
            </div>
          </Link>
          <div className="user-info">
            <span className="username">{username}</span>
            <button onClick={handleLogout} className="logout-btn">
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo original da página Materias, sem alteração */}
      <main className="materias-section">
        <h1>Matérias: Sua Jornada para o Próximo Nível no ENEM</h1>
        <div className="materiais-container">
          {Object.keys(conteudoMatriz).map((materiaKey) => (
            <div
              key={materiaKey}
              className="materia-card"
              onClick={() => abrirPopup(materiaKey)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && abrirPopup(materiaKey)}
            >
              <img
                src={conteudoMatriz[materiaKey].imagem}
                alt={`Ícone da matéria de ${conteudoMatriz[materiaKey].nomeExibicao}`}
              />
              <p className="materia-card-title">
                {conteudoMatriz[materiaKey].nomeExibicao}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé copiado do Home.jsx */}
      <footer className="home-footer">
        <p>© 2025 NextLevelENEM - Todos os direitos reservados</p>
      </footer>

      {/* Popup para detalhes da matéria */}
      {popupVisible && (
        <div
          id="popupOverlay"
          className="popup-overlay"
          onClick={handleClickOutsidePopup}
        >
          <div className="popup-content">
            <span className="popup-close-button" onClick={fecharPopup} title="Fechar">
              ×
            </span>
            <h2>{popupData.titulo}</h2>
            {popupData.imagem && (
              <img
                src={popupData.imagem}
                alt={`Ilustração para ${popupData.titulo}`}
              />
            )}
            <p>{popupData.texto}</p>
            <button
              className="btn-iniciar-quiz"
              onClick={() => navigate(popupData.rota)}
            >
              Iniciar Quiz de {popupData.titulo}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

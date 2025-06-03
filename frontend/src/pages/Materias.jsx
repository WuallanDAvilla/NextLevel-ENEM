import React, { useRef, useState, useEffect } from "react"; // Adicionado useEffect
import { useNavigate } from "react-router-dom";
import "../styles/Materias.css";

import LogoAsset from "../assets/Logo.png"; // Renomeado para evitar conflito com componente Logo se existir
import UsuarioAsset from "../assets/Usuario.png"; // Renomeado para evitar conflito
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

// Objeto de conteúdo das matérias (movido para fora para não ser recriado em cada render)
const conteudoMatriz = {
  Geografia: {
    nomeExibicao: "Geografia",
    texto: "Explore os continentes, climas e culturas do nosso planeta.",
    imagem: Geografia,
    rota: "/materias/Geografia", // Rota para o quiz da matéria
  },
  Matematica: {
    nomeExibicao: "Matemática",
    texto: "Desvende os segredos dos números, formas e equações.",
    imagem: Matematica,
    rota: "/materias/Matematica",
  },
  LinguaPortuguesa: {
    nomeExibicao: "Língua Portuguesa",
    texto: "Aprimore sua gramática, interpretação e escrita.",
    imagem: LinguaPortuguesaImg,
    rota: "/materias/Língua Portuguesa", // Manter o nome da matéria na rota
  },
  Fisica: {
    nomeExibicao: "Física",
    texto: "Entenda as leis que regem o universo, do átomo às galáxias.",
    imagem: Fisica,
    rota: "/materias/Fisica",
  },
  Quimica: {
    nomeExibicao: "Química",
    texto: "Descubra as transformações da matéria e suas propriedades.",
    imagem: Quimica,
    rota: "/materias/Quimica",
  },
  Historia: {
    nomeExibicao: "História",
    texto: "Viaje pelo tempo e compreenda os eventos que moldaram o mundo.",
    imagem: Historia,
    rota: "/materias/Historia",
  },
  Filosofia: {
    nomeExibicao: "Filosofia",
    texto:
      "Reflita sobre as grandes questões da existência e do conhecimento.",
    imagem: Filosofia,
    rota: "/materias/Filosofia",
  },
  Sociologia: {
    nomeExibicao: "Sociologia",
    texto: "Analise as estruturas sociais e as relações humanas.",
    imagem: Sociologia,
    rota: "/materias/Sociologia",
  },
  Biologia: {
    nomeExibicao: "Biologia",
    texto: "Estude a vida em todas as suas formas e complexidades.",
    imagem: Biologia,
    rota: "/materias/Biologia",
  },
  Artes: {
    nomeExibicao: "Artes",
    texto: "Explore a criatividade e as diversas manifestações artísticas.",
    imagem: Artes,
    rota: "/materias/Artes",
  },
  Ingles: {
    nomeExibicao: "Inglês",
    texto: "Desenvolva suas habilidades na língua global da comunicação.",
    imagem: Ingles,
    rota: "/materias/Ingles",
  },
  Espanhol: {
    nomeExibicao: "Espanhol",
    texto: "Aprenda uma das línguas mais faladas no mundo.",
    imagem: Espanhol,
    rota: "/materias/Espanhol",
  },
  EducacaoFisica: {
    nomeExibicao: "Educação Física",
    texto: "Movimente-se e aprenda sobre saúde e bem-estar.",
    imagem: EducacaoFisicaImg,
    rota: "/materias/Educação Física",
  },
  Conectivos: {
    nomeExibicao: "Conectivos (Redação)",
    texto: "Domine os elementos de coesão para uma redação nota mil.",
    imagem: Conectivos,
    rota: "/materias/Conectivos", // Rota para um quiz específico de conectivos
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
  const navigate = useNavigate();

  // Efeito para adicionar classe ao body (opcional, se precisar de estilos de body específicos para esta página)
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

  return (
    <div className="materias-page-container">
      {/* Header consistente com Home.jsx */}
      <header className="page-header"> {/* Usando .page-header */}
        <div className="logo-section">
          <img src={LogoAsset} alt="Logo NextLevelENEM" className="logo" />
          <h1>NextLevelENEM</h1>
        </div>
        <div className="user-section">
          <img
            src={profileImage || UsuarioAsset}
            alt="Perfil do Usuário"
            className="user-avatar" // Usando .user-avatar para consistência
            onClick={() => fileInputRef.current.click()}
            title="Clique para alterar sua foto de perfil"
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleProfileChange}
            accept="image/png, image/jpeg, image/gif"
          />
        </div>
      </header>

      <main className="materias-section">
        <h1>
          Matérias: Sua Jornada para o Próximo Nível no ENEM
        </h1>
        <div className="materiais-container">
          {Object.keys(conteudoMatriz).map((materiaKey) => (
            <div
              key={materiaKey}
              className="materia-card"
              onClick={() => abrirPopup(materiaKey)}
              role="button" // Melhoria de acessibilidade
              tabIndex={0} // Melhoria de acessibilidade
              onKeyPress={(e) => e.key === 'Enter' && abrirPopup(materiaKey)} // Melhoria de acessibilidade
            >
              <img
                src={conteudoMatriz[materiaKey].imagem}
                alt={`Ícone da matéria de ${conteudoMatriz[materiaKey].nomeExibicao}`}
              />
              <p className="materia-card-title">{conteudoMatriz[materiaKey].nomeExibicao}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="page-footer"> {/* Usando .page-footer */}
        <p>© {new Date().getFullYear()} NextLevelENEM - Todos os direitos reservados</p>
      </footer>

      {popupVisible && (
        <div id="popupOverlay" className="popup-overlay" onClick={handleClickOutsidePopup}>
          <div className="popup-content">
            <span className="popup-close-button" onClick={fecharPopup} title="Fechar">
              ×
            </span>
            <h2>{popupData.titulo}</h2>
            {popupData.imagem && (
              <img src={popupData.imagem} alt={`Ilustração para ${popupData.titulo}`} />
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
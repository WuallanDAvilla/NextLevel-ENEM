import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Importe o hook
import "../styles/Materias.css";

import Logo from "../assets/Logo.png";
import Usuario from "../assets/Usuario.png";
import Geografia from "../assets/Materias/Geografia.png";
import Matematica from "../assets/Materias/Matematica.png";
import LinguaPortuguesa from "../assets/Materias/LinguaPortuguesa.png";
import Historia from "../assets/Materias/Historia.png";
import Filosofia from "../assets/Materias/Filosofia.png";
import Sociologia from "../assets/Materias/Sociologia.png";
import Biologia from "../assets/Materias/Biologia.png";
import Artes from "../assets/Materias/Artes.png";
import Ingles from "../assets/Materias/Ingles.png";
import Espanhol from "../assets/Materias/Espanhol.png";
import Fisica from "../assets/Materias/Fisica.png";
import Quimica from "../assets/Materias/Quimica.png";
import EducacaoFisica from "../assets/Materias/EducacaoFisica.png";
import Conectivos from "../assets/Materias/Conectivos.png";

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
  const navigate = useNavigate(); // 2. Inicialize o hook

  const conteudo = {
    Geografia: {
      texto: "",
      imagem: Geografia,
      rota: "/materias/geografia",
    },
    Matemática: {
      texto: "",
      imagem: Matematica,
      rota: "/materias/matematica",
    },
    LínguaPortuguesa: {
      texto: "",
      imagem: LinguaPortuguesa,
      rota: "/materias/linguaportuguesa",
    },
    Física: {
      texto: "",
      imagem: Fisica,
      rota: "/QuizMaterias/Fisica",
    },
    Química: {
      texto: "",
      imagem: Quimica,
      rota: "/materias/quimica",
    },
    História: {
      texto: "",
      imagem: Historia,
      rota: "/materias/historia",
    },
    Filosofia: {
      texto: "",
      imagem: Filosofia,
      rota: "/materias/filosofia",
    },
    Sociologia: {
      texto: "",
      imagem: Sociologia,
      rota: "/materias/sociologia",
    },
    Biologia: {
      texto: "",
      imagem: Biologia,
      rota: "/materias/biologia",
    },
    Artes: {
      texto: "",
      imagem: Artes,
      rota: "/materias/artes",
    },
    Inglês: {
      texto: "",
      imagem: Ingles,
      rota: "/materias/ingles",
    },
    Espanhol: {
      texto: "",
      imagem: Espanhol,
      rota: "/materias/espanhol",
    },
    EducaçãoFísica: {
      texto: "",
      imagem: EducacaoFisica,
      rota: "/materias/educacaofisica",
    },
    Conectivos: {
      texto: "",
      imagem: Conectivos,
      rota: "/materias/conectivos",
    },
  };

  const abrirPopup = (materia) => {
    const data = conteudo[materia];
    setPopupData({
      titulo: materia,
      texto: data?.texto || "Conteúdo em breve.",
      imagem: data?.imagem || "",
      rota: data?.rota || "/materias",
    });
    setPopupVisible(true);
  };

  const fecharPopup = () => {
    setPopupVisible(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.id === "meuPopup") {
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
    <div onClick={handleClickOutside}>
      <header>
        <div className="logo-container">
          <h1>
            <span style={{ color: "white" }}>NextLevel</span>{" "}
            <span style={{ color: "#fffff" }}>ENEM</span>
          </h1>
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img 
          src={profileImage || Usuario} 
          alt="Perfil"
          className="user-image"
          onClick={() => fileInputRef.current.click()} 
          />
          <input 
          type="file" 
          id="uploadProfile"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleProfileChange}
          />
          {/* <FiLogOut 
          size={40}
          color="black"
          style={{ cursor: 'pointer' }}
          title="Sair"
          /> */}
        </div>
      </header>

    <section className="materias-section">
        <h1><b>Matérias:</b> Sua Escola para o Próximo Nível do ENEM</h1>
        <div className="materiais-container">
            {Object.keys(conteudo).map((materia) => (
                <div key={materia} className="materia-card" onClick={() => abrirPopup(materia)}>
                    <img src={conteudo[materia].imagem} alt={materia} />
                    <p>{materia}</p>
                </div>
            ))}
        </div> 
    </section>
    
    <footer style={{ backgroundColor: "#208eaf", padding: '25px', textAlign: "center", color: 'white' }}>
        2025 NextLevelENEM. Todos os direitos reservados.
    </footer>

    {popupVisible && (
        <div id="meuPopup" className="popup-overlay">
            <div className="popup-content">
                <h2>{popupData.titulo}</h2>
                <img src={popupData.imagem} alt={popupData.titulo} />
                <p>{popupData.texto}</p>
                <button onClick={() => navigate(popupData.rota)}>Iniciar</button>
            </div>
        </div>
    )}
    </div>
  );
};

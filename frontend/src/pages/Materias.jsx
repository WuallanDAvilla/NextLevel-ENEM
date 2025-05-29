import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const conteudo = {
    Geografia: {
      texto: "",
      imagem: Geografia,
      rota: "/materias/Geografia",
    },
    Matemática: {
      texto: "",
      imagem: Matematica,
      rota: "/materias/Matemática",
    },
    LínguaPortuguesa: {
      texto: "",
      imagem: LinguaPortuguesa,
      rota: "/materias/Língua%20Portuguesa",
    },
    Física: {
      texto: "",
      imagem: Fisica,
      rota: "/materias/Física",
    },
    Química: {
      texto: "",
      imagem: Quimica,
      rota: "/materias/Química",
    },
    História: {
      texto: "",
      imagem: Historia,
      rota: "/materias/História",
    },
    Filosofia: {
      texto: "",
      imagem: Filosofia,
      rota: "/materias/Filosofia",
    },
    Sociologia: {
      texto: "",
      imagem: Sociologia,
      rota: "/materias/Sociologia",
    },
    Biologia: {
      texto: "",
      imagem: Biologia,
      rota: "/materias/Biologia",
    },
    Artes: {
      texto: "",
      imagem: Artes,
      rota: "/materias/Artes",
    },
    Inglês: {
      texto: "",
      imagem: Ingles,
      rota: "/materias/Inglês",
    },
    Espanhol: {
      texto: "",
      imagem: Espanhol,
      rota: "/materias/Espanhol",
    },
    EducaçãoFísica: {
      texto: "",
      imagem: EducacaoFisica,
      rota: "/materias/Educação%20Física",
    },
    Conectivos: {
      texto: "",
      imagem: Conectivos,
      rota: "/materias/conectivos",
    },
  };

  const abrirPopup = (materiaKey) => {
    // materiaKey será "Geografia", "Matemática", etc.
    const data = conteudo[materiaKey];
    setPopupData({
      titulo: materiaKey, // O título pode ser "Matemática"
      texto: data?.texto || "Conteúdo em breve.",
      imagem: data?.imagem || "",
      // A rota já está correta se definida como acima no objeto 'conteudo'
      rota: data?.rota || `/materias/${materiaKey}`, // Fallback, mas o ideal é ter no objeto 'conteudo'
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
          <img src={Logo} alt="Logo" className="logo-image" />
          <h1>NextLevelENEM</h1>
        </div>
        <div className="user-section">
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
            style={{ display: "none" }}
            onChange={handleProfileChange}
          />
        </div>
      </header>

      <section className="materias-section">
        <h1>
          <b>Matérias:</b> Sua Escola para o Próximo Nível do ENEM
        </h1>
        <div className="materiais-container">
          {Object.keys(conteudo).map((materia) => (
            <div
              key={materia}
              className="materia-card"
              onClick={() => abrirPopup(materia)}
            >
              <img src={conteudo[materia].imagem} alt={materia} />
              <p>{materia}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>© 2025 NextLevelENEM - Todos os direitos reservados</footer>

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
}

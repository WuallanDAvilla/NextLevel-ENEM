import React, { useRef, useState } from "react";
import "../styles/Materias.css";
import { FiLogOut } from "react-icons/fi";

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
import Espanhol from "../assets/Materias/Espanhol";
import Fisica from "../assets/Materias/Fisica";
import Quimica from "../assets/Materias/Quimica.png";
import EducacaoFisica from "../assets/Materias/EducacaoFisica.png";
import Conectivos from "../assets/Materias/Conectivos.png";

const Materias = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState({
    titulo: "",
    texto: "",
    imagem: "",
  });

  const conteudo = {
    Geografia: {
      texto: "",
      imagem: Geografia,
    },
    Matemática: {
      texto: "",
      imagem: Matematica,
    },
    LínguaPortuguesa: {
      texto: "",
      imagem: LinguaPortuguesa,
    },
    Física: {
      texto: "",
      imagem: Fisica,
    },
    Química: {
      texto: "",
      imagem: Quimica,
    },
    História: {
      texto: "",
      imagem: Historia,
    },
    Filosofia: {
      texto: "",
      imagem: Filosofia,
    },
    Sociologia: {
      texto: "",
      imagem: Sociologia,
    },
    Biologia: {
      texto: "",
      imagem: Biologia,
    },
    Artes: {
      texto: "",
      imagem: Artes,
    },
    Inglês: {
      texto: "",
      imagem: Ingles,
    },
    Espanhol: {
      texto: "",
      imagem: Espanhol,
    },
    EducaçãoFísica: {
      texto: "",
      imagem: EducacaoFisica,
    },
    Conectivos: {
      texto: "",
      imagem: Conectivos,
    },
  };

  const abrirPopup = (materia) => {
    const data = conteudo[materia];
    setPopupData({
      titulo: materia,
      texto: data?.texto || "Conteúdo em breve.",
      imagem: data?.imagem || "",
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
          <FiLogOut 
          size={40}
          color="black"
          style={{ cursor: 'pointer' }}
          title="Sair"
          />
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
                <button onClick={fecharPopup}>Iniciar</button>
            </div>
        </div>
    )}
    </div>
  );
};

export default Materias;

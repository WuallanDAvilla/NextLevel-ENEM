import React, { useState } from 'react';
import './materias.css';

const conteudoMaterias = {
  Geografia: {
    texto: "A Geografia ajuda você a entender o espaço geográfico...",
    imagem: "/imagens/geografia.jpg",
    url: "/quiz?materia=geografia"
  },
  Matemática: {
    texto: "A Matemática é essencial para resolver problemas...",
    imagem: "/imagens/matematica.png",
    url: "/quiz?materia=matematica"
  },
  // ... (repita para os demais)
};

function Materias() {
  const [popup, setPopup] = useState(null);

  const abrirPopup = (materia) => {
    setPopup(conteudoMaterias[materia] ? { ...conteudoMaterias[materia], titulo: materia } : {
      titulo: materia,
      texto: "Conteúdo em breve.",
      imagem: ""
    });
  };

  const fecharPopup = () => setPopup(null);

  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/imagens/logo.png" alt="Logo" className="logo-image" />
          <img src="/imagens/user.png" alt="User" className="user-image" />
        </div>
      </header>

      <section className="materias-section">
        <h1>Escolha uma matéria</h1>
        <div className="materias-container">
          {Object.keys(conteudoMaterias).map((materia) => (
            <div key={materia} className="materia-card" onClick={() => abrirPopup(materia)}>
              <img src={conteudoMaterias[materia].imagem} alt={materia} />
              <p>{materia}</p>
            </div>
          ))}
        </div>
      </section>

      {popup && (
        <div className="popup" onClick={fecharPopup}>
          <div className="popup-conteudo" onClick={(e) => e.stopPropagation()}>
            <span className="fechar" onClick={fecharPopup}>&times;</span>
            <h2>{popup.titulo}</h2>
            <img src={popup.imagem} alt={popup.titulo} className="popup-image" />
            <p>{popup.texto}</p>
            {popup.url && (
              <button className="botao-iniciar" onClick={() => window.location.href = popup.url}>
                Iniciar
              </button>
            )}
          </div>
        </div>
      )}

      <footer>
        <p>© 2025 Sua Plataforma de Estudos</p>
      </footer>
    </div>
  );
}

export default Materias;

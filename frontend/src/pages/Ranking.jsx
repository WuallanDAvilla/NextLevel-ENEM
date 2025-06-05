import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { fetchRanking } from "../services/quizService";
import "../styles/Ranking.css"; // Presumindo que Ranking.css não estiliza mais o body

export default function Ranking() {
  const [lista, setLista] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para carregamento
  const [error, setError] = useState(null); // Estado para erro
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchRanking()
      .then((data) => {
        if (Array.isArray(data)) {
          // Ordena por pontos (maior para menor) e depois por nome (A-Z) como critério de desempate
          const sortedData = data.sort((a, b) => {
            if (b.pontos === a.pontos) {
              return a.name.localeCompare(b.name);
            }
            return b.pontos - a.pontos;
          });
          setLista(sortedData.slice(0, 10)); // Garante que apenas o top 10 seja exibido
        } else {
          throw new Error("Dados inválidos recebidos do servidor.");
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar ranking:", err);
        setError(
          "Não foi possível carregar o ranking. Tente novamente mais tarde."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Array de dependências vazio para rodar apenas na montagem

  const handleGoHome = () => {
    navigate("/home"); // Usar navigate para navegação SPA
  };

  if (isLoading) {
    return (
      <div className="ranking-page-container">
        {" "}
        {/* Container da página */}
        <div className="ranking-feedback loading-state">
          <div className="loader"></div>{" "}
          {/* Reutilizar o loader do QuizPage.css ou definir um local */}
          <p>Carregando ranking...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ranking-page-container">
        <div className="ranking-feedback error-state">
          <h2>Oops!</h2>
          <p>{error}</p>
          <button className="btn-primary" onClick={handleGoHome}>
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ranking-page-container">
      {" "}
      {/* Container da página */}
      <div className="ranking">
        <h1>Top 10 Melhores Jogadores</h1>
        {lista.length === 0 ? (
          <div className="ranking-empty">
            <p>Ainda não há ninguém no ranking.</p>
            <p>Jogue um quiz e seja o primeiro a aparecer aqui!</p>
          </div>
        ) : (
          <ol className="ranking-list">
            {lista.map((item, idx) => (
              <li key={item.email || idx} className="ranking-item">
                {" "}
                {/* Usar uma chave mais estável, como email, se disponível e único */}
                <span className="posicao">{idx + 1}°</span>
                <span className="usuario">{item.name}</span>
                <span className="pontos">{item.pontos} pontos</span>
              </li>
            ))}
          </ol>
        )}
        <button
          className="btn-primary btn-voltar-ranking"
          onClick={handleGoHome}
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
}

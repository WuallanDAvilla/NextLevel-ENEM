import { useState, useEffect } from "react";
import { fetchRanking } from "../services/quizService";
import "../styles/Ranking.css";

export default function Ranking() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchRanking().then(setLista).catch(console.error);
  }, []);
  
  return (
    <div className="ranking">
      <h1>Top 10 melhores Jogadores</h1>
      <ol className="ranking-list">
        {lista.map((item, idx) => (
          <li key={idx} className="ranking-item">
            <span className="posicao">{idx +1}°</span>
            <span className="usuario">{item.name}</span>
            <span className="pontos">{item.pontos} pontos</span>
          </li>
        ))}
      </ol>
      <button className="btn-primary" onClick={() => window.location.href = "/home"}>Voltar ao inicio</button>
    </div>
  );
}
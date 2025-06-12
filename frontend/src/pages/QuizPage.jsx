import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { saveScore } from "../services/quizService";
import axios from "axios";
import "../styles/QuizPage.css";

const formatarTempo = (segundos) => {
  if (segundos < 0) segundos = 0;
  const minutos = Math.floor(segundos / 60);
  const segs = segundos % 60;
  return `${String(minutos).padStart(2, "0")}:${String(segs).padStart(2, "0")}`;
};

export default function QuizPage() {
  const { materia } = useParams();
  const navigate = useNavigate();

  const [perguntas, setPerguntas] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [quizIniciado, setQuizIniciado] = useState(false);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [erroCarregamento, setErroCarregamento] = useState(null);
  const [carregandoPerguntas, setCarregandoPerguntas] = useState(true);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [motivoFinalizacao, setMotivoFinalizacao] = useState(null); // 'concluido' ou 'tempoEsgotado'

  const materiaDoQuiz = materia;

  const carregarPerguntas = useCallback(async () => {
    if (!materiaDoQuiz) {
      setErroCarregamento("Matéria não especificada.");
      setCarregandoPerguntas(false);
      return;
    }
    setCarregandoPerguntas(true);
    setErroCarregamento(null);
    setPerguntas([]);

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      if (!API_BASE_URL) throw new Error("Erro de configuração da API.");

      const res = await axios.get(
        `${API_BASE_URL}/perguntas?categoria=${encodeURIComponent(
          materiaDoQuiz
        )}`
      );

      if (res.data && res.data.length > 0) {
        setPerguntas(res.data);
      } else {
        setPerguntas([]);
        setErroCarregamento(
          `Nenhuma pergunta de "${materiaDoQuiz}" foi encontrada.`
        );
      }
    } catch (error) {
      console.error(`Erro ao carregar perguntas de ${materiaDoQuiz}:`, error);
      setErroCarregamento(`Falha ao carregar perguntas. Tente novamente.`);
      setPerguntas([]);
    } finally {
      setCarregandoPerguntas(false);
    }
  }, [materiaDoQuiz]);

  useEffect(() => {
    carregarPerguntas();
  }, [carregarPerguntas]);

  useEffect(() => {
    if (quizFinalizado) {
      const user = auth.currentUser;
      if (user) {
        const nome = user.displayName || user.email.split("@")[0];
        saveScore(
          { name: nome, email: user.email, subject: materiaDoQuiz },
          acertos
        )
          .then(() => console.log("Score salvo!"))
          .catch((err) => console.error("Erro ao salvar score:", err));
      }
    }
  }, [quizFinalizado, acertos, materiaDoQuiz]);

  // Efeito para o cronômetro
  useEffect(() => {
    if (!quizIniciado || quizFinalizado) {
      return;
    }

    const timerId = setInterval(() => {
      setTempoRestante((prevTempo) => {
        if (prevTempo <= 1) {
          clearInterval(timerId);
          setMotivoFinalizacao("tempoEsgotado");
          setQuizFinalizado(true);
          return 0;
        }
        return prevTempo - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [quizIniciado, quizFinalizado]);

  const iniciarQuiz = () => {
    if (perguntas.length === 0) {
      setErroCarregamento(
        "Não é possível iniciar o quiz pois não há perguntas carregadas."
      );
      return;
    }
    setQuizIniciado(true);
    setQuizFinalizado(false);
    setIndexAtual(0);
    setAcertos(0);
    setRespostaSelecionada(null);
    setErroCarregamento(null);
    setMotivoFinalizacao(null);
    const tempoTotal = perguntas.length * 120; // 2 minutos por questão
    setTempoRestante(tempoTotal);
  };

  const responder = (opcao) => {
    if (respostaSelecionada || quizFinalizado) return;
    setRespostaSelecionada(opcao);

    if (opcao === perguntas[indexAtual]?.correta) {
      setAcertos((prevAcertos) => prevAcertos + 1);
    }
  };

  const proximaQuestao = () => {
    const proxima = indexAtual + 1;
    if (proxima < perguntas.length) {
      setIndexAtual(proxima);
      setRespostaSelecionada(null);
    } else {
      setMotivoFinalizacao("concluido");
      setQuizFinalizado(true);
    }
  };

  if (carregandoPerguntas) {
    return (
      <div className="quiz-page-container" key="carregando">
        <div className="loader"></div>
        <p style={{ color: "white", fontSize: "1.2rem" }}>
          Preparando o quiz de {materiaDoQuiz}...
        </p>
      </div>
    );
  }

  if (erroCarregamento) {
    return (
      <div className="quiz-page-container" key="erro">
        <div className="quiz-feedback-container">
          <h2>Ops, algo deu errado!</h2>
          <p className="error-message">{erroCarregamento}</p>
          <div className="quiz-actions">
            <button onClick={carregarPerguntas} className="btn-primary">
              Tentar Novamente
            </button>
            <button
              onClick={() => navigate("/materias")}
              className="btn-secondary"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!quizIniciado) {
    return (
      <div className="quiz-page-container" key="tela-inicial">
        <div className="quiz-tela-inicial">
          <div className="quiz-start-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 1.66 4 3 10 3s10-1.34 10-3v-5" />
            </svg>
          </div>

          <h1>Bem-vindo ao Quiz de {materiaDoQuiz || "Matéria"}!</h1>
          <p className="quiz-descricao">
            Teste seus conhecimentos e prepare-se para os desafios.
          </p>

          <div className="quiz-info">
            Número de perguntas: {perguntas.length}
          </div>
          <div className="quiz-info">
            Tempo total: {formatarTempo(perguntas.length * 120)}
          </div>

          <div className="quiz-start-actions">
            <button
              onClick={iniciarQuiz}
              className="btn-start-quiz"
              disabled={perguntas.length === 0}
            >
              Iniciar Quiz
            </button>
            <button
              onClick={() => navigate("/materias")}
              className="btn-secondary btn-voltar"
            >
              Voltar para Matérias
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Tela final do Quiz (seção com melhorias) ---
  if (quizFinalizado) {
    const totalPerguntas = perguntas.length;
    const pontuacaoPercentual = totalPerguntas > 0 ? (acertos / totalPerguntas) * 100 : 0;

    const getFeedback = () => {
      if (motivoFinalizacao === "tempoEsgotado") {
        return {
          titulo: "Tempo Esgotado!",
          mensagem: "Não se preocupe, o importante é continuar praticando para melhorar seu tempo.",
        };
      }
      if (pontuacaoPercentual >= 90) {
        return { titulo: "Excelente!", mensagem: `Você demonstrou maestria no quiz de ${materiaDoQuiz}!` };
      }
      if (pontuacaoPercentual >= 70) {
        return { titulo: "Muito Bem!", mensagem: `Ótimo desempenho! Você está no caminho certo em ${materiaDoQuiz}.` };
      }
      if (pontuacaoPercentual >= 50) {
        return { titulo: "Bom Trabalho!", mensagem: `Você concluiu o quiz de ${materiaDoQuiz}. Continue estudando e praticando!` };
      }
      return { titulo: "Parabéns por Concluir!", mensagem: `Cada quiz é um passo adiante! A prática em ${materiaDoQuiz} leva à perfeição.` };
    };

    const feedback = getFeedback();
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pontuacaoPercentual / 100) * circumference;

    return (
      <div className="quiz-page-container" key="tela-final">
        <div className="quiz-tela-final">
          <div className="quiz-final-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 5.5A2.5 2.5 0 0 0 17 3H7a2.5 2.5 0 0 0 0 5h.586L6.172 9.414A3.502 3.502 0 0 0 9 15.434V20H7v2h10v-2h-2v-4.566a3.502 3.502 0 0 0 2.828-6.02L16.414 8H17a2.5 2.5 0 0 0 2.5-2.5zM12 14a1.5 1.5 0 0 1-1.41-2.036L12 6.13l1.41 5.834A1.5 1.5 0 0 1 12 14z"></path>
             </svg>
          </div>
          <h1>{feedback.titulo}</h1>
          <p className="quiz-final-subtitle">{feedback.mensagem}</p>

          <div className="score-progress-container">
            <svg className="score-progress-circle" width="200" height="200">
              <circle
                className="progress-bg"
                cx="100"
                cy="100"
                r={radius}
              />
              <circle
                className="progress-value"
                cx="100"
                cy="100"
                r={radius}
                style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
              />
            </svg>
            <div className="score-text-overlay">
              <span className="score-acertos">{acertos}</span>
              <span className="score-total">/ {totalPerguntas}</span>
              <span className="score-label">Acertos</span>
            </div>
          </div>
          
          <div className="quiz-acoes-finais">
            <button onClick={iniciarQuiz} className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
              </svg>
              <span>Jogar Novamente</span>
            </button>
            <div className="botoes-secundarios-wrapper">
                <button onClick={() => navigate("/materias")} className="btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 8H2v12c0 1.1.9 2 2 2h12v-2H4V8zm16-4H8C6.9 4 6 4.9 6 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 10H9v-2h8v2zm-4-4H9v-2h4v2zm4-4H9V6h8v2z"></path>
                  </svg>
                  <span>Outra Matéria</span>
                </button>
                <button onClick={() => navigate("/ranking")} className="btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path>
                  </svg>
                  <span>Ver Classificação</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const perguntaAtual = perguntas[indexAtual];

  if (
    !perguntaAtual ||
    typeof perguntaAtual.pergunta !== "string" ||
    !Array.isArray(perguntaAtual.opcoes)
  ) {
    return (
      <div className="quiz-page-container" key="erro-pergunta">
        <div className="quiz-feedback-container">
          <h2>Erro nos Dados da Pergunta</h2>
          <p className="error-message">
            A pergunta atual não pôde ser carregada por estar em um formato
            inválido.
          </p>
          <div className="quiz-actions">
            <button onClick={proximaQuestao} className="btn-primary">
              {indexAtual + 1 < perguntas.length
                ? "Ir para a próxima"
                : "Finalizar"}
            </button>
            <button
              onClick={() => navigate("/materias")}
              className="btn-secondary"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page-container quiz-active-layout" key="quiz-ativo">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>{materiaDoQuiz}</h2>
          <div className="quiz-timer">{formatarTempo(tempoRestante)}</div>
        </div>
        <div className="quiz-pergunta-container">
          <p className="pergunta-texto">{perguntaAtual.pergunta}</p>
          <ul className="lista-opcoes">
            {perguntaAtual.opcoes.map((opcao, i) => (
              <li
                key={`opcao-${i}`}
                onClick={() => responder(opcao)}
                className={`opcao-resposta ${
                  !respostaSelecionada ? "opcao-hoveravel" : ""
                } ${
                  respostaSelecionada && opcao === perguntaAtual.correta
                    ? "opcao-correta"
                    : ""
                } ${
                  respostaSelecionada &&
                  opcao === respostaSelecionada &&
                  opcao !== perguntaAtual.correta
                    ? "opcao-incorreta"
                    : ""
                }`}
                style={{
                  pointerEvents: respostaSelecionada ? "none" : "auto",
                }}
              >
                <span className="opcao-letra">
                  {String.fromCharCode(65 + i)}
                </span>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="quiz-navigation">
          {respostaSelecionada && (
            <button onClick={proximaQuestao} className="btn-next-question">
              {indexAtual + 1 < perguntas.length
                ? "Próxima Questão"
                : "Finalizar Quiz"}
            </button>
          )}
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => navigate("/materias")}
            className="btn-secondary"
          >
            Desistir e Voltar
          </button>
        </div>
      </div>

      {respostaSelecionada && perguntaAtual.explicacao && (
        <div className="explanation-container">
          <h3>Explicação</h3>
          <p>{perguntaAtual.explicacao}</p>
        </div>
      )}
    </div>
  );
}
import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { saveScore } from "../services/quizService";
import axios from "axios";
import "../styles/QuizPage.css";

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
      setQuizFinalizado(true);
    }
  };

  if (carregandoPerguntas) {
    return (
      <div className="quiz-page-container">
        <div className="loader"></div>
        <p style={{ color: "white", fontSize: "1.2rem" }}>
          Preparando o quiz de {materiaDoQuiz}...
        </p>
      </div>
    );
  }

  if (erroCarregamento) {
    return (
      <div className="quiz-page-container">
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
      <div className="quiz-page-container">
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

  if (quizFinalizado) {
    return (
      <div className="quiz-page-container">
        <div className="quiz-tela-final">
          <h1>Quiz de {materiaDoQuiz} Finalizado!</h1>
          <p className="quiz-resultado">
            Você acertou <span>{acertos}</span> de <span>{perguntas.length}</span> perguntas!
          </p>
          <div className="quiz-acoes-finais">
            <button onClick={iniciarQuiz} className="btn-primary">
              Jogar Novamente
            </button>
            <button
              onClick={() => navigate("/materias")}
              className="btn-secondary"
            >
              Outra Matéria
            </button>
            <button
              onClick={() => navigate("/ranking")}
              className="btn-secondary"
            >
              Ver Ranking
            </button>
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
      <div className="quiz-page-container">
        <div className="quiz-feedback-container">
          <h2>Erro nos Dados da Pergunta</h2>
          <p className="error-message">
            A pergunta atual não pôde ser carregada por estar em um formato inválido.
          </p>
          <div className="quiz-actions">
            <button onClick={proximaQuestao} className="btn-primary">
              {indexAtual + 1 < perguntas.length ? "Ir para a próxima" : "Finalizar"}
            </button>
            <button onClick={() => navigate("/materias")} className="btn-secondary">
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page-container quiz-active-layout">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>{materiaDoQuiz}</h2>
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
                style={{ pointerEvents: respostaSelecionada ? "none" : "auto" }}
              >
                <span className="opcao-letra">{String.fromCharCode(65 + i)}</span>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
        <div className="quiz-footer">
          <span className="question-info">
            Questão {indexAtual + 1} de {perguntas.length}
          </span>
          <span className="score-info">Acertos: {acertos}</span>
        </div>

        <div className="quiz-navigation">
          {respostaSelecionada && (
            <button onClick={proximaQuestao} className="btn-next-question">
              {indexAtual + 1 < perguntas.length ? "Próxima Questão" : "Finalizar Quiz"}
            </button>
          )}
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={() => navigate("/materias")} className="btn-secondary">
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
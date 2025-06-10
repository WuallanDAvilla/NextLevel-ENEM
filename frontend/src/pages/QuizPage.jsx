
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importar useParams e useNavigate
import { auth } from "../firebaseConfig";
import { saveScore } from "../services/quizService";
import axios from "axios";
import "../styles/QuizPage.css"; // << SUGESTÃO: Usar um CSS global para os quizzes

export default function QuizPage() {
  const { materia } = useParams(); // Pega o parâmetro 'materia' da URL
  const navigate = useNavigate(); // Para navegação

  const [perguntas, setPerguntas] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [quizIniciado, setQuizIniciado] = useState(false);
  const [erroCarregamento, setErroCarregamento] = useState(null); // Para feedback de erro

  const materiaDoQuiz = materia; // Usa o parâmetro da URL

  // 1. Carrega as perguntas apenas uma vez, filtrando pela matéria
useEffect(() => {
  async function carregarPerguntas() {
    if (!materiaDoQuiz) {
      setErroCarregamento("Matéria não especificada.");
      return;
    }
    setErroCarregamento(null);
    try {
      // Use import.meta.env para acessar a variável de ambiente do Vite
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

      if (!API_BASE_URL) {
        // Adicione uma verificação para garantir que a variável de ambiente está definida
        console.error("VITE_API_BASE_URL não está definida nas variáveis de ambiente.");
        setErroCarregamento("Erro de configuração: Endereço da API não encontrado.");
        return;
      }

      const res = await axios.get(
        `${API_BASE_URL}/perguntas?categoria=${encodeURIComponent(
          materiaDoQuiz
        )}`
      ); // encodeURIComponent para segurança
      if (res.data && res.data.length > 0) {
        setPerguntas(res.data);
      } else {
        setPerguntas([]);
        setErroCarregamento(
          `Nenhuma pergunta de ${materiaDoQuiz} encontrada. Verifique o cadastro de perguntas.`
        );
        console.warn(`Nenhuma pergunta de ${materiaDoQuiz} encontrada.`);
      }
    } catch (error) {
      console.error(`Erro ao carregar perguntas de ${materiaDoQuiz}:`, error);
      if (error.response && error.response.status === 404) {
        setErroCarregamento(
          `Nenhuma pergunta de ${materiaDoQuiz} encontrada no servidor.`
        );
      } else {
        setErroCarregamento(
          `Falha ao carregar perguntas de ${materiaDoQuiz}. Tente novamente mais tarde.`
        );
      }
      setPerguntas([]);
    }
  }
  if (quizIniciado && !quizFinalizado) {
    carregarPerguntas();
  }
}, [quizIniciado, quizFinalizado, materiaDoQuiz]);

  // 2. Dispara o saveScore **uma vez** quando quizFinalizado virar true
  useEffect(() => {
    if (quizFinalizado) {
      const user = auth.currentUser;
      if (user) {
        const nome = user.displayName || user.email.split("@")[0];
        saveScore({ name: nome, email: user.email }, acertos)
          .then(() => console.log("Score salvo com sucesso!"))
          .catch((err) => console.error("Erro ao salvar score:", err));
      } else {
        console.warn("Usuário não logado, score não será salvo.");
      }
    }
  }, [quizFinalizado, acertos]); // Removido 'materiaDoQuiz' daqui pois não é usado no saveScore diretamente

  const iniciarQuiz = () => {
    setIndexAtual(0);
    setRespostaSelecionada(null);
    setAcertos(0);
    setQuizFinalizado(false);
    setErroCarregamento(null);
    setPerguntas([]);
    setQuizIniciado(true);
  };

  const reiniciarQuiz = () => {
    setQuizIniciado(false);
  };

  const responder = (opcao) => {
    if (respostaSelecionada || !perguntas[indexAtual]) return; // Adicionada verificação de perguntas[indexAtual]
    setRespostaSelecionada(opcao);

    if (opcao === perguntas[indexAtual].correta) {
      setAcertos((a) => a + 1);
    }

    setTimeout(() => {
      const proxima = indexAtual + 1;
      if (proxima < perguntas.length) {
        setIndexAtual(proxima);
        setRespostaSelecionada(null);
      } else {
        setQuizFinalizado(true);
      }
    }, 1000);
  };

  // Tela Inicial do Quiz
  if (!quizIniciado) {
    return (
      <div className="quiz-tela-inicial">
        <h1>Bem-vindo ao Quiz de {materiaDoQuiz || "Matéria"}!</h1>
        {materiaDoQuiz ? (
          <>
            <h2>Teste seus conhecimentos e se prepare para o ENEM!</h2>
            <button onClick={iniciarQuiz} className="btn-primary">
              🎯 Iniciar Quiz
            </button>
          </>
        ) : (
          <p>Carregando informações da matéria...</p>
        )}
        <button
          onClick={() => navigate("/materias")}
          className="btn-secondary"
          style={{ marginTop: "10px" }}
        >
          Voltar para Matérias
        </button>
      </div>
    );
  }

  // Tela de Carregamento ou Erro
  if (erroCarregamento) {
    return (
      <div className="quiz-feedback">
        <h1>Atenção</h1>
        <p>{erroCarregamento}</p>
        <button onClick={iniciarQuiz} className="btn-primary">
          Tentar Novamente
        </button>{" "}
        {/* Alterado para iniciarQuiz para recarregar */}
        <button onClick={() => navigate("/materias")} className="btn-secondary">
          Voltar para Matérias
        </button>
      </div>
    );
  }

  if (perguntas.length === 0 && !erroCarregamento) {
    return (
      <div className="quiz-feedback">
        <p>Carregando perguntas de {materiaDoQuiz}...</p>
      </div>
    );
  }

  // Tela de Quiz Finalizado
  if (quizFinalizado) {
    return (
      <div className="quiz-tela-final">
        <h1>Quiz de {materiaDoQuiz} Finalizado!</h1>
        <h2>
          Você acertou {acertos} de {perguntas.length} perguntas!
        </h2>
        <div className="quiz-acoes-finais">
          <button onClick={reiniciarQuiz} className="btn-primary">
            Jogar Novamente ({materiaDoQuiz})
          </button>
          <button
            onClick={() => navigate("/materias")}
            className="btn-secondary"
          >
            Escolher outra Matéria
          </button>
          <button
            onClick={() => navigate("/ranking")}
            className="btn-secondary"
          >
            Ver Ranking
          </button>
        </div>
      </div>
    );
  }

  // Tela da Pergunta Atual
  const perguntaAtual = perguntas[indexAtual];
  // Adicionar uma verificação para o caso de perguntaAtual ser undefined temporariamente
  if (!perguntaAtual) {
    return (
      <div className="quiz-feedback">
        <p>Carregando pergunta...</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{materiaDoQuiz}</h2>
        <p>
          Questão {indexAtual + 1} de {perguntas.length}
        </p>
      </div>
      <div className="quiz-pergunta">
        <p className="pergunta-texto">{perguntaAtual.pergunta}</p>
      </div>
      <ul className="lista-opcoes">
        {perguntaAtual.opcoes.map((opcao, i) => (
          <li
            key={i}
            onClick={() => responder(opcao)}
            className={`
              opcao-resposta 
              ${!respostaSelecionada ? "opcao-hoveravel" : ""}
              ${
                respostaSelecionada && opcao === perguntaAtual.correta
                  ? "opcao-correta"
                  : ""
              }
              ${
                respostaSelecionada &&
                opcao === respostaSelecionada &&
                opcao !== perguntaAtual.correta
                  ? "opcao-incorreta"
                  : ""
              }
            `}
            style={{ pointerEvents: respostaSelecionada ? "none" : "auto" }}
          >
            {opcao}
          </li>
        ))}
      </ul>
      <div className="quiz-progresso">
        <span>Acertos: {acertos}</span>
      </div>
      {/* BOTÃO ADICIONADO PARA VOLTAR/DESISTIR DO QUIZ */}
      <div style={{ marginTop: "25px", display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => navigate("/materias")}
          className="btn-secondary"
        >
          Voltar para Matérias
        </button>
      </div>
    </div>
  );
}

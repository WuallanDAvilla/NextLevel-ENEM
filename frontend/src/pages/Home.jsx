import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Logo from "../assets/Logo.png";
import "../styles/Home.css";

// Informações do site
const siteInfo = {
  title: "NextLevelENEM",
  description:
    "Uma plataforma dedicada à preparação para o ENEM e outros vestibulares, oferecendo recursos de estudo, quizzes e material de apoio para ajudar estudantes a alcançarem seu potencial máximo.",
  mission:
    "Nossa missão é democratizar o acesso a educação de qualidade e auxiliar estudantes em sua jornada acadêmica.",
  vision:
    "Ser a principal plataforma de preparação para vestibulares no Brasil, ajudando milhares de estudantes a ingressarem nas melhores universidades do país.",
};

// Frases de motivação
const quotes = [
  {
    text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
  },
  {
    text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
    author: "Nelson Mandela",
  },
  {
    text: "Nunca é tarde demais para ser aquilo que sempre desejou ser.",
    author: "George Eliot",
  },
  { text: "O conhecimento é poder.", author: "Francis Bacon" },
  {
    text: "Quanto mais eu estudo, mais eu aprendo. Quanto mais eu aprendo, mais eu percebo que sei pouco.",
    author: "Albert Einstein",
  },
];

function Home() {
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Função para determinar saudação baseada na hora
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    else if (hour < 18) return "Boa tarde";
    else return "Boa noite";
  };

  // Função para selecionar citação aleatória
  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  useEffect(() => {
    // Listener de autenticação
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const displayName = user.displayName || 
                          (user.email ? user.email.split("@")[0] : "Usuário");
        setUsername(displayName);
        setLoading(false);
      } else {
        navigate("/");
      }
    });

    // Configurar saudação inicial
    setGreeting(getGreeting());

    // Timer para atualizar horário a cada minuto
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Atualiza saudação também (caso mude durante o uso)
      setGreeting(getGreeting());
    }, 60000);

    // Selecionar citação aleatória
    setQuote(getRandomQuote());

    // Cleanup
    return () => {
      clearInterval(timer);
      unsubscribe();
    };
  }, [navigate]);

  const formattedTime = currentTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setError("Erro ao fazer logout. Tente novamente.");
      // Remove erro após 3 segundos
      setTimeout(() => setError(""), 3000);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Mensagem de erro */}
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <header className="home-header">
        <div className="logo-section">
          <img src={Logo} alt="NextLevelENEM Logo" className="logo" />
          <h1>{siteInfo.title}</h1>
        </div>

        <nav className="main-nav" role="navigation" aria-label="Navegação principal">
          <ul className="nav-links">
            <li>
              <Link to="/materias" className="nav-link" aria-label="Acessar matérias de estudo">
                Matérias
              </Link>
            </li>
            <li>
              <Link to="/ranking" className="nav-link" aria-label="Ver ranking de estudantes">
                Ranking
              </Link>
            </li>
            <li>
              <Link to="/redacao" className="nav-link" aria-label="Praticar redação">
                Redação
              </Link>
            </li>
          </ul>
        </nav>

        <div className="user-section">
          <Link 
            to="/perfil" 
            className="profile-link" 
            aria-label={`Ver perfil de ${username}`}
          >
            <div className="user-avatar" title={`Avatar de ${username}`}>
              {username.charAt(0).toUpperCase()}
            </div>
          </Link>
          <div className="user-info">
            <span className="username" title={`Logado como ${username}`}>
              {username}
            </span>
            <button 
              onClick={handleLogout} 
              className="logout-btn"
              aria-label="Fazer logout"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section className="welcome-section" aria-labelledby="welcome-heading">
          <div className="welcome-content">
            <h2 id="welcome-heading">
              {greeting}, <span className="highlight">{username}</span>!
            </h2>
            <p className="date-display">
              {formattedDate} • {formattedTime}
            </p>
            <p className="welcome-message">
              Pronto para continuar evoluindo seus conhecimentos hoje?
            </p>
          </div>
          
          {quote.text && (
            <div className="daily-quote" role="complementary" aria-label="Citação motivacional do dia">
              <blockquote>
                <p className="quote-text">"{quote.text}"</p>
                <footer className="quote-author">— {quote.author}</footer>
              </blockquote>
            </div>
          )}
        </section>

        <section className="features-section" aria-labelledby="features-heading">
          <h2 id="features-heading" className="section-title visually-hidden">
            Funcionalidades Principais
          </h2>
          <div className="feature-cards">
            <article className="feature-card redacao-card">
              <div className="feature-content">
                <h3>Redação</h3>
                <p>
                  Aprimore suas habilidades de redação com dicas, exemplos e 
                  acompanhe seu progresso na escrita.
                </p>
                <Link to="/redacao" className="feature-button">
                  Praticar Redação
                </Link>
              </div>
              <div className="feature-icon" aria-hidden="true">✍️</div>
            </article>

            <article className="feature-card ranking-card">
              <div className="feature-content">
                <h3>Ranking de Estudantes</h3>
                <p>
                  Veja sua posição entre os melhores estudantes e 
                  motive-se a melhorar seus resultados.
                </p>
                <Link to="/ranking" className="feature-button">
                  Ver Ranking
                </Link>
              </div>
              <div className="feature-icon" aria-hidden="true">🏆</div>
            </article>

            <article className="feature-card study-material-card">
              <div className="feature-content">
                <h3>Material de Estudo</h3>
                <p>
                  Explore nosso acervo completo de conteúdos organizados 
                  por disciplina para o ENEM.
                </p>
                <Link to="/materias" className="feature-button">
                  Estudar Agora
                </Link>
              </div>
              <div className="feature-icon" aria-hidden="true">📚</div>
            </article>
          </div>
        </section>

        <section className="study-stats-section" aria-labelledby="progress-heading">
          <h2 id="progress-heading">Seu Progresso</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-value" aria-label="0 questões respondidas">0</div>
              <div className="stat-label">Questões Respondidas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" aria-label="0% de taxa de acertos">0%</div>
              <div className="stat-label">Taxa de Acertos</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" aria-label="0 horas de tempo de estudo">0h</div>
              <div className="stat-label">Tempo de Estudo</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" aria-label="0 dias de sequência de estudos">0</div>
              <div className="stat-label">Dias Consecutivos</div>
            </div>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-heading">
          <h2 id="about-heading">Sobre o {siteInfo.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">{siteInfo.description}</p>
              <div className="about-cards">
                <article className="about-card">
                  <h3>Nossa Missão</h3>
                  <p>{siteInfo.mission}</p>
                </article>
                <article className="about-card">
                  <h3>Nossa Visão</h3>
                  <p>{siteInfo.vision}</p>
                </article>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder" role="img" aria-label="Ícone representando educação">
                <span className="image-icon" aria-hidden="true">🎓</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>
          © {new Date().getFullYear()} {siteInfo.title} - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}

export default Home;
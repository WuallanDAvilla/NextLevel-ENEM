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
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName || user.email.split("@")[0];
      setUsername(displayName);
    } else {
      navigate("/");
    }

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Bom dia");
    else if (hour < 18) setGreeting("Boa tarde");
    else setGreeting("Boa noite");

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    return () => clearInterval(timer);
  }, [navigate]);

  const formattedTime = currentTime.toLocaleTimeString([], {
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
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo-section">
          <img src={Logo} alt="Next Level ENEM" className="logo" />
          <h1>NextLevelENEM</h1>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <Link to="/materias" className="nav-link">
                Matérias
              </Link>
            </li>
            <li>
              <Link to="/ranking" className="nav-link">
                Ranking
              </Link>
            </li>
            <li>
              <Link to="/redacao" className="nav-link">
                Redação
              </Link>
            </li>
          </ul>
        </nav>

        <div className="user-section">
          <Link to="/perfil" className="profile-link">
            <div className="user-avatar">
              {username ? username.charAt(0).toUpperCase() : ""}
            </div>
          </Link>
          <div className="user-info">
            <span className="username">{username}</span>
            <button onClick={handleLogout} className="logout-btn">
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section className="welcome-section">
          <div className="welcome-content">
            <h2>
              {greeting}, <span className="highlight">{username}</span>!
            </h2>
            <p className="date-display">
              {formattedDate} • {formattedTime}
            </p>
            <p className="welcome-message">
              Pronto para continuar evoluindo seus conhecimentos hoje?
            </p>
          </div>
          <div className="daily-quote">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">— {quote.author}</p>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-cards">
            <div className="feature-card quiz-card">
              <div className="feature-content">
                <h3>Redação</h3>
                <p>
                  Desafie-se com aprendizado sobre redação e acompanhe seu
                  progresso.
                </p>
                <Link to="/redacao" className="feature-button">
                  Ver Redação
                </Link>
              </div>
              <div className="feature-icon">🧠</div>
            </div>

            <div className="feature-card ranking-card">
              <div className="feature-content">
                <h3>Ranking de Estudantes</h3>
                <p>
                  Veja sua posição entre os melhores estudantes e motive-se a
                  melhorar.
                </p>
                <Link to="/ranking" className="feature-button">
                  Ver Ranking
                </Link>
              </div>
              <div className="feature-icon">🏆</div>
            </div>

            <div className="feature-card study-material-card">
              <div className="feature-content">
                <h3>Acessar Material de Estudo</h3>
                <p>
                  Explore nosso acervo de conteúdos organizados por disciplina
                  para o ENEM.
                </p>
                <Link to="/materias" className="feature-button">
                  Ver Matérias
                </Link>
              </div>
              <div className="feature-icon">📚</div>
            </div>
          </div>
        </section>

        <section className="study-stats-section">
          <h2>Seu Progresso</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-value">0</div>
              <div className="stat-label">Questões Respondidas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">0%</div>
              <div className="stat-label">Taxa de Acertos</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">0h</div>
              <div className="stat-label">Tempo de Estudo</div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Sobre o NextLevelENEM</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">{siteInfo.description}</p>
              <div className="about-cards">
                <div className="about-card">
                  <h3>Nossa Missão</h3>
                  <p>{siteInfo.mission}</p>
                </div>
                <div className="about-card">
                  <h3>Nossa Visão</h3>
                  <p>{siteInfo.vision}</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="image-icon">🎓</span>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Botão "Voltar ao Início" */}
        <section className="back-to-home">
          <Link to="/home" className="back-home-button">
            Voltar ao Início
          </Link>
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2025 NextLevelENEM - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;

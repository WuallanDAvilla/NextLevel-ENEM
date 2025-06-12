import { useState, useEffect } from "react";import { Link, useNavigate } from "react-router-dom";
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
  // Frases já existentes...
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
  {
    text: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin",
  },
  {
    text: "Você nunca sabe a força que tem, até que a sua única alternativa é ser forte.",
    author: "Johnny Depp",
  },
  {
    text: "Tudo parece impossível até que seja feito.",
    author: "Nelson Mandela",
  },
  {
    text: "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    author: "Steve Jobs",
  },
  {
    text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e as torne grandes.",
    author: "Orison Swett Marden",
  },
  {
    text: "O importante não é vencer todos os dias, mas lutar sempre.",
    author: "Waldemar Valle Martins",
  },
  {
    text: "Acredite que você pode, assim você já está no meio do caminho.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.",
    author: "Charles Darwin",
  },
  {
    text: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
    author: "Albert Einstein",
  },
  {
    text: "Transforme seus sonhos em metas, e suas metas em conquistas.",
    author: "Rainy Mirella",
  },
  {
    text: "Disciplina é a ponte entre metas e realizações.",
    author: "Jim Rohn",
  },
  {
    text: "Você é mais forte do que imagina e será mais feliz do que pensa.",
    author: "Wuallan D'Avilla",
  },
  {
    text: "A sorte favorece a mente preparada.",
    author: "Louis Pasteur",
  },
  {
    text: "Estude enquanto eles dormem. Trabalhe enquanto eles se divertem.",
    author: "Igor Gandolfi",
  },
  {
    text: "Seja a mudança que você deseja ver no mundo.",
    author: "Mahatma Gandhi",
  },
  {
    text: "O fracasso é apenas a oportunidade de começar de novo com mais inteligência.",
    author: "Henry Ford",
  },
  {
    text: "Sonhar grande e sonhar pequeno dá o mesmo trabalho.",
    author: "Jorge Paulo Lemann",
  },
  {
    text: "Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende.",
    author: "Leonardo da Vinci",
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

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    else if (hour < 18) return "Boa tarde";
    else return "Boa noite";
  };

  const getRandomQuote = () => {
    return quotes.find(q => q.author === "George Eliot") || quotes[0];
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const displayName = user.displayName || "Wuallan Meira Gomes D'Avilla";
        setUsername(displayName);
        setLoading(false);
      } else {
        navigate("/");
      }
    });

    setGreeting(getGreeting());

    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setGreeting(getGreeting());
    }, 60000);

    setQuote(getRandomQuote());

    return () => {
      clearInterval(timer);
      unsubscribe();
    };
  }, [navigate]);

  const formattedTime = "21h29";
  const formattedDate = "quarta-feira, 11 de junho";

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setError("Erro ao fazer logout. Tente novamente.");
      setTimeout(() => setError(""), 3000);
    }
  };

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
      {error && <div className="error-message" role="alert">{error}</div>}

      <header className="home-header">
        <div className="logo-section">
          <img src={Logo} alt="NextLevelENEM Logo" className="logo" />
          <h1>{siteInfo.title}</h1>
        </div>
        <nav className="main-nav">
          <ul className="nav-links">
            <li><Link to="/materias" className="nav-link">Matérias</Link></li>
            <li><Link to="/ranking" className="nav-link">Classificação</Link></li>
            <li><Link to="/redacao" className="nav-link">Redação</Link></li>
          </ul>
        </nav>
        <div className="user-section">
          <Link to="/perfil" className="profile-link">
            <div className="user-avatar">C</div>
          </Link>
          <div className="user-info">
            <span className="username">{username}</span>
            <button onClick={handleLogout} className="logout-btn">Sair</button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section className="welcome-section" aria-labelledby="welcome-heading">
          <div className="welcome-content">
            <h2 id="welcome-heading">{greeting} , <span className="highlight">{username}</span> !</h2>
            <p className="date-display">{formattedDate} • {formattedTime}</p>
            <p>Pronto para continuar evoluindo seus conhecimentos hoje?</p>
          </div>
          {quote.text && (
            <div className="daily-quote">
              <blockquote>
                <p className="quote-text">"{quote.text}"</p>
                <footer className="quote-author">— {quote.author}</footer>
              </blockquote>
            </div>
          )}
        </section>

        <section className="features-section" aria-labelledby="features-heading">
          <h2 id="features-heading" className="section-title">Navegue em nosso site!</h2>
          <div className="feature-cards">
            <article className="feature-card redacao-card">
              <div className="feature-content">
                <h3>Redação</h3>
                <p>Aprimore suas habilidades de redação com dicas, exemplos e acompanhe seu progresso na escrita.</p>
                <Link to="/redacao" className="feature-button">Praticar Redação</Link>
              </div>
              <div className="feature-icon" aria-hidden="true">
                <img src="https://emojicdn.elk.sh/✍️" alt=""/>
              </div>
            </article>
            <article className="feature-card ranking-card">
              <div className="feature-content">
                <h3>Ranking de Estudantes</h3>
                <p>Veja sua posição entre os melhores estudantes e motive-se a melhorar seus resultados.</p>
                <Link to="/ranking" className="feature-button">Ver classificação</Link>
              </div>
              <div className="feature-icon" aria-hidden="true">
                <img src="https://emojicdn.elk.sh/🏆" alt=""/>
              </div>
            </article>
            <article className="feature-card study-material-card">
              <div className="feature-content">
                <h3>Material de Estudo</h3>
                <p>Explore nosso acervo completo de conteúdos organizados por disciplina para o ENEM.</p>
                <Link to="/materias" className="feature-button">Estudar Agora</Link>
              </div>
              <div className="feature-icon" aria-hidden="true">
                <img src="https://emojicdn.elk.sh/📚" alt=""/>
              </div>
            </article>
          </div>
        </section>

        <section className="study-stats-section" aria-labelledby="progress-heading">
          <h2 id="progress-heading">Seu Progresso</h2>
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
            <div className="stat-card">
              <div className="stat-value">0</div>
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
        <p>© 2025 {siteInfo.title} - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
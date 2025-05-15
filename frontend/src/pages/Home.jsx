import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "../styles/Home.css";

function Home() {
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Study topics for the quick access section
  const studyTopics = [
    { name: "Matemática", icon: "📊", color: "#FF6B6B" },
    { name: "Português", icon: "📝", color: "#4ECDC4" },
    { name: "História", icon: "🏛️", color: "#FFD166" },
    { name: "Geografia", icon: "🌎", color: "#118AB2" },
    { name: "Física", icon: "⚛️", color: "#073B4C" },
    { name: "Química", icon: "🧪", color: "#06D6A0" },
    { name: "Biologia", icon: "🔬", color: "#8338EC" },
    { name: "Literatura", icon: "📚", color: "#FB5607" },
  ];

  // Study quotes for motivation
  const quotes = [
    { text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
    { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
    { text: "Nunca é tarde demais para ser aquilo que sempre desejou ser.", author: "George Eliot" },
    { text: "O conhecimento é poder.", author: "Francis Bacon" },
    { text: "Quanto mais eu estudo, mais eu aprendo. Quanto mais eu aprendo, mais eu percebo que sei pouco.", author: "Albert Einstein" },
  ];

  useEffect(() => {
    // Get current user's name
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName || user.email.split("@")[0];
      setUsername(displayName);
    }
    
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Bom dia");
    else if (hour < 18) setGreeting("Boa tarde");
    else setGreeting("Boa noite");
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    // Select a random quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Format date as day of week, day and month
  const formattedDate = currentTime.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo-section">
          <img src="/logo-next-level.png" alt="Next Level ENEM" className="logo" />
          <h1>Prepara Aí</h1>
        </div>
        <div className="user-section">
          <div className="user-avatar">
            {username.charAt(0).toUpperCase()}
          </div>
          <div className="user-info">
            <span className="username">{username}</span>
            <Link to="/" className="logout-btn">Sair</Link>
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

        <section className="quick-access-section">
          <h2>Disciplinas</h2>
          <div className="topics-grid">
            {studyTopics.map((topic) => (
              <div 
                className="topic-card" 
                key={topic.name}
                style={{ backgroundColor: topic.color }}
              >
                <div className="topic-icon">{topic.icon}</div>
                <span className="topic-name">{topic.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="features-section">
          <div className="feature-cards">
            <div className="feature-card quiz-card">
              <div className="feature-content">
                <h3>Teste seus conhecimentos</h3>
                <p>Desafie-se com questões de múltipla escolha e acompanhe seu progresso.</p>
                <Link to="/quiz" className="feature-button">
                  Iniciar Quiz
                </Link>
              </div>
              <div className="feature-icon">🧠</div>
            </div>
            
            <div className="feature-card ranking-card">
              <div className="feature-content">
                <h3>Ranking de Estudantes</h3>
                <p>Veja sua posição entre os melhores estudantes e motive-se a melhorar.</p>
                <Link to="/ranking" className="feature-button">
                  Ver Ranking
                </Link>
              </div>
              <div className="feature-icon">🏆</div>
            </div>
            
            <div className="feature-card logout-card">
              <div className="feature-content">
                <h3>Encerrar Sessão</h3>
                <p>Finalize sua sessão de estudos e retorne à página de login.</p>
                <Link to="/" className="feature-button">
                  Sair
                </Link>
              </div>
              <div className="feature-icon">🚪</div>
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
      </main>

      <footer className="home-footer">
        <p>© 2025 Prepara Aí - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
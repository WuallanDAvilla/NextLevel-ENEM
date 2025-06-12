import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "../styles/Redacao.css";
import Logo from "../assets/Logo.png";

function Redacao() {
  const [user, setUser] = useState(null); // Usar o objeto 'user' completo
  const navigate = useNavigate();

  // Lógica de autenticação e logout, igual à da página de Matérias
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Se não houver usuário, redireciona para a tela de login
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Extrai o nome do usuário de forma segura
  const username = user?.displayName || user?.email?.split("@")[0] || "Usuário";

  return (
    <div className="redacao-container">
      {/* ===== HEADER PADRÃO DO SITE ===== */}
      <header className="page-header">
        <div className="logo-section">
          <Link to="/home">
            <img src={Logo} alt="NextLevelENEM Logo" className="logo" />
          </Link>
          <Link to="/home" className="header-title-link">
            <h1>NextLevelENEM</h1>
          </Link>
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
                Classificação
              </Link>
            </li>
            <li>
              {/* Link da página atual fica ativo */}
              <Link to="/redacao" className="nav-link active">
                Redação
              </Link>
            </li>
          </ul>
        </nav>

        {user && (
          <div className="user-section">
            <Link to="/perfil" className="profile-link">
              <div className="user-avatar">
                {username.charAt(0).toUpperCase()}
              </div>
            </Link>
            <div className="user-info">
              <span className="username">{username}</span>
              <button onClick={handleLogout} className="logout-btn">
                Sair
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===== CONTEÚDO PRINCIPAL DA PÁGINA ===== */}
      <main className="redacao-content">
        <h1>Conectivos para sua Redação</h1>
        <div className="sections">
          <div className="connective-card">
            <h2>
              1. <strong>Introdução</strong>
            </h2>
            <ul>
              <li>Inicialmente</li>
              <li>Em primeiro lugar</li>
              <li>Para começar</li>
              <li>A princípio</li>
              <li>De início</li>
            </ul>
          </div>

          <div className="connective-card">
            <h2>
              2. <strong>Desenvolvimento</strong>
            </h2>
            <ul>
              <li>Além disso</li>
              <li>Ademais</li>
              <li>No entanto</li>
              <li>Por outro lado</li>
              <li>Da mesma forma</li>
              <li>Desse modo</li>
              <li>Como consequência</li>
              <li>Dessa forma</li>
              <li>Sendo assim</li>
              <li>Diante disso</li>
            </ul>
          </div>

          <div className="connective-card">
            <h2>
              3. <strong>Conclusão</strong>
            </h2>
            <ul>
              <li>Em conclusão</li>
              <li>Por fim</li>
              <li>Conclui-se</li>
              <li>Nesse sentido</li>
              <li>Conclusivamente</li>
            </ul>
          </div>
        </div>
      </main>

      {/* ===== FOOTER PADRÃO DO SITE ===== */}
      <footer className="page-footer">
        <p>© 2025 NextLevelENEM - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Redacao;

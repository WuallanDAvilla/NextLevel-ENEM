import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar o pop-up

  // Login com e-mail/senha
  const handleLoginEmailSenha = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/home"); // redireciona ao sucesso
    } catch {
      setErro("Usuário ou senha inválidos.");
    }
  };

  // Login com Google
  const handleLoginGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch {
      setErro("Erro ao fazer login com Google.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="login-logo">
            <img src={Logo} alt="NextLevelENEM Logo" />{" "}
            {/* Adicionado nome do projeto ao alt text */}
          </div>
          <div className="buttons-container">
            <button onClick={() => setShowPopup(true)} className="btn-entrar">
              Entrar
            </button>
            <img
              src={GoogleLogo}
              alt="Login com Google"
              className="google-login"
              onClick={handleLoginGoogle}
            />
          </div>
        </div>

        <div className="login-description">
          <p>
            O aplicativo desenvolvido para ajudar os estudantes a se prepararem
            para o <strong>ENEM</strong> é uma ferramenta inovadora e prática.
            Com um design intuitivo, ele oferece uma vasta gama de{" "}
            <strong>questões objetivas</strong>, abrangendo todas as disciplinas
            incluídas no exame.
          </p>
          <p>
            Essa ferramenta não apenas ajuda na memorização, mas também estimula
            o <strong>raciocínio crítico</strong>, preparando os alunos para os
            desafios e, consequentemente, para o futuro acadêmico.
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ×
            </button>
            <h2>Área de Login</h2>
            <form onSubmit={handleLoginEmailSenha} className="login-form">
              <input
                type="email"
                placeholder="Insira seu e-mail" /* Corrigido placeholder */
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Insira sua senha" /* Corrigido placeholder */
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              {erro && <div className="login-error">{erro}</div>}
              <button type="submit" className="btn-submit-login">
                ENTRAR
              </button>{" "}
              {/* Adicionada classe para estilização específica se necessário */}
            </form>
            <button
              className="register-button" // Estilos agora no Login.css
              onClick={() => navigate("/cadastro")}
            >
              CADASTRAR-SE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

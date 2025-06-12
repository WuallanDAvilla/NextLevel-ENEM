// Login.jsx

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import "../styles/Login.css";

// NOVO: Ícones SVG para o olho (não precisa criar arquivos, eles ficam aqui)
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
  </svg>
);


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // NOVO ESTADO

  const handleLoginEmailSenha = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/home");
    } catch {
      setErro("Usuário ou senha inválidos.");
    }
  };

  const handleLoginGoogle = async () => {
    setErro("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch {
      setErro("Erro ao fazer login com Google.");
    }
  };

  const openPopup = () => {
    setEmail("");
    setSenha("");
    setErro("");
    setShowPassword(false); // ALTERADO: Garante que a senha comece oculta
    setShowPopup(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="login-logo">
            <img src={Logo} alt="NextLevelENEM Logo" />
          </div>
          <div className="buttons-container">
            <button onClick={openPopup} className="btn-entrar">
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
                placeholder="Insira seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* --- ESTRUTURA DA SENHA ALTERADA --- */}
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"} // ALTERADO
                  placeholder="Insira sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)} // ALTERADO
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              </div>
              
              {erro && <div className="login-error">{erro}</div>}
              <button type="submit" className="btn-submit-login">
                ENTRAR
              </button>
            </form>
            <button
              className="register-button"
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
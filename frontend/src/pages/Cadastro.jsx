import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Importando a logo
import "../styles/Login.css"; // Importa o CSS base do login
import "../styles/Cadastro.css"; // Importa os estilos específicos do cadastro

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErro("");
    if (senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      await updateProfile(userCredential.user, { displayName: nome });
      navigate("/home");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setErro("Este e-mail já está em uso.");
      } else {
        setErro("Erro ao criar conta. Tente novamente.");
      }
    }
  };

  const verificarForcaSenha = (senha) => {
    if (!senha) return "";
    if (senha.length < 6) return "fraca";
    if (senha.length >= 6 && senha.length < 10) return "media";
    return "forte";
  };

  const forcaSenha = verificarForcaSenha(senha);

  return (
    // Reutilizando a estrutura da tela de Login
    <div className="login-container">
      <div className="login-card">
        {/* Lado Esquerdo: Logo e link para voltar */}
        <div className="login-left">
          <div className="login-logo">
            <img src={Logo} alt="NextLevelENEM Logo" />
          </div>
          <div className="back-to-login-container">
            <p>Já possui uma conta?</p>
            <button onClick={() => navigate("/")} className="btn-back-to-login">
              Fazer Login
            </button>
          </div>
        </div>

        {/* Lado Direito: Formulário de Cadastro */}
        <div className="cadastro-right-panel">
          <h1 className="cadastro-titulo">Criar Conta</h1>

          <form onSubmit={handleSignUp} className="cadastro-form">
            <input
              type="text"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="cadastro-input"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="cadastro-input"
              required
            />
            <input
              type="password"
              placeholder="Sua senha (mínimo 6 caracteres)"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="cadastro-input"
              required
            />

            {senha && (
              <div className={`senha-strength senha-${forcaSenha}`}>
                Força da senha:{" "}
                <span>
                  {forcaSenha === "fraca"
                    ? "Fraca"
                    : forcaSenha === "media"
                    ? "Média"
                    : "Forte"}
                </span>
              </div>
            )}

            {erro && <p className="cadastro-erro">{erro}</p>}

            <button type="submit" className="cadastro-btn">
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
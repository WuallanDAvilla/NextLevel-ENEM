import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles/Cadastro.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState(""); // <- campo extra para displayName
  const [erro, setErro] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // 1 cria o usuário
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      // 2 atualiza o displayName
      await updateProfile(userCredential.user, { displayName: nome });
      // 3 redireciona
      navigate("/home");
    } catch (err) {
      setErro("Erro ao criar conta: " + err.message);
    }
  };

  // Função para verificar força da senha
  const verificarForcaSenha = (senha) => {
    if (senha.length < 6) return "fraca";
    if (senha.length >= 6 && senha.length < 10) return "media";
    if (senha.length >= 10) return "forte";
  };

  const forcaSenha = verificarForcaSenha(senha);

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
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
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="cadastro-input"
            required
            minLength="6"
          />

          {senha && (
            <div className={`senha-strength senha-${forcaSenha}`}>
              Força da senha:{" "}
              {forcaSenha === "fraca"
                ? "Fraca"
                : forcaSenha === "media"
                ? "Média"
                : "Forte"}
            </div>
          )}

          {erro && <p className="cadastro-erro">{erro}</p>}

          <button type="submit" className="cadastro-btn">
            Criar Conta
          </button>
        </form>

        <div className="cadastro-login-link">
          <p className="cadastro-login-text">Já possui uma conta?</p>
          <button onClick={() => navigate("/")} className="cadastro-login-btn">
            Fazer Login
          </button>
        </div>
      </div>
    </div>
  );
}

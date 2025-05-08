import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

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
        <div className="login-logo">
          <img src="/logo-next-level.png" alt="Next Level ENEM" />
        </div>

        <div className="login-description">
          <p>
            O aplicativo desenvolvido para ajudar os estudantes a se
            prepararem para o ENEM é uma ferramenta inovadora e prática. Com um
            design intuitivo, ele oferece uma vasta gama de questões objetivas,
            abrangendo todas as disciplinas incluídas no exame.
          </p>
          <p>
            Essa ferramenta não apenas ajuda na memorização, mas também
            estimula o raciocínio crítico, preparando os alunos para os
            desafios e, consequentemente, para o futuro acadêmico.
          </p>
        </div>

        <form onSubmit={handleLoginEmailSenha} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          {erro && <div className="login-error">{erro}</div>}
          <button type="submit" className="btn-entrar">
            Entrar com E-mail
          </button>
        </form>

        <div className="divisor">ou</div>
        <button onClick={handleLoginGoogle} className="btn-conectar">
          Entrar com Google
        </button>
      </div>
    </div>
  );
}

export default Login;

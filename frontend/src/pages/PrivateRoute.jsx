import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Certifique-se que o caminho está correto
import { useAuthState } from "react-firebase-hooks/auth";

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#0d3e63",
          color: "white",
        }}
      >
        <h2>Verificando autenticação...</h2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
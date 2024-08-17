import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Contaxt";

export default function Private({ children }) {
  const { loggedUser, loading } = useContext(AuthContext);
  const location = useLocation();

  // Inline style for the loader
  const loaderStyle = {
    border: "16px solid #f3f3f3",
    borderTop: "16px solid #3498db",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    animation: "spin 2s linear infinite",
  };

  // Inline style for the container
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0dfdf",
    width: "100%",
    minHeight: "100vh",
  };

  // CSS keyframes for spinning animation
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      {loading ? (
        <div style={containerStyle}>
          <div style={loaderStyle}></div>
        </div>
      ) : loggedUser ? (
        children
      ) : (
        <Navigate state={{ from: location.pathname }} to="/login" replace />
      )}
    </>
  );
}

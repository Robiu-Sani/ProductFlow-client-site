import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Contaxt";

export default function Private({ children }) {
  const { loggedUser, loader } = useContext(AuthContext);
  const location = useLocation();
  const [isUserChecked, setIsUserChecked] = useState(false);

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

  // This effect checks if the user is logged in after loader is complete
  useEffect(() => {
    if (!loader) {
      setIsUserChecked(true);
    }
  }, [loader]);

  // If still loader, show a loader
  if (loader || !isUserChecked) {
    return (
      <>
        <style>{keyframes}</style>
        <div style={containerStyle}>
          <div style={loaderStyle}></div>
        </div>
      </>
    );
  }

  // If user is checked and not logged in, redirect to login page
  if (isUserChecked && !loggedUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Otherwise, render the children components
  return children;
}

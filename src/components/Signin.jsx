import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signin = () => {
  const { loginWithRedirect } = useAuth0();
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "20px",
    borderRadius: "5px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

  return (
    <div style={containerStyle}>
            <button style={buttonStyle} onClick={() => loginWithRedirect()}>
      Log In To My Application
    </button>
    </div>

  );
};

export default Signin;

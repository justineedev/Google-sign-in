import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../images/404.png";
export default function Notfound() {
  const navigate = useNavigate();

  const wrapperStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const buttonStyle = {
    border: "none",
    padding: "10px 25px",
    fontFamily: "inherit",
    borderRadius: "4px",
    fontSize: "1.1rem",
    cursor: "pointer",
    backgroundColor: "#0075fa",
    color: "#FFFFFF",
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={{ textAlign: "center" }}>
        Sorry, the page you were looking for doesn't exist.
      </h1>
      <img src={notFound} alt="notFound" style={{ width: "90%" }}></img>
      <button style={buttonStyle} onClick={handleClick}>
        Back to main page
      </button>
    </div>
  );
}

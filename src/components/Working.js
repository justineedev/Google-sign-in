import { useNavigate } from "react-router-dom";
import working from "../images/working.png";

export default function Working() {
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
    backgroundColor: "#e2eaf5",
    color: "#0075fa",
  };

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={{ textAlign: "center" }}>
        Sorry about the inconvenience! We're working to get things back up and
        running.
      </h1>
      <img src={working} alt="working" style={{ width: "90%" }}></img>
      <button style={buttonStyle} onClick={handleClickBack}>
        Back to main page
      </button>
    </div>
  );
}

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
    border: "1px solid #06c",
    padding: "10px 25px",
    fontFamily: "inherit",
    borderRadius: "4px",
    fontSize: "1.1rem",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#fff",
  };

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <div style={wrapperStyle}>
      <h1>
        Sorry about the inconvenience! We're working to get things back up and
        running.
      </h1>
      <img src={working} alt="working"></img>
      <button style={buttonStyle} onClick={handleClickBack}>
        Go back
      </button>
    </div>
  );
}

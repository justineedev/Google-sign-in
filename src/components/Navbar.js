import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClickContact = () => {
    navigate("/Contact");
  };

  return (
    <nav>
      <div className="nav-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          alt="Google-Logo"
        ></img>
      </div>

      <div className="nav-contact-us">
        <button className="nav-contact-btn" onClick={handleClickContact}>
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

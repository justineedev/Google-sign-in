import { useNavigate } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <form className="contact-form">
      <h1 className="contact-form-title">Request more scopes:</h1>
      <div className="contact-form-inputs">
        <input type="text" className="contact-form-input"></input>
        <input type="text" className="contact-form-input"></input>
      </div>
      <div className="contact-form-footer-btn">
        <button type="button" onClick={handleClickBack}>
          Back
        </button>
        <button type="button">Send</button>
      </div>
    </form>
  );
};

export default Contact;

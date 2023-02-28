import "./Footer.css";
import logo from "../logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-details">
        Made with <img className="icon" width={35} src={logo} alt="react"></img>{" "}
        by <code className="footer-name">Justine Dave </code>{" "}
        <span className="footer-version">(v1.0.4)</span>
      </p>
    </footer>
  );
}

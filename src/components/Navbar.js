import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          alt="Google-Logo"
        ></img>
      </div>

      <div className="nav-contact-us">
        <p>Need more scopes?</p>
        <button className="nav-contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;

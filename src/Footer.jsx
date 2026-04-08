import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h3>LETS CONNECT</h3>
      <br></br>
      <div className="footer-icons">
        <a href="mailto:lekasreek@gmail.com" title="Gmail">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
            alt="Gmail"
          />
        </a>

        <span className="separator">|</span>

        <a
          href="https://github.com/leka006"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png"
            alt="GitHub"
          />
        </a>

        <span className="separator">|</span>

        <a
          href="https://linkedin.com/in/leka-sree-k-9335b233b"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/2496/2496097.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
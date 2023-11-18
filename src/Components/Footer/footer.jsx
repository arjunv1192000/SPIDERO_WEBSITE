import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/sitemap">Sitemap</a>
          <span className="st">
            © 2023 Spidero Technology Inc. All rights reserved.
          </span>
        </div>
      </div>
      <a href="/contact" className="mobilefooter">
        <div className="footerbutton">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span className="textfoot">Get in Touch</span>
        </div>
      </a>
    </footer>
  );
};

export default Footer;

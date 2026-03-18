import React from "react";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Mreze from "./Mreze";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>© 2026 Maslinovo Ulje — Tradicija i kvaliteta</p>

        <div className="footer-links">
          <Link to="/onama">O nama</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>

        <Mreze />
      </div>
    </div>
  );
};

export default Footer;

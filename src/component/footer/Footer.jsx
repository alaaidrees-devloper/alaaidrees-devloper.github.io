import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">IDREESDEV</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/alaa.edres.99?mibextid=ZbWKwL" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/alaa.edres.99?igsh=am8zajFwNTNjNzV1" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://x.com/alaa_edrse" className="footer__social-link" target="_blank">
            <i class="ri-twitter-x-line"></i><i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169; alaaideesdev.All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

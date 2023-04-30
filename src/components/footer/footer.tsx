import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title">Aditya</h1> */}

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://instagram.com/a.d.i.t.y.a._n?igshid=YmMyMTA2M2Y="
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/Aditya9820?mibextid=LQQJ4d"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adityan9820"
            className="home__social-icon"
            target="_blank"
          >
            <i className='bx bxl-linkedin-square' ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

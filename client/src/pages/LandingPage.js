import React from "react";
import small_logo from "../assets/logos/WebLogo.svg";
import Icon from "../assets/logos/Jaal";
import { Link } from "react-router-dom";

import "../styles/Landing.css";

export const LandingPage = () => {
  return (
    <div className="landing-main-container">
      <div className="logo-container">
        <img src={small_logo} alt="up-arrow" />
      </div>
      <span className="heading-text">SCRAPER</span>
      <div className="desc-container-upper">
        <p>
          A <span className="main-heading">Scrapping</span> tool that gathers
          products from various popular e-commerce websites <br /> such as
          <span className="main-heading">Fipkart</span> and <br />
          <span className="main-heading">Amazon</span>.
        </p>
      </div>
      <div className="desc-container-lower">
        <p>
          Made using <span className="sub-heading">React, </span>
          <span className="sub-heading">NodeJs</span> and
          <span className="sub-heading">Puppeteer</span>.
        </p>
      </div>
      <div className="github-icon"></div>

      <Link className="search-page" to="/search">
        SEARCH
      </Link>
      <div className="logo-large-container">
        <Icon />
      </div>
      <div className="footer">
        <p>
          Credits -<a href="https://github.com/art-apurv">ArT-apurv </a>
          and
          <a href="https://github.com/SoumyaCy">SouymaCy</a>
        </p>
      </div>
    </div>
  );
};

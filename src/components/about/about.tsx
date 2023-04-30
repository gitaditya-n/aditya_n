import React from "react";
import "./about.css";
import Aditya from "../../assets/Aditya.jpg";
import { Info } from "./info";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={Aditya} alt="" className="about__img" />
        <div className="about__data">
          <Info></Info>

          <p className="about__description">
            Frontend developer, I create web app with UI and UX Interface, I
            have 3 years of experience.
          </p>
        </div>
      </div>
    </section>
  );
};

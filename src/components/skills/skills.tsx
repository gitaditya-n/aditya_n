import React from "react";
import { Frontend } from "./frontend";
import { Backend } from "./backend";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend></Frontend>
        <Backend></Backend>
      </div>
    </section>
  );
};

import React from "react";
import "./skill.css";

export const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">Angular</div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">ES6</div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">NgZorro</div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">JavaScript</div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">RXjS</div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">Material UI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

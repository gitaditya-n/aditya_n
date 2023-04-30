import React from "react";
import "./skill.css";

export const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">Python</div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">Azure FunctionApp</div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">FLASK</div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__name">MySQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

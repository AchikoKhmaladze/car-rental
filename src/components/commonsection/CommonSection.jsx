import React from "react";
import "./CommonSection.css";

export default function CommonSection(props) {
  return (
    <section className="common-section">
      <div className="common-section-overlay"></div>
      <div className="common-section-content-wraper">
        <div className="common-section-content">
          <h3>{props.text}</h3>
          <h5>Home / {props.text}</h5>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./CommonBookSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function CommonBookSection() {
  return (
    <section className="common-book-section">
      <div className="common-book-section-overlay"></div>
      <div className="common-book-section-content">
        <h3>Book a car by getting in touch with us</h3>
        <span>
          <FontAwesomeIcon fontSize={28} icon={faPhone} /> (123) 456-7869
        </span>
      </div>
    </section>
  );
}

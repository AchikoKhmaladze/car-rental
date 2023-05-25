import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import CommonSection from "../../commonsection/CommonSection";
import CommonBookSection from "../../commonbooksection/CommonBookSection";
import "./Contactpage.css";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

export default function Contactpage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <CommonSection text="Contact" />
      <section className="contact-section">
        <div className="contact-section-content-wraper">
          <div className="contact-section-content">
            <div className="contact-section-info">
              <div className="contact-section-info-inner">
                <h1>Need additional information?</h1>
                <p>
                  A multifaceted professional skilled in multiple fields of
                  research, development as well as a learning specialist. Over
                  15 years of experience.
                </p>
                <div className="contact">
                  <span>
                    <FontAwesomeIcon icon={faPhone} /> (123) 456-7869
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    carrental@carmail.com
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                    Belgrade, Serbia
                  </span>
                </div>
              </div>
            </div>
            <form action="" className="contact-section-form">
              <div className="person-name">
                <label htmlFor="name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="name"
                  placeholder={`E.g: "Joe Shmoe" `}
                  type="text"
                />
              </div>
              <div className="person-email">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  id="email"
                  placeholder="youremail@example.com"
                  type="email"
                />
              </div>
              <div className="person-message">
                <label htmlFor="message">
                  Tell us about it <span>*</span>
                </label>
                <textarea id="message" placeholder="Write Here..."></textarea>
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="submit-form"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <CommonBookSection />
      <Footer />
    </>
  );
}

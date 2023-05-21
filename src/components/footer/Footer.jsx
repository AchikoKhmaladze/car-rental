import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-wraper">
        <div className="footer-content-div">
          <div className="footer-content">
            <h4>
              CAR <span>Rental</span>
            </h4>
            <p className="footer-offer-text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <div className="contact-div">
              <div className="contact-phone">
                <FontAwesomeIcon icon={faPhone} />
                (123) -456-789
              </div>
              <div className="contact-email">
                <FontAwesomeIcon icon={faEnvelope} />
                carrental@gmail.com
              </div>
            </div>
          </div>

          <div className="footer-content">
            <h4>COMPANY</h4>
            <ul>
              <li>New York</li>
              <li>Careers</li>
              <li>Mobile</li>
              <li>Blog</li>
              <li>How we work</li>
            </ul>
          </div>
          <div className="footer-content">
            <h4>WORKING HOURS</h4>
            <ul>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div className="footer-content">
            <h4>SUBSCRIPTION</h4>
            <p>Subscribe your Email address for latest news & updates.</p>
            <div className="subscription">
              <input
                placeholder="Enter Email Address"
                type="email"
                name=""
                id=""
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

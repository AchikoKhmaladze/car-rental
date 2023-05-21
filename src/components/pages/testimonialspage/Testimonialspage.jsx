import React from "react";
import CommonSection from "../../commonsection/CommonSection";
import CommonBookSection from "../../commonbooksection/CommonBookSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faPhone,
  faEnvelope,
  faAngleDown,
  faCircleInfo,
  faXmark,
  faCheck,
  faLocationDot,
  faCalendarDays,
  faAngleRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonialspage() {
  return (
    <>
      <CommonSection text="Testimonials" />
      <section className="testimonial-section">
        <div className="testimonial-section-content-wraper">
          <div className="testimonial-section-title">
            <h3>Reviewed by People</h3>
            <h1>Client's Testimonials</h1>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="testimonial-section-content">
            <div className="testimonial-section-content-info">
              <span>
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
              </span>
              <div className="testimonial-section-content-info-subinfo">
                <div className="testimonial-section-content-info-profile">
                  <img
                    className="harry"
                    src="/assets/mainpage/harry.jpg"
                    alt=""
                  />
                  <div className="testimonial-section-content-info-profile-inner">
                    <h5>Harry Potter</h5>
                    <p>Tbilisi</p>
                  </div>
                </div>
                <FontAwesomeIcon
                  fontSize={55}
                  color="#ff4d30"
                  icon={faQuoteRight}
                />
              </div>
            </div>
            <div className="testimonial-section-content-info">
              <span>
                "The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!"
              </span>
              <div className="testimonial-section-content-info-subinfo">
                <div className="testimonial-section-content-info-profile">
                  <img className="ron" src="/assets/mainpage/ron.jpg" alt="" />
                  <div className="testimonial-section-content-info-profile-inner">
                    <h5>Ron Rizzly</h5>
                    <p>Mtskheta</p>
                  </div>
                </div>
                <FontAwesomeIcon
                  fontSize={55}
                  color="#ff4d30"
                  icon={faQuoteRight}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommonBookSection />
    </>
  );
}

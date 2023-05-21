import React from "react";
import CommonSection from "../../commonsection/CommonSection";
import CommonBookSection from "../../commonbooksection/CommonBookSection";
import "./Aboutpage.css";
export default function Aboutpage() {
  return (
    <>
      <CommonSection text="About" />
      <section className="about-section">
        <div className="about-section-content">
          <img
            className="about-img"
            src="/assets/mainpage/about-img.jpg"
            alt=""
          />
          <div className="about-section-content-info">
            <h4>About Company</h4>
            <h1>You start the engine and your adventure begins</h1>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="about-section-content-info-inner">
              <div className="about-section-content-info-inner-item">
                <div>
                  <img src="/assets/mainpage/about-car.png" alt="" />
                </div>
                <p>
                  20 <span>Car Types</span>
                </p>
              </div>
              <div className="about-section-content-info-inner-item">
                <div>
                  <img src="/assets/mainpage/about-house.png" alt="" />
                </div>
                <p>
                  85 <span>Rental Outlets</span>
                </p>
              </div>
              <div className="about-section-content-info-inner-item">
                <div>
                  <img src="/assets/mainpage/about-car-garage.png" alt="" />
                </div>
                <p>
                  75 <span>Repair Shop</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="second-section-title">
          <h4>Plan your trip now</h4>
          <h1>Quick & easy car rental</h1>
        </div>
        <div className="second-section-content-wraper">
          <div className="second-section-content">
            <div className="second-section-content-info">
              <img src="/assets/mainpage/selectcar.png" alt="" />
              <h2>Select Car</h2>
              <p>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="second-section-content-info">
              <img src="/assets/mainpage/contactoperator.png" alt="" />
              <h2>Contact Operator</h2>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="second-section-content-info">
              <img src="/assets/mainpage/letsdrive.png" alt="" />
              <h2>Let's Drive</h2>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </section>
      <CommonBookSection />
    </>
  );
}

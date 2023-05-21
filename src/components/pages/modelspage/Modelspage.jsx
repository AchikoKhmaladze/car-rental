import React, { useState } from "react";
import CommonSection from "../../commonsection/CommonSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Modelspage.css";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import CommonBookSection from "../../commonbooksection/CommonBookSection";

export default function Modelspage() {
  const [acttive, setActive] = useState(false);
  const handle = () => setActive(false);
  const carinfo = [
    {
      name: "Audi A1",
      price: "$45",
      model: "Audi",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      img: "/assets/models/audi.png",
    },
    {
      name: "Golf 6",
      price: "$37",
      model: "VW",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      img: "/assets/models/golf.png",
    },
    {
      name: "Toyota",
      price: "$30",
      model: "Camry",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      img: "/assets/models/toyota.png",
    },
    {
      name: "BMW 320",
      price: "$35",
      model: "ModernLine",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      img: "/assets/models/bmw.png",
    },
    {
      name: "Mercedes",
      price: "$50",
      model: "Benz GLK",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      img: "/assets/models/mercedes.png",
    },
    {
      name: "VW Passat",
      price: "$25",
      model: "CC",
      doors: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      img: "/assets/models/passat.png",
    },
  ];

  return (
    <>
      <CommonSection text="Vehicle Models" />
      <section className="models-section">
        <div className="models-section-content-wraper">
          <div className="models-section-content-div">
            {carinfo.map((car) => {
              return (
                <div className="models-section-content">
                  <div className="models-section-content-top">
                    <img src={car.img} alt="" />
                  </div>
                  <div className="models-section-content-bottom">
                    <div className="models-section-content-bottom-info">
                      <div className="models-section-content-bottom-info-item">
                        <div className="models-section-content-bottom-info-item-name">
                          <h4 className="name">{car.name}</h4>
                          <span>
                            <FontAwesomeIcon
                              fontSize={15}
                              color="#ffc933"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              fontSize={15}
                              color="#ffc933"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              fontSize={15}
                              color="#ffc933"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              fontSize={15}
                              color="#ffc933"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              fontSize={15}
                              color="#ffc933"
                              icon={faStar}
                            />
                          </span>
                        </div>
                        <div className="models-section-content-bottom-info-item-price">
                          <h4 className="price">{car.price}</h4>
                          <p>per day</p>
                        </div>
                      </div>
                      <div className="models-section-content-bottom-info-item">
                        <div className="models-section-content-bottom-info-item-mark">
                          <FontAwesomeIcon icon={faCarSide} />
                          <p>{car.model}</p>
                        </div>
                        <div className="models-section-content-bottom-info-item-doors">
                          <p>{car.doors}</p>
                          <FontAwesomeIcon icon={faCarSide} />
                        </div>
                      </div>
                      <div className="models-section-content-bottom-info-item">
                        <div className="models-section-content-bottom-info-item-transmission">
                          <FontAwesomeIcon icon={faCarSide} />
                          <p>{car.transmission}</p>
                        </div>
                        <div className="models-section-content-bottom-info-item-fuel">
                          <p>{car.fuel}</p>
                          <FontAwesomeIcon icon={faCarSide} />
                        </div>
                      </div>
                    </div>
                    <Link to="/">
                      <button className="booking-button">Book Ride</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CommonBookSection />
    </>
  );
}

import React, { useRef } from "react";
import "./Mainpage.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";

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
import { MyContext } from "../../../App";

export default function Mainpage() {
  // cars information //
  const Context = useContext(MyContext);

  const cars = [
    {
      name: "Audi A1 S-Line",
      src: "/assets/mainpage/audi.jpg",
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Gasoline",
    },

    {
      name: "VW Golf 6",
      src: "/assets/mainpage/golf.jpg",
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },

    {
      name: "Toyota Camry",
      src: "/assets/mainpage/toyota.jpg",
      model: "Camry",
      mark: "Toyota",
      year: 2006,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
    },

    {
      name: "BMW 320 Moderline",
      src: "/assets/mainpage/bmw.jpg",
      model: "320",
      mark: "BMW",
      year: 2012,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },

    {
      name: "Mercedes-Benz GLK",
      src: "/assets/mainpage/mercedes.jpg",
      model: "Benz GLK",
      mark: "Mercedes",
      year: 2006,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },

    {
      name: "VW Passat CC",
      src: "/assets/mainpage/passat.jpg",
      model: "Passat CC",
      mark: "Volkswagen",
      year: 2008,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  // car model finding function to display //

  const [carDisplay, setCarDisplay] = useState({});

  const displayCar = (car) => {
    const finded = cars.find((item) => item.name === car);
    setCarDisplay(finded);
  };

  // scroll function to information and booking //

  const scrollto = useRef(null);

  const scrollToBooking = () => {
    scrollto?.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMoreInfo = useRef(null);

  const scrollToMoreInformation = () => {
    scrollToMoreInfo?.current.scrollIntoView({ behavior: "smooth" });
  };

  const preventReload = (e) => {
    e.preventDefault();
  };

  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [colored, setColored] = useState("");
  const [coloredFirstCarName, setColoredFirstCarName] = useState(true);

  //check car booking inputs //

  const CheckInputs = (e) => {
    e.preventDefault();
    if (
      form.cartype.length > 1 &&
      form.picklocation.length > 1 &&
      form.droplocation.length > 1 &&
      form.pickdate.length > 1 &&
      form.dropdate.length > 1
    ) {
      setShowModal(true);
      document.body.classList.add("body-scroll");

      setShowMessage(false);
    } else {
      setShowModal(false);
      setShowMessage(true);
    }
  };

  // find car for booking //

  const [form, seTform] = useState({
    cartype: "",
    picklocation: "",
    droplocation: "",
    pickdate: "",
    dropdate: "",
  });
  const findCar = cars.find((car) => car.name === form.cartype);

  const getCarForm = (e) => {
    seTform((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  // JSX START //

  return (
    <>
      <section className="first-section">
        <img
          className="first-section-bg"
          src="/assets/mainpage/background.png"
          alt=""
        />
        <div className="first-section-content-wraper">
          <div className="first-section-content">
            <div className="first-section-content-inner">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div ref={scrollto} className="cars-info">
                <Link to="booking" smooth={true} duration={1000} offset={200}>
                  <a
                    href=""
                    onClick={(e) => {
                      preventReload(e);
                      scrollToBooking();
                    }}
                    className="book-ride"
                  >
                    <p>Book Ride </p>
                    <span className="check-icon">
                      <FontAwesomeIcon
                        fontSize={9}
                        color="orangered"
                        icon={faCheck}
                      />
                    </span>
                  </a>
                </Link>

                <Link
                  to="second-section-content"
                  smooth={true}
                  duration={500}
                  offset={-200}
                >
                  <a
                    onClick={(e) => {
                      preventReload(e);
                      scrollToMoreInformation();
                    }}
                    href=""
                    className="learn-more"
                  >
                    <p>Learn More</p>
                    <FontAwesomeIcon
                      className="greater-than-icon"
                      color="white"
                      icon={faAngleRight}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <img
              className="first-section-car"
              src="/assets/mainpage/mainpage-car.png"
              alt=""
            />
          </div>
        </div>
        <div className="car-booking">
          <div className="car-booking-content">
            <h2 className="car-booking-title">Book a Car</h2>
            {showMessage ? (
              <p className="car-booking-form-message">
                All Fields Requiered!
                <FontAwesomeIcon
                  color="#721c24;"
                  className="car-booking-form-message-close"
                  icon={faXmark}
                  onClick={() => setShowMessage(false)}
                />
              </p>
            ) : null}

            {showMessage2 ? (
              <p className="car-booking-form-message2">
                Check your email to confirm an order.
                <FontAwesomeIcon
                  color="#721c24;"
                  className="car-booking-form-message-close"
                  icon={faXmark}
                  onClick={() => setShowMessage2(false)}
                />
              </p>
            ) : null}

            <form name="tobooking" className="car-booking-form" action="">
              <div className="car-booking-form-input">
                <label htmlFor="car-select">
                  <FontAwesomeIcon
                    fontSize={15}
                    color="orangered"
                    icon={faCar}
                  />
                  <p>Select Your Car Type</p>
                  <span>*</span>
                </label>
                <select onChange={getCarForm} name="cartype" id="car-select">
                  <option value="">Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 Moderline">BMW 320 Moderline</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>
              <div className="car-booking-form-input">
                <label htmlFor="car-pickup-location">
                  <FontAwesomeIcon
                    fontSize={15}
                    color="orangered"
                    icon={faLocationDot}
                  />
                  <p>Pick-up</p>
                  <span>*</span>
                </label>

                <select
                  onChange={getCarForm}
                  name="picklocation"
                  id="car-pickup-location"
                >
                  <option value="">Select Pick up location</option>
                  <option value="Belgrade">Belgrade</option>
                  <option value="Novi Sad">Novi Sad</option>
                  <option value="Nis">Nis</option>
                  <option value="Kragujevac">Kragujevac</option>
                  <option value="Subotica">Subotica</option>
                </select>
              </div>
              <div className="car-booking-form-input">
                <label htmlFor="car-dropoff-location">
                  <FontAwesomeIcon
                    fontSize={15}
                    color="orangered"
                    icon={faLocationDot}
                  />
                  <p>Drop-of</p>
                  <span>*</span>
                </label>

                <select
                  onChange={getCarForm}
                  name="droplocation"
                  id="car-dropoff-location"
                >
                  <option value="">Select drop off location</option>
                  <option value="Novi Sad">Novi Sad</option>
                  <option value="Belgrade">Belgrade</option>
                  <option value="Nis">Nis</option>
                  <option value="Kragujevac">Kragujevac</option>
                  <option value="Subotica">Subotica</option>
                </select>
              </div>
              <div className="car-booking-form-input">
                <label htmlFor="car-pickup-date">
                  <FontAwesomeIcon
                    fontSize={15}
                    color="orangered"
                    icon={faCalendarDays}
                  />
                  <p>Pick-up</p>
                  <span>*</span>
                </label>
                <input
                  onChange={getCarForm}
                  type="date"
                  name="pickdate"
                  id="car-pickup-date"
                />
              </div>
              <div className="car-booking-form-input">
                <label htmlFor="car-dropoff-date">
                  <FontAwesomeIcon
                    fontSize={15}
                    color="orangered"
                    icon={faCalendarDays}
                  />
                  <p>Drop-of</p>
                  <span>*</span>
                </label>
                <input
                  onChange={getCarForm}
                  type="date"
                  name="dropdate"
                  id="car-dropoff-date"
                />
              </div>
              <button
                className="car-booking-form-submit"
                onClick={CheckInputs}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className={`booking-modal ${showModal ? "show-modal" : null}`}>
        <div className="booking-modal-title">
          <h2>COMPLETE RESERVATION</h2>
          <FontAwesomeIcon
            onClick={() => {
              setShowModal(false);
              document.body.classList.remove("body-scroll");
            }}
            fontSize={25}
            color="white"
            className="modal-x"
            icon={faXmark}
          />
        </div>
        <div className="modal-content">
          <div className="booking-modal-message">
            <h2>
              {
                <FontAwesomeIcon
                  fontSize={24}
                  color="orangered"
                  icon={faCircleInfo}
                />
              }
              Upon completing this reservation enquiry, you will receive:
            </h2>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className="booking-modal-car-info">
            <div className="booking-modal-car-dates">
              <h5 className="booking-modal-car-dates-title">Location & Date</h5>
              <div className="booking-modal-car-info-dates">
                <h6>
                  <FontAwesomeIcon
                    fontSize={18}
                    color=" #777"
                    icon={faLocationDot}
                  />
                  Pick-Up Date & Time
                </h6>
                <span>
                  <p>{form.pickdate} /</p>
                  <input type="time" name="" id="" />
                </span>
              </div>
              <div className="booking-modal-car-info-dates">
                <h6>
                  <FontAwesomeIcon
                    fontSize={18}
                    color=" #777"
                    icon={faLocationDot}
                  />
                  Drop-Off Date & Time
                </h6>
                <span>
                  <p>{form.dropdate}/</p>
                  <input type="time" name="" id="" />
                </span>
              </div>
              <div className="booking-modal-car-info-dates">
                <h6>
                  <FontAwesomeIcon
                    fontSize={18}
                    color=" #777"
                    icon={faCalendarDays}
                  />
                  Pick-Up Location
                </h6>
                <span>
                  <p>{form.picklocation}</p>
                </span>
              </div>
              <div className="booking-modal-car-info-dates">
                <h6>
                  <FontAwesomeIcon
                    fontSize={18}
                    color=" #777"
                    icon={faCalendarDays}
                  />
                  Drop-Off Location
                </h6>
                <span>
                  <p>{form.droplocation}</p>
                </span>
              </div>
            </div>
            <div className="booking-modal-car-info-model">
              <h3>
                Car - <span>{form.cartype}</span>
              </h3>
              <img src={findCar?.src} alt="" />
            </div>
          </div>
        </div>
        <div className="booking-modal-form-div" action="">
          <h3 className="booking-modal-form-title">PERSONAL INFORMATION</h3>
          <form className="booking-modal-form" action="">
            <div className="booking-modal-form-inner">
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  First Name <p>*</p>
                </label>
                <input
                  placeholder="Ener your first name"
                  type="text"
                  name=""
                  idlabel=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  Last Name <p>*</p>
                </label>
                <input
                  placeholder="Enter your last name"
                  type="text"
                  name=""
                  id=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  Phone Number <p>*</p>
                </label>
                <input
                  placeholder="Enter your phone number"
                  type="tel"
                  name=""
                  id=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  Age <p>*</p>
                </label>
                <input placeholder="Your age" type="number" name="" id="" />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
            </div>
            <div className="booking-modal-form-inner2">
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  Email <p>*</p>
                </label>
                <input
                  placeholder="Enter your email address"
                  type="email"
                  name=""
                  id=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  Address <p>*</p>
                </label>
                <input
                  placeholder="Enter your street address"
                  type="text"
                  name=""
                  id=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
            </div>
            <div className="booking-modal-form-inner3">
              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  City <p>*</p>
                </label>
                <input
                  placeholder="Enter your city"
                  type="text"
                  name=""
                  id=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>

              <div className="booking-modal-form-inner-info">
                <label htmlFor="">
                  Zip Code <p>*</p>
                </label>
                <input
                  placeholder="Enter your zip code"
                  type="text"
                  name=""
                  id=""
                />
                <p className="booking-modal-form-inner-info-message">
                  This field is required
                </p>
              </div>
            </div>
            <div className="reserve-checkbox">
              <input type="checkbox" name="" id="" />
              <p>Please send me latest news and updates</p>
            </div>
          </form>
          <div className="reserve-button">
            <button
              onClick={() => {
                setShowMessage2(true);
                setShowModal(false);
                document.body.classList.remove("body-scroll");
              }}
              type="submit"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          document.body.classList.remove("body-scroll");
          setShowModal(false);
        }}
        className={`overlay ${showModal ? "show-overlay" : null}`}
      ></div>
      <section className="second-section">
        <div className="second-section-title">
          <h4>Plan your trip now</h4>
          <h1>Quick & easy car rental</h1>
        </div>
        <div className="second-section-content-wraper">
          <div ref={scrollToMoreInfo} className="second-section-content">
            <div className="second-section-content-info">
              <img src="/assets/mainpage/selectcar.png" alt="" />
              <h2>Select Car</h2>
              <p>
                We offers a big range of vehicles for all your driving needs. We
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
      <section className="third-section">
        <div className="third-section-title">
          <h3>Vehicle Models</h3>
          <h1>Our rental fleet</h1>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="third-section-content-wraper">
          <div className="third-section-content">
            <div className="third-section-car-models">
              <ul>
                <li
                  className={` ${
                    coloredFirstCarName ? "colored-car-firstname" : ""
                  } ${colored === "audi" ? "colored-car-name" : ""}`}
                  onClick={() => {
                    displayCar("Audi A1 S-Line");
                    setColored("audi");
                    setColoredFirstCarName(false);
                  }}
                >
                  Audi A1 S-Line
                </li>
                <li
                  className={colored === "golf" ? "colored-car-name" : null}
                  onClick={() => {
                    displayCar("VW Golf 6");
                    setColored("golf");
                    setColoredFirstCarName(false);
                  }}
                >
                  VW Golf 6
                </li>
                <li
                  className={colored === "toyota" ? "colored-car-name" : null}
                  onClick={() => {
                    displayCar("Toyota Camry");
                    setColored("toyota");
                    setColoredFirstCarName(false);
                  }}
                >
                  Toyota Camry
                </li>
                <li
                  className={colored === "bmw" ? "colored-car-name" : null}
                  onClick={() => {
                    displayCar("BMW 320 Moderline");
                    setColored("bmw");
                    setColoredFirstCarName(false);
                  }}
                >
                  BMW 320 ModernLine
                </li>
                <li
                  className={colored === "mercedes" ? "colored-car-name" : null}
                  onClick={() => {
                    displayCar("Mercedes-Benz GLK");
                    setColored("mercedes");
                    setColoredFirstCarName(false);
                  }}
                >
                  Mercedes-Benz GLK
                </li>
                <li
                  className={colored === "passat" ? "colored-car-name" : null}
                  onClick={() => {
                    displayCar("VW Passat CC");
                    setColored("passat");
                    setColoredFirstCarName(false);
                  }}
                >
                  VW Passat CC
                </li>
              </ul>
            </div>
            <div className="third-section-car-info-div">
              <img src={carDisplay.src ? carDisplay.src : cars[0].src} alt="" />
              <div className="third-section-car-info">
                <div className="third-section-car-info-top">
                  <h2>
                    $45 <span> / rent per day</span>
                  </h2>
                </div>
                <div className="third-section-car-info-middle-div">
                  <div className="third-section-car-info-middle">
                    <span>Model</span>
                    <span>
                      {carDisplay.model ? carDisplay.model : cars[0].model}{" "}
                    </span>
                  </div>
                  <div className="third-section-car-info-middle">
                    <span>Mark</span>
                    <span>
                      {carDisplay.mark ? carDisplay.mark : cars[0].mark}
                    </span>
                  </div>
                  <div className="third-section-car-info-middle">
                    <span>Year</span>
                    <span>
                      {carDisplay.year ? carDisplay.year : cars[0].year}
                    </span>
                  </div>
                  <div className="third-section-car-info-middle">
                    <span>Doors</span>
                    <span>
                      {carDisplay.doors ? carDisplay.doors : cars[0].doors}
                    </span>
                  </div>
                  <div className="third-section-car-info-middle">
                    <span>AC</span>
                    <span>{carDisplay.ac ? carDisplay.ac : cars[0].ac}</span>
                  </div>
                  <div className="third-section-car-info-middle">
                    <span>Transmission</span>
                    <span>
                      {carDisplay.transmission
                        ? carDisplay.transmission
                        : cars[0].transmission}
                    </span>
                  </div>
                  <div className="third-section-car-info-middle">
                    <span>Fuel</span>
                    <span>
                      {carDisplay.fuel ? carDisplay.fuel : cars[0].fuel}
                    </span>
                  </div>
                </div>
                <div className="third-section-car-info-bottom">
                  <Link to="booking" smooth={true} duration={100} offset={200}>
                    <button onClick={scrollToBooking}>RESERVE NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-section">
        <h1>Save big with our cheap car rental!</h1>
        <h3>
          Top Airports. Local Suppliers. <span>24/7 </span>
          Support
        </h3>
      </section>
      <section className="fourth-section">
        <div className="fourth-section-content-wraper">
          <div className="fourth-section-content">
            <img
              className="three-car"
              src="/assets/mainpage/threecar.png"
              alt=""
            />
            <div className="fourth-section-content-info">
              <div className="fourth-section-content-info-inner1">
                <h3>Why Choose Us</h3>

                <h1>Best valued deals you will ever find</h1>

                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <button>
                  Find Details{" "}
                  <FontAwesomeIcon color="white" icon={faAngleRight} />
                </button>
              </div>
              <div className="fourth-section-content-info-inner2">
                <div className="fourth-section-content-info-inner2-content">
                  <img src="/assets/mainpage/fourth-section-img1.png" alt="" />
                  <div className="fourth-section-content-info-inner2-content-info">
                    <h3>Cross Country Drive</h3>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="fourth-section-content-info-inner2-content">
                  <img src="/assets/mainpage/fourth-section-img2.png" alt="" />
                  <div className="fourth-section-content-info-inner2-content-info">
                    <h3>All Inclusive Pricing</h3>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="fourth-section-content-info-inner2-content">
                  <img src="/assets/mainpage/fourth-section-img3.png" alt="" />
                  <div className="fourth-section-content-info-inner2-content-info">
                    <h3>No Hidden Charges</h3>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="faq-section">
        <div className="faq-section-content-wraper">
          <div className="faq-section-title">
            <h4>FAQ</h4>
            <h1>Frequently Asked Questions</h1>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="faq-section-content">
            <ul>
              <li
                onClick={() => {
                  if (activeQuestion === 1) {
                    setActiveQuestion(null);
                  } else {
                    setActiveQuestion(1);
                  }
                }}
                className={`faq-question ${
                  activeQuestion === 1 ? "faq-active-question" : null
                }`}
              >
                1. What is special about comparing rental car deals?{" "}
                <FontAwesomeIcon color="" icon={faAngleDown} />
              </li>
              <div
                onClick={() => {
                  if (activeQuestion === 1) {
                    setActiveQuestion(null);
                  } else {
                    setActiveQuestion(1);
                  }
                }}
                className={`faq-question-answer ${
                  activeQuestion === 1 ? "faq-active-question-answer" : null
                }`}
              >
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </div>
              <li
                onClick={() => {
                  if (activeQuestion === 2) {
                    setActiveQuestion(null);
                  } else {
                    setActiveQuestion(2);
                  }
                }}
                className={`faq-question ${
                  activeQuestion === 2 ? "faq-active-question" : null
                }`}
              >
                2. How do I find the car rental deals?{" "}
                <FontAwesomeIcon color="" icon={faAngleDown} />
              </li>
              <div
                onClick={() => {
                  if (activeQuestion === 2) {
                    setActiveQuestion(null);
                  } else {
                    setActiveQuestion(2);
                  }
                }}
                className={`faq-question-answer ${
                  activeQuestion === 2 ? "faq-active-question-answer" : null
                }`}
              >
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </div>
              <li
                onClick={() => {
                  if (activeQuestion === 3) {
                    setActiveQuestion(null);
                  } else {
                    setActiveQuestion(3);
                  }
                }}
                className={`faq-question ${
                  activeQuestion === 3 ? "faq-active-question" : null
                }`}
              >
                3. How do I find such low rental car prices?{" "}
                <FontAwesomeIcon color="" icon={faAngleDown} />
              </li>
              <div
                onClick={() => {
                  if (activeQuestion === 3) {
                    setActiveQuestion(null);
                  } else {
                    setActiveQuestion(3);
                  }
                }}
                className={`faq-question-answer ${
                  activeQuestion === 3 ? "faq-active-question-answer" : null
                }`}
              >
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="download-section">
        <div className="download-section-content">
          <h1>Download our app to get most out of it</h1>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="download-ways">
            <img src="/assets/mainpage/play-store.svg" alt="" />
            <img src="/assets/mainpage/app-store.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <header>
      <div className="header-top">
        <Link to={"/car-rental"}>
          <img
            className="logo"
            src="/car-rental/assets/header/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header-middle">
        <ul>
          <li>
            <Link to={"/car-rental"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/car-rental/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="/car-rental/models">
              <a>Vehicle Modles</a>
            </Link>
          </li>
          <li>
            <Link to="/car-rental/testimonials">
              <a>Testimonials</a>
            </Link>
          </li>
          <li>
            <Link to="/car-rental/team">
              <a>Our Team</a>
            </Link>
          </li>
          <li>
            <Link to="/car-rental/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <a className="navbar-sign-in">Sign In</a>
        <a className="navbar-register">Register</a>
      </div>
      <FontAwesomeIcon
        onClick={() => {
          setActiveNav(true);
        }}
        className="burger"
        icon={faBars}
      />
      {/* <div className="navbar"> */}
      <ul className={`navbar ${activeNav ? "active-navbar" : null}`}>
        <FontAwesomeIcon
          onClick={() => {
            setActiveNav(false);
          }}
          className="close-icon"
          icon={faXmark}
        />
        <Link
          onClick={() => {
            setActiveNav(false);
          }}
          className="link"
          to={"/car-rental"}
        >
          <li>Home</li>
        </Link>
        <Link
          onClick={() => {
            setActiveNav(false);
          }}
          className="link"
          to="/car-rental/about"
        >
          <li>About</li>
        </Link>
        <Link
          onClick={() => {
            setActiveNav(false);
          }}
          className="link"
          to="/car-rental/models"
        >
          <li>Vehicle Modles</li>
        </Link>
        <Link
          onClick={() => {
            setActiveNav(false);
          }}
          className="link"
          to="/car-rental/testimonials"
        >
          <li>Testimonials</li>
        </Link>
        <Link
          onClick={() => {
            setActiveNav(false);
          }}
          className="link"
          to="/car-rental/team"
        >
          <li>Our Team</li>
        </Link>
        <Link
          onClick={() => {
            setActiveNav(false);
          }}
          className="link"
          to="/car-rental/contact"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}

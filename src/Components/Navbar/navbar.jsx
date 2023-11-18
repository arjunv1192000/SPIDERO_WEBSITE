import React, { useState, useEffect } from "react";
import logo from "../assets/Client/companylogo.png";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine if the header background should be white
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const goBack = () => {
    window.history.back();
  };
  return (
    <header className={isScrolled ? "header-scroll" : "header"}>
      <a href="/" className="logo">
        <img src={logo} alt="profile" width="3rem" height="1.5rem" />
      </a>
      <input type="checkbox" id="menu-bar" />
      <label for="menu-bar">
        <b>&#9776;</b>
      </label>
     
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <a className="nav-link" href="expertise">
              Expertise<i className="bx bx-chevron-down arrow"></i>
            </a>
            <ul>
              <li className="consulting-nav">
                <a href="consulting">Consulting</a>
              </li>
              <li>
                <a href="custom">Custom Software Development</a>
              </li>
              <li>
                <a href="webdevelopment">Web Development</a>
              </li>
              <li>
                <a href="webdesign">Web Design</a>
              </li>
              <li>
                <a href="mobile">Mobile App Development</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link" href="ourprocess">
              Our Process
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Company<i className="bx bx-chevron-down arrow"></i>
            </a>
            <ul>
              <li className="about-nav">
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="careers">Careers</a>
              </li>
              
              <li>
                <a href="contact">Contact Us</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav-btn">
          <a href="/contact">
            <button className="navbtn">CONTACT US</button>
          </a>
        </div>
      </nav>
    </header>
    
  );
};

export default Navbar;

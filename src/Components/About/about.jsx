import React from "react";
import "./about.css";
import AOS from "aos";
import about1 from "../assets/office@2x.jpg";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import foot1 from "../assets/us-office@2x (1).jpg";
import { Link } from "react-scroll";

const About = () => {
  AOS.init(); // Initialize AOS
  return (
    <section id="about">
      <div className="nine">
        <div className="spi">
          <h1>It’s always about YOU at Spidero Technology!</h1>
        </div>
        <div class="container-about">
          <img
            src={about1}
            alt="Nature"
            width="65%"
            height="800px"
            className="nature"
          />
          <div class="text-block">
            <div className="row">
              <div className="column">
                <div class="item" data-aos="flip up" data-aos-duration="1000">
                  <b>
                    <b className="boo-about">3 + </b>
                  </b>
                  <br />
                  <span classname="bo-about">years in the business</span>
                </div>
              </div>
              <div className="column">
                <div class="item" data-aos="flip up" data-aos-duration="1000">
                  <b>
                    <b className="boo-about">100 +</b>
                  </b>
                  <br />
                  <span classname="bo-about">solutions delivered</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div class="item" data-aos="flip up" data-aos-duration="1000">
                  <b>
                    <b className="boo-about">150+</b>
                  </b>
                  <br />
                  <span classname="bo-about">global digital experts</span>
                </div>
              </div>
              <div className="column">
                <div class="item" data-aos="flip up" data-aos-duration="1000">
                  <b>
                    <b className="boo-about">$50M+</b>
                  </b>
                  <br />
                  <span classname="bo-about">Business delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="split-about">
          <div className="left-about">
            <div className="our-story">
              <h1>Our Story</h1>
              <p>
                Unified Infotech puts together a bunch of passionate minds to
                transform your visions into reality imparting an awesome digital
                experience for your users. From website design, development,
                scalable mobile apps to SaaS platforms, the solution we engineer
                accelerate efficiency and fuel growth for our clients.
              </p>
              <p>
                From 2010, we are committed to achieving and pushing the level
                of performance at all times. Leveraging the power of technology,
                we deliver end-to-end solutions for multi-million dollar funded
                start-ups to small and medium enterprises. Art and culture
                inspire us too, and our office presence at New York and Kolkata
                is a true reflection.
              </p>
            </div>
          </div>
          <div className="right-about"></div>
        </div>
        <div className="our-ethos">
          <h1>Our Ethos</h1>
        </div>
        <div className="our-ethos-about">
          <div className="row">
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>
                    Clients are friends. Each of their problems are ours.
                  </span>
                </div>
              </div>
            </div>
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>
                    We don’t assume. We arrive at solutions through careful
                    inferences.
                  </span>
                </div>
              </div>
            </div>
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>
                    Ownership and accountability are our everyday practice.
                  </span>
                </div>
              </div>
            </div>
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>100+ digital talents care about your project.</span>
                </div>
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="row">
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>
                    Expect design thinking, creativity and problem solving.
                  </span>
                </div>
              </div>
            </div>
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>We know how to play digital for brand value.</span>
                </div>
              </div>
            </div>
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>We're a consumer engagement one-stop shop.</span>
                </div>
              </div>
            </div>
            <div className="column-about">
              <div class="item-our" data-aos="flip up" data-aos-duration="1000">
                <div className="head-about">
                  <span>
                    We've got an eye for functional design and impactful
                    content.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="splitc-about">
          <div className="leftc-about">
            <div className="title-div">
              <span className="title-address-about">Like what you see?</span>
              <br />
              <span className="title-address1-about">
                {" "}
                Let’s start a conversation.
              </span>
            </div>
            <a href="/contact">
              <div className="get-button">
                <button className="btn">
                  <b>
                    <b>GET IN TOUCH</b>
                  </b>
                </button>
              </div>
            </a>
            <div className="address-about">
              <span>&nbsp;&nbsp;Visit us at,</span>
              <div className="row">
                <div className="column-address">
                  <img src={web5} alt="profile" className="imgweb-address1" />{" "}
                </div>
                <div className="column-address">
                  <span className="ind-address">
                    {" "}
                    2 Westbourne Crescent, London, W2 3DB
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="column-address">
                  <img src={web4} alt="profile" className="imgweb-address" />{" "}
                </div>
                <div className="column-address">
                  <span className="ind-address">
                    {" "}
                    Ennakkad Ulunthy Rd, Ennakkad Gramam, Kerala, 689624
                  </span>
                </div>
              </div>
            </div>
            <div className="social-links">
            <i className="bx bxl-twitter link"></i>
              <i class="bx bxl-linkedin link"></i>
            </div>
          </div>
          <div className="rightc-about">
            <img
              src={foot1}
              alt="profile"
              width="100%"
              height="790px"
              className="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

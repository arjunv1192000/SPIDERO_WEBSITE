import React from "react";
import "./expertise.css";
import { Link } from "react-scroll";
import AOS from "aos";
import foot from "../assets/footer-banner1_2x.webp";
import consult from "../assets/Service-Page-Consulting-Image@2x.jpg";
import consult1 from "../assets/Service-Page-Web-Development-Image@2x.jpg";
import consult2 from "../assets/Service-Page-Mobile-Development-Image@2x.jpg";
import consult3 from "../assets/Service-Page-eCommerce-Image@2x.jpg";
import consult4 from "../assets/Service-Page-Blockchain-Image@2x.jpg";
import consult5 from "../assets/Service-Page-Custom-Software-Image@2x.jpg";
import consult6 from "../assets/Service-Page-Technology-Image@2x.jpg";
import consult7 from "../assets/mobile-app-nyc-banner@2x.jpg";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import ui1 from "../assets/ux-p1@2x.jpg";
import ui2 from "../assets/ux-p2@2x.jpg";
import ui3 from "../assets/ux-p3@2x.jpg";
import ui4 from "../assets/ux-p4@2x.jpg";
import ui5 from "../assets/ux-p5@2x.jpg";
import ui6 from "../assets/ux-p6@2x.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../Footer/footer";

const expertise = () => {
  AOS.init();
  return (
    <section id="exper1">
      <div className="tnd">
        <span className="ab-expertise">
          <h1>
            <b>OUR SERVICES</b>
          </h1>
        </span>
        <span className="abex">
          Startup or a Fortune 500 company, Unified Infotech will act as your
          consultant and development partners to transform your idea into
          success. Take advantage of our full-service capabilities.
        </span>
        <div className="split">
          <div className="leftexper">
            <div className="fade-in-image">
              <img src={consult} alt="profile" width="60%" className="exper1" />
            </div>
          </div>
          <div className="rightexper">
            <span className="con1">
              <h1>
                Consulting
              </h1>
            </span>
            <div className="stitle1">
              <p>
                {" "}
                We can help your idea get visibility with putting up the right
                development and design strategy in this crowded market with our
                consulting expertise.
              </p>
              <ul class="custom-list">
                <li class="expertise">
                  <a className="ent" href="enterprise">
                    <span class="arrow">&#10148;</span> Expertise{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="startup">
                    <span class="arrow">&#10148;</span> Start-up{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="split">
          <div className="leftexper">
            <span className="con1">
              &nbsp;
              <h1>
                Web
              </h1>
            </span>
            <div className="stitle1">
              <p>
                {" "}
                We understand the science of enhancing user experience with a
                combination of human-centric approach and development ingenuity.
              </p>
              <ul class="custom-list">
                <li class="expertise">
                  <a className="ent" href="webappdevelopment">
                    <span class="arrow">&#10148;</span> Web App Development{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="webdesign">
                    <span class="arrow">&#10148;</span> Web Design{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="progressivewebapp">
                    <span class="arrow">&#10148;</span> Progressive Web App{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="uxuidesign">
                    <span class="arrow">&#10148;</span> UI UX Design{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rightexper">
            <div className="fade-in-image">
              <img
                src={consult1}
                alt="profile"
                width="80%"
                className="exper2"
              />
            </div>
          </div>
        </div>
        <div className="split">
          <div className="leftexper">
            <div className="fade-in-image">
              <img
                src={consult2}
                alt="profile"
                width="80%"
                className="exper3"
              />
            </div>
          </div>
          <div className="rightexper">
            <span className="con1">
              <h1>
                Mobile Apps
              </h1>
            </span>
            <div className="stitle1">
              <p>
                {" "}
                Leveraging mobility to bring business stability and visibility
                for you, we make your product next gen ready with the best of
                technology.
              </p>
              <ul class="custom-list">
                <li class="expertise">
                  <a className="ent" href="iosappdevelopment">
                    <span class="arrow">&#10148;</span> IOS App Development{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="androidappdevelopment">
                    <span class="arrow">&#10148;</span> Android App Development{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="reactnativeappdevelopment">
                    <span class="arrow">&#10148;</span> React Native App
                    Development{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="enterprisemobility">
                    <span class="arrow">&#10148;</span> Enterprise Mobility{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="splitexpr">
          <div className="leftexper">
            <div className="fade-in-image">
              <img
                src={consult3}
                alt="profile"
                width="60%"
                className="exper2"
              />
              <span className="con1">
                <h1>
                  e-Commerce
                </h1>
              </span>
              <div className="stitle1">
                <p>
                  {" "}
                  Make your business online market ready with our distinctive
                  ecommerce web and app development solutions.
                </p>
                &nbsp;&nbsp;&nbsp;
                <ul class="custom-list">
                  <li class="expertise">
                    <a className="ent" href="how we do it">
                      <span class="arrow">&#10148;</span> How we do it{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rightexper">
            <div className="fade-in-image">
              <img
                src={consult4}
                alt="profile"
                width="70%"
                className="exper3"
              />
              <span className="con1">
                <h1>
                  Blockchain development
                </h1>
              </span>
              <div className="stitle1">
                <p>
                  {" "}
                  We take pride in building secure and powerful Blockchain
                  applications- from smart contracts to cryptocurrencies.
                </p>
                <ul class="custom-list">
                  <li class="expertise">
                    <a className="ent" href="learn more">
                      <span class="arrow">&#10148;</span> Learn more{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="splitexpr1">
          <div className="leftexper1">
            <span className="con1">
              &nbsp;&nbsp;
              <h1>
                <u>Custom Software Development</u>
              </h1>
            </span>
            <div className="stitle1">
              <p>
                {" "}
                Web or mobile, we have devised the best custom software
                development solution following agile methodology.
              </p>
              <ul class="custom-list">
                <li class="expertise">
                  <a className="ent" href="elearning">
                    <span class="arrow">&#10148;</span> eLearning{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rightexper1">
            <div className="fade-in-image">
              <img
                src={consult5}
                alt="profile"
                width="80%"
                className="exper2"
              />
            </div>
          </div>
        </div>
        <div className="split">
          <div className="leftexper">
            <div className="fade-in-image">
              <img
                src={consult6}
                alt="profile"
                width="80%"
                className="exper2"
              />
            </div>
          </div>
          <div className="rightexper">
            <span className="con1">
              <h1>
                <u>Technology</u>
              </h1>
            </span>
            <div className="stitle1">
              <p>
                {" "}
                Check out what leading technologies we work on to create
                elegant, robust and scalable application to move your business
                forward.
              </p>
              <ul class="custom-list">
                <li class="expertise">
                  <a className="ent" href="laravel">
                    <span class="arrow">&#10148;</span> Laravel{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="nodejs">
                    <span class="arrow">&#10148;</span> Node.Js{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="php">
                    <span class="arrow">&#10148;</span> PHP{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="angularjs">
                    <span class="arrow">&#10148;</span> Angularjs{" "}
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="magento">
                    <span class="arrow">&#10148;</span> Mangentro
                  </a>
                </li>
                <li class="expertise">
                  <a className="ent" href="webdevelopment">
                    <span class="arrow">&#10148;</span> Web Developers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={consult7} alt="profile" width="100%" height="700px" />
          <div className="white-background">
            <div className="imagexp"></div>
          </div>
        </div>
        <div className="blak">
          <div class="grid2x2web">
            <div className="blak1">
              <span>Pristine touch in every pixel</span>
            </div>
            <div className="row-pro">
              <div className="column">
                <div class="item3" data-aos="flip up" data-aos-duration="1000">
                  <img src={ui1} class="ab3" alt="profile" />
                  <div className="ab4">
                    <p>Video Streaming App</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div class="item3" data-aos="flip up" data-aos-duration="1000">
                  <img src={ui2} class="ab3" alt="profile" />
                  <div className="ab4">
                    <p>Events & Activity App</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div class="item3" data-aos="flip up" data-aos-duration="1000">
                  <img src={ui3} class="ab3" alt="profile" />
                  <div className="ab4">
                    <p>Food Pick-up App</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-pro">
              <div className="column">
                <div class="item3" data-aos="flip up" data-aos-duration="1000">
                  <img src={ui4} class="ab3" alt="profile" />
                  <div className="ab4">
                    <p>Digital Marketing Website</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div class="item3" data-aos="flip up" data-aos-duration="1000">
                  <img src={ui5} class="ab3" alt="profile" />
                  <div className="ab4">
                    <p>Social Media App</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div class="item3" data-aos="flip up" data-aos-duration="1000">
                  <img src={ui6} class="ab3" alt="profile" />
                  <div className="ab4">
                    <p>Learning App</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="but">
              <Link>
                <button className="btn" onClick>
                  <b>
                    <b>VIEW GALLERY</b>
                  </b>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="people1">
          <h4 className="peplehead1">From people like you</h4>
          <div className="swipe">
            <Swiper
              effect="coverflow"
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="peoplediv1">
                  <p className="peoplecontnet1">
                    Enterprise Web Application Development for a Fortune 50
                    Media Conglomerate
                  </p>
                  <h1 className="peoplename1">
                    Dan Milczarski Head of Development, CQ Fluency
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="peoplediv1">
                  <p className="peoplecontnet1">
                    {'"'} Enterprise Web Application Development for a Fortune
                    50 Media Conglomerate
                  </p>
                  <h1 className="peoplename1">
                    Dan Milczarski Head of Development, CQ Fluency
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="peoplediv1">
                  <p className="peoplecontnet1">
                    Enterprise Web Application Development for a Fortune 50
                    Media Conglomerate
                  </p>
                  <h1 className="peoplename1">
                    Dan Milczarski Head of Development, CQ Fluency
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="split-expertise">
          <div className="leftc">
            <div className="title-div">
              <span className="title-address">Like what you see?</span>
              <br />
              <span className="title-address1">
                {" "}
                Let’s start a conversation.
              </span>
            </div>
            <div className="get-button">
              <a href="/contact">
                <button className="btn">
                  <b>
                    <b>GET IN TOUCH</b>
                  </b>
                </button>
              </a>
            </div>
            <div className="address">
              <span>&nbsp;&nbsp;Visit us at,</span>
              <div className="row">
                <div className="column">
                  <img src={web5} alt="profile" className="imgweb-address1" />{" "}
                </div>
                <div className="column">
                  <span className="ind-address">
                    {" "}
                    2 Westbourne Crescent, London, W2 3DB
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <img src={web4} alt="profile" className="imgweb-address" />{" "}
                </div>
                <div className="column">
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
          <div className="rightc">
            <img src={foot} alt="profile" width="100%" height="790px" />
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  );
};

export default expertise;

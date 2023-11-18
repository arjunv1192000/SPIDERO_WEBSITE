import React, { useState } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import acc from "../assets/acc.png";
import qu from "../assets/Qua.png";
import proa from "../assets/Pr.png";
import agi from "../assets/Agi.png";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import slidea from "../assets/Slideimage/slideA.jpg";
import slideb from "../assets/Slideimage/slideB.jpg";
import slidec from "../assets/Slideimage/slideC.jpg";
import slided from "../assets/Slideimage/slideD.jpg";
import foot from "../assets/footer-banner1_2x.webp";
import client1 from "../assets/Client/client1.png"
import client2 from "../assets/Client/client2.png"
import client3 from "../assets/Client/client3.png"
import client4 from "../assets/Client/client4.png"
import client5 from "../assets/Client/client5.png"
import client6 from "../assets/Client/client5.png"
import client7 from "../assets/Client/client7.png"
import "./intro.css";
import video from "../assets/homevideo.mp4";
import FlagSelect from "react-flags-select";
import emailjs from '@emailjs/browser';
import dan from "../assets/dan.png";
import Footer from "../Footer/footer";

const Intro = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
 

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
   
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullname.length === 0 || email.length === 0 || phone.length === 0 || message.length === 0) {
      alert("Please fill in all fields!");
      return;
    }

    const templateParams = {
      from_name: fullname,
      email,
      phone,
      message,
      file,
    };
    console.log(templateParams,"hdhdh")

    emailjs.send('service_77vwfo5', 'template_vflpuqd', templateParams, 'vV-8CGzjqVUojOxcq')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        alert('Error sending message. Please try again later.');
      });
  };
  AOS.init(); 

  return (
    <>
      <section id="intro">
        <div className="introContent">
          <div className="bgContainer" style={{ position: "relative" }}>
            <video src={video} autoPlay loop muted />
            <div className="intro-content">
              <h2>
                Your technology partner for innovative and impactful digital
                solutions
              </h2>
              &nbsp;&nbsp;&nbsp;
              <div className="bfooter">
                <button className="btn">VIEW CASE STUDIES</button>
                &nbsp;&nbsp;&nbsp;
                <a href="/contact">
                  <button className="btn1">CONTACT US</button>
                </a>
              </div>
            </div>
          </div>
          <div className="our1">
            <span className="our-work1">
              <b>Our Clients</b>
            </span>
          </div>
          <div className="client">
            <div className="client-container">
              <img  src={client1} alt="Client 1" />
              <img src={client2} alt="Client 2" />
              <img src={client3} alt="Client 3" />
              <img src={client4} alt="Client 1" />
              <img src={client7} alt="Client 3" />
              <img src={client2} alt="Client 2" />
              <img src={client3} alt="Client 3" />
              <img  src={client1} alt="Client 1" />
              <img src={client2} alt="Client 2" />
              <img src={client3} alt="Client 3" />
              <img src={client4} alt="Client 1" />
              <img src={client7} alt="Client 3" />
              <img src={client2} alt="Client 2" />
              <img src={client3} alt="Client 3" />
            </div>
          </div>
          <div className="split">
            <div className="left">
              <h1 className="prop">Our Value Proposition</h1>
              <p className="p11">
                In this post-pandemic world, as continuous disruption
                unfolds,businesses need expert guidance and proven talent for
                their web development priorities.
              </p>
              <p className="p12">
                As a smart and agile software development agency, we custom
                engineer sophisticated digital solutions, that enable our
                clients to stay ahead of the game, and thrive in this
                ever-changing digital landscape.
              </p>
            </div>
            <div className="right">
              <div class="grid2x2">
                <div className="row">
                  <div className="column">
                    <div
                      class="item"
                      data-aos="flip up"
                      data-aos-duration="1000"
                    >
                      <img src={acc} class="ab-image" alt="profile" />
                      <p>Accountability</p>
                    </div>
                  </div>
                  <div className="column">
                    <div
                      class="item"
                      data-aos="flip up"
                      data-aos-duration="1000"
                    >
                      <img src={qu} class="ab-image" alt="profile" />
                      <p>Quality</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div
                      class="item"
                      data-aos="flip up"
                      data-aos-duration="1000"
                    >
                      <img src={proa} class="ab-image" alt="profile" />
                      <p>Proactivity</p>
                    </div>
                  </div>
                  <div className="column">
                    <div
                      class="item"
                      data-aos="flip up"
                      data-aos-duration="1000"
                    >
                      <img src={agi} class="ab-image" alt="profile" />
                      <p>Agility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip">
            <div class="row">
              <div className="column">
                <div class="item1" data-aos="flip-up" data-aos-duration="1000">
                  <b>
                    <b className="boo">3 + years</b>
                  </b>
                  <br />
                  <span classname="bo">in the business</span>
                </div>
              </div>
              <div className="column">
                <div class="item1" data-aos="flip-up" data-aos-duration="1000">
                  <b>
                    <b className="boo">98%</b>
                  </b>
                  <br />
                  <span classname="bo">client retention</span>
                </div>
              </div>
              <div className="column">
                <div class="item1" data-aos="flip-up" data-aos-duration="1000">
                  <b>
                    <b className="boo">100+</b>
                  </b>
                  <br />
                  <span classname="bo">solution delivered</span>
                </div>
              </div>
              <div className="column">
                <div class="item1" data-aos="flip-up" data-aos-duration="1000">
                  <b>
                    <b className="boo">10x</b>
                  </b>
                  <br />
                  <span classname="bo">revenue growth in 2 years</span>
                </div>
              </div>
            </div>
          </div>
          <div class="button-container">
            <div className="button">
              <a href="#flips1">
                <button className="bt">SHARE YOUR PROJECT REQUIREMENTS</button>
              </a>
            </div>
          </div>

          <div className="our">
            <span className="our-work">
              <b>Our Work does the talking...</b>
            </span>
          </div>
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
                <div className="slide-content">
                  <div className="lefta">
                    <img src={slidea} alt="profile" className="img1" />
                  </div>
                  <div className="righta">
                    <div className="grid1">
                      <div className="mtitle">
                        <p>
                          <u> Boards & Beyond</u>
                        </p>
                      </div>
                      <div className="titlea">
                        <h2>
                          Application Modernization for an eLearning Platform
                          acquired by McGraw Hill Education
                        </h2>
                      </div>
                      <div className="stitle">
                        <p>
                          We partnered with the client to transform their dated
                          legacy system into a modern-day eLearning solution
                          with advanced capabilities and a seamless user
                          experience. The solution recorded 2x sales and 3x user
                          engagement in just 1 month post launch and continues
                          to grow rapidly.
                        </p>
                      </div>
                      <div className="bfooter1">
                        <Link>
                          <a href="/contact">
                            <button className="btn-contact">
                              <b>
                                <b>CONTACT US</b>
                              </b>
                            </button>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <button className="btn-view">
                            <b>
                              <b>VIEW DETAILS</b>
                            </b>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <div className="lefta">
                    <img src={slideb} alt="profile" className="img1" />
                  </div>
                  <div className="righta">
                    <div className="grid1">
                      <div className="mtitle">
                        <p>
                          <u>Media</u>
                        </p>
                      </div>
                      <div className="titlea">
                        <h2>
                          Enterprise Web Application Development for a Fortune
                          50 Media Conglomerate{" "}
                        </h2>
                      </div>
                      <div className="stitle">
                        <p>
                          We engineered a robust web application for the
                          client’s marketing team that enabled them to better
                          manage and monitortheir blue-chip advertising
                          customers.
                        </p>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <div className="bfooter1">
                        <Link>
                          <a href="/contact">
                            <button className="btn-contact">
                              <b>
                                <b>CONTACT US</b>
                              </b>
                            </button>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <button className="btn-view">
                            <b>
                              <b>VIEW DETAILS</b>
                            </b>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <div className="lefta">
                    <img src={slidec} alt="profile" className="img1" />
                  </div>
                  <div className="righta">
                    <div className="grid1">
                      <div className="mtitle">
                        <p>
                          <u>Openreel</u>
                        </p>
                      </div>
                      <div className="titlea">
                        <h2>
                          Product Engineering For a Venture-Funded SaaS Product
                          Company with Patented Technology
                        </h2>
                      </div>
                      <div className="stitle">
                        <p>
                          From an idea on a document, to now this Seed Funded
                          SaaS business, we are the proud end-to-end technology
                          partner and continue to scale the product.
                        </p>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <div className="bfooter1">
                        <Link>
                          <a href="/contact">
                            <button className="btn-contact">
                              <b>
                                <b>CONTACT US</b>
                              </b>
                            </button>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <button className="btn-view">
                            <b>
                              <b>VIEW DETAILS</b>
                            </b>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <div className="lefta">
                    <img src={slided} alt="profile" className="img1" />
                  </div>
                  <div className="righta">
                    <div className="grid1">
                      <div className="mtitle">
                        <p>
                          <u>Pharmaceutical</u>
                        </p>
                      </div>
                      <div className="titlea">
                        <h2>
                          Enterprise Software Development & Scaling For a Global
                          Pharmaceutical Leader
                        </h2>
                      </div>
                      <div className="stitle">
                        <p>
                          Unified Infotech designed and engineered a highly
                          sophisticated and secured Software-as-a-Service (SaaS)
                          application that seamlessly enables end-users to
                          develop new drug formulations supported by an
                          intelligent recommendation and validation engine.
                        </p>
                      </div>
                      <div className="bfooter1">
                        <Link>
                          <a href="/contact">
                            <button className="btn-contact">
                              <b>
                                <b>CONTACT US</b>
                              </b>
                            </button>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <button className="btn-view">
                            <b>
                              <b>VIEW DETAILS</b>
                            </b>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <section id="flips1">
            <div className="splitb">
              <div className="leftb">
              <div className="card-contactintro">
                <span>
                  <img src={dan} alt="profile" className="circular-imageintro" />
                  <span className="start-quoteintro"></span>
                <br />
                <span className="card-contact-paraintro">
                  Spidero Technology worked like a true partner, & delivered a
                  top-notch software product that significantly elevated our
                  customer experience.
                </span>
                <br />
                &nbsp;
                <br />
                  <strong className="contactheadingintro">Dan Milczarski</strong>{" "}
                </span>
                <br />
                <span className="contact-head-cardintro">
                  Head of Development, CQ Fluency
                </span>
              </div>
              </div>
              <div className="rightb">
                <div className="contact-box">
                  <form
                    onSubmit={handleSubmit}
                  >
                    <span className="con">
                      <h3>Connect With Us</h3>
                    </span>
                    <div className="input-box">
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        onChange={(e) => setFullname(e.target.value)}
                        class="custom-text-color"
                        required
                      />
                      <span className="con2">Full Name</span>
                    </div>
                    <div className="input-box">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        class="custom-text-color"
                        required
                      />
                      <span className="con2">E-mail</span>
                    </div>
                    <div className="input-box">
                     
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        className="custom-text-color"
                        required
                      />
                      <span className="con2">Phone Number *</span>
                    </div>

                    <div className="input-box">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        class="custom-text-color"
                      ></textarea>
                      <span className="con2">Type your Message</span>
                    </div>
                    <div className="checkupload">
                      <button
                        formaction="/action_page.php"
                        type="button"
                        class="ch1"
                      >
                        <span class="icon">
                          <FontAwesomeIcon
                            icon={faUpload}
                            style={{ color: "#ebedef" }}
                          />{" "}
                        </span>

                        <label for="file-upload">Upload File</label>
                        <input
                          type="file"
                          id="file-upload"
                          name="file-upload"
                        />
                      </button>
                    </div>
                    <input
                      type="checkbox"
                      id="privacy-policy"
                      name="privacy-policy"
                      className="privacy check"
                      required
                    />
                    <label for="privacy-policy" className="policy-black">
                      Tick to receive a newsletter by email. Read our full{" "}
                      <a href="/">privacy policy.</a>
                    </label>
                    <div className="btn3-submit">
                      <button
                        className="btn3"
                        type="submit"
                        id="submit"
                        value="Register"
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <div className="splitc">
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
                  <button className="btn3">
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
                    <img src={web5} alt="profile" className="imgweb-address" />{" "}
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
    </>
  );
};

export default Intro;

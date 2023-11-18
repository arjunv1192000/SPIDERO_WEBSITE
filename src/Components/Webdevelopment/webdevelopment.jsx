import React, { useState, useEffect } from "react";
import "./webdevelopment.css";
import { Link } from "react-scroll";
import AOS from "aos";
import web1 from "../assets/houselabs-mobile@2x.png";
import web2 from "../assets/joyscape-mobile@2x.png";
import web3 from "../assets/londonrag-mobile@2x.png";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import foot from "../assets/footer-banner1_2x.webp";
import backimage from "../assets/wdc-banner-new@2x.jpg";
import emailjs from "@emailjs/browser";
import dan from "../assets/dan.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../Footer/footer";

const Webdevelopment = () => {
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

    if (
      fullname.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
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
    console.log(templateParams, "hdhdh");

    emailjs
      .send(
        "service_77vwfo5",
        "template_vflpuqd",
        templateParams,
        "vV-8CGzjqVUojOxcq"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        alert("Error sending message. Please try again later.");
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timelinepage li");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  AOS.init();
  return (
    <section id="wedb">
      <div className="six">
        <div className="web1">
          <img src={backimage} className="back-image" />
          <div className="intro-content-webdevelopment">
            <h4>WEB DEVELOPMENT</h4>
            <h1 className="herohead">
              We devise solutions to maximize your business efficiency.
            </h1>
            <div className="but1">
              <a href="#sucess-stories-section">
                <button className="btn-web">OUR SUCCESS STORIES</button>
              </a>
            </div>
          </div>
        </div>
        <div className="deve">
          <div className="splitflip">
            <div className="leftflip">
              <h1>Your development partner. We stand for excellence!</h1>
              <p>
                Over the past decade, we have mastered the art of creating
                websites that innovate, engage and deliver results through a
                combination of human-centric approach and development ingenuity.
                Hire top web developers to make your dream a reality.
              </p>
              <p>
                Be it custom{" "}
                <u>
                  Web applications development and SaaS platforms, ecommerce
                  website development{" "}
                </u>
                or informative lead generation sites, our value proposition,
                when it comes to web development, is to build solutions by
                prioritizing the context and needs of the end-users, ensuring
                meaningful results. Enterprise or small business web
                development, we strive to deliver remarkable results being an
                award winning web development company, with a presence in the
                USA.
              </p>
            </div>
            <div className="rightflip">
              <div className="rowaos">
                <div className="columnaos">
                  <div
                    className="item5flip"
                    data-aos="flip up"
                    data-aos-duration="1000"
                  >
                    <h1 className="hun">100+</h1>
                    <span className="sol">Solutions delivered</span>
                  </div>
                </div>
                <div className="columnaos">
                  <div
                    className="item5flip"
                    data-aos="flip up"
                    data-aos-duration="1000"
                  >
                    <h1 className="hun">150+</h1>
                    <span className="sol">Technology experts</span>
                  </div>
                </div>
                <div className="columnaos">
                  <div
                    className="item5flip-web"
                    data-aos="flip up"
                    data-aos-duration="1000"
                  >
                    <h1 className="hun">$50M+</h1>
                    <span className="sol">Business delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="sucess-stories-section">
          <div className="splitreal">
            <div className="leftreal">
              <div className="fade-in-image">
                <img
                  src={web1}
                  alt="profile"
                  className="web-development-images"
                />
              </div>
            </div>
            <div className="rightreal">
              <span className="real">Realestate</span>
              <br />
              <p className="real1">management</p>
              <br />
              <span className="real2">
                <u>Houselab</u>
              </span>
              <p className="real3">
                A property management platform for architects, agents, brokers
                and homeowners.
              </p>
              <div className="but1in">
                <Link>
                  <button className="btn">
                    <b>
                      <b>VIEW CASE STUDY</b>
                    </b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="splitreal1">
            <div className="leftreal">
              <div className="fade-in-image">
                <img
                  src={web2}
                  alt="profile"
                  className="web-development-images"
                />
              </div>
            </div>
            <div className="rightreal">
              <span className="real">Revamping travel</span>
              <br />
              <span className="real1">experience</span>
              <br />
              <p className="real2">
                <u>Joyscape</u>
              </p>
              <p className="real3">
                Created a platform for Joyscape to help travellers choose fun
                activities around Singapore.
              </p>
              <div className="but1in">
                <Link>
                  <button className="btn">
                    <b>
                      <b>VIEW CASE STUDY</b>
                    </b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="splitreal2">
            <div className="leftreal">
              <div className="fade-in-image">
                <img
                  src={web3}
                  alt="profile"
                  className="web-development-images"
                />
              </div>
            </div>
            <div className="rightreal">
              <span className="real">Redefining shopping</span>
              <br />
              <span className="real1">experience</span>
              <br />
              <p className="real2">
                <u>LondonRag</u>
              </p>
              <p className="real3">
                Engineered this ecommerce platform to make shopping experience
                easier for millennials.
              </p>
              <div className="but1in">
                <a href="/contact">
                  <button className="btn">
                    <b>
                      <b>BUILD SIMILAR</b>
                    </b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="our-main">
          <div className="drive4tech">
            <span>
              <u>Our Technology Stack</u>
            </span>
          </div>
          <div className="rowtec-technology">
            <span className="sub6in">Back-end:</span>
            <span className="larrub">Laravel</span>
            <span className="larrub1">Ruby</span>
            <span className="larrub1">Python</span>
            <span className="larrub1">Node.JS</span>
            <span className="larrub1">PHP</span>
            <span className="larrub1in">Java</span>
          </div>
          <div className="rowtec-technology">
            <span className="sub6in">Front-end:</span>
            <span className="larrub">AngularJS</span>
            <span className="larrub1">ReactJS</span>
            <span className="larrub1">VueJS</span>
            <span className="larrub1">HTML5</span>
            <span className="larrub1in">CSS</span>
          </div>
          <div className="rowtec-technology">
            <span className="sub6in">Database:</span>
            <span className="larrub">MongoDB</span>
            <span className="larrub1">Mysql</span>
            <span className="larrub1">PostgreSQL</span>
            <span className="larrub1in">Firebase</span>
          </div>
          <div className="rowtec-technology">
            <span className="sub6in">OpenSource:</span>
            <span className="larrub">Drupal</span>
            <span className="larrub1">Magento</span>
            <span className="larrub1">Wordpress</span>
          </div>
        </div>
        <div className="techsmart-main">
          <div className="techsmart">
            <h1>They call it best-in-class. We call it SMART thinking.</h1>
            <p>
              We take pride in developing enterprise web services and small
              business web solutions to meet your specific needs. Smart choices
              of latest technologies and deployment of standardized coding
              frameworks, help us ensure that our processes and solutions are
              scalable and future-proof, enhancing the user experience.
              Invariably, the result is a powerful software to the world. Our
              10+ years of combined expertise in
              <a href="/">
                <u> web design </u>
              </a>
              and big/small business web development sets us apart.
            </p>
          </div>
          <div className="techsmart1">
            <div className="rowaos1">
              <div className="carder">
                <div
                  className="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <h4 className="cardh4">Expansive</h4>
                  <p className="cardp">
                    We follow the standard set of principles and techniques to
                    deliver scalable web applications and solutions to meet your
                    business demands.
                  </p>
                </div>
              </div>
              <div className="carder">
                <div
                  className="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <h4 className="cardh4">Responsive</h4>
                  <p className="cardp">
                    Our professional web artisans make sure to deliver the right
                    user experience regardless of the screen size and resolution
                    of the device users use.
                  </p>
                </div>
              </div>
              <div className="carder">
                <div
                  className="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <h4 className="cardh4">Fast</h4>
                  <p className="cardp">
                    We map out a complex project, break it down into working
                    tasks, maximize the workflow and deliver it sooner and more
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="carder">
                <div
                  className="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <h4 className="cardh4">Secure</h4>
                  <p className="cardp">
                    With us being in charge of your website, we ensure the
                    complete security of your website against any kind of
                    malware attack.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="but12">
            <a href="/ourprocess">
              <button className="btn">
                <b>HOW WE WORK</b>
              </button>
            </a>
          </div>
        </div>
        <div className="techsmart2">
          <h1>Our development process</h1>
          <p>
            Our process ensures that an interface is seamless for the end-user
            to become familiar with and competent in using during the first
            contact they make. The agile approach makes it intuitive for users
            to achieve their objectives and easy to recall on subsequent visits.
            Our designers work with developers to make the attributes stand out
            by turning the usability to the max.
          </p>
        </div>
        <div class="containerpage">
          <ul class="timelinepage">
            <li>
              <div class="timeline-badge">01</div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title1">Technical Discovery</h4>
                </div>
                <div class="timeline-body">
                  <ul>
                    <li>
                      We establish a detailed idea about the business goals and
                      objectives
                    </li>
                    <li> Assess the situation</li>
                    <li>
                      {" "}
                      Understand the target market and competitive landscape
                    </li>
                    <li> Clarify all doubts and queries</li>
                    <li>
                      {" "}
                      Understand and document clients’ design and branding
                      preferences
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">02</div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title1">Planning</h4>
                </div>
                <div class="timeline-body">
                  <ul>
                    <li>Define the project plan</li>
                    <li> Define the branding guidelines of the project</li>
                    <li> We assist you to develop a content strategy</li>
                    <li>
                      {" "}
                      We will assist you with a user acquisition strategy
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge danger">03</div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title1">IA, Web Design + Copywriting</h4>
                </div>
                <div class="timeline-body">
                  <ul>
                    <li>We will craft your corporate branding</li>
                    <li>
                      {" "}
                      Will start designing the user interface on the approved
                      wireframes making it completely customer-centric
                    </li>
                    <li> Mobile, Tablet, Web-specific UX</li>
                    <li>
                      {" "}
                      Getting all the UI designs approved and confirmed by the
                      client
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge info">04</div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title1">Front-end and Back-End Coding</h4>
                </div>
                <div class="timeline-body">
                  <ul>
                    <li>
                      We will build your website’s front-end to match the
                      beautiful designs we’ve created
                    </li>
                    <li>
                      {" "}
                      Will create an intuitive backend that you can easily
                      manage
                    </li>
                    <li> Will cater the requirement for API integration</li>
                    <li> We craft an optimized code structure</li>
                    <li>
                      Set up a 2-3 week frequency for milestones/sprints and
                      involve client review in each sprint
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge primary">05</div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="timeline-title1">QA & Launch</h4>
                </div>
                <div class="timeline-body">
                  <ul>
                    <li>Each milestone/sprint is tested manually</li>
                    <li> Bugs are reported and added to product backlog</li>
                    <li>
                      {" "}
                      Quality release is provided and then final demo of the
                      sprint is sent to the client for approval
                    </li>
                    <li>
                      {" "}
                      Regression testing after each sprint to ensure proper
                      functioning of the previously approved sprints
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="splitb-webdevelopment">
          <div className="leftweb">
            <div className="swipeweb">
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
                  <div className="card-contactweb">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imageweb"
                      />
                      <span className="start-quoteweb"></span>
                      <br />
                      <span className="card-contact-paraweb">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingweb">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-cardweb">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-contactweb">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imageweb"
                      />
                      <span className="start-quoteweb"></span>
                      <br />
                      <span className="card-contact-paraweb">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingweb">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-cardweb">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-contactweb">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imageweb"
                      />
                      <span className="start-quoteweb"></span>
                      <br />
                      <span className="card-contact-paraweb">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingweb">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-cardweb">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="rightweb">
            <div className="contact-box">
              <form onSubmit={handleSubmit}>
                <span className="con">
                  <h3>Talk about your web project.</h3>
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
                    class="custom-text-color"
                    required
                  />
                  <span className="con2">
                    Phone Number (enter with country code)
                  </span>
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
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacy-policy"
                  required
                />
                <label for="privacy-policy" className="policy-black">
                  Tick to receive a newsletter by email. Read our full{" "}
                  <a href="/">privacy policy.</a>
                </label>
                <div className="checkupload">
                  <button
                    formaction="/action_page.php"
                    type="button"
                    className="ch"
                  >
                    <label for="file-upload">Upload File:</label>
                    <input type="file" id="file-upload" name="file-upload" />
                  </button>
                </div>
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
                <button className="btn">
                  <b>GET IN TOUCH</b>
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

export default Webdevelopment;

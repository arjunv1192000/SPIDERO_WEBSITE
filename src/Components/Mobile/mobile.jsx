import React, { useState } from "react";
import "./mobile.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-scroll";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import mob1 from "../assets/largo-mobile@2x.png";
import mob2 from "../assets/freshclinic-mobile@2x.png";
import mob3 from "../assets/frut-mobile@2x.png";
import mob4 from "../assets/high-fidelity-wireframe-nyc@2x.png";
import mob5 from "../assets/testing@2x.jpg";
import mob6 from "../assets/Home-Industry-AR-VR@2x.jpg";
import mob7 from "../assets/Home-Industry-Media-Entertainment@2x.jpg";
import mob8 from "../assets/Home-Industry-Blockchain-IoT@2x.jpg";
import mob9 from "../assets/Home-Industry-AI-ML@2x.jpg";
import mob10 from "../assets/Home-Industry-Health-Finance@2x.jpg";
import mob11 from "../assets/Home-Industry-Banking-Finance@2x.jpg";
import mob12 from "../assets/Home-Industry-Shopping-E-commerce@2x.jpg";
import mob13 from "../assets/Home-Industry-Education-ELearning@2x.jpg";
import foot from "../assets/footer-banner1_2x.webp";
import backmobile from "../assets/mobile-app-nyc-banner@2x (1).jpg";
import mobile1 from "../assets/Client/mobile1.jpg";
import mobile2 from "../assets/Client/mobile2.jpg";
import mobile3 from "../assets/Client/mobile3.jpg";
import mobile4 from "../assets/Client/mobile4.jpg";
import mobile5 from "../assets/Client/mobile5.jpg";
import mobile6 from "../assets/Client/mobile6.jpg";
import emailjs from "@emailjs/browser";
import dan from "../assets/dan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";
const Mobile = () => {
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

  const breakpoints = {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is < 768px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };
  const breakpoints1 = {
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is < 768px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <section id="mobile">
      <div className="eight">
        <div className="mobile-deve">
          <img src={backmobile} />
          <div className="intro-content-mobile">
            <h4>MOBILE APP DEVELOPMENT</h4>
            <h1>Expert Mobile App Developers in NYC</h1>
            <div className="but1web">
              <Link>
                <button className="btnweb">
                  <b>
                    <b>OUR SUCCESS STORIES</b>
                  </b>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="splitmob">
          <div className="leftmob">
            <h1 className="mobile1">Featured</h1>
          </div>
          <div className="rightmob">
            <h1>Clients</h1>
          </div>
        </div>
        <div className="mobile-head">
          <h1>Top-rated mobile app development company in New York</h1>
          <p>
            When marketing your app, it has to be a unique one. At Unified
            Infotech, we provide unparalleled solutions, steering your product
            towards success. As a pro-convergence app development company, we
            employ agile methodology in our projects and offer human-centric
            mobile app solutions by synergizing UX, smart consultation, bots,
            AIs, IoT and other latest technologies in the market. With being top
            app developers NYC, our team consists of highly experienced
            professionals with years of industry exposure, helping clients
            generate desired results within the stipulated time and budget.
          </p>
        </div>
        <div className="splitreal2">
          <div className="leftreal">
            <div className="fade-in-image">
              <img
                src={mob1}
                alt="profile"
                className="web-development-images-mobile"
              />
            </div>
          </div>
          <div className="rightreal">
            <span className="real">AI Powered</span>
            <br />
            <span className="real1">Award-winning streaming app</span>
            <br />
            <h4 className="real2">
              <u>Largo Filims</u>
            </h4>
            <p className="real3">
              We designed and developed an AI-powered video streaming app
              putting user experience at top priority.
            </p>
            <div className="but1in">
              <Link>
                <button className="btn">
                  <b>
                    <b>EXPLORE MORE</b>
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
                src={mob2}
                alt="profile"
                className="web-development-images-mobile"
              />
            </div>
          </div>
          <div className="rightreal">
            <span className="real">Clinic Management</span>
            <br />
            <span className="real1">&video consulation app </span>
            <br />
            <h4 className="real2">
              <u>Freshclinics</u>
            </h4>
            <p className="real3">
              Developed a clinic marketplace app in Australia to enable nurses
              to reach out to doctors as needed.
            </p>
            <div className="but1in">
              <Link>
                <button className="btn">
                  <b>
                    <b>EXPLORE MORE</b>
                  </b>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="splitreal">
          <div className="leftreal">
            <div className="fade-in-image">
              <img
                src={mob3}
                alt="profile"
                className="web-development-images-mobile"
              />
            </div>
          </div>
          <div className="rightreal">
            <span className="real">On-demand Grocery</span>
            <br />
            <span className="real1">App for buyers convenience</span>
            <br />
            <h4 className="real2">
              <u>Frut</u>
            </h4>
            <p className="real3">
              Crafted this on-demand grocery delivery and finger-licking recipe
              sharing app to deliver fresh & local produce at customers’
              doorstep at their convenience.
            </p>
            <div className="but1in">
              <a href="/contact">
                <button className="btn">
                  <b>
                    <b>CONTACT US</b>
                  </b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-head1">
          <h1>Our Mobile App Development Services</h1>
        </div>
        <div className="row">
          <div className="column">
            <div className="cardin">
              <h1>iOS App Development</h1>
              <p>
                We develop native iOS apps by following the Human Interface
                Guidelines. The apps are built on the latest iOS frameworks.
                Every iPhone and iPad product web development is split tested to
                take feedback from our early users.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h1 className="card-head1">Android App Development</h1>
              <p className="card-head1">
                We develop high-end Android apps by following the Material
                Design Guidelines and harness the best knowledge on Android
                libraries. Our android developers in NYC have worked with
                Fortune 500 and startups.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="cardin">
              <h1>React Native App Development</h1>
              <p>
                With code reusability, cross-platform support and a native-like
                UI, we develop react native apps that are cost-effective and
                give better ROI. Talk to our certified React native app
                developers.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h1 className="card-head1">Enterprise Mobile Solutions</h1>
              <p className="card-head1">
                We are one of the very few application development companies
                that deliver complex projects within the stipulated time. We
                make the impossible happen, offering the best mobile app
                development in NYC.
              </p>
            </div>
          </div>
        </div>
        <div className="but">
          <a href="/contact">
            <button className="btn">
              <b>
                <b>TALK TO US</b>
              </b>
            </button>
          </a>
        </div>
        &nbsp;&nbsp;
        <div className="mobile-header">
          <div className="mobile-header1">
            <h1>
              How Unified Infotech, #1 app developer in NYC, makes your app idea
              a reality?
            </h1>
            <p>
              We believe in creating value for our customers. And pre-planning
              is the best way to start. We conduct stakeholder interviews and
              address their needs. We identify their target audience, prospects,
              budget, and schedules. Our team of app developers and designers in
              the breathtaking Madison Avenue, Manhattan, plan the optimum
              requirements to carry out the individual processes. Not only that,
              we test several functionalities to see which one suits best. This
              helps our clients to receive the best without having to compromise
              on their vision. Credit goes to the agile app development process
              we follow.
            </p>
            <h4>DON’T BELIEVE US? CHECK OUT OUR WORKS!</h4>
          </div>
          <img
            src={mob4}
            alt="profile"
            width="80%"
            height="400px"
            className="mobile-main"
          />
        </div>
        <div className="splitmob1">
          <div className="leftmob1">
            <h1 className="mobiledev">
              Our USP-Human-centered design thinking process
            </h1>
            <p className="mobiledev1">
              Visuals always play a central role when it comes to user
              experience. Through 10+ years of experience as a mobile app design
              company in NYC, we have evolved processes to guarantee higher user
              engagement. Retaining users increases the value, relevance, and
              usefulness of your app. We always develop products from a user
              perspective, so that we get to experience what users would feel
              like while navigating through your product. Our mobile app design
              process runs around content curation, pixel orientation,
              information architecture, microinteractions, etc, ensuring maximum
              engagement from the users’ side.
            </p>
            <h4 className="mobiledev2">
              FROM IDEATION TO VISUAL MANIFESTATION,
            </h4>
            <div className="but1in">
              <Link>
                <button className="btnn">
                  <b>
                    <b>OUR DESIGN PROCESS</b>
                  </b>
                </button>
              </Link>
            </div>
          </div>
          <div className="rightmob1">
            <img src={mob5} alt="profile" width="100%" height="700px" />
          </div>
        </div>
        &nbsp;&nbsp;
        <div className="splitmob3">
          <div className="leftmob3">
            <h1 className="mobiledev">
              Results - What we will do for your business?
            </h1>
            <p className="mobiledev1">
              Be it iOS or Android, a product’s performance is what determines
              its success rate. We aim at taking the development process to the
              next level by employing agile methodologies and the latest
              innovations in the market. We reduce the app’s response lag,
              eliminate data redundancy, optimize memory allocation, implement
              high-end data encryption, etc. We always make sure the performance
              is up to the mark and that it reflects in both app development for
              iOS and Android, which is the best in New York.
            </p>
            <h4 className="mobiledev2">
              FROM IDEATION TO VISUAL MANIFESTATION,
            </h4>
            <div className="but1in">
              <Link>
                <button className="btnn">
                  <b>
                    <b>OUR DESIGN PROCESS</b>
                  </b>
                </button>
              </Link>
            </div>
          </div>
          <div className="rightmob3">
            <Swiper
              effect="coverflow"
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={breakpoints}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="column">
                  <div className="cardin2">
                    <img src={mobile1} alt="profile" className="imgmob2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin2">
                    <img src={mobile2} alt="profile" className="imgmob2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin2">
                    <img src={mobile3} alt="profile" className="imgmob2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin2">
                    <img src={mobile4} alt="profile" className="imgmob2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin2">
                    <img src={mobile5} alt="profile" className="imgmob2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin2">
                    <img src={mobile6} alt="profile" className="imgmob2" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="split-mobile-head">
          <div className="Industries">
            <h1>Industries we excel in and more</h1>
          </div>
          <div className="swipe-mobile">
            <Swiper
              effect="coverflow"
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={breakpoints1}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob6} alt="profile" className="imgmob" />
                    <h1>AR/VR</h1>
                    <p className="para-mob">
                      We are influencing business with our high-tech Augmented
                      Reality and Virtual Reality app solutions to enhance the
                      user experience for different industries.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob7} alt="profile" className="imgmob" />
                    <h1>Media & Entertainment</h1>
                    <p className="para-mob">
                      Be it music or video streaming we have created
                      award-winning apps for next-generation users in the field
                      of media and entertainment.Check our portfolio to know
                      more.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob8} alt="profile" className="imgmob" />
                    <h1>Blockchain & IoT</h1>
                    <p className="para-mob">
                      The futuristic solutions like Blockchain and IoT are our
                      expertise.We have proudly created some mention-worthly
                      dApps,IoT apps, and cryptocurrency masterpieces.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob9} alt="profile" className="imgmob" />
                    <h1>AI/ML</h1>
                    <p className="para-mob">
                      Taking the big leap in artificial Intelligence and Machine
                      Learning. we have developed award-winning apps in segments
                      that needed the ultimate upgrade
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob10} alt="profile" className="imgmob" />
                    <h1>Health & Fitness Apps</h1>
                    <p className="para-mob">
                      We make high-end health and fitness mobile that aims to
                      improve medical domains and create highly advanced
                      hospitals,clinics and personal health management
                      solutions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob11} alt="profile" className="imgmob" />
                    <h1>Banking & Finance</h1>
                    <p className="para-mob">
                      Devising customer-centric banking and finance app
                      platforms to help both business and user get benefited
                      with swift,smart and modernized services.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob12} alt="profile" className="imgmob" />
                    <h1>Shopping & eCommerce</h1>
                    <p className="para-mob">
                      eCommerce is the heart and soul of the market today. we
                      assist business to get a better edge to outsmart their
                      competitors to get more customers, brand exposure and
                      better ROI with eCommerce app development
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="column">
                  <div className="cardin1">
                    <img src={mob13} alt="profile" className="imgmob" />
                    <h1>Education & eLearning</h1>
                    <p className="para-mob">
                      Our eLearning and EdTech solution is aimed to evaluate the
                      existing flaws of the education system and create a
                      platform where everyone can get a personalized learning
                      experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="split-mobile">
          <div className="leftb">
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
                  <div className="card-contactmobile">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imagemobile"
                      />
                      <span className="start-quotemobile"></span>
                      <br />
                      <span className="card-contact-paramobile">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingmobile">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-cardmobile">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-contactmobile">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imagemobile"
                      />
                      <span className="start-quotemobile"></span>
                      <br />
                      <span className="card-contact-paramobile">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingmobile">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-cardmobile">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-contactmobile">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imagemobile"
                      />
                      <span className="start-quotemobile"></span>
                      <br />
                      <span className="card-contact-paramobile">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingmobile">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-cardmobile">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="rightb">
            <div className="contact-box">
              <form onSubmit={handleSubmit}>
                <span className="con">
                  <h3>Got an app idea? Let’s talk!</h3>
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
        <div className="splitc-mobile">
          <div className="leftc">
            <div className="title-div">
              <span className="title-address">Like what you see?</span>
              <br />
              <span className="title-address1">
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

export default Mobile;

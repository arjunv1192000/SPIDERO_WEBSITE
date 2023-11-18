import React, { useState } from "react";
import "./custom.css";
import AOS from "aos";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import custom1 from "../assets/Client/contact-img.png";
import custom2 from "../assets/first.svg";
import custom3 from "../assets/custom3.svg";
import custom4 from "../assets/custom4.svg";
import custom5 from "../assets/custom5.svg";
import custom6 from "../assets/custom6.svg";
import custom7 from "../assets/custom7.svg";
import custom8 from "../assets/custom8.svg";
import custom9 from "../assets/custom9.svg";
import custom10 from "../assets/board-beyond@2x.jpg";
import custom11 from "../assets/media@2x.jpg";
import custom12 from "../assets/digital-transformation-logo.svg";
import custom13 from "../assets/discovery.png";
import custom14 from "../assets/userjourney.png";
import custom15 from "../assets/system.png";
import custom16 from "../assets/qualitytest.png";
import custom17 from "../assets/ultimate.png";
import custom18 from "../assets/next-gen-icon.svg";
import custom19 from "../assets/web/Angular Icon Logo PNG Vector (AI) Free Download.jpeg";
import custom20 from "../assets/web/Why Companies Are Opting for Node_js Web Development_ - 23744 _ MyTechLogy.jpeg";
import custom21 from "../assets/web/PHP Logo [EPS File] - Company Logo Downloads.jpeg";
import custom22 from "../assets/web/Python Logo - PNG Logo Vector Downloads (SVG, EPS).jpeg";
import custom23 from "../assets/web/vue.jpeg";
import custom24 from "../assets/web/react.jpeg";
import custom26 from "../assets/web/Laravel.jpeg";
import custom28 from "../assets/dot-net-icon.png";
import custom29 from "../assets/web/java.jpeg";
import custom30 from "../assets/web/java.jpeg";
import custom31 from "../assets/mobile/ionic.png";
import custom32 from "../assets/mobile/swift.jpeg";
import custom33 from "../assets/mobile/Flutter Vector Logo.jpeg";
import custom34 from "../assets/mobile/Kotlin Logo - PNG Logo Vector Downloads (SVG, EPS).jpeg";
import custom35 from "../assets/mobile/xamarin.jpeg";
import custom40 from "../assets/database-development-tech-icon-01.png";
import custom41 from "../assets/database/MongoDB Logo.jpeg";
import custom42 from "../assets/database/Oracle.jpeg";
import custom43 from "../assets/database/PostgreSQL Logo.jpeg";
import custom44 from "../assets/database/Redis_logo_PNG1.png";
import custom45 from "../assets/database/maria.webp";
import custom46 from "../assets/database/sql-server.png";
import custom47 from "../assets/opens-source-cms-icon-01.png";
import custom48 from "../assets/opens-source-cms-icon-02.png";
import custom49 from "../assets/opens-source-cms-icon-03.png";
import custom50 from "../assets/opens-source-cms-icon-04.png";
import custom51 from "../assets/opens-source-cms-icon-05.png";
import custom52 from "../assets/opens-source-cms-icon-06.png";
import custom53 from "../assets/cloud-platform-icon-01.png";
import custom54 from "../assets/cloud-platform-icon-02.png";
import custom55 from "../assets/education-industry-pic@2x.jpg";
import custom56 from "../assets/Healthcare-industry-pic@2x.jpg";
import custom57 from "../assets/Software-industry-pic@2x.jpg";
import custom58 from "../assets/real-estate-industry-pic@2x.jpg";
import custom59 from "../assets/finance-industry-pic@2x.jpg";
import custom60 from "../assets/logistics-industry-pic@2x.jpg";
import custom61 from "../assets/media-entertainment-industry-pic@2x.jpg";
import custom62 from "../assets/hospitality-industry-pic@2x.jpg";
import custom63 from "../assets/online-marketing.jpeg";
import custom64 from "../assets/no-search-icon.svg";
import client1 from "../assets/Client/client1.png";
import client2 from "../assets/Client/client2.png";
import client3 from "../assets/Client/client3.png";
import client4 from "../assets/Client/client4.png";
import client7 from "../assets/Client/client7.png";
import custom71 from "../assets/Client/Scanning Artificial Intelligence GIF by xponentialdesign - Find & Share on GIPHY.gif";
import foot from "../assets/footer-banner1_2x.webp";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sql from "../assets/Client/sqlimg.png";
import emailjs from "@emailjs/browser";
import { faChevronUp,faChevronDown,faUpload} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";
const Custom = () => {
  AOS.init();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
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
      company,
      areaOfInterest,
      budget,
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

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
    {
      question:
        "How can I choose the best custom software company for my business?",
      answer:
        "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
    },
  ];

  return (
    <section id="cus">
      <div className="fiv">
        <div className="fiv-cus">
          <div className="splitcus">
            <div className="leftcus">
              <div className="title1">
                <span>
                  <span className="title1-top">Top Rated </span>{" "}
                  <b>
                    {" "}
                    Software <br />
                    Development Company
                  </b>
                </span>
              </div>
              <p className="para">
                We specialize in strategic planning, designing, developing, and
                scaling world-class custom software solutions efficiently
                through a consulting-led approach. As true collaborative
                partners, we take responsibility for delivering outcomes and
                enhancing business performance through custom-engineered
                software solutions across multiple industry verticals.
              </p>
              <a href="#explore">
                <button className="btnn1">
                  <b>Explore Sucess Stories</b>
                </button>
              </a>
            </div>
            <div className="rightcus">
              <img src={custom1} alt="profile" className="cusimage" />
            </div>
          </div>
        </div>
        <div className="our">
          <span className="our-work">
            <b>Our Clients</b>
          </span>
        </div>
        <div className="client">
          <div className="client-container">
            <img src={client1} alt="Client 1" />
            <img src={client2} alt="Client 2" />
            <img src={client3} alt="Client 3" />
            <img src={client4} alt="Client 1" />
            <img src={client7} alt="Client 3" />
            <img src={client2} alt="Client 2" />
            <img src={client3} alt="Client 3" />
            <img src={client1} alt="Client 1" />
            <img src={client2} alt="Client 2" />
            <img src={client3} alt="Client 3" />
            <img src={client4} alt="Client 1" />
            <img src={client7} alt="Client 3" />
            <img src={client2} alt="Client 2" />
            <img src={client3} alt="Client 3" />
          </div>
        </div>
        <div className="end">
          <div className="title2">
            <span>
              <b>End-To-End Custom Software Development Services </b>
            </span>
          </div>
          <p className="cusparaend">
            At Unified Infotech, we offer robust, secure, and scalable software
            development solutions that build business value starting from
            collaborative ideation and product strategy, through to product
            engineering, testing and continuous scaling. Our software developers
            ensure efficient outcomes for global businesses by turning their
            software vision into reality, accompanied with great end-user
            experiences.
          </p>
          <div className="custom-end">
            <div className="rowcus">
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom2} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">Web Development</span>
                  <p className="cuspar">
                    No matter the size or complexity of your business challenge,
                    our experts are here to help with bespoke web-based software
                    solutions, such as web portals, web applications, SaaS
                    solutions, and other web-based digital properties that drive
                    mission-critical processes.
                  </p>
                </div>
              </div>
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom3} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">App Development</span>
                  <p className="cuspar">
                    We are a software development company located in New York,
                    USA with 12+ years of experience in designing and building
                    best-in-class applications and transformative solutions for
                    global brands. We provide smooth user experiences across all
                    the latest platforms and devices.
                  </p>
                </div>
              </div>
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom4} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">product Engineering</span>
                  <p className="cuspar">
                    To help you achieve your business goals, our team plans,
                    designs, develops, tests, and scales software products. We
                    provide custom software product development services that
                    involve ideation, development, and product innovation.
                  </p>
                </div>
              </div>
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom5} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">App Modernization</span>
                  <p className="cuspar">
                    We provide specialized consulting and upgradation of legacy
                    applications for businesses around the world, using the
                    latest technologies, in-trend user experiences and modern
                    cloud infrastructures. In this ever changing digital
                    landscape, opting for legacy application modernisation is a
                    must for businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="rowcus">
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom6} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">Web 3.0 Development</span>
                  <p className="cuspar">
                    We build distributed and decentralized web based systems
                    using a variety of technologies like smart contracts,
                    blockchain, DeFi, IoT, AI, VR, and ML. Invest in our Web 3.0
                    Development Service and see a tangible impact on your
                    business.
                  </p>
                </div>
              </div>
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom7} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">API & Microservices</span>
                  <p className="cuspar">
                    Our experts help modernize IT systems with API integration
                    and microservices that are independent and agile. We have an
                    API-first methodology for building end-to-end digital
                    applications that deliver seamless application integration.
                  </p>
                </div>
              </div>
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom8} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">MVP & POC Development</span>
                  <p className="cuspar">
                    If you’re trying to achieve multiple objectives and have
                    limited time or resources, our Proof of Concept (PoC) and
                    Minimum Viable Product (MVP) development services will help
                    you validate your product idea and its market adoption.
                  </p>
                </div>
              </div>
              <div className="columncus">
                <div
                  class="itemcus"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <img src={custom9} alt="profile" className="imgtool" />
                  <br />
                  <span className="sub">Blockchain Development</span>
                  <p className="cuspar">
                    We help businesses take advantage of the growing demand for
                    blockchain-based applications and use them to conduct safe,
                    efficient, and time-stamped user-data transactions using a
                    distributed digital ledger that accelerates time to market
                    while ensuring a highly safe and secured environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="explore">
          <div className="suc">
            <h3>Sucess Stories</h3>
            <div className="splitlr">
              <div className="leftlr">
                <img
                  src={custom10}
                  alt="profile"
                  width="80%"
                  height="500px"
                  className="web-development-images"
                />
                <br />
                <span className="sub1">
                  <u>E-Learning</u>
                </span>
                <p className="cuspar1">
                  Application Modernization for an eLearning Platform acquired
                  by McGraw Hill Education
                </p>
              </div>
              <div className="rightlr">
                <img
                  src={custom11}
                  alt="profile"
                  width="80%"
                  height="500px"
                  className="web-development-images"
                />
                <br />
                <span className="sub1">
                  <u>Media</u>
                </span>
                <p className="cuspar1">
                  Enterprise Web Application Development for a Fortune 50 Media
                  Conglomerate
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="dr">
          <div className="row">
            <div className="column">
              <img src={custom12} alt="profile" className="drive1" />
            </div>
            <div className="column">
              <span className="drive3">Drive Digital Transformation</span>
              <br />
              <span className="cuspar1dr">
                Schedule a Free Consulting Session with our experts
              </span>
            </div>
            <div className="column">
              <div className="drive2">
                <a href="/contact">
                  <button className="btnn">
                    <b>
                      <b>CONTACT US NOW</b>
                    </b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="splitho">
          <div className="leftho">
            <span className="title5">
              <b>How We Approach Custom Software Development</b>
            </span>
          </div>
          <div className="rightho">
            <span className="para1">
              We employ a consciously structured software development process
              adhering to the industry’s best security practices for building
              tailored software solutions for our clients across the globe.
            </span>
          </div>
        </div>
        <div className="swipe-cus">
          <div className="container">
            <div className="image-box">
              <div class="image">
                <img src={custom13} alt="" className="img" />
              </div>
              <div class="image">
                <img src={custom14} alt="" className="img" />
              </div>
              <div class="image">
                <img src={custom15} alt="" className="img" />
              </div>
              <div class="image">
                <img src={custom16} alt="" className="img" />
              </div>
              <div class="image">
                <img src={custom17} alt="" className="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="splitin">
          <div className="leftin">
            <div className="sub2">
              No half measures when it is about securing your application
            </div>
            <h10 className="sub3">
              <b>WEB APPLICATION VULNERABILITIES</b>
            </h10>
            <br />
            <p className="sub41">
              Typically vulnerabilities are the result of a lack of input/output
              sanitization enabling the use of potential attack vectors
              including:
            </p>
            <div className="row-sql">
              <div className="column-sql">
                <span className="sub5">SQL Injection</span>
                <p className="sub4">
                  A perpetrator using malicious SQL code to manipulate database
                  revealing information
                </p>
              </div>
              <div className="column-sql">
                <span className="sub5">Cross-site Scripting(XSS)</span>
                <p className="sub4">
                  An injection attack targeting users to access accounts,
                  activate Trojans or modify page content
                </p>
              </div>
            </div>
            <div className="row-sql">
              <div className="column-sql">
                <span className="sub5">Remote File Inclusion</span>
                <p className="sub4">
                  An attack to remotely inject a file onto a web application
                  server executing malicious scripts
                </p>
              </div>
              <div className="column-sql">
                <span className="sub5">Cross-site Request Forgery</span>
                <p className="sub4">
                  An attack resulting in an unsolicited transfer of funds,
                  changed passwords or data theft
                </p>
              </div>
            </div>
          </div>
          <div className="rightin">
            <div className="rightin-main">
              <div className="rightin-1">
                <img src={custom71} alt="profile" width="100%" height="100%" />
              </div>
              <div className="rightin-2">
                <img src={sql} alt="profile" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
        <div className="dr">
          <div className="row">
            <div className="column">
              <img src={custom18} alt="profile" className="drive1" />
            </div>
            <div className="column">
              <span className="drive3">
                Build Next-Gen Digital Technology Solutions
              </span>
              <br />
              <p className="cuspar1dr">
                Leaverage our cross-domain expertise to stay ahead of your
                competition
              </p>
            </div>
            <div className="column">
              <div className="drive2">
                <Link>
                  <button className="btnn">
                    <b>
                      <b>SEE OUR PORTFOLIO</b>
                    </b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="drive4">
          <span>Technology stack We Practice</span>
        </div>
        <div className="rowtec">
          <span className="sub6">Web Development</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={custom19} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom20} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom21} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom22} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom23} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom24} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom26} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom28} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom29} alt="profile" className="imgweb" />
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className="rowtec1">
          <span className="sub6">Mobile App Development</span>&nbsp;&nbsp;&nbsp;
          <img src={custom30} alt="profile" className="imgweb1" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom31} alt="profile" className="imgweb1" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom32} alt="profile" className="imgweb1" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom33} alt="profile" className="imgweb1" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom34} alt="profile" className="imgweb1" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom35} alt="profile" className="imgweb1" />
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className="rowtec2">
          <span className="sub6">Database</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <img src={custom40} alt="profile" className="imgweb2in" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom41} alt="profile" className="imgweb2" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom42} alt="profile" className="imgweb2" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom43} alt="profile" className="imgweb2" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom44} alt="profile" className="imgweb2" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom45} alt="profile" className="imgweb2" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom46} alt="profile" className="imgweb2" />
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className="rowtec3">
          <span className="sub6">Opensource</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <img src={custom47} alt="profile" className="imgweb3in" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom48} alt="profile" className="imgweb3" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom49} alt="profile" className="imgweb3" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom50} alt="profile" className="imgweb3" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom51} alt="profile" className="imgweb3" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom52} alt="profile" className="imgweb3" />
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className="rowtec4">
          <span className="sub6">Cloud Platforms</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <img src={custom53} alt="profile" className="imgweb4in" />
          &nbsp;&nbsp;&nbsp;
          <img src={custom54} alt="profile" className="imgweb4" />
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className="drive4in">
          <div className="dri">
            <span className="drive4dri">Industries We Serve</span>
            <p className="drive4dri1">
              At Unified Infotech, we work with fast-growing companies, with
              dedicated teams that create cutting-edge, impeccable, and
              long-lasting software solutions. Trust us when we say that when
              your business is on a mission-critical trajectory, Unified
              Infotech can help guide you along the way.
            </p>
          </div>
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src={custom55} alt="profile" />
                <div className="overlay">
                  <h3>Education</h3>
                  <p className="over">
                    We provide top-notch and impactful eLearning software
                    solutions to forward thinking Edtech companies that deliver
                    enhanced end-user experiences and meet key objectives. Our
                    engineering expertise combined with our deep understanding
                    of the education industry allows us to meet the needs of
                    EduTech leaders around the world.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom56} alt="profile" />
                <div className="overlay">
                  <h3>Healthcare</h3>
                  <p className="over">
                    Whether you’re looking for a custom healthcare application,
                    an interactive EMR, a SaaS product that solves business
                    problems, or an AI-driven analytics solution, we have you
                    covered. We ensure all our healthcare solutions are inline
                    with required compliances and regulatory guidelines, and
                    also strong data privacy protection. Use our proven
                    healthcare software development expertise to build and
                    enhance your business efficiency.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom57} alt="profile" />
                <div className="overlay">
                  <h3>Software & IT </h3>
                  <p className="over">
                    As a smart and Agile software company, we provide
                    full-service IT consulting services to overcome the biggest
                    business obstacles, enabling long-term business success at
                    scale. Whether you’re modernizing your IT strategy, looking
                    to build a SaaS product, modernizing your legacy systems, or
                    recovering from a software project, our proven software
                    developers have you covered.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom58} alt="profile" />
                <div className="overlay">
                  <h3>Real Estate</h3>
                  <p className="over">
                    At Unified Infotech, we have developed a number of bespoke
                    software solutions, such as ERP CRM, SaaS solutions, that
                    have enabled businesses in the real estate industry to
                    digitize their operational processes and scale their
                    business.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom59} alt="profile" />
                <div className="overlay">
                  <h3>Finance</h3>
                  <p className="over">
                    From the very beginning, we have provided enterprise-class
                    banking and financial software services to fintech
                    companies, financial institutions and banks to support their
                    digital transformation and deliver seamless end user
                    experiences for their customers and internal stakeholders.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom60} alt="profile" />
                <div className="overlay">
                  <h3>Logistics</h3>
                  <p className="over">
                    Our custom software development services focus on
                    Consulting, Deployment, Support and Development of Logistics
                    and Transportation Solutions. Our goal is to assist L&T
                    businesses in streamlining and reducing logistics costs,
                    improving asset productivity, and enhancing the customer
                    experience.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom61} alt="profile" />
                <div className="overlay">
                  <h3>Media & Entertainment</h3>
                  <p className="over">
                    Utilize our custom software development services in New York
                    and take your business to the next level. Create a Media &
                    Entertainment solution that is mission-critical to
                    increasing viewer engagement, modernizing your processes,
                    and improving your bottom line.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={custom62} alt="profile" />
                <div className="overlay">
                  <h3>Hospitality</h3>
                  <p className="over">
                    Browse our complete suite of travel and hospitality software
                    products to meet your customer’s needs. From fully-automated
                    migration to bespoke software integration, we’re your
                    partner for a more efficient and profitable hospitality
                    business.
                  </p>
                </div>
              </div>

              <div className="box">
                <img src={custom63} alt="profile" />
                <div className="overlay">
                  <h3>Digital Marketing & Advertising</h3>
                  <p className="over">
                    Strong chances to express brand stories at scale and in
                    context are created by digital advertising. Marketers can
                    reach a wider audience by running advertisements on several
                    platforms and media.in a sense that is immediate and getting
                    more personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dr">
          <div className="row">
            <div className="column">
              <img src={custom64} alt="profile" className="drive1" />
            </div>
            <div className="column">
              <span className="drive3">
                Didn't Find Your Industry In The List
              </span>
              <br />
              <span className="cuspar1dr">
                Don't worry, we've got you covered! Let's talk about your
                business needs!
              </span>
            </div>
            <div className="column">
              <div className="drive2">
                <a href="#getaquote">
                  <button className="btnn">
                    <b>
                      <b>GET A QUOTE</b>
                    </b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="splitkn">
          <h3 className="title6">
            <b>
              Why Are We The Most Trusted Custom Software Development Company?
            </b>
          </h3>
          <p className="para2">
            Spidero Technology focuses on engineering top-of-the-line solutions
            that deliver growth-oriented competitive edge to your business.Our
            process transparency and consistent, well defined methodology make
            us the right fit for your custom software development project.
          </p>
          <div className="containertitle">
            <div className="cardtit">
              <h4 className="drive4dri2">Consulting</h4>
              <p className="para3">
                Unified Infotech’s software consulting service will guide you
                through the process of digitizing operations and streamlining
                workflows to meet your business objectives. Our expert advice
                will help you select the right solutions for faster business
                growth.
              </p>
            </div>
            <div className="cardtit">
              <h4 className="drive4dri2"> Proactivity</h4>
              <p className="para3">
                One of the most challenging aspects of software outsourcing is
                that most development firms act as robots, waiting for the
                client to provide clear instructions. However, we project
                ourselves as proactive experts, one who looks to reduce
                operational overheads by proactively communicating and engaging
                with the client, guiding and monitoring the progress of the
                project.
              </p>
            </div>
            <div className="cardtit">
              <h4 className="drive4dri2"> Best Practices</h4>
              <p className="para3">
                At UI we believe the success mantra for ensuring top quality
                software products lies in the process, through which it is being
                engineered. We follow CMMI Level 3 protocols and industry best
                practices all around to ensure all our products are engineered
                through a highly established set of protocols.
              </p>
            </div>
            <div className="cardtit">
              <h4 className="drive4dri2"> Accountability</h4>
              <p className="para3">
                We believe every project is a milestone in our journey. So we
                hold ourselves accountable to deliver results for our clients
                and leave no stone unturned in our quest to deliver the best of
                digital solutions. This ensures we have a portfolio full of
                success stories and not just a list of random projects.
              </p>
            </div>
          </div>
        </div>
        <div className="know">
          <div className="drive">
            <span className="drive3fu">
              Fuel Your Digital Transformation Journey
            </span>
            <br />
            <p className="cuspar1fu">
              Keep up with change with a true software technology partner
            </p>
          </div>
          <div className="drive2in3">
            <a href="/about">
              <button className="btnn">
                <b>
                  <b>KNOW ABOUT US</b>
                </b>
              </button>
            </a>
          </div>
        </div>
        <div className="faq">
          <div className="faqhead">
            <h4>Frequently Asked Questions</h4>
            <div className="faqdata">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <div className="header-container">
                    <h2>{item.question}</h2>
                    <button
                    onClick={() => handleToggle(index)}
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: 0,
                      margin: 0,
                      cursor: 'pointer',
                      outline: 'none',
                    }}>
                      {expandedIndex === index ? (
                        <FontAwesomeIcon icon={faChevronUp} style={{color: "#050505",}} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#050505",}} />
                      )}
                    </button>
                  </div>
                  {expandedIndex === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <section id="getaquote">
          <div className="contact">
            <form onSubmit={handleSubmit}>
              <span className="contact-us">
                <h1>Contact Us</h1>
              </span>
              <div className="form-wrapper">
                <div className="left-side">
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    name="fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    className="name-box"
                  />
                  <input
                    type="text"
                    id="E-mail"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                    className="email-box"
                  />
                  <input
                    type="text"
                    id="PhoneNumber"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                    className="phone-box"
                  />
                </div>
                <div className="right-side">
                  <input
                    type="text"
                    id="CompanyName"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    required
                    className="company-box"
                  />
                  <select
                    class="form-select"
                    id="Area of interest"
                    name="Area of interest"
                    onChange={(e) => setAreaOfInterest(e.target.value)}
                  >
                    <option value="">Area of interest</option>
                    <option>CMS Design</option>
                    <option>Custom Software Development</option>
                    <option>Application Development</option>
                    <option>Mobile Development</option>
                    <option>Other</option>
                  </select>
                  <select
                    class="form-select"
                    id="Budget"
                    name="Budget"
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Budget</option>
                    <option>$500-$5000</option>
                    <option>$5000-$20000</option>
                    <option>$20,000-$40,000</option>
                    <option>$50,000-$100k</option>
                    <option>$100k-$250k</option>
                    <option>$250k & Above</option>
                  </select>
                </div>
              </div>
              <div className="input-box2">
                <div className="textarea">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="checkupload">
                <button formaction="/action_page.php" type="button" class="ch">
                  <span class="icon">
                    <FontAwesomeIcon
                      icon={faUpload}
                      style={{ color: "#ebedef" }}
                    />{" "}
                  </span>

                  <label for="file-upload">Upload File</label>
                  <input type="file" id="file-upload" name="file-upload" />
                </button>
              </div>
              <input type="checkbox" id="checks" name="checks" value="checks" />
              <span className="checks">
                Tick to receive a newsletter by email. Read our full{" "}
                <a href="/">privacy policy.</a>
              </span>
              <br />

              <div className="button-contact">
                <button className="btn4" type="submit">
                  {" "}
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </section>
        <div className="splitcustom">
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
export default Custom;

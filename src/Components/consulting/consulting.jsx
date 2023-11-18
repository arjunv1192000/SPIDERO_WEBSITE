import React, { useState } from "react";
import "./consulting.css";
import { Link } from "react-scroll";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import foot from "../assets/footer-banner1_2x.webp";
import banner from "../assets/Client/bannner1.jpg";
import success1 from "../assets/Client/success1.jpg";
import success2 from "../assets/Client/success2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import banner1 from "../assets/Client/startup.jpg";
import banner2 from "../assets/Client/startup1.jpg";
import banner3 from "../assets/Client/startup3.jpg";
import banner6 from "../assets/Client/banner6.jpg";
import banner7 from "../assets/Client/banner7.jpg";
import table from "../assets/Client/tabledata.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";


const Consulting = () => {
  const [showEnterpriseContent, setShowEnterpriseContent] = useState(false);
  const [showStartupContent, setShowStartupContent] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleEnterpriseChange = () => {
    setShowEnterpriseContent(!showEnterpriseContent);
    setShowStartupContent(false);
  };

  const handleStartupChange = () => {
    setShowStartupContent(!showStartupContent);
    setShowEnterpriseContent(false);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <section id="exp">
      <div className="trd">
        <div className="conexp">
          <span className="abs">CONSULTING</span>
          <br />
          <span className="ab1-consulting">
            Our expert guidence helps you to choose the best solutions for
            accelerated growth of your business.
          </span>
        </div>
        <div className="consulting-main">
          <div className="rowcon">
            <div className="column">
              <div className="cardcon" id="enterpriseCard">
                <div className="check">
                  <input
                    type="checkbox"
                    id="exper"
                    className="exper"
                    checked={showEnterpriseContent}
                    onChange={handleEnterpriseChange}
                  />
                  <label for="vehicle1">
                    <span className="ab2">
                      <b>
                        I want to develop and refine IT strategy of my company
                      </b>
                    </span>
                  </label>
                </div>
                <div className="abe">
                  <span>ENTERPRISE</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="cardcon" id="startupCard">
                <div className="check">
                  <input
                    type="checkbox"
                    id="exper"
                    className="exper"
                    checked={showStartupContent}
                    onChange={handleStartupChange}
                  />
                  <label for="vehicle1">
                    <span className="ab2">
                      <b>
                        I have an idea and want to establish my
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; business
                      </b>{" "}
                    </span>
                  </label>
                </div>
                <div className="abe">
                  <span>START UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showEnterpriseContent && (
          <div>
            <div class="container-about1">
              <img
                src={banner}
                alt="Nature"
                width="100%"
                height="600px"
                className="nature"
              />
              <div class="text-block1">
              <h4 className="text-blockhead">
              Solving Enterprise level challenges
                </h4>
                <p className="text-blockp">
                Technology is instrumental in supporting your business needs as it evolves over time. With the right combination of software, you can successfully solve the toughest business challenges within the standard workflows. Our enterprise consulting services in India and USA will help you on that journey.
                </p>
              </div>
            </div>
            <div className="split-consulting1">
              <div className="leftc1">
                <h1 className="prps">We will assist you with the following</h1>
              </div>
              <div className="rightc1">
                <div className="content-container">
                  <div className="header-container">
                    <h2>Architecture evaluation and gap analysis</h2>
                    <button onClick={handleToggle}
                     style={{
                      border: 'none',
                      background: 'none',
                      padding: 0,
                      margin: 0,
                      cursor: 'pointer',
                      outline: 'none',
                    }}>
                  
                      {expanded ? <FontAwesomeIcon icon={faPlus} style={{color: "#0a0a0a",}} /> : <FontAwesomeIcon icon={faMinus} style={{color: "#121212",}} />}
                    </button>
                  </div>
                  <div>
                    {expanded && (
                      <p className="header-containerp">
                        Our experts will conduct interviews with stakeholders to
                        collect information about the organization’s IT and the
                        environment it operates in. We will perform the context
                        analysis and indicate main gaps and areas of
                        improvement, based on the acquired data.
                      </p>
                    )}
                  </div>
                </div>
                <div className="content-container">
                  <div className="header-container">
                    <h2>
                      Assess, identify and mitigate business continuity risks
                    </h2>
                    <button onClick={handleToggle}
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: 0,
                      margin: 0,
                      cursor: 'pointer',
                      outline: 'none',
                    }}>
                      {expanded ?  <FontAwesomeIcon icon={faPlus} style={{color: "#0a0a0a",}} /> : <FontAwesomeIcon icon={faMinus} style={{color: "#121212",}} />}
                    </button>
                  </div>
                  <div>
                    {expanded && (
                      <p className="header-containerp">
                        Before we proceed, our team will identify the risks
                        involved with your idea, asses them and reduce the
                        future roadblocks in the enterprise software development
                        and deployment. We’ll perform assessments based on the
                        data acquired on the first step.
                      </p>
                    )}
                  </div>
                </div>
                <div className="content-container">
                  <div className="header-container">
                    <h2>
                      Help you choose the right combination of technologies
                    </h2>
                    <button onClick={handleToggle}
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: 0,
                      margin: 0,
                      cursor: 'pointer',
                      outline: 'none',
                    }}>
                      {expanded ? <FontAwesomeIcon icon={faPlus} style={{color: "#0a0a0a",}} /> : <FontAwesomeIcon icon={faMinus} style={{color: "#121212",}} />}
                    </button>
                  </div>
                  <div>
                    {expanded && (
                      <p className="header-containerp">
                        Be it for mobile, web or anything custom, our enterprise
                        business solutions and consultation is a package that
                        identifies your requirement, the kind of audience your
                        target and then provide you the right tech stack that
                        supports your application for a longer run.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="split-consulting2">
              <div className="leftc2">
                <h1 className="prps">What we do and what you get</h1>
              </div>
              <div className="rightc2">
                <p className="p111">
                  Successful modernization efforts address people, processes,
                  and technologies currently in place and develop plans to
                  reduce risk, promote adoption, and realize the benefits. We’ll
                  get to every step with a robust digital enterprise consulting
                  planning.
                </p>
              </div>
            </div>
            <div className="tablediv">
              <img
                src={table}
                alt="profile"
                width="70%"
                height="100%"
                className="tableimg"
              />
            </div>
            <div className="splitmob">
              <div className="leftmob">
                <h1 className="mobile1">Success</h1>
              </div>
              <div className="rightmob">
                <h1>stories</h1>
              </div>
            </div>
            <div className="suc1">
              <div className="splitlr1">
                <div className="leftlr1">
                  <img
                    src={success1}
                    alt="profile"
                    width="500px"
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
                <div className="rightlr1">
                  <img
                    src={success2}
                    alt="profile"
                    width="500px"
                    height="500px"
                    className="web-development-images"
                  />
                  <br />
                  <span className="sub1">
                    <u>Media</u>
                  </span>
                  <p className="cuspar1">
                    Enterprise Web Application Development for a Fortune 50
                    Media Conglomerate
                  </p>
                </div>
              </div>
            </div>
            <div className="people">
              <h4 className="peplehead">From people like you</h4>
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
                    <div className="peoplediv">
                      <p className="peoplecontnet">
                        Enterprise Web Application Development for a Fortune 50
                        Media Conglomerate
                      </p>
                      <h1 className="peoplename">
                        Dan Milczarski Head of Development, CQ Fluency
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="peoplediv">
                      <p className="peoplecontnet">
                        {'"'} Enterprise Web Application Development for a
                        Fortune 50 Media Conglomerate
                      </p>
                      <h1 className="peoplename">
                        Dan Milczarski Head of Development, CQ Fluency
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="peoplediv">
                      <p className="peoplecontnet">
                        Enterprise Web Application Development for a Fortune 50
                        Media Conglomerate
                      </p>
                      <h1 className="peoplename">
                        Dan Milczarski Head of Development, CQ Fluency
                      </h1>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        )}

        {showStartupContent && (
          <div>
            <div class="container-about1">
              <img
                src={banner6}
                alt="Nature"
                width="100%"
                height="600px"
                className="nature"
              />
              <div class="text-block1">
                <h4 className="text-blockhead">
                  Startup strategy to Kick off right
                </h4>
                <p className="text-blockp">
                  We offer unique expertise that blends diverse entrepreneurial
                  experience, practical solutions, and real business insights in
                  our startup consulting services. We help you to identify the
                  most critical next steps, help them get executed and advice
                  for greater return on investment. Check out what’s in our
                  startup consulting services in India and USA.
                </p>
              </div>
            </div>

            <div className="splitmobil">
              <div className="left1">
                <div className="innerbox">
                  <h4>Validate before you build</h4>
                  <p>
                    We ask the big questions starting from who is your customer,
                    what problems you are trying to solve, how does your product
                    solve the market problem and what are the key features that
                    might give you a headstart. We encourage you to start with a
                    business model canvas which is a one-page strategy
                    consulting for startups describing the high-level strategic
                    details of your product vision.
                  </p>
                </div>
              </div>
              <div className="right1">
                <img
                  src={banner1}
                  alt="Nature"
                  width="100%"
                  height="700px"
                  className="nature"
                />
              </div>
            </div>
            <div className="splitmobil4">
              <div className="left4">
                <img
                  src={banner2}
                  alt="Nature"
                  width="100%"
                  height="600px"
                  className="nature"
                />
              </div>
              <div className="right4">
                <div className="innerbox1">
                  <h4>Get out to test your assumptions</h4>
                  <p>
                    It is the potential buyers of your product to start with for
                    lean market validation. As one of the trusted startup
                    consulting firms, we know the struggles of startups. Hence
                    we recommend after you pen down your assumption list, reach
                    out to a sample of your potential audience to check if they
                    resonate. A few well-phrased questions can yield interesting
                    customer insights
                  </p>
                </div>
              </div>
            </div>
            <div className="splitblack">
              <div className="splitblackleft">
                <h2>
                  Unveil potential business threats and reduce long-term losses
                  with Unified Infotech’s expert technology consultation
                </h2>
              </div>
              <div className="splitblackright">
                <div className="get-button">
                  <a href="/contact">
                    <button className="btn">
                      <b>
                        <b>GET IN TOUCH</b>
                      </b>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div class="container-about2">
              <img
                src={banner}
                alt="Nature"
                width="100%"
                height="500px"
                className="nature"
              />
            </div>
            <div className="splitmobil3">
              <div className="left3">
                <div className="innerbox">
                  <h4>
                    Translate your value proposition to the product roadmap
                  </h4>
                  <p>
                    A roadmap is a strategic-level blueprint for converting your
                    value proposition into a product. Think about your roadmap
                    and milestones, not just in terms of feature list but from
                    customer value stand-point. A few minutes of research based
                    on the data gathered on your target audiences’ persona help
                    you prioritize features and fixes.
                  </p>
                </div>
              </div>
              <div className="right3">
                <img
                  src={banner3}
                  alt="Nature"
                  width="100%"
                  height="600px"
                  className="nature"
                />
              </div>
            </div>

            <div className="splitmobi5">
              <h4 className="planinghead">Planning and Documentation</h4>
              <p className="planingpar">
                From a naive business idea on a scribble pad to a solid document
                articulating feature scoping, use cases and milestone
                definition, we lay out the scope of your project along with your
                collaboration. And this helps in making lesser mistakes in the
                journey. This makes clients trust us as one of the leading
                startup consulting firms globally.
              </p>

              <div className="left5">
                <img
                  src={banner7}
                  alt="Nature"
                  width="90%"
                  height="600px"
                  className="nature"
                />
              </div>
            </div>
            <div className="capabilities-head">
              <div className="webdesign-header">
                <h1>What we do and what we offer</h1>
              </div>
              <div className="capabilities-head-in">
                <div className="row-brand">
                  <div className="column">
                    <div className="card5">
                      <h4 className="carder1inc">Product discovery</h4>
                      <p className="carder1inpc">
                        Initial research to get to the crux of your product
                        concept with an expert cross-functional team,
                        considering the user and business needs using a
                        framework.
                      </p>
                    </div>
                  </div>

                  <div className="column">
                    <div className="card5">
                      <h4 className="carder1in">Market validation</h4>
                      <p className="carder1inp">
                        Collaboratively develop questionnaires to test and
                        validate assumptions of your end users.Interesting
                        insights should lay the foundation of your product
                        vision.
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card5">
                      <h4 className="carder1in">Documentation and roadmap</h4>
                      <p className="carder1inp">
                        Our experts jot down thefeature list, project roadmap
                        with detailed milestone and sprint planning.This brings
                        everyone involved in the project to a consensus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="splitmob">
              <div className="leftmob">
                <h1 className="mobile1">Success</h1>
              </div>
              <div className="rightmob">
                <h1>stories</h1>
              </div>
            </div>
            <div className="suc1">
              <div className="splitlr1">
                <div className="leftlr1">
                  <img
                    src={success1}
                    alt="profile"
                    width="500px"
                    height="500px"
                    className="web-developmentimg"
                  />
                  <br />
                  <span className="sub112">
                    <u>E-Learning</u>
                  </span>
                  <p className="cuspar12">
                    Application Modernization for an eLearning Platform acquired
                    by McGraw Hill Education
                  </p>
                </div>
                <div className="rightlr1">
                  <img
                    src={success2}
                    alt="profile"
                    width="500px"
                    height="500px"
                    className="web-developmentimg"
                  />
                  <br />
                  <span className="sub112">
                    <u>Media</u>
                  </span>
                  <p className="cuspar12">
                    Enterprise Web Application Development for a Fortune 50
                    Media Conglomerate
                  </p>
                </div>
              </div>
            </div>
            <div className="people">
              <h4 className="peplehead">From people like you</h4>
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
                    <div className="peoplediv">
                      <p className="peoplecontnet">
                        Enterprise Web Application Development for a Fortune 50
                        Media Conglomerate
                      </p>
                      <h1 className="peoplename">
                        Dan Milczarski Head of Development, CQ Fluency
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="peoplediv">
                      <p className="peoplecontnet">
                        {'"'} Enterprise Web Application Development for a
                        Fortune 50 Media Conglomerate
                      </p>
                      <h1 className="peoplename">
                        Dan Milczarski Head of Development, CQ Fluency
                      </h1>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="peoplediv">
                      <p className="peoplecontnet">
                        Enterprise Web Application Development for a Fortune 50
                        Media Conglomerate
                      </p>
                      <h1 className="peoplename">
                        Dan Milczarski Head of Development, CQ Fluency
                      </h1>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        )}
        <div className="split-consulting1">
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

export default Consulting;

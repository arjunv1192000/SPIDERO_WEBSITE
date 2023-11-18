import React, { useState } from "react";
import "./webdesign.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-scroll";
import acc from "../assets/acc.png";
import qu from "../assets/Qua.png";
import proa from "../assets/Pr.png";
import agi from "../assets/Agi.png";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import webdesignimg from "../assets/React App - Google Chrome 04-10-2023 09_17_51 AM (2).png";
import webdesignimg1 from "../assets/Web Design Company in New York, USA - Unified Infotech - Google Chrome 04-10-2023 09_35_17 PM (2).png";
import slidea from "../assets/Slideimage/slideA.jpg";
import slideb from "../assets/Slideimage/slideB.jpg";
import slidec from "../assets/Slideimage/slideC.jpg";
import slided from "../assets/Slideimage/slideD.jpg";
import foot from "../assets/footer-banner1_2x.webp";
import backdesign from "../assets/nyc-banner@2x.jpg";
import emailjs from '@emailjs/browser';
import dan from "../assets/dan.png";
import Footer from "../Footer/footer";


const Webdesign = () => {
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

 
  AOS.init(); // Initialize AOS
  return (
    <section id="webdesign">
      <div className="sev">
        <div className="webdesign1">
          <img src={backdesign} />
          <div className="intro-content-webdesign">
            <div className="splitweb">
              <div className="leftweb">
                <h4 className="web-head">
                  A top-rated web design company <br /> in New York
                </h4>
                <div className="but1web">
                  <a href="#success-stories">
                    <button className="btnweb">
                      <b>
                        <b>SUCCESS STORIES</b>
                      </b>
                    </button>
                  </a>
                </div>
              </div>
              <div className="rightweb">
                <div className="contact-box-web">
                  <form
                      onSubmit={handleSubmit}
                  >
                    <span className="con">
                      <h3>Connect With US</h3>
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
                      <span className="con2">Phone Number</span>
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
                        <input
                          type="file"
                          id="file-upload"
                          name="file-upload"
                        />
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
          </div>
        </div>
        <div className="splitweb2">
          <div className="leftweb2">
            <div className="pr">
              <h1 className="prop1">
                Creativity & rational thinking into <br />
                web design & development
              </h1>
              <p className="propp">
                In a time when websites are competing in the race for visibility
                and engagement, we help our clients to stand out by going beyond
                the straightforward conventional ways. Keeping users as the
                prime focus, we feel them from their perspective to make sure
                our efforts ‘engage’ them. From keeping a creative touch to
                color, messaging layout, iconography and the UX, we layout the
                UI design that brings on board the max number of users. Our web
                design NYC hub specializes in engaging in-house talents who can
                actually turn your idea into reality..
              </p>
            </div>
          </div>
          <div className="rightweb2">
            <div class="grid2x2">
              <div className="row">
                <div className="column">
                  <div class="item" data-aos="flip up" data-aos-duration="1000">
                    <img src={acc} class="ab-image" alt="profile" />
                    <p>Accountability</p>
                  </div>
                </div>
                <div className="column">
                  <div class="item" data-aos="flip up" data-aos-duration="1000">
                    <img src={qu} class="ab-image" alt="profile" />
                    <p>Quality</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div class="item" data-aos="flip up" data-aos-duration="1000">
                    <img src={proa} class="ab-image" alt="profile" />
                    <p>Proactivity</p>
                  </div>
                </div>
                <div className="column">
                  <div class="item" data-aos="flip up" data-aos-duration="1000">
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
          <div className="button">
            <a href="#designwebsite">
              <button className="bt">SHARE YOUR PROJECT REQUIREMENTS</button>
            </a>
          </div>
        </div>
        <div className="capabilities-head">
          <div className="webdesign-header">
            <h1>Our capabilities</h1>
          </div>
          <div className="capabilities-head-in">
          <div className="row-brand">
                  <div className="column">
                    <div className="card5">
                      <h4 className="carder1inc">Web Design</h4>
                      <p className="carder1inpc">
                      How about engaging your audience in 5 seconds with a stellar web design experience? Our strategic planning and design methodologies can make this happen.
                      </p>
                    </div>
                  </div>

                  <div className="column">
                    <div className="card5">
                      <h4 className="carder1in">Web Development</h4>
                      <p className="carder1inp">
                      From ideation, concept development and prototyping to finally launching your website, we do it all with our 12+ years of experience as a leading web development company in New York.
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card5">
                      <h4 className="carder1in">Brand Strategy</h4>
                      <p className="carder1inp">
                      We go through an in depth research to offer you a brand strategy that’s better than your competitor’s to position you absolutely high and memorable in the market.
                      </p>
                    </div>
                  </div>
                </div>
          </div>
          <div className="button1">
            <a href="/contact">
              <button className="bt11">
                <span className="shr">
                  <b>CONTACT US</b>
                </span>
              </button>
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
                        legacy system into a modern-day eLearning solution with
                        advanced capabilities and a seamless user experience.
                        The solution recorded 2x sales and 3x user engagement in
                        just 1 month post launch and continues to grow rapidly.
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
                        Enterprise Web Application Development for a Fortune 50
                        Media Conglomerate{" "}
                      </h2>
                    </div>
                    <div className="stitle">
                      <p>
                        We engineered a robust web application for the client’s
                        marketing team that enabled them to better manage and
                        monitortheir blue-chip advertising customers.
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
                        From an idea on a document, to now this Seed Funded SaaS
                        business, we are the proud end-to-end technology partner
                        and continue to scale the product.
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
                        application that seamlessly enables end-users to develop
                        new drug formulations supported by an intelligent
                        recommendation and validation engine.
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
        <div className="blak">
          <div className="blak1in">
            <h1>A super creative web design process that makes us different</h1>
            <p>
              As a web design agency in NYC, we engage in a strategy workshop,
              user personas, information architecture, pixel-perfect icons, and
              user interface. We follow every web design process very
              diligently. As a result, we can develop a mobile-friendly B2B web
              design that satisfies the user.
            </p>
          </div>
          <div class="gridweb">
            <div className="row-grid">
              <div className="column-grid">
                <div
                  class="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <div className="card2">
                    <h4 className="colweb">
                      Competitor analysis & Strategy planning
                    </h4>
                    <p className="colweb1">
                      While defining our web design strategy, we analyze the
                      competitor data to identify opportunities and threats.
                      Stakeholders sit together to decide on what to do and what
                      not to do in the UI/UX strategy. We lay out the dots to
                      join.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column-grid">
                <div
                  class="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <div className="card2">
                    <h4 className="colweb">User persona & empathy mapping</h4>
                    <p className="colweb1">
                      Since every website design is different, we create user
                      personas to define the audience a business targets. This
                      helps in joining the dots to qualitative and quantitative
                      research. This leads us to understand what the user is
                      thinking or feeling.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column-grid">
                <div
                  class="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <div className="card2">
                    <h4 className="colweb">Information Architecture</h4>
                    <p className="colweb1">
                      We have IA as our secret weapon to prevent disasters like
                      costly redesigns! Information Architecture helps in
                      organizing, labeling and structuring content in a way that
                      makes the user complete intended tasks in the website
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-grid">
              <div className="column">
                <div
                  class="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <div className="card2">
                    <h4 className="colweb">Creating low fidelity sketches</h4>
                    <p className="colweb1">
                      As we gather the IA, we get a fair understanding of
                      composing the screen structure. We start creating on paper
                      prototypes, using navigations and content action for user
                      engagement journeys. Early feedback and less reworks makes
                      everyone’s life easier.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column-grid">
                <div
                  class="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <div className="card2">
                    <h4 className="colweb">
                      Creating high fidelity wireframes
                    </h4>
                    <p className="colweb1">
                      As our designers complete the sketches, they transfer the
                      paper prototypes into high fidelity wireframes by defining
                      exact shape, size and reference of how the actual screen
                      would look like after development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column-grid">
                <div
                  class="item6flip"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <div className="card2">
                    <h4 className="colweb">Setting up UI guidelines</h4>
                    <p className="colweb1">
                      The last step is preparing a foolproof guidesheet where we
                      list down the UI guidelines with color palette, icons,
                      typography and their components. For every design we do,
                      we have a client requirement specific UI guideline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button11">
          <a href="#designwebsite">
            <button className="bt11-design">
              <b>DESIGN YOUR WEBSITE</b>
            </button>
          </a>
        </div>
        <div className="message">
          <h1>Messages That Mean Something</h1>
          <p>
            Being impulsive is not an option when it comes to building a good
            narrative for a website design. We engage in creating visually
            appealing website design whether it be an enterprise website or an
            educational one. It helps establish a deeper connection with the
            audience. We build user-centric models that separate us from other
            Web Design & Development Companies in New York.
          </p>
        </div>
        <div className="emphasis">
          <div className="split-webdesign">
            <div className="leftwebdesign">
              <h1 className="web-head1">Emphasis On Mobile First Web Design</h1>
              <p className="web-head2">
                In this age of information, mobile phones are no longer a trend,
                but a necessity. Our designers craft user experiences and make
                them compatible with every platform. We build prototypes ranging
                from small to large-sized screens. As we also stand out as a
                responsive web design company we invest in the crucial aspects
                of web design content, given the limited real estate on smaller
                screens.
              </p>
              <p className="web-head2">
                Thus, it has become increasingly important to develop pro-mobile
                web designs, as Google is now inclined towards using them for
                indexing and ranking.
              </p>
              <h4 className="web-head11">CONVINCED?</h4>
              <div className="button12">
                <a href="#designwebsite">
                  <button className="bt11">
                    <b>DISCUSS YOUR WEBSITE</b>
                  </button>
                </a>
              </div>
            </div>
            <div className="rightwebdesign">
              <img
                src={webdesignimg}
                alt="profile"
                className="img1-webdesign"
              />
            </div>
          </div>
        </div>
        <div className="split-webdesign1">
          <div className="left-webdesign1">
            <img
              src={webdesignimg1}
              alt="profile"
              width="100%"
              height="300px"
            />
            <h1 className="web-head12">
              Our Design Principles That Fetch Optimum Conversions
            </h1>
            <p className="web-head21">
              Reports say that web design is the prime determinant of a
              company’s credibility. We understand the importance of making it
              as professional as possible.
            </p>
          </div>
          <div className="rightwebdesign1">
            <div className="row">
              <div className="column">
                <div
                  class="card-webdesign-web"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <h4 className="colweb2">Providing Limited Choices</h4>
                  <p className="colweb11">
                    Hick-Hyman’s law states that whenever you give too many
                    options, users can deviate from taking the actual intended
                    decision. Hence to minimize this risk, we tend to reduce the
                    number of options to make users feel at ease. For every
                    project in New York for web design we go, we keep this in
                    mind.
                  </p>
                  &nbsp;
                  <p className="colweb12">APPLY HICK'S LAW</p>
                </div>
              </div>
              <div className="column">
                <div
                  class="card-webdesign-web"
                  data-aos="flip up"
                  data-aos-duration="1000"
                >
                  <h4 className="colweb2">
                    Blank Spaces? Not As Bad As You Think
                  </h4>
                  <p className="colweb11">
                    No matter how stupid it sounds, we always leave white spaces
                    between contents. Without it, the contents feel too crammed
                    and suffocating to read. Contrary to popular belief, leaving
                    white spaces helps the viewer to focus on the content. So,
                    as a web design company in NYC, we maintain it.
                  </p>
                  &nbsp;
                  <p className="colweb12">USE NEGATIVE SPACE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-webdesign-in">
          <div className="row">
            <div className="column">
              <div
                class="card-webdesign"
                data-aos="flip up"
                data-aos-duration="1000"
              >
                <h4 className="colweb2">CTA Insertions In Core Visual Areas</h4>
                <p className="colweb11">
                  Whether a design is pro-mobile or web responsive, it is of no
                  use if it fails at generating optimum conversions. Having said
                  that, we strategically place powerful CTAs in every relevant
                  information. Thus, we help you to generate an optimum level of
                  CTA.
                </p>
                &nbsp;
                <p className="colweb12">RULE OF THIRDS</p>
              </div>
            </div>
            <div className="column">
              <div
                class="card-webdesign"
                data-aos="flip up"
                data-aos-duration="1000"
              >
                <h4 className="colweb2">Best Blend Of Color And Contrast</h4>
                <p className="colweb11">
                  Neuromarketing studies reveal that the right color combination
                  enhances the visual appeal of a product. With considerable
                  knowledge on color psychology, our design experts engage in
                  color-contrast optimization, providing the right color
                  combination that fetches optimum CTA.
                </p>
                &nbsp;
                <p className="colweb12">BUILD HIERARCHY</p>
              </div>
            </div>
            <div className="column">
              <div
                class="card-webdesign"
                data-aos="flip up"
                data-aos-duration="1000"
              >
                <h4 className="colweb2">
                  Specific Action And Familiarity Reinforcement
                </h4>
                <p className="colweb11">
                  It is much like celebrity endorsement, just on a web platform.
                  Familiar faces build trust in users and increase CTAs. People
                  often empathize with a familiar face. So, we must incorporate
                  as many of them in the web design.
                </p>
                &nbsp;
                <p className="colweb12">ESTABLISH RECOGNITION</p>
              </div>
            </div>
            <div className="column">
              <div
                class="card-webdesign"
                data-aos="flip up"
                data-aos-duration="1000"
              >
                <h4 className="colweb2">Consistent Branding</h4>
                <p className="colweb11">
                  To effectively market a website, we, as an experienced web
                  design agency in New York, always suggest maintaining a
                  balanced consistency in brand color, essence, and faces
                  throughout. It enhances user experience in both computer and
                  mobile-friendly web designs.
                </p>
                &nbsp;
                <p className="colweb12">SET THE TONE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="split">
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
                  <div className="card-contactdesign">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imagedesign"
                      />
                      <span className="start-quotedesign"></span>
                      <br />
                      <span className="card-contact-paradesign">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingdesign">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-carddesign">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-contactdesign">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imagedesign"
                      />
                      <span className="start-quotedesign"></span>
                      <br />
                      <span className="card-contact-paradesign">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingdesign">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-carddesign">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-contactdesign">
                    <span>
                      <img
                        src={dan}
                        alt="profile"
                        className="circular-imagedesign"
                      />
                      <span className="start-quotedesign"></span>
                      <br />
                      <span className="card-contact-paradesign">
                        Spidero Technology worked like a true partner, &
                        delivered a top-notch software product that
                        significantly elevated our customer experience.
                      </span>
                      <br />
                      &nbsp;
                      <br />
                      <strong className="contactheadingdesign">
                        Dan Milczarski
                      </strong>{" "}
                    </span>
                    <br />
                    <span className="contact-head-carddesign">
                      Head of Development, CQ Fluency
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="rightb">
            <section id="designwebsite">
              <div className="contact-box">
                <form
                  onSubmit={handleSubmit}
                >
                  <span className="con">
                    <h3>
                      Need a quote for designing your website? Let’s talk.
                    </h3>
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
                    <span className="con2">Phone Number</span>
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
            </section>
          </div>
        </div>
        <div className="split-webdesign-foot">
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
                <button className="btn">GET IN TOUCH</button>
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

export default Webdesign;

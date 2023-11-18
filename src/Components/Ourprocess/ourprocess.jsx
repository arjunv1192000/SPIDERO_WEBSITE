import React from "react";
import "./ourprocess.css";
import des from "../assets/design@2x.jpg";
import tool1 from "../assets/asana@2x.jpg";
import tool2 from "../assets/axure@2x.jpg";
import tool3 from "../assets/github@2x.jpg";
import tool4 from "../assets/jira@2x.jpg";
import tool5 from "../assets/office365@2x.jpg";
import tool6 from "../assets/skype@2x.jpg";
import tool7 from "../assets/slack@2x.jpg";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import foot from "../assets/footer-banner1_2x.webp";

// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css';
// import 'swiper/css/pagination';




// import { Mousewheel, Pagination } from 'swiper/modules';
// import { FreeMode, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Footer from "../Footer/footer";


const ourprocess = () => {
  return (
    <section id="our">
      <div className="frt">
        <span className="ab">
          <b>
            <h1>HOW WE WORK</h1>
          </b>
        </span>
        <span className="ab1">
          <b>
            <h1>
              The process is defined as a sequence of steps. When followed, it
              helps to achieve a goal. We consider it - the art of thinking
              through.
            </h1>
          </b>
        </span>
        <div className="title">
          <span>
            <h3>Let's talk about the specifics</h3>
          </span>
        </div>
       <div>
       
       {/* <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="scroll-container">
            <h4>Scroll Container</h4>
            <div className="scroll-content">
              
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="scroll-container">
            <h4>Scroll Container</h4>
            <div className="scroll-content">
              
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="scroll-container">
            <h4>Scroll Container</h4>
            <div className="scroll-content">
              
              
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="scroll-container">
            <h4>Scroll Container</h4>
            <div className="scroll-content">
              
            </div>
          </div>
          
        </SwiperSlide>
       
      </Swiper> */}
       {/* <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="scroll-container">
            <h4>Scroll Container</h4>
            <div className="scroll-content">
              
              
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="scroll-container">
            <h4>Scroll Container</h4>
            <div className="scroll-content">
              
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    
       </div>
    
   
        <div className="service1">
          <h4>
            <u>DISCOVERY WORKSHOP</u>
          </h4>
          <div className="servicebars">
            <div className="servicebar">
              <div className="servicebarText">
                <h2 className="custom-objective">Objectives</h2>
                <div className="service2">
                  <ul className="custom">
                    <li>
                      Run through the entire project with the cient based on the
                      initial proposal and agreement
                    </li>
                    <li>
                      Establish a detailed idea about the goals and business
                      objectives of the client
                    </li>
                    <li>Understanding the competitive landscape</li>
                    <li>
                      Understanding the target audience,market & geography
                    </li>
                    <li>
                      Clarifying all queries and doubts which the team has,post
                      initial analysis
                    </li>
                    <li>
                      Understanding and documenting client's design and branding
                      preferences
                    </li>
                    <li>Laying down assumptions and constrains</li>
                    <li>Coming with a high level epic mapping</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>OUTCOME</b>
                </h2>
              </div>
              <ul className="custom">
                <li>
                  Have a precise and clear idea about the client's and project's
                  goals
                </li>
                <li>
                  Have a clear idea about the likes and dislikes of the client
                </li>
                <li>
                  Getting client's input's and clarification on all open-ended
                  points
                </li>
                <li>
                  Having all the information required for the planning phase
                </li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>TEAM MEMBERS INVOLVED</b>
                </h2>
              </div>
              <ul className="custom">
                <li>Project Manager</li>
                <li>Tech Lead</li>
                <li>IA & UX Lead</li>
                <li>Project Owner/Client</li>
                <li>Business Analyst</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service1">
          <h4>
            <u>PLANNING</u>
          </h4>
          <div className="servicebars">
            <div className="servicebar">
              <div className="servicebarText">
                <h3>Objectives</h3>
                <div className="service2">
                  <ul className="custom">
                    <li>
                      Creation of all relevant documentation required for
                      successful execution of the project
                    </li>
                    <li>
                      Getting confirmation and approval from the client on the
                      documents and materials
                    </li>
                    <li>Defining the project plan</li>
                    <li>
                      Defining the design and branding guidelines of the project
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>OUTCOME</b>
                </h2>
              </div>
              <ul className="custom">
                <li>
                  To get everything documentation in detail,leaving nothing for
                  chance or assumption{" "}
                </li>
                <li>
                  To get client's approval and signoff on the documentation and
                  project plan{" "}
                </li>
                <li>
                  To have a well-defined and precise planning of the project
                </li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>DELIVERABLES</b>
                </h2>
              </div>
              <ul className="custom">
                <li>Detailed technical Specification</li>
                <li>Wire-frames</li>
                <li>User Stories</li>
                <li>Project plan with detailed milestone/sprint planning</li>
                <li>Test cases and scenarios</li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h1>
                  <b>
                    <strong>TEAM MEMBERS INVOLVED</strong>
                  </b>
                </h1>
              </div>
              <ul className="custom">
                <li>Project Manager</li>
                <li>Tech Lead</li>
                <li>IA & UX Lead</li>
                <li>Ui Design Lead</li>
                <li>Business Analyst</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service1">
          <h4>
            <u>DESIGN</u>
          </h4>
          <div className="design">
            <img
              src={des}
              alt="profile"
              width="90%"
              height="700"
              className="img-design"
            />
          </div>
          <div className="servicebars">
            <div className="servicebar">
              <div className="servicebarText">
                <h3>Objectives</h3>
                <div className="service2">
                  <ul className="custom">
                    <li>
                      UI Design of all the project screens based on the approved
                      wire-frames and design guidelines
                    </li>
                    <li>Web,Tablet and Mobile specific designs</li>
                    <li>
                      Getting system UI Designs approved and confirmed by the
                      client
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>DELIVERABLES</b>
                </h2>
              </div>
              <ul className="custom">
                <li>UI Designs of the projects</li>
                <li>Clickable prototype on invision platform </li>
                <li>Source files in either Photoshop or Sketch format</li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h1>
                  <b>
                    <strong>TEAM MEMBERS INVOLVED</strong>
                  </b>
                </h1>
              </div>
              <ul className="custom">
                <li>Project Manager</li>
                <li>IA & UX Lead</li>
                <li>UI Design Lead</li>
                <li>UI Designer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service1">
          <h4>
            <u>DEVELOPMENT</u>
          </h4>
          <div className="servicebars">
            <div className="servicebar">
              <div className="servicebarText">
                <h3>Objectives</h3>
                <div className="service2">
                  <ul className="custom">
                    <li>
                      Catering the requirement for frontend,backend,web
                      services, and API development integration
                    </li>
                    <li>prepare a strategy for agile Scrum methodology</li>
                    <li>
                      Factor the aspects of multi-tenancy,scalability,3rd party
                      integration
                    </li>
                    <li>
                      To step up a 2-3 week frequency for sprints/milestones
                    </li>
                    <li>Crafting an optimized clean code structure</li>
                    <li>Involve client review in each sprint/milestone</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>WEB TECHNOLOGIES</b>
                </h2>
              </div>
              <ul>
                <li>Back-end: Larvel,Ruby,Python,Node.JS,Java </li>
                <li>Front-end: AngularJS, ReactJS,VueJS Html5,CSS </li>
                <li>Database: MongoDB, MYsql,postgreSQL,Firebase</li>
                <li>OpenSource: Drupal, Magento,Wordpress</li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>
                  <b>MOBILE TECHNOLOGIES</b>
                </h2>
              </div>
              <ul className="custom">
                <li>iOS: ObjectiveC, Swift, xCode</li>
                <li>Android: Java, Android studio</li>
                <li>Hybrid: Ionic, ReactNative</li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h1>
                  <b>
                    <strong>TEAM MEMBERS INVOLVED</strong>
                  </b>
                </h1>
              </div>
              <ul className="custom">
                <li>Project Manager</li>
                <li>Tech Lead</li>
                <li>Front-End Developers</li>
                <li>Back-End Developers</li>
                <li>QA Engineer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service1">
          <h4>
            <u>TESTING</u>
          </h4>
          <div className="servicebars">
            <div className="servicebar">
              <div className="servicebarText">
                <h3>Objectives</h3>
                <div className="service2">
                  <ul className="custom">
                    <li>Each sprint/milestone is tested manually</li>
                    <li>Bugs are reported and added to product backlog</li>
                    <li>
                      Upon bug fixing,quality release is provided and then the
                      final demo of the sprint is sent to the client for
                      approval
                    </li>
                    <li>
                      Regression testing after each sprint to ensure proper
                      functioning of the previous approved sprints/milestone
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h2>TYPES OF TESTING</h2>
              </div>
              <ul className="custom">
                <li>Unit Testing</li>
                <li>Manual Testing</li>
                <li>Regression Testing</li>
                <li>Security Testing</li>
                <li>Automation Testing</li>
                <li>Load & Stress Testing</li>
                <li>Performance </li>
                <li>Code Review</li>
                &nbsp;
              </ul>
            </div>
            <div className="servicebarText1">
              <div className="about">
                <h1>TEAM MEMBERS INVOLVED</h1>
              </div>
              <ul className="custom">
                <li>Account Manager</li>
                <li>Project Manager</li>
                <li>QA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service1">
          <h4>
            <u>MAINTENANCE</u>
          </h4>
          <div className="servicebars">
            <div className="servicebar">
              <div className="servicebarText">
                <h3>Overview</h3>
                <div className="service2">
                  <ul className="custom">
                    <li>Product enhancement through an Agile approach</li>
                    <li>Regular Security Audits</li>
                    <li>Bi-weekly code back-ups</li>
                    <li>
                      Constant upgradation of the system based on new
                      software/version release
                    </li>
                    <li>
                      Full Testing the system each month to find any bugs,
                      incompatability and error
                    </li>
                    <li>
                      Monitorizing of the traffic and server load and optimizing
                      according to the business needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title1-ourprocess">
          <h3>Project Communication Structure</h3>
        </div>
        <div className="title1-ourprocess1">
          <div class="row">
            <div class="card">
              <h4 className="se">Daily Scrum Standup</h4>
              <span className="sec">Mon-fri</span>
              <br />
              <ul>
                <li className="sec">
                  Check previous day’s work, current day’s plans, any queries,
                  hurdles etc
                </li>
                <li className="sec">
                  Project Manager with the entire Project Team
                </li>
              </ul>
            </div>
            <div class="card">
              <h4 className="se">
                Weekly <br />
                Review
              </h4>
              <span className="sec">Weekly</span>
              <ul>
                <li className="sec">
                  "Improvements to process (No finger pointing!)"
                </li>
                <li className="sec">
                  Client along with the Project Manager & Team lead
                </li>
              </ul>
            </div>
            <div class="card">
              <h4 className="se">
                Sprint <br />
                Delivery{" "}
              </h4>
              <span className="sec">2-3 weeks</span>
              <br />
              <ul>
                <li className="sec">Demostration for the client </li>
                <li className="sec">
                  Client along with the project Manager & Team Lead
                </li>
              </ul>
            </div>
            <div class="card">
              <h4 className="se">
                Code <br />
                Reviews
              </h4>
              <span className="sec">Bi-Weekly</span>
              <ul>
                <li className="sec">Code Review</li>
                <li className="sec">Tech Lead</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="split">
          <div className="leftcol">
            <div className="collab">
              <h5>Collabiration Tools</h5>
            </div>
            <p className="collab1">
              we make sure to use the tools that are top of the market to bring
              your ideas into reality.Our careful selection of tools makes sure
              that your ideas are execduted with the highest level of efficiency
            </p>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="collab">
                <h5>Engagement Models</h5>
              </div>
              <p className="collab1">
                we aim to deliver excellence at every step of projects and
                finish our job with the top level of efficiency and dedication
              </p>
            </div>
          </div>
          <div className="rightcol">
            <div className="cardtool1">
              <img src={tool1} alt="profile" className="imgtool" />
              <span className="imgSpace"></span>
              <img src={tool2} alt="profile" className="imgtool" />
              <span className="imgSpace"></span>
              <img src={tool3} alt="profile" className="imgtool" />
              <span className="imgSpace"></span>
              <img src={tool4} alt="profile" className="imgtool" />
              <span className="imgSpace"></span>
              <img src={tool6} alt="profile" className="imgtool" />
              <span className="imgSpace"></span>
              <img src={tool7} alt="profile" className="imgtool" />
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

export default ourprocess;

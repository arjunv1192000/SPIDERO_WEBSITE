import React from "react";
import "./careers.css";
import career from "../assets/Client/career-banner@2x.jpg";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import foot from "../assets/footer-banner1_2x.webp";
import Footer from "../Footer/footer";


const careers = () => {
  return (
    <section id="car">
      <div className="careers">
        <div className="careers-head">
          <span className="career-head1">CAREERS</span>
          <br />
          <span className="career-head2">
            We're looking for brilliant minds to join our top-notch team and
            make it even better. Are you ready?
          </span>
        </div>
        <div class="container-career">
          <img
            src={career}
            alt="career"
            width="80%"
            height="700px"
            className="nature1"
          />
          <div class="text-block4">
          <h4 className="text-blockhead1">
          Explore Opportunities
                </h4>
                <p className="text-blockp1">
                If you love everything web & mobile, you have landed on the right page. Pick what describes you the best and we will walk the talk.
                </p>
          </div>
        </div>
        <div className="roles">
          <div className="rolecard">
           <h4>Your Heading</h4>
            <h2>Your Heading</h2>
            <hr />
            <p>Your text goes here.</p>
          </div>
          <div className="rolecard">
           <h4>Your Heading</h4>
            <h2>Your Heading</h2>
            <hr />
            <p>Your text goes here.</p>
          </div>
          <div className="rolecard">
           <h4>Your Heading</h4>
            <h2>Your Heading</h2>
            <hr />
            <p>Your text goes here.</p>
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

export default careers;

import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import dan from "../assets/dan.png";
import jason from "../assets/Jason-Ryan@3x.png";
import emailjs from '@emailjs/browser';
import Footer from "../Footer/footer";
const Contact = () => {
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

  const goBack = () => {
    window.history.back();
  };
  return (
    <section id="contact">
      <div className="ten">
        <div className="contact-head">
          <span className="contact-head1">Awesomeness awaits!</span>
          <br />
          <span className="contact-head2">Connect with our experts.</span>
        </div>
        <div className="split-contact">
          <div className="leftb-contact">
            <div className="contact-box-webcontact">
              <form
                onSubmit={handleSubmit}
              >
                <div className="input-box">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="full name"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-Mail"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="phone number"
                    required
                  />
                </div>
                <div className="input-box">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    required
                  ></textarea>
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
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacy-policy"
                  required
                />
                <label for="privacy-policy">
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
          <div className="rightb-contact">
            <div className="get-contact">
              <span className="get-contact1">
                <b>
                  <b>Get In Touch With Us:</b>
                </b>
              </span>
              &nbsp;
              <br />
              <div className="get-contact2">
                <span>
                  <img
                    src={web4}
                    alt="profile"
                    className="imgweb-address12"
                  />{" "}
                  &nbsp;+91 80896502
                </span>
                <br />
                &nbsp;
                <br />
                <span>
                  <img
                    src={web5}
                    alt="profile"
                    className="imgweb-address12"
                  />{" "}
                  &nbsp;+44 7459850729
                </span>
                <br />
                <a href="mailto:contact@spidero.in">
                <span>
                  <b>
                    <b>contact@spidero.in</b>
                  </b>
                </span>

                </a>
               
              </div>
            </div>
            <div className="card-contact-main">
              <div className="card-contact">
                <span className="start-quote"></span>
                <br />
                <span className="card-contact-para">
                  Spidero Technology worked like a true partner, & delivered a
                  top-notch software product that significantly elevated our
                  customer experience.
                </span>
                <br />
                &nbsp;
                <br />
                <span>
                  <img src={dan} alt="profile" className="circular-image" />
                  <strong>Dan Milczarski</strong>{" "}
                </span>
                <br />
                <span className="contact-head-card">
                  Head of Development, CQ Fluency
                </span>
              </div>
            </div>
            <div className="card-contact-main">
              <div className="card-contact">
                <span className="start-quote"></span>
                <br />
                <span className="card-contact-para">
                  Spidero performed flawlessly and has been a great partner.
                  They are also exceptionally good at discerning the unknowns in
                  development and their consulting and suggestions have been
                  game-changing.{" "}
                </span>
                <br />
                &nbsp;
                <br />
                <span>
                  <img src={jason} alt="profile" className="circular-image" />
                  <strong>DR. Jason Ryan</strong>{" "}
                </span>
                <br />
                <span className="contact-head-card">CEO, Boards & Beyond</span>
              </div>
            </div>
          </div>
        </div>
        <div className="split-googlemap">
          <div className="left-googlemap">
            <div className="row">
              <div className="column">
                <img
                  src={web5}
                  alt="profile"
                  className="imgweb-address1-google"
                />
              </div>
              <div className="column">
                <span className="inuk">United Kingdom</span>
              </div>
            </div>
            <span className="ind-address-google">
              {" "}
              2 Westbourne Crescent, London, W2 3DB
            </span>
            &nbsp;
            <div className="card-googlemap1">
              <div>
                <iframe
                  width="100%"
                  height="400"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=2%20Westbourne%20Crescent,%20London,%20W2%203DB+(Spidero%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/population/">
                    Population Estimator map
                  </a>
                </iframe>
              </div>
            </div>
          </div>
          <div className="right-googlemap">
            <div className="row">
              <div className="column">
                <img
                  src={web4}
                  alt="profile"
                  className="imgweb-address1-google"
                />
              </div>
              <div className="column">
                <span className="inuk">India</span>
              </div>
            </div>
            <span className="ind-address-google1">
              {" "}
              Ennakkad Ulunthy Rd, Ennakkad Gramam, Kerala
            </span>
            &nbsp;
            <div className="card-googlemap">
              <div>
                <iframe
                  width="100%"
                  height="400"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Ennakkad%20Ulunthy%20Rd,%20Ennakkad%20Gramam,%20Kerala,%20689624+(Spidero%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/population/">
                    Find Population on Map
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
       
      </div>
    </section>
  );
};

export default Contact;

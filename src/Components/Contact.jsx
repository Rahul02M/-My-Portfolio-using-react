import React from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Contact = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <section className="ContactPage" id="Contact">
      <motion.h2
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Get in Touch
      </motion.h2>
      <Typewriter
        options={{
          strings: ["Contact Me"],
          autoStart: true,
          loop: true,
          cursor: "",
          wrapperClassName: "typewriterpara",
        }}
      />
      {/* -----------Conatctpage-----------*/}
      <div className=" MainContainer">
        <div className="LinkContainer">
          <h3 className="LinkTitle"> Talk to me</h3>

          <div className="LinkInfo">
            <div className="ContactLink">
              <i>
                <CiMail />
              </i>
              <h3 className="ContactEmail">Email</h3>

              <p className="id">m2003rahul@gmail.com</p>

              <a
                target="blank"
                href="mailto:m2003rahul@gmail.com"
                className="Contact
                _btn"
              >
                Text me
                <i>
                  <FaArrowRight />
                </i>
              </a>
            </div>

            <div className="ContactLink">
              <i>
                <FaWhatsapp />
              </i>
              <h3 className="ContactWhatsapp">Whatsapp</h3>

              <p className="whatsappNo">9990008887</p>
              <a
                target="blank"
                href="https://web.whatsapp.com/"
                className="contact-button"
              >
                Text me
                <i>
                  <FaArrowRight />
                </i>
              </a>
            </div>

            <div className="ContactLink">
              <i>
                <FaLinkedin />
              </i>
              <h3 className="contact-card-title">LinkedIn</h3>
              <p className="contact-card-data">Rahul M</p>
              <a
                target="blank"
                href="https://www.linkedin.com/in/rahul-m2003"
                className="contact-button"
              >
                Text Me
                <i>
                  <FaArrowRight />
                </i>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          className="ContactForm"
        >
          <h3 className="ContactTitle">Write me your project</h3>

          <form action="" className="Form">
            <div className="Contactformdiv">
              <label className="tag">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Insert your name"
              ></input>
            </div>

            <div className="Contactformdiv">
              <label className="tag">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Insert your Email"
              ></input>
            </div>

            <div className="Contactformdiv">
              <label className="tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="input"
                id="textarea"
                placeholder="Write your project"
              ></textarea>
            </div>
          </form>
          <button className="btn">
            Send Message <CiLocationArrow1 />
          </button>
        </motion.div>
      </div>
      {/* -----------scroll-----------*/}
      <div>
        <a href="#" className="scrollup">
          <IoIosArrowRoundUp />
        </a>
      </div>
      {/* -----------footer-----------*/}
      <div class="footer-links">
        <a>Copyright © Rahul</a>
        <a>
          <motion.span
            initial={{ "--rotate": "0deg" }}
            animate={{ "--rotate": "360deg" }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TfiWorld style={{ transform: "rotate(var(--rotate))" }} />
          </motion.span>
          Delhi, India
        </a>
        <a target="blank" href="https://github.com/Rahul02M">
          <span>
            <FaGithub />
          </span>
          Github
        </a>
        <a target="blank" href="https://www.linkedin.com/in/rahul-m2003">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;

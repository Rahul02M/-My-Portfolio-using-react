import { animate, motion } from "framer-motion";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../Asset/logo.jpg";

const Home = () => {
  const project = useRef(null);

  const animateproject = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (project.current.textContent = v.toFixed()),
    });
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: "0",
              opacity: 1,
            }}
          >
            Hello, I Am
            <br /> Rahul
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Front-End Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <p>Aspiring Full Stack Developer !</p>

          <div>
            <a href="mailto:m2003rahul@gamil.com">Hire Me</a>
            <a href="#Project">
              Projects
              <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animateproject}
                  ref={project}
                ></motion.span>
              </p>
              <span>Project Done</span>
            </article>

            <article>
              <p>Contact</p>
              <span>m2003rahul@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="rahul" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

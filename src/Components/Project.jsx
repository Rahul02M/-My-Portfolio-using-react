import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../Asset/data/data.json";

const Project = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      x: "-100%",
    },

    four: {
      opacity: -0,
      x: "100%",
    },
  };

  return (
    <div id="Project">
      <motion.h1
        initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: "0", opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Showcase of My Work{" "}
      </motion.h1>
      <section>
        <motion.div
          className="box1"
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay: 0.4,
          }}
        >
          <a target="blank" href="https://trippixie.netlify.app/">
            Live Demo
          </a>
        </motion.div>
        <motion.div
          className="box2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <a target="blank" href="https://wearbeat-collective.netlify.app/">
            Live Demo
          </a>
        </motion.div>
        <motion.div
          className="box3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.4,
          }}
        >
          <a target="blank" href="https://cara-online-shopping.netlify.app/">
            Live Demo
          </a>
        </motion.div>
        <motion.div
          className="box4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <a
            target="blank"
            href="https://rahul02m.github.io/weather-app-website-/"
          >
            Live Demo
          </a>
        </motion.div>
      </section>
      <div className="box5">
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="projectItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                  <a target={"blank"} href={i.giturl}>
                    Source Code
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </div>
    </div>
  );
};

export default Project;

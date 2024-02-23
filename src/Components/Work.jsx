import { motion } from "framer-motion";
import React from "react";
import pic1 from "../Asset/html.jpg";
import pic2 from "../Asset/logo-css.webp";
import pic3 from "../Asset/js.png";
import pic4 from "../Asset/bootstrap_logo.jpg";
import pic5 from "../Asset/tailwind.jpg";
import pic6 from "../Asset/React.webp";
import pic7 from "../Asset/asp-mvc.png";
import pic8 from "../Asset/sql.jpg";
import pic9 from "../Asset/github.jpg";
import pic10 from "../Asset/web-api-line-icon-vector.jpg";

const Work = () => {
  return (
    <div id="Work">
      <div>
        <motion.h1
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Technical Proficiency
        </motion.h1>
        <motion.p
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          In my journey through the ever-changing world of front-end
          development, I've developed expertise in a variety of technologies.
        </motion.p>
      </div>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.2,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div>
          <img class="grid-item" src={pic1} alt="rahul" />
        </div>
        <div>
          <img src={pic2} alt="rahul" />
        </div>
        <div>
          <img src={pic3} alt="rahul" />
        </div>
        <div>
          <img src={pic4} alt="rahul" />
        </div>
        <div>
          <img src={pic5} alt="rahul" />
        </div>
        <div>
          <img src={pic6} alt="rahul" />
        </div>
        <div>
          <img src={pic10} alt="rahul" />
        </div>
        <div>
          <img src={pic7} alt="rahul" />
        </div>
        <div>
          <img src={pic8} alt="rahul" />
        </div>
        <div>
          <img src={pic9} alt="rahul" />
        </div>
      </motion.section>
    </div>
  );
};

export default Work;

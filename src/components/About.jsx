import { useState, useEffect } from "react";
import Typed from "typed.js";
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  useEffect(() => {
    // Configuration for the Typed instance
    const options2 = {
      strings: [
        ` I am currently working as a Software Developer at Vasp Technologies,
        where I contribute to full-stack web application development using React
        on the frontend and Laravel (PHP) on the backend, building secure and
        scalable management systems and RESTful APIs. Alongside backend tasks, I
        also ensure modern and responsive UI design using HTML, CSS, JavaScript,
        Bootstrap, Tailwind CSS, and React. I completed my B.Tech in Computer
        Science & Engineering in 2024 from CIT Kokrajhar and previously gained
        hands-on experience as an SDE Intern at NIELIT. Skilled in JavaScript,
        React, PHP, MySQL, and C/C++, I am passionate about designing and
        developing efficient software solutions while continuously learning and
        improving. I am now looking for new opportunities where I can grow
        further and contribute to impactful projects as a full-stack developer.`,
      ],
      typeSpeed: 2,
      loop: false,
    };

    // Target the element with the "typing" class
    const targetElements = document.querySelector(".typing1");

    if (targetElements) {
      // Create a new Typed instance
      const typed1 = new Typed(targetElements, options2);

      // Cleanup on unmount
      return () => {
        typed1.destroy();
      };
    }
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 ml-1 text-secondary text-base lg:text-lg max-w-3xl leading-normal lg:leading-[30px] text-justify"
      >
        Hi! I’m Bhagyashree, a passionate Software Developer skilled in building
        full-featured, scalable, and user-friendly applications. With strong
        expertise in Full-Stack Development, particularly in MERN and PHP, I
        love turning ideas into reliable digital experiences. 
        <br/><br/>
        I have hands-on
        experience with modern tools and technologies like JavaScript,
        TypeScript, React, Angular, Node.js, Express, and MySQL/MongoDB. Whether
        it’s crafting dynamic interfaces, developing secure backend APIs, or
        managing end-to-end projects — I enjoy solving challenges and
        continuously learning to improve my craft. While full-stack development
        is my core strength, I’m equally open and excited to work in both
        Frontend and Backend development roles. 
        <br/><br/>I believe in writing clean,
        maintainable code and delivering impactful solutions that make a
        difference. Let’s build something amazing together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

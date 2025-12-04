import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./Styles/hero.css";
import Resume from "../assets/Resumeme.pdf";

const Hero = () => {

  useEffect(() => {
    // Configuration for the Typed instance
    const options = {
      strings: ["MERN Developer", "php Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      loop: true,
    };
  
    // Target the element with the "typing" class
    const targetElement = document.querySelector(".typing");
  
    if (targetElement) {
      // Create a new Typed instance
      const typed = new Typed(targetElement, options);
  
      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Bhagyashree</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer - Vasp Technologies <br className="sm:block hidden" />
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}><span class="typing"></span></p>
        </div>
      </div>
      
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
            <button className="resume-button">Download Resume</button>
      </a>
        <a href="/portfolio/#Gallery">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

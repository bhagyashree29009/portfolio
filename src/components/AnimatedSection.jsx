import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from "../styles";

const AnimatedSection = ({ sectionId, heading, paragraph }) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            controls.start('visible');
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector(`#${sectionId}`));
    return () => observer.disconnect();
  }, [controls, hasAnimated, sectionId]);

  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div id={sectionId} className="my-8">
      <motion.div variants={variants} initial="hidden" animate={controls}>
        <h2 className={styles.sectionHeadText}>{heading}</h2>
      </motion.div>
      <motion.p
        variants={variants}
        initial="hidden"
        animate={controls}
        className="mt-3 ml-0 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {paragraph}
      </motion.p>
    </div>
  );
};

export default AnimatedSection;

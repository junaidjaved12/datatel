import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const NewContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        mainControls.start('visible');
      }, 500); // 🔥 500ms delay
      return () => clearTimeout(timer);
    }
  }, [isInView, mainControls]);

  // Left Column Animation (niche se upar)
  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Right Column Animation (upar se niche)
  const rightVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Staggered children for left column text
  const creativeTextContainerVariants = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const creativeTextChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white flex items-center justify-center p-8 lg:p-16"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (1/3) */}
          <motion.div
            className="relative w-full text-lg md:text-[22px] lg:col-span-1"
            initial="hidden"
            animate={mainControls}
            variants={leftVariants}
          >
            <motion.div variants={creativeTextContainerVariants}>
              <motion.p
                variants={creativeTextChildVariants}
                className="absolute text-lg md:text-xl left-0 top-0"
              >
                Designs
              </motion.p>
              <motion.p
                variants={creativeTextChildVariants}
                className="absolute text-lg md:text-xl left-46 top-8 sm:top-17"
              >
                don&apos;t just
              </motion.p>
              <motion.p
                variants={creativeTextChildVariants}
                className="absolute text-lg md:text-xl left-24 top-16 sm:top-34"
              >
                look good—
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column (2/3) */}
          <motion.div
            className="flex flex-col justify-end lg:col-span-2"
            initial="hidden"
            animate={mainControls}
            variants={rightVariants}
          >
            <p className="text-lg md:text-[26px]">
              In a crowded and fast-changing digital world, it&apos;s not enough
              to have ideas — you need websites, apps, and AI-powered solutions
              that cut through, connect, and drive action.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewContent;

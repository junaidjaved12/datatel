import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const NewContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Start the animation after a 1-second delay
      const timer = setTimeout(() => {
        mainControls.start('visible');
      }, 1000); // 1000ms = 1 second
      return () => clearTimeout(timer);
    }
  }, [isInView, mainControls]);

  // A more cinematic and smooth "zoom-in up" variant for the main text
  const revealVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Variants for the staggered 'Designs...' text
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
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="bg-black text-white flex items-center justify-center p-8 lg:p-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Creative Text with Animation */}
          <motion.div
            className="relative w-full"
            initial="hidden"
            animate={mainControls}
            variants={creativeTextContainerVariants}
          >
            <motion.p variants={creativeTextChildVariants} className="absolute text-lg md:text-xl left-0 top-0">
              Designs
            </motion.p>
            <motion.p variants={creativeTextChildVariants} className="absolute text-lg md:text-xl left-16 top-8 sm:top-12">
              don&apos;t just
            </motion.p>
            <motion.p variants={creativeTextChildVariants} className="absolute text-lg md:text-xl left-24 top-16 sm:top-24">
              look good—
            </motion.p>
          </motion.div>

          {/* Right Column: Main Text with Animation */}
          <motion.div
            className="flex flex-col justify-end"
            initial="hidden"
            animate={mainControls}
            variants={revealVariants}
          >
            <p className="text-sm md:text-base max-w-md ml-auto">
              In a crowded and fast-changing digital world, it&apos;s not enough to have ideas — you need websites, apps, and AI-powered solutions that cut through, connect, and drive action.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewContent;
"use client";
import { motion } from "framer-motion";
import Header from "./Header";

// Variants for parent
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // ek ek item delay se aayega
    },
  },
};

// Variants for each line
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LandingPage = ({ showContent }) => {
  // Left side paragraph split into lines
  const paragraphLines = [
    "Plutto.ai crafts websites, apps, brands, and AI-powered",
    "solutions — delivering everything from",
    "design to development to help businesses",
    "innovate, grow, and stand out online.",
  ];

  return (
    <div className="h-screen bg-white overflow-hidden relative">
      {showContent && (
        <>
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row relative h-full">
            {/* Left Content */}
            <motion.div
              className="flex-1 px-3 sm:px-4 md:px-6 pt-20 sm:pt-32 md:pt-40 lg:pt-48"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="max-w-xs sm:max-w-sm md:max-w-md pt-4 sm:pt-8 md:pt-12 lg:pt-16 space-y-2">
                {paragraphLines.map((line, i) => (
                  <motion.p
                    key={i}
                    variants={itemVariants}
                    className="text-black text-xs sm:text-sm md:text-base leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="w-full lg:w-48 px-3 sm:px-4 md:px-6 lg:pr-12 pt-4 lg:pt-48"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-1 text-left lg:text-right pt-2 lg:pt-16">
                {["Documentation", "Tools", "References", "Tutorials"].map(
                  (text, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="text-black text-xs sm:text-sm md:text-base"
                    >
                      {text}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Centered PLUTTO.AI Text */}
          <motion.div
            className="absolute -bottom-40 sm:-bottom-60 md:-bottom-72 lg:-bottom-80 inset-0 flex items-center justify-center pointer-events-none px-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div
              className="text-black text-center"
              style={{
                fontSize: "clamp(3rem, 18vw, 19rem)",
                lineHeight: "0.8",
                letterSpacing: "0.02em",
              }}
            >
              PLUTTO.AI
            </div>
          </motion.div>

          {/* Black Rectangle at Bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-black"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </>
      )}
    </div>
  );
};

export default LandingPage;

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "./Header";

const LandingPage = ({ showContent }) => {
  const paraRef = useRef(null);
  const menuRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    if (showContent) {
      const words = paraRef.current.querySelectorAll(".word-inner");
      gsap.fromTo(
        words,
        { yPercent: 120, skewY: 8, filter: "blur(4px)", opacity: 0 },
        {
          yPercent: 0,
          skewY: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.06,
        }
      );

      const menuWords = menuRef.current.querySelectorAll(".word-inner");
      gsap.fromTo(
        menuWords,
        { yPercent: 120, skewY: 8, filter: "blur(4px)", opacity: 0 },
        {
          yPercent: 0,
          skewY: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.5,
        }
      );

      const letters = bigTextRef.current.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { yPercent: 120, skewY: 12, scale: 1.2, opacity: 0 },
        {
          yPercent: 0,
          skewY: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.8,
        }
      );
    }
  }, [showContent]);

  return (
    <div className="h-screen bg-white overflow-hidden relative">
      {showContent && (
        <>
          <div className="flex relative h-full px-12">
            <motion.div
              className="flex-1 flex items-start pt-48"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="max-w-md" ref={paraRef}>
                {"Plutto.ai crafts websites, apps, brands, and AI-powered solutions — delivering everything from design to development to help businesses innovate, grow, and stand out online."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden mr-1"
                    >
                      <span className="word-inner inline-block text-black">
                        {word}
                      </span>
                    </span>
                  ))}
              </div>
            </motion.div>

            <motion.div
              className="w-52 flex justify-end pt-48"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-2 text-right" ref={menuRef}>
                {["Documentation", "Tools", "References", "Tutorials"].map(
                  (item, i) => (
                    <div key={i} className="overflow-hidden">
                      <span className="word-inner inline-block text-black">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-16 left-0 right-0 flex items-center justify-center pointer-events-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div
              ref={bigTextRef}
              className="text-black font-bold overflow-hidden flex"
              style={{
                fontSize: "14rem",
                lineHeight: "0.85",
                letterSpacing: "0.02em",
              }}
            >
              {"PLUTTO.AI".split("").map((letter, i) => (
                <span
                  key={i}
                  className="letter inline-block overflow-hidden"
                >
                  {letter}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-16 bg-black"
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


// Landingpage.js ka code hai jahan loader ke baad text animations show horae hain kindly isko integrate kren iss mein kafee behtar gsap animation thee  app ke animation hai he nai, iss tarhan apke effort save hojaega choren abb yae animation loader pr laga dena bus
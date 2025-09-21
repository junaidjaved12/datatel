"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";

const Header = () => {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["rgba(255,255,255,1)", "rgba(255,255,255,0)"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["rgb(0,0,0)", "rgb(255,255,255)"]
  );

  const logoRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      logoRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        homeRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        contactRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center px-[38px] h-[58px] z-50 border-none shadow-none overflow-hidden"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="flex items-center gap-[40px]">
        <div ref={logoRef} className="font-medium text-lg opacity-0">
          Remitly
        </div>
        <div ref={homeRef} className="text-base opacity-0">
          Home~
        </div>
      </div>

      <div className="flex items-center justify-center h-[32px] w-[32px]">
        <svg
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="3"
            y1="5"
            x2="14"
            y2="5"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ stroke: textColor }}
          />
          <motion.line
            x1="3"
            y1="10"
            x2="25"
            y2="10"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ stroke: textColor }}
          />
          <motion.line
            x1="14"
            y1="15"
            x2="25"
            y2="15"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ stroke: textColor }}
          />
        </svg>
      </div>

      <div
        ref={contactRef}
        className="text-base underline cursor-pointer opacity-0"
      >
        Contact us &nbsp;&gt;
      </div>
    </motion.header>
  );
};

export default Header;
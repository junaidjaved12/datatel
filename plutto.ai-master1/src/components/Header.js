"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = ({ isDark = false }) => {
  const { scrollYProgress } = useScroll();
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)", isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 z-50"
      style={{ color: textColor }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
    <div className="flex items-center space-x-4 md:space-x-8">
      <div className="font-medium text-sm md:text-base">BRAND LOGO</div>
      <div className="hidden sm:block text-sm md:text-base">Home-</div>
    </div>
    <div className="flex items-center space-x-4 md:space-x-6">
      <div className="flex flex-col space-y-1">
        <motion.div className="w-5 md:w-6 h-[2px]" style={{ backgroundColor: textColor }}></motion.div>
        <motion.div className="w-5 md:w-6 h-[2px]" style={{ backgroundColor: textColor }}></motion.div>
        <motion.div className="w-5 md:w-6 h-[2px]" style={{ backgroundColor: textColor }}></motion.div>
      </div>
    </div>
    <div className="underline text-sm md:text-base">Contact us</div>
    </motion.header>
  );
};

export default Header;
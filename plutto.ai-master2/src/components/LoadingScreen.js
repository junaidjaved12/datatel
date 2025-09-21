"use client";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ count, isVisible, showNumber }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {showNumber && (
          <div className="text-white text-6xl font-mono tracking-wider">
            {count.toString().padStart(3, "0")}
          </div>
        )}
      </motion.div>
    )}
  </AnimatePresence>
);

export default LoadingScreen;
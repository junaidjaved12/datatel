"use client";

import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div
      className="w-full h-[500px] flex items-center justify-center bg-black rounded-2xl overflow-hidden"
      initial={{ y: 100, opacity: 0 }}      // pehle neeche + invisible
      whileInView={{ y: 0, opacity: 1 }}    // jab viewport me aaye to top py smoothly aajaye
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // once: true -> ek hi dafa chalega, amount: kitna section visible hote hi start
    >
      <video
        className="w-full h-full object-cover"
        src="/newmain.mp4"   // sahi path
        autoPlay
        loop
        muted
        playsInline
      >
        Sorry, your browser doesn&apos;t support videos.
      </video>
    </motion.div>
  );
};

export default ProjectCard;

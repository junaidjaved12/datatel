"use client";

import { motion } from "framer-motion";

const VideoCard = () => {
  return (
    <motion.div
      className="w-full h-[500px] flex items-center justify-center bg-black rounded-2xl overflow-hidden"
      initial={{ y: 100, opacity: 0 }}       // start: neeche + invisible
      whileInView={{ y: 0, opacity: 1 }}     // jab viewport me aaye → apni jagah
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // ek dafa hi chale, 30% visible hote hi start
    >
      <video
        className="w-full h-full object-cover"
        src="/newvideoone.mp4"
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

export default VideoCard;

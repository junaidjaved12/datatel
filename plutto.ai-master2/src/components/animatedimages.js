"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const images = [
  { src: "/3D.png", glowColor: "#5d9d9d" },
  { src: "/3d1.png", glowColor: "#e56d3b" },
  { src: "/3d2.png", glowColor: "#f770f7" },
  { src: "/3d3.png", glowColor: "#000" },
  { src: "/3d4.png", glowColor: "#5d9d9d" },
];

const rotationTransforms = [
  "rotate(-52deg) translateY(-80px)",
  "rotate(-22deg) translateY(-141px)",
  "rotate(0deg) translateY(-180px)",
  "rotate(20deg) translateY(-143px)",
  "rotate(45deg) translateY(-80px)",
];

const AnimatedImages = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.8)", // start at center
      top: "50%",
      left: "50%",
    },
    visible: (i) => ({
      opacity: 1,
      transform: rotationTransforms[i], // move to final arc
      top: "auto",
      left: `calc(50% + ${(i - 2) * 100}px)`,
      marginLeft: "-50px",
      transition: {
        duration: 1,
        delay: i * 0.3, // stagger
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="flex bg-black bg-image justify-center items-center w-screen h-screen relative overflow-hidden"
    >
      <div className="relative w-[600px] h-[300px] flex justify-center items-end">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`
              absolute w-[100px] h-[100px] bg-white rounded-[20px] backdrop-blur-sm
              flex justify-center items-center transition-all duration-500
              origin-[50%_100%]
              ${hoveredImage === index ? "scale-110 z-10" : ""}
            `}
            style={{
              boxShadow:
                hoveredImage === index
                  ? `0 0 25px 5px ${img.glowColor}`
                  : "none",
            }}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            custom={index}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img.src}
              alt={`Animated image ${index + 1}`}
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImages;

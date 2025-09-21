"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const SecondPage = () => {
  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 0.5], ["100vh", "0vh"]);

  const projectData = {
    title: "Energize Your Ambition, Pulse Your Way",
    description: "Bringing sports communities together",
    images: ["Team Building", "Runner", "Workout", "Personal Training", "Community"]
  };

  return (
    <div className="h-screen relative bg-black">
      <motion.div 
        className="h-full w-full overflow-hidden"
        // style={{ y }}
      >
        <div className="px-6 flex items-center justify-center h-full">
          <div className="w-full max-w-6xl">
            <ProjectCard 
              title={projectData.title}
              description={projectData.description}
              images={projectData.images}
            />
            
            <div className="mt-8 pl-32 space-y-2">
              <h3 className="text-white text-2xl font-light">Equipulse</h3>
              <p className="text-gray-400 text-lg">Bringing sports communities together</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondPage;
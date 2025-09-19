"use client";

const ProjectCard = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-black rounded-2xl overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/newmain.mp4"   // sahi path
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        Sorry, your browser doesn&apos;t support videos.
      </video>
    </div>
  );
};

export default ProjectCard;

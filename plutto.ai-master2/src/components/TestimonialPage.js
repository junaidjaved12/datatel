"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    text: "The design, the functionality, the attention to detail — everything about our project was spot on.",
    author: "Maya Rao",
    role: "Creative Director at Zenith Studios",
  },
  {
    text: "Working with this team was an absolute pleasure. They understood our vision perfectly.",
    author: "John Smith",
    role: "CEO at BrightTech",
  },
  {
    text: "High-quality work delivered on time. Couldn't have asked for more!",
    author: "Aisha Khan",
    role: "Founder at Designify",
  },
  {
    text: "Exceptional service and brilliant results. Highly recommend them.",
    author: "David Lee",
    role: "Marketing Lead at PixelWorks",
  },
  {
    text: "Their creativity and dedication made our project a huge success.",
    author: "Sophia Zhang",
    role: "Product Manager at InnovateX",
  },
  {
    text: "From start to finish, the collaboration was seamless and effective.",
    author: "Carlos Mendes",
    role: "CTO at DevSphere",
  },
];

const TestimonialPage = () => {
  return (
     <div className="bg-black h-[85vh] py-40 relative">
      
      {/* 🔥 Gradient Line at very top of section */}
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background:
            "linear-gradient(to right, #FF0000, #FF6A00, #C3FF00, #00B8E1)",
        }}
      ></div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1.1 }, // small screens → show little next card
          640: { slidesPerView: 1.3 },
          1024: { slidesPerView: 2.2 }, // desktops → 2 full + part of next
          1440: { slidesPerView: 3.2 }, // big screens → 3 full + peek next
        }}
        className=" bg-black h-[70vh] mx-auto px-4"
      >
        
        
        {testimonials.map((t, index) => (
          <>
          
          
          <SwiperSlide key={index}>
            
            <div className="h-full  max-w-md mx-auto px-6 py-8 text-center  rounded-2xl">
              {/* Gradient Line */}
              <div
                className="w-full h-px mb-6"
                style={{
                  background:
                    "linear-gradient(to right, #FF0000, #FF6A00, #C3FF00, #00B8E1)",
                }}
              ></div>

              {/* Quote */}
              <blockquote className="text-white text-lg md:text-xl font-light leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-gray-400 text-base md:text-lg">
                <p className="mb-1">— {t.author}</p>
                <p>{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialPage;

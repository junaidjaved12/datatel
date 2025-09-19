"use client";
import { useState, useEffect, useRef } from "react";

const PalletRossSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      rotation: "-7deg",
      translateX: -500,
      zIndex: 1,
      content: "Design",
    },
    {
      id: 2,
      bgImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      rotation: "-3deg",
      translateX: -250,
      zIndex: 2,
      content: "Art",
    },
    {
      id: 3,
      bgImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      rotation: "0deg",
      translateX: 0,
      zIndex: 3,
      content: "Sports",
    },
    {
      id: 4,
      bgImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      rotation: "3deg",
      translateX: 300,
      zIndex: 4,
      content: "Music",
    },
    {
      id: 5,
      bgImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      rotation: "5deg",
      translateX: 600,
      zIndex: 5,
      content: "Photo",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-7xl mx-auto text-center">
        {/* Main Content Card */}
        <div className="bg-gray-50 rounded-xl sm:rounded-2xl lg:rounded-[2rem] p-3 sm:p-4 md:p-6 lg:p-10 mb-6 md:mb-8 relative overflow-hidden shadow-2xl w-full mx-auto">
          {/* Header Navigation */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 rounded-sm"></div>
              <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
                Pallet Ross
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-xs xl:text-sm text-gray-600">
              <span className="hover:text-gray-800 cursor-pointer">
                Get Started
              </span>
              <span className="hover:text-gray-800 cursor-pointer">
                Create strategy
              </span>
              <span className="hover:text-gray-800 cursor-pointer">Pricing</span>
              <span className="hover:text-gray-800 cursor-pointer">Contact</span>
              <span className="hover:text-gray-800 cursor-pointer">
                Solution
              </span>
              <span className="hover:text-gray-800 cursor-pointer">
                E-Commerce
              </span>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-12 leading-tight px-2">
            A place to display your
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>masterpiece.
          </h1>

          {/* Cards Container */}
          <div className="relative h-40 sm:h-48 md:h-56 lg:h-100 mb-6 sm:mb-8 lg:mb-12 flex items-center justify-center overflow-hidden">
            {cards.map((card, index) => {
              const isSelected = selectedCard === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCard(card.id)}
                  className="absolute top-1/2 left-1/2 w-24 h-32 xs:w-32 xs:h-40 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-64 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    background: card.bgImage,
                    transform: isVisible
                      ? `translate(-50%, -50%) rotate(${card.rotation}) translateX(${
                          card.translateX * 0.3
                        }px) translateY(${isSelected ? "-40px" : "0px"}) scale(${
                          isSelected ? 1.15 : 1
                        })`
                      : "translate(-50%, -50%) rotate(0deg) translateX(0px) translateY(0px)",
                    zIndex: isSelected ? 999 : card.zIndex,
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="w-full h-full bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-1 sm:p-2 lg:p-4 m-0.5 sm:m-1 shadow-inner">
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-md sm:rounded-lg lg:rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Card Content */}
                      <div className="absolute inset-1 sm:inset-2 bg-white rounded-sm sm:rounded-md lg:rounded-lg shadow-sm flex flex-col items-center justify-center">
                        <div className="text-xs xs:text-sm sm:text-lg lg:text-2xl font-bold text-gray-700 mb-0.5 sm:mb-1">
                          {card.content}
                        </div>
                        <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">
                          Collection
                        </div>
                        <div className="w-4 sm:w-6 lg:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1 sm:mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Speech Bubbles */}
            <div
              className={`absolute top-4 sm:top-6 lg:top-0 left-1/4 bg-blue-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold transition-all duration-800 shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-75"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              $200k
            </div>
            <div
              className={`absolute top-6 sm:top-8 lg:top-0 right-1/4 bg-emerald-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold transition-all duration-800 shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-75"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              Top seller
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-10 max-w-xs sm:max-w-sm md:max-w-lg mx-auto text-xs sm:text-sm lg:text-lg leading-relaxed px-2 sm:px-4">
            Artists can display their masterpieces, and buyers can discover and
            purchase works that resonate with them.
          </p>

          {/* Buttons */}
          <div className="flex md:flex-row xs:flex-row items-center justify-center space-y-3 xs:space-y-0 xs:space-x-4 sm:space-x-6 px-2 sm:px-4">
            <button className="bg-black cursor-pointer text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm lg:text-base xs:w-auto">
              Join for $9/month
            </button>
            <button className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors font-medium  text-xs sm:text-sm lg:text-base">
              Read more
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-left pl-2 sm:pl-4">
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">
            Pallet ross
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base xl:text-lg">
            A place to display your masterpiece
          </p>
        </div>
      </div>
    </div>
  );
};

export default PalletRossSection;

"use client";
import { useEffect, useRef, useState } from "react";

const ScrollingCardsSection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // scroll progress calculate
      const scrolled = Math.min(
        Math.max(0, windowHeight - rect.top),
        rect.height
      );

      setProgress(scrolled / rect.height);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      id: "01",
      title: "Connect Accounts",
      description: "Securely link your account and business tools in minutes.",
      image: "/Group27.png",
      logo: "/Fill-4.png",
    },
    {
      id: "02",
      title: "Track in real-Time",
      description: "View all your financial data live on one clean dashboard.",
      image: "/Frame51.png",
      logo: "/Timer.png",
    },
    {
      id: "03",
      title: "Grow Smarter, Faster",
      description: "Use insights and reports to guide better business decisions.",
      image: "/Group21.png",
      logo: "/Group.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black relative"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen sticky top-0">
        {/* Left column */}
        <div className="flex items-center justify-center p-8">
          <div className="max-w-sm">
            <p className="text-gray-400 text-sm mb-4">How it works</p>
            <h2 className="text-white text-2xl lg:text-4xl font-light leading-tight">
              From setup to tool—just three simple steps.
            </h2>
          </div>
        </div>

        {/* Right column - stacked cards */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {cards.map((card, index) => {
            const perCard = 1 / cards.length;
            const cardProgress = Math.min(
              1,
              Math.max(0, (progress - index * perCard) / perCard)
            );

            // ✅ Cards full neeche se aayenge (100vh)
            const translateY = (1 - cardProgress) * 80 + "vh";

            return (
              <div
                key={card.id}
                className="absolute w-full max-w-sm transition-transform duration-500"
                style={{
                  zIndex: index + 1,
                  transform: `translateY(${translateY})`,
                  opacity: 1,
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl relative">
                  {/* logo + text */}
                  <div className="flex justify-between">
                    <span className="p-6 mx-2 rounded-full bg-black">
                      <img
                        src={card.logo}
                        alt="logo"
                        className="w-7 h-7 object-contain mr-3"
                      />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Card ID */}
                  <div className="absolute bottom-4 right-6 p-2 rounded-full bg-gray-300 text-gray-600 text-lg font-light">
                    {card.id}
                  </div>

                  {/* main image */}
                  <div className="flex justify-center py-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className=" object-cover mb-4"
                  />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollingCardsSection;

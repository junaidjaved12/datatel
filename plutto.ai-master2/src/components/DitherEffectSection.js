"use client";
import { useState, useEffect } from "react";

const DitherEffectSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const icons = [
    {
      id: 1,
      position: { top: '20%', left: '15%' },
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
          <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 2,
      position: { top: '10%', left: '50%' },
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-500">
          <circle cx="8" cy="12" r="2" fill="currentColor"/>
          <circle cx="16" cy="12" r="2" fill="currentColor"/>
          <path stroke="currentColor" strokeWidth="2" fill="none" d="M8 12h8M12 8v8"/>
        </svg>
      )
    },
    {
      id: 3,
      position: { top: '20%', right: '15%' },
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-800">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 4,
      position: { bottom: '30%', left: '10%' },
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-500">
          <path fill="currentColor" d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z"/>
        </svg>
      )
    },
    {
      id: 5,
      position: { bottom: '30%', right: '10%' },
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500">
          <rect x="3" y="3" width="8" height="8" fill="currentColor"/>
          <rect x="13" y="3" width="8" height="8" fill="currentColor"/>
          <rect x="3" y="13" width="8" height="8" fill="currentColor"/>
          <rect x="13" y="13" width="8" height="8" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Dither Effect Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255,255,255,0.1) 0%, 
            rgba(255,255,255,0.05) 30%, 
            transparent 70%)`
        }}
      />
      
      {/* Static Dither Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="dither" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="2" height="2" fill="white" opacity="0.1"/>
              <rect x="2" y="2" width="2" height="2" fill="white" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dither)"/>
        </svg>
      </div>

      {/* Floating Icons */}
      {icons.map((item) => (
        <div
          key={item.id}
          className="absolute bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
          style={{
            ...item.position,
            transform: `translate(-50%, -50%) rotate(${Math.sin(Date.now() * 0.001 + item.id) * 5}deg)`,
            animation: `float-${item.id} 6s ease-in-out infinite`,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Central Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Animated Particles */}
      {Array.from({ length: 50 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-${i % 3} ${3 + Math.random() * 4}s linear infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-20px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-25px) rotate(7deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-18px) rotate(-5deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-22px) rotate(4deg); }
        }
        @keyframes particle-0 {
          0% { opacity: 0; transform: translateY(100vh) scale(0); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-100vh) scale(1); }
        }
        @keyframes particle-1 {
          0% { opacity: 0; transform: translateX(-100vw) scale(0); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100vw) scale(1); }
        }
        @keyframes particle-2 {
          0% { opacity: 0; transform: translate(-100vw, 100vh) scale(0); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translate(100vw, -100vh) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default DitherEffectSection;
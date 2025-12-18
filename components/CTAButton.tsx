import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  text: string;
  link: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, link }) => {
  // Logic to handle specific "Join Now to Win" formatting
  const isSpecialText = text.toLowerCase().includes('join now to win');

  return (
    <motion.a
      href={link}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#ef4444",
        boxShadow: "0 25px 50px rgba(239, 68, 68, 0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative px-12 md:px-24 py-6 md:py-8 bg-[#d42426] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(212,36,38,0.4)] transition-all duration-300 overflow-hidden border border-white/20"
    >
      {/* Gloss Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-full border border-white/10" />

      {/* Button Copy */}
      {isSpecialText ? (
        <div className="relative z-10 flex flex-col items-center justify-center w-full font-spark uppercase drop-shadow-lg leading-tight">
          <span className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-[0.2em] whitespace-nowrap">
            JOIN NOW
          </span>
          
          <span className="text-[10px] md:text-xs lg:text-sm font-bold text-white/90 tracking-[0.5em] mt-1 md:mt-2 whitespace-nowrap">
            TO WIN
          </span>
        </div>
      ) : (
        <span className="relative z-10 font-spark text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-[0.25em] uppercase drop-shadow-md">
          {text}
        </span>
      )}

      {/* Animated Shine Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-35deg] group-hover:animate-[shine-once_0.8s_ease-in-out]" />
      </div>

      <style>{`
        @keyframes shine-once {
          from { left: -100%; }
          to { left: 200%; }
        }
      `}</style>
    </motion.a>
  );
};

export default CTAButton;
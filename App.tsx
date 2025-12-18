import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Snowfall from './components/Snowfall';
import CTAButton from './components/CTAButton';
import MysteryPodium from './components/MysteryPodium';

// --- CINEMATIC FESTIVE ASSET COMPONENTS ---

const RealisticPine = ({ className, rotation = 0 }: { className?: string, rotation?: number }) => (
  <motion.img 
    src="https://img.freepik.com/free-psd/fir-branch-transparent-background_84443-1522.standard.webp" 
    alt="Pine Branch"
    className={`object-contain pointer-events-none filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)] ${className}`}
    style={{ rotate: rotation }}
    animate={{ 
      rotate: [rotation - 1, rotation + 1, rotation - 1],
      y: [0, -2, 0]
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
);

const RealisticPoinsettia = ({ className }: { className?: string }) => (
  <motion.img 
    src="https://img.freepik.com/free-psd/poinsettia-flower-isolated-transparent-background_191095-15637.standard.webp" 
    alt="Poinsettia"
    className={`object-contain pointer-events-none filter drop-shadow-[0_15px_30px_rgba(212,36,38,0.4)] ${className}`}
    whileHover={{ scale: 1.05, rotate: 3, filter: "brightness(1.1) drop-shadow(0 20px 40px rgba(212,36,38,0.5))" }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

const RealisticBell = ({ className }: { className?: string }) => (
  <motion.img 
    src="https://img.freepik.com/free-psd/christmas-bells-isolated-transparent-background_191095-20790.standard.webp" 
    alt="Golden Bell"
    className={`object-contain pointer-events-none filter drop-shadow-[0_15px_30px_rgba(202,138,4,0.4)] ${className}`}
    animate={{ 
      rotate: [-4, 4, -4],
      scale: [1, 1.01, 1]
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
);

// --- CASINO ELEMENTS (STAGNANT & FLOATING) ---

const PremiumChip = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    <motion.img 
      src="https://img.freepik.com/free-psd/3d-gambling-casino-chips-isolated-transparent-background_191095-21272.standard.webp" 
      alt="Casino Chip"
      className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_15px_25px_rgba(212,36,38,0.3)]"
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 8, 0]
      }}
      transition={{ 
        duration: 4 + Math.random() * 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />
  </motion.div>
);

const PremiumDice = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.5, y: -20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    <motion.img 
      src="https://img.freepik.com/free-psd/red-dice-isolated-transparent-background_191095-15632.standard.webp" 
      alt="Casino Dice"
      className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_15px_25px_rgba(212,36,38,0.3)]"
      animate={{ 
        y: [0, 12, 0],
        rotate: [0, -12, 0]
      }}
      transition={{ 
        duration: 5 + Math.random() * 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />
  </motion.div>
);

const CinematicFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -top-10 -left-10 z-20 w-28 h-28 md:w-36 md:h-36 pointer-events-none">
      <RealisticPine className="absolute inset-0 z-10 opacity-80" rotation={-25} />
      <RealisticPoinsettia className="absolute top-0 left-0 w-full h-full z-20" />
    </div>
    <div className="absolute -top-10 -right-10 z-20 w-28 h-28 md:w-36 md:h-36 pointer-events-none">
      <RealisticPine className="absolute inset-0 z-10 scale-x-[-1] opacity-80" rotation={25} />
      <RealisticBell className="absolute top-0 right-0 w-full h-full z-20" />
    </div>
    <div className="absolute -bottom-10 -left-10 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
      <RealisticBell className="absolute inset-0 w-full h-full z-20 -rotate-12" />
    </div>
    <div className="absolute -bottom-10 -right-10 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
      <RealisticPoinsettia className="absolute inset-0 w-full h-full z-20 rotate-6" />
    </div>
    {children}
  </div>
);

const FestiveFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -top-12 -left-12 z-20 w-32 h-32 pointer-events-none">
      <RealisticPine className="absolute inset-0 z-10 opacity-70" rotation={-45} />
      <RealisticPoinsettia className="absolute inset-0 w-full h-full z-20" />
    </div>
    <div className="absolute -top-12 -right-12 z-20 w-32 h-32 pointer-events-none">
      <RealisticPine className="absolute inset-0 z-10 scale-x-[-1] opacity-70" rotation={45} />
      <RealisticBell className="absolute inset-0 w-full h-full z-20" />
    </div>
    {children}
  </div>
);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const conversionLink = "https://example.com/join-now";

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-slate-950">
      
      {/* 🖼️ LAYER 0: CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          src="https://files.catbox.moe/9oebh8.jpg"
          alt="Vertical Aurora Winter Landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* ❄️ LAYER 1: SNOWFALL (ACCUMULATION IS IN HERE AT Z-10) */}
      <Snowfall color="#ffffff" density={150} />

      {/* 🧩 LAYER 2: FOREGROUND CONTENT (Z-20) */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* 🧩 BRAND LOGO */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 md:top-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="https://files.catbox.moe/k2nd8p.png" 
              alt="Brand Logo" 
              className="h-12 w-auto md:h-18 lg:h-22 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>

        {/* 🖋️ HERO CONTENT */}
        <header className="relative w-full flex flex-col items-center text-center pt-28 md:pt-40 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-24 md:space-y-32 w-full flex flex-col items-center"
          >
            <h1 
              data-text="Celebrate the joyful international holiday with us!"
              className="font-spark text-3xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight px-4 text-christmas-spark uppercase max-w-5xl"
            >
              Celebrate the joyful <br className="hidden md:block" /> international holiday with us!
            </h1>
            
            <div className="relative max-w-xl w-full">
              <PremiumChip className="absolute -left-12 md:-left-24 top-0 w-16 md:w-24 z-30" delay={0.4} />
              <PremiumDice className="absolute -right-10 md:-right-20 bottom-0 w-14 md:w-20 z-30" delay={0.6} />
              
              <CinematicFrame className="w-full">
                <div className="relative px-6 py-10 md:px-12 md:py-14 bg-white/10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] rounded-[3rem] border border-white/30 overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                  <div className="flex flex-col items-center">
                    <p className="font-spark text-[#0ea5e9] text-xl md:text-2xl lg:text-3xl font-black tracking-widest animate-blue-glow relative z-10 leading-snug uppercase mb-4">
                      REGISTER IN 2 SIMPLE STEPS <br/> TO WIN THE GRAND PRIZE
                    </p>
                    <div className="px-4 py-1 bg-white/20 rounded-full border border-white/30">
                      <span className="text-white font-main text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Step 1 & Step 2 below</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-30 pointer-events-none" />
                </div>
              </CinematicFrame>
            </div>

            <div className="relative max-w-lg w-full">
              <PremiumChip className="absolute -right-12 md:-right-20 top-[-20%] w-12 md:w-20 z-30 opacity-60" delay={0.8} />
              
              <CinematicFrame className="w-full">
                <div className="relative px-8 py-8 md:px-10 md:py-10 bg-white/15 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] rounded-[3rem] border border-white/30 overflow-hidden transition-transform duration-500 hover:scale-[1.01] flex flex-col items-center justify-center">
                  <span className="font-main text-white/60 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 relative z-10">Event Timeline</span>
                  <p className="font-spark text-white text-base md:text-xl lg:text-2xl font-black tracking-[0.2em] whitespace-nowrap relative z-10">
                    18 DEC 2025 – 1 JAN 2026
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-30 pointer-events-none" />
                </div>
              </CinematicFrame>
            </div>
          </motion.div>
        </header>

        {/* 🧩 MYSTERY PRIZE SECTION */}
        <section className="relative w-full mt-20 md:mt-32">
          <MysteryPodium />
        </section>

        {/* 🧩 HOW TO CLAIM SECTION */}
        <section className="relative w-full flex flex-col items-center px-6 mt-16 mb-24">
          <div className="relative max-w-3xl w-full">
            <PremiumChip className="absolute -left-20 md:-left-32 top-10 w-20 md:w-32 z-30" delay={0.2} />
            <PremiumDice className="absolute -right-16 md:-right-24 top-40 w-16 md:w-24 z-30" delay={0.5} />
            <PremiumChip className="absolute -right-20 md:-right-28 bottom-20 w-24 md:w-36 z-30" delay={0.8} />
            <PremiumDice className="absolute -left-16 md:-left-24 bottom-10 w-20 md:w-28 z-30" delay={1.1} />

            <FestiveFrame className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative bg-white/10 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-white/20 text-center w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                <h2 className="font-formal text-3xl md:text-5xl lg:text-6xl text-white font-black mb-14 tracking-tight uppercase relative z-10">
                  How to claim?
                </h2>
                
                <div className="relative z-10 flex flex-col items-center space-y-16">
                  <div className="flex flex-col items-center w-full">
                    <span className="font-formal text-[#0ea5e9] text-3xl md:text-4xl lg:text-5xl tracking-tight font-black mb-4 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                      Step 1
                    </span>
                    <p className="font-formal text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-[300px] mx-auto text-center">
                      Register an account on our official portal
                    </p>
                  </div>

                  <div className="w-16 h-[1px] bg-white/30" />

                  <div className="flex flex-col items-center w-full">
                    <span className="font-formal text-[#0ea5e9] text-3xl md:text-4xl lg:text-5xl tracking-tight font-black mb-4 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                      Step 2
                    </span>
                    <p className="font-formal text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-[300px] mx-auto text-center">
                      Login & claim your exclusive entry ticket
                    </p>
                  </div>
                </div>

                <motion.div 
                  className="mt-16 relative z-10"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="font-script text-7xl md:text-8xl lg:text-9xl text-[#d42426] leading-none drop-shadow-[0_0_20px_rgba(212,36,38,0.25)]">
                    That simple!
                  </p>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-40 pointer-events-none" />
              </motion.div>
            </FestiveFrame>
          </div>
        </section>

        {/* 🖋️ CTA & FOOTER */}
        <footer className="relative w-full flex flex-col items-center pb-24 px-6">
          <div className="relative">
            <PremiumChip className="absolute -left-32 md:-left-48 top-1/2 -translate-y-1/2 w-20 md:w-32 opacity-40" delay={1.4} />
            <PremiumDice className="absolute -right-32 md:-right-48 top-1/2 -translate-y-1/2 w-16 md:w-28 opacity-40 rotate-12" delay={1.7} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-14 relative z-20"
            >
              <CTAButton text="Join Now to Win" link={conversionLink} />
            </motion.div>
          </div>
          
          <div className="text-center space-y-5">
            <p className="text-white/40 font-spark text-[11px] md:text-sm lg:text-base tracking-[0.6em] font-bold uppercase">
              Term & conditions applied 
            </p>
          </div>
        </footer>
      </div>

      {/* Global Vignette for Depth */}
      <div className="fixed inset-0 pointer-events-none bg-radial-vignette z-[5]" />
      <style>{`
        .bg-radial-vignette {
          background: radial-gradient(circle at center, transparent 30%, rgba(2, 6, 23, 0.6) 100%);
        }
      `}</style>
    </main>
  );
};

export default App;
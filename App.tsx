import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Snowfall from './components/Snowfall';
import CTAButton from './components/CTAButton';
import MysteryPodium from './components/MysteryPodium';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const conversionLink = 'https://example.com/join-now';

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-slate-950">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://files.catbox.moe/9oebh8.jpg"
          alt="Winter Aurora Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* SNOW */}
      <Snowfall color="#ffffff" density={150} />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center">

        {/* LOGO */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
          <motion.img
            src="https://files.catbox.moe/k2nd8p.png"
            alt="Brand Logo"
            className="h-12 md:h-16 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* HERO */}
        <header className="pt-32 md:pt-40 px-6 text-center max-w-5xl flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black uppercase text-christmas-spark mb-12"
            data-text="Celebrate the joyful international holiday with us!"
          >
            Celebrate the joyful <br className="hidden md:block" />
            international holiday with us!
          </motion.h1>

          {/* RESTORED EVENT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group cursor-default"
          >
            <div className="relative px-8 py-6 md:px-12 md:py-8 bg-white/10 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-[2.5rem] border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/40 hover:bg-white/15">
              <span className="font-main text-white/50 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
                Event Timeline
              </span>
              <p className="font-spark text-white text-lg md:text-2xl lg:text-3xl font-black tracking-[0.15em] whitespace-nowrap">
                18 DEC 2025 – 1 JAN 2026
              </p>
              
              {/* Shine effect on timeline box */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-40 pointer-events-none" />
              <div className="absolute inset-0 animate-shine pointer-events-none opacity-20" />
            </div>
          </motion.div>
        </header>

        {/* MYSTERY PODIUM */}
        <section className="mt-20 w-full">
          <MysteryPodium />
        </section>

        {/* HOW TO CLAIM */}
        <section className="mt-24 px-6 max-w-3xl w-full">
          <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase font-spark tracking-tight">
              How to claim?
            </h2>

            <div className="space-y-12">
              <div>
                <p className="text-[#0ea5e9] text-3xl font-black mb-2 font-spark animate-blue-glow">Step 1</p>
                <p className="text-white text-xl font-formal">
                  Register an account on our official portal
                </p>
              </div>

              <div className="h-px bg-white/30 w-16 mx-auto" />

              <div>
                <p className="text-[#0ea5e9] text-3xl font-black mb-2 font-spark animate-blue-glow">Step 2</p>
                <p className="text-white text-xl font-formal">
                  Login & claim your exclusive entry ticket
                </p>
              </div>
            </div>

            <motion.p
              className="mt-16 text-[#d42426] text-7xl md:text-8xl font-script drop-shadow-xl"
              animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              That simple!
            </motion.p>
          </div>
        </section>

        {/* CTA */}
        <footer className="mt-24 mb-24 flex flex-col items-center">
          <CTAButton text="Join Now to Win" link={conversionLink} />
          <p className="mt-8 text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
            Terms & conditions applied
          </p>
        </footer>

      </div>
      
      {/* Global Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-radial-vignette z-[5]" />
      <style>{`
        .bg-radial-vignette {
          background: radial-gradient(circle at center, transparent 20%, rgba(2, 6, 23, 0.7) 100%);
        }
      `}</style>
    </main>
  );
};

export default App;
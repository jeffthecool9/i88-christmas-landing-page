import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Snowfall from './components/Snowfall';
import CTAButton from './components/CTAButton';
import MysteryPodium from './components/MysteryPodium';

const App: React.FC = () => {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  const conversionLink = 'https://example.com/join-now';

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-slate-950">

      {/* DEBUG BLOCK – DO NOT REMOVE YET */}
      <div className="fixed top-4 left-4 z-[9999] bg-red-600 text-white px-4 py-2 rounded">
        DEBUG: APP IS RENDERING
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img
          src="https://files.catbox.moe/9oebh8.jpg"
          alt="Winter Background"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* SNOWFALL – LOCKED BEHIND CONTENT */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Snowfall color="#ffffff" density={120} />
      </div>

      {/* CONTENT */}
      <div className="relative z-[50] flex flex-col items-center text-white">

        {/* LOGO */}
        <div className="mt-10">
          <img
            src="https://files.catbox.moe/k2nd8p.png"
            alt="Logo"
            className="h-14 drop-shadow-xl"
          />
        </div>

        {/* HERO */}
        <header className="pt-24 px-6 text-center max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-10">
            Celebrate the joyful <br />
            international holiday with us!
          </h1>

          <div className="inline-block px-10 py-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-2">
              Event Timeline
            </p>
            <p className="text-2xl md:text-3xl font-black">
              18 DEC 2025 – 1 JAN 2026
            </p>
          </div>
        </header>

        {/* PODIUM */}
        <section className="mt-20 w-full">
          <MysteryPodium />
        </section>

        {/* CTA */}
        <footer className="mt-24 mb-24">
          <CTAButton text="Join Now to Win" link={conversionLink} />
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-white/40">
            Terms & conditions apply
          </p>
        </footer>
      </div>

      {/* VIGNETTE */}
      <div className="fixed inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
    </main>
  );
};

export default App;

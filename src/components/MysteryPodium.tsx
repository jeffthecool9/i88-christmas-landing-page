import React from 'react';
import { motion } from 'framer-motion';

const MysteryPodium: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 md:py-24 px-4 overflow-visible">
      
      {/* 🎁 MYSTERY PRIZE STAGE - Only Cluster 1 remains */}
      <div className="relative z-30 w-full max-w-7xl flex flex-col items-center justify-center">
        
        {/* Prize Cluster 1 */}
        <div className="flex flex-col items-center group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-20"
          >
            <img 
              src="https://files.catbox.moe/8y8h8n.png" 
              alt="Mystery Prize Cluster 1" 
              className="w-full h-auto max-h-[400px] md:max-h-[600px] object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.4)] filter transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient Prize Aura */}
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>

      </div>

      {/* Decorative Ground Mist */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-96 bg-gradient-to-t from-sky-900/10 via-white/5 to-transparent blur-[120px] -z-10" />
    </div>
  );
};

export default MysteryPodium;

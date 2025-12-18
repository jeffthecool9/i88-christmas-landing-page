import React from 'react';
import { motion } from 'framer-motion';

const MysteryPodium: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 md:py-24 px-4 overflow-visible">
      
      {/* 🎁 MYSTERY PRIZE STAGE - Silhouettes only */}
      <div className="relative z-30 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        
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
              className="w-full h-auto max-h-[350px] md:max-h-[500px] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] filter transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient Prize Aura */}
            <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>

        {/* Prize Cluster 2 */}
        <div className="flex flex-col items-center group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative z-20"
          >
            <img 
              src="https://files.catbox.moe/8y8h8n.png" 
              alt="Mystery Prize Cluster 2" 
              className="w-full h-auto max-h-[300px] md:max-h-[450px] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] filter scale-x-[-1] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient Prize Aura */}
            <div className="absolute inset-0 bg-sky-400/5 blur-[100px] rounded-full -z-10 animate-pulse delay-700" />
          </motion.div>
        </div>

      </div>

      {/* Decorative Ground Mist */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-96 bg-gradient-to-t from-sky-900/10 via-white/5 to-transparent blur-[120px] -z-10" />
    </div>
  );
};

export default MysteryPodium;
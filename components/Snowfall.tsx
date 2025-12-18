import React, { useEffect, useRef } from 'react';

interface SnowfallProps {
  color?: string;
  density?: number;
}

const Snowfall: React.FC<SnowfallProps> = ({ color = '#ffffff', density = 150 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Timing for accumulation (longer duration for subtle growth)
    const accumulationDuration = 120000;
    const startTime = Date.now();
    
    // Max height for stacking snow (keep it low to not block background)
    const getMaxAccumulationHeight = () => window.innerHeight / 4;

    const snowflakes: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      wind: number;
    }[] = [];

    const createSnowflake = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.5,
      speed: (Math.random() * 1.5 + 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.2,
      wind: (Math.random() * 0.5 - 0.25) * 0.2,
    });

    for (let i = 0; i < density; i++) {
      snowflakes.push(createSnowflake());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / accumulationDuration, 1);
      const maxAccumulationHeight = getMaxAccumulationHeight();
      const currentBankHeight = progress * maxAccumulationHeight;

      // --- DRAW SNOWFLAKES ---
      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        flake.y += flake.speed;
        flake.x += flake.wind;

        if (flake.y > height - (currentBankHeight * 0.8)) {
          flake.y = -flake.radius;
          flake.x = Math.random() * width;
        }
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;
      });

      // --- DRAW ACCUMULATING SNOW BANK (Behind Content Layer) ---
      if (currentBankHeight > 0) {
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, height - currentBankHeight);
        
        const step = 40;
        for (let x = 0; x <= width; x += step) {
          const wave = Math.sin((x / 200) + (elapsed / 4000)) * 6;
          const noise = Math.sin(x / 50) * 4;
          ctx.lineTo(x, height - currentBankHeight + wave + noise);
        }
        
        ctx.lineTo(width, height);
        ctx.closePath();

        // High-Quality Gradient for snow with subtle transparency
        const gradient = ctx.createLinearGradient(0, height - currentBankHeight - 10, 0, height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)'); 
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(165, 243, 252, 0.4)'); // Icy blue fade

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.shadowBlur = 0; 
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, [color, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
    />
  );
};

export default Snowfall;
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function DeveloperDesk() {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto h-[380px] flex items-center justify-center"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-2xl border border-white/10 shadow-2xl"
      >
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-2xl" style={{ transform: "translateZ(-20px)" }} />

        {/* 3D Image */}
        <motion.div 
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
          <motion.img 
            src="/assets/3d-study.png" 
            alt="3D Boy Studying" 
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Animated Dust Particles Overlay */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen overflow-hidden rounded-2xl" style={{ transform: "translateZ(30px)" }}>
           {Array.from({length: 20}).map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-yellow-100/40 rounded-full blur-[1px]"
               initial={{ 
                 x: Math.random() * 500, 
                 y: Math.random() * 450, 
                 opacity: Math.random() 
               }}
               animate={{ 
                 y: [null, Math.random() * -150], 
                 x: [null, (Math.random() - 0.5) * 100],
                 opacity: [0, 0.8, 0] 
               }}
               transition={{ 
                 duration: 4 + Math.random() * 6, 
                 repeat: Infinity, 
                 ease: "linear",
                 delay: Math.random() * 5
               }}
             />
           ))}
        </div>

        {/* Lamp Light Overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: 'radial-gradient(circle at 25% 45%, rgba(255,220,150,0.15) 0%, transparent 60%)',
            transform: "translateZ(10px)"
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Screen Code Overlay (adds depth) */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl flex items-center justify-center overflow-hidden" style={{ transform: "translateZ(50px)" }}>
           <motion.div 
             className="absolute top-[55%] left-[30%] w-32 h-20 bg-gradient-to-t from-blue-500/10 to-transparent blur-md"
             animate={{ opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           />
        </div>
      </motion.div>
    </div>
  );
}

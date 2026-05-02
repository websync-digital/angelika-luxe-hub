"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-1000 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative mb-8 animate-pulse">
        <Image
          src="/favicon.png"
          alt="De Angelika Logo"
          width={120}
          height={120}
        />
      </div>
      
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-tan to-gold transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4">
        <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold animate-pulse">
          Loading Luxury...
        </span>
      </div>
    </div>
  );
};

export default Preloader;

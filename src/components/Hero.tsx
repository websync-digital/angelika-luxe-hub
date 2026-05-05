"use client";

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleBooking = () => {
    window.open('https://wa.me/2349138616079?text=Hi, I would like to book an appointment', '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-main.png"
          alt="Professional Beauty Services at De Angelika Beauty Lounge"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                Redefine Your Look with Confidence
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button
                  onClick={handleBooking}
                  className="w-full sm:w-auto bg-tan hover:bg-tan-dark text-white font-bold rounded-full px-10 py-7 text-lg shadow-lg transition-smooth hover:scale-105 active:scale-95"
                >
                  Book Appointment
                </Button>
                <Button
                  onClick={handleBooking}
                  variant="outline"
                  className="w-full sm:w-auto bg-white/25 backdrop-blur-lg border-white/50 text-white hover:bg-white/40 rounded-full px-10 py-7 text-lg transition-smooth hover:scale-105 active:scale-95 group"
                >
                  <MessageCircle className="h-6 w-6 mr-3 text-white group-hover:scale-110 transition-smooth" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


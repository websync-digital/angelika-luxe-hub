"use client";

import Image from 'next/image';
import { Sparkles, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tan/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with Premium Framing - Reduced Size */}
          <div className="relative order-2 lg:order-1 max-w-[70%] mx-auto lg:mx-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-stylist.jpg"
                alt="De Angelika Beauty Lounge team at work"
                width={800}
                height={1000}
                className="w-full h-auto object-cover transform hover:scale-105 transition-all duration-700"
                priority
              />
              {/* Image Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Decorative Gold Frame Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-tan/30 rounded-tl-2xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-tan/30 rounded-br-2xl -z-0" />
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-elegant border border-tan/10 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="bg-tan/10 p-3 rounded-full">
                  <Star className="h-6 w-6 text-tan" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Premium Quality</p>
                  <p className="text-xl font-playfair font-bold text-foreground">Excellence Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side with Elegant Typography */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <span className="text-tan uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">
                The Lounge
              </span>
              <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-foreground leading-tight">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-tan mb-8" />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed font-light">
                At <span className="text-tan-dark font-medium">De Angelika Beauty Lounge</span>, we bring out the best version of you.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From fresh haircuts and luxury braids to flawless nails and professional makeup, our team ensures every visit leaves you looking and feeling stunning.
              </p>
            </div>

            {/* Features List */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-tan" />
                <span className="text-foreground/70 font-medium">Professional Stylists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-tan" />
                <span className="text-foreground/70 font-medium">Luxury Environment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-tan" />
                <span className="text-foreground/70 font-medium">Premium Products</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-tan" />
                <span className="text-foreground/70 font-medium">Personalized Care</span>
              </div>
            </div>

            {/* Decorative Quote-like Icon */}
            <div className="mt-12 opacity-10">
              <Sparkles className="h-16 w-16 text-tan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

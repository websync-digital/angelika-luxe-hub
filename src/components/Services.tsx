"use client";

import { Scissors, Crown, Gem, Sparkles, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scissors,
    title: 'Barbing & Male Grooming',
    description: 'Precision haircuts, beard trims, and male haircare.',
    gradient: 'from-blue-600/20 to-tan/20'
  },
  {
    icon: Crown,
    title: 'Braiding & Hair Styling',
    description: 'Stylish braids, twists, and creative hairstyles.',
    gradient: 'from-amber-400/20 to-gold/20'
  },
  {
    icon: Gem,
    title: 'Nails (Manicure & Pedicure)',
    description: 'Nail fixing, gel polish, and creative designs.',
    gradient: 'from-rose-500/20 to-tan/20'
  },
  {
    icon: Sparkles,
    title: 'Makeup & Frontal Installation',
    description: 'Natural glam or bold looks for all occasions.',
    gradient: 'from-violet-500/20 to-gold/20'
  }
];

const Services = () => {
  const handleBookService = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I would like to book ${serviceName}`);
    window.open(`https://wa.me/2349138616079?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-tan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
            Premium Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            Experience the pinnacle of beauty and grooming, tailored to your unique style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Card Background with Glassmorphism */}
                <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-smooth hover:bg-white/[0.06] hover:border-gold/30 hover:-translate-y-1 flex flex-col items-center text-center shadow-xl">
                  
                  {/* Icon Container with Gradient and Glow */}
                  <div className={`mb-6 p-6 rounded-[1.5rem] bg-gradient-to-br ${service.gradient} relative group-hover:scale-105 transition-smooth border border-white/5`}>
                    <div className="absolute inset-0 bg-white/10 rounded-[1.5rem] blur-lg opacity-0 group-hover:opacity-100 transition-smooth" />
                    <Icon className="h-8 w-8 text-white relative z-10" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-base mb-8 font-light leading-snug flex-grow">
                    {service.description}
                  </p>

                  <Button
                    onClick={() => handleBookService(service.title)}
                    className="w-full bg-white text-black hover:bg-gold hover:text-black font-semibold rounded-xl py-6 text-base transition-smooth shadow-lg group-hover:shadow-gold/10"
                  >
                    Book This Service 💬
                  </Button>
                </div>
                
                {/* Decorative glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 rounded-[24px] opacity-0 group-hover:opacity-100 blur-lg -z-10 transition-smooth" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

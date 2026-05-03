import { Scissors, Footprints, Hand, Camera, Palette, Flower2, Wand2, Crown, Eye, Smile, PenTool, Sparkles, Brush } from 'lucide-react';

const pricingData = [
  {
    category: "Haircut & Grooming",
    icon: Scissors,
    items: [
      { name: "Barbing, Dyeing & Washing", price: "₦3,000" },
      { name: "Barbing/Dyeing", price: "₦2,500" },
      { name: "Barbing", price: "₦2,000" },
      { name: "Dyeing (Women)", price: "₦2,000" },
      { name: "Dyeing (Men)", price: "₦1,000" },
      { name: "Spray Tint (Gold)", price: "₦5,000" },
      { name: "Carving/Shaving", price: "₦1,000" },
      { name: "Hair Treatment", price: "₦5,000" },
    ]
  },
  {
    category: "Facial Treatments",
    icon: Flower2,
    items: [
      { name: "Vampire Facials", price: "₦250,000" },
      { name: "Acne Facials", price: "₦25,000" },
      { name: "Dema Planning", price: "₦20,000" },
      { name: "LED Frequency", price: "₦18,000" },
      { name: "Classic Facials", price: "₦15,000" },
      { name: "Basic Facials", price: "₦10,000" },
      { name: "Consultation", price: "₦8,000" },
    ]
  },
  {
    category: "Nails & Art",
    icon: Hand,
    items: [
      { name: "Acrylic Long Nails", price: "₦20,000" },
      { name: "Acrylic Art Nails", price: "₦18,000" },
      { name: "Gel Polish (Long)", price: "₦15,000" },
      { name: "Acrylic Nails (Short)", price: "₦12,000" },
      { name: "Gel Polish Art Nails", price: "₦10,000" },
      { name: "Gel Polish Painting", price: "₦9,000" },
      { name: "Press-on Gel Art", price: "₦9,000" },
      { name: "Gel Polish (Medium)", price: "₦8,000" },
      { name: "3D Nails", price: "₦8,000" },
      { name: "Ombre", price: "₦8,000" },
      { name: "Gel Polish (Short)", price: "₦7,000" },
    ]
  },
  {
    category: "Pedicure & Toe Nails",
    icon: Footprints,
    items: [
      { name: "Jelly Pedicure (Men)", price: "₦15,000" },
      { name: "Jelly Pedicure (Women)", price: "₦13,000" },
      { name: "Pedicure (Men)", price: "₦13,000" },
      { name: "Pedicure (Women)", price: "₦10,000" },
      { name: "Acrylic Toe Nails", price: "₦5,000" },
      { name: "Gel Toe Art", price: "₦3,500" },
      { name: "Toe Painting", price: "₦1,500" },
    ]
  },
  {
    category: "Wig Styling & Care",
    icon: Wand2,
    items: [
      { name: "Ventilating of Closure", price: "₦35,000" },
      { name: "Wigging of Hair", price: "₦12,000" },
      { name: "Styling and Rolling", price: "₦9,000" },
      { name: "Revamping", price: "₦9,000" },
      { name: "Rolling of Hair", price: "₦8,000" },
      { name: "Stretching of Short Hair", price: "₦7,000" },
      { name: "Customising", price: "₦6,000" },
      { name: "Stretching of Long Hair", price: "₦4,000" },
      { name: "Styling Glueless Wigs", price: "₦3,000" },
    ]
  },
  {
    category: "Luxury Braids",
    icon: Crown,
    items: [
      { name: "Straight Butt length", price: "₦18,000" },
      { name: "Extra small (long)", price: "₦25,000" },
      { name: "Micro twists", price: "₦35,000" },
      { name: "French curls (Long)", price: "₦18,000" },
      { name: "Passion Twists (Long)", price: "₦18,000" },
      { name: "Butt length (tip/body curls)", price: "₦16,000" },
      { name: "Bra length braids", price: "₦13,000" },
      { name: "Shoulder length braids", price: "₦10,000" },
      { name: "Male braids", price: "₦10,000" },
      { name: "Jumbo braids", price: "₦10,000" },
    ]
  },
  {
    category: "Lash Extensions",
    icon: Eye,
    items: [
      { name: "Mega Volume Set", price: "₦25,000" },
      { name: "Refill (Mega Volume)", price: "₦21,000" },
      { name: "Volume Set", price: "₦18,000" },
      { name: "Refill (Volume)", price: "₦8,000" },
      { name: "Hybrid Set", price: "₦12,000" },
      { name: "Refill (Hybrid)", price: "₦4,000" },
      { name: "Classic Set", price: "₦10,000" },
      { name: "Bottom Lash", price: "₦10,000" },
      { name: "Refill (Classic)", price: "₦3,000" },
      { name: "Lash Removal", price: "₦3,000" },
    ]
  },
  {
    category: "Dental Aesthetics",
    icon: Smile,
    items: [
      { name: "Teeth Whitening (Max)", price: "₦160,000" },
      { name: "Powerchain Hook Braces", price: "₦55,000" },
      { name: "Normal Hook Braces", price: "₦50,000" },
      { name: "Normal Braces", price: "₦45,000" },
      { name: "Toothgems (Full Set)", price: "₦12,000" },
      { name: "Toothgems (Upper Set)", price: "₦8,000" },
    ]
  },
  {
    category: "Tattoo Art",
    icon: PenTool,
    items: [
      { name: "Full Sleeve Tattoo", price: "₦800,000+" },
      { name: "Half Sleeve Tattoo", price: "₦350,000+" },
      { name: "Quarter Sleeve Tattoo", price: "₦200,000+" },
      { name: "Large Tattoos", price: "₦100,000+" },
      { name: "Medium Tattoos", price: "₦50,000+" },
      { name: "Small Tattoos", price: "₦25,000+" },
    ]
  },
  {
    category: "Other Services",
    icon: Sparkles,
    items: [
      { name: "Home Service (Female)", price: "₦15,000" },
      { name: "Home Service (Male)", price: "₦10,000" },
      { name: "Natural hair dread", price: "₦55,000" },
      { name: "Inter locking", price: "₦20,000" },
      { name: "Palm rolling", price: "₦20,000" },
      { name: "Treatment (Lice/Dandruff)", price: "₦5,000" },
    ]
  },
  {
    category: "Makeup",
    icon: Brush,
    items: [
      { name: "Home Service", price: "₦40,000" },
      { name: "Birthday Shoot", price: "₦30,000" },
      { name: "Studio Make-up", price: "₦20,000" },
      { name: "Cluster Lashes", price: "₦5,000" },
    ]
  }
];

const PriceList = () => {
  return (
    <section id="pricing" className="py-16 bg-[#080808] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Menu
          </span>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Service Price List
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Experience luxury grooming and beauty at competitive rates. All our services are performed by professionals using premium products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pricingData.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white uppercase tracking-wider">
                    {section.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="flex justify-between items-center group/item text-sm"
                    >
                      <span className="text-white/70 font-light group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                      <div className="flex-grow border-b border-white/5 mx-3 border-dotted" />
                      <span className="text-gold font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gold-gradient">
            <a 
              href="https://wa.me/2349138616079" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-[#080808] hover:bg-transparent text-white hover:text-black px-12 py-5 rounded-full font-bold transition-all duration-300"
            >
              Book Your Session Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  PenTool, 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  Quote, 
  ArrowRight,
  Instagram,
  Facebook,
  Star,
  Music
} from 'lucide-react';

// --- Navbar Component ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 backdrop-blur-lg bg-neutral-950/95 shadow-xl shadow-black/20' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="uppercase z-[110] text-xl font-semibold text-white tracking-tighter mix-blend-difference whitespace-nowrap">
          DEJA VU
        </a>
        
        {/* Desktop Links - Strictly hidden below 1024px */}
        <div className="hidden lg:flex text-[10px] font-medium text-neutral-400 tracking-[0.2em] gap-x-10 uppercase items-center pointer-events-auto">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Social Events</a>
          <a href="#studio" className="hover:text-white transition-colors">The Venue</a>
          <a href="#contact" className="hover:text-white transition-colors border border-neutral-800 px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all">Become A Partner</a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden text-white z-[110] p-2 focus:outline-none bg-neutral-900/50 rounded-full backdrop-blur-sm border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Full Screen Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-neutral-950 z-[105] flex flex-col items-center justify-center gap-10 text-3xl font-serif transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-full invisible'
        }`}>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors italic">Home</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors italic text-center">Social Events</a>
          <a href="#studio" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors italic">The Venue</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors italic">Become A Partner</a>
          
          <div className="flex gap-8 mt-12">
            <a href="https://www.instagram.com/dejavunightclub_/" target="_blank" className="text-neutral-500 hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="text-neutral-500 hover:text-white"><Facebook size={24} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Component ---
const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2f61e32-f7d9-46ee-9655-df126da6fdd8_original.gif" 
          alt="Nightclub Vibe" 
          className="w-full h-full object-cover opacity-60 grayscale filter contrast-125"
        />
        <div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/30 absolute inset-0"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <p className="uppercase text-[10px] md:text-xs text-neutral-400 tracking-[0.2em] animate-fade-in">
          1 Diamond St, Aberdeen AB10 1QX
        </p>
        <h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl italic text-white tracking-tight font-serif animate-fade-in-up">
          DEJA VU
        </h1>
        
        <p className="md:text-base leading-relaxed text-sm text-neutral-400 max-w-md mx-auto animate-text-reveal">
          Afro/African Club Celebrating Sound, Style, And Culture. Expect The Hottest Afrobeats, Amapiano, And Dancehall, A Vibrant Crowd, And Nights That Hit So Hard They Feel Familiar
        </p>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="h-16 w-[1px] bg-gradient-to-b from-neutral-500 to-transparent"></span>
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </header>
  );
};

// --- Artistic Statement ---
const Statement: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <PenTool className="mx-auto text-neutral-600" size={24} />
        <h2 className="md:text-4xl serif leading-snug text-2xl text-white tracking-tight">
          "Where Sophistication Meets the Night."
        </h2>
        <p className="leading-loose md:text-base text-sm font-light text-neutral-400">
          In a city as vibrant and evolving as Aberdeen, Deja Vu stands out as a symbol of sophistication and charm. With its carefully curated atmosphere, exceptional service, and refined offerings, every detail is designed to elevate your night. Experience Deja Vu, where high-end luxury meets timeless elegance in the heart of Aberdeen.
        </p>
      </div>
    </section>
  );
};

// --- Portfolio Section ---
const Portfolio: React.FC = () => {
  const items = [
    {
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d81b5e1c-a902-4feb-84f5-711fee587988_1600w.png",
      date: "",
      tag: "DJ EVZ"
    },
    {
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cd0d5c7-f136-4289-9928-3a5a20e5fd47_1600w.png",
      date: "",
      tag: ""
    },
    {
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d01d289-804d-47d7-913f-52bc6ab2d930_1600w.png",
      date: "06/02/2026",
      tag: "OLD SCHOOL R&B CLASSICS"
    },
    {
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcdaf5cb-c756-4491-ae10-3ee16fe225f7_original.gif",
      date: "",
      tag: ""
    },
    {
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e13d1e4-f661-4f89-b0d6-b002dc5b593d_800w.png",
      date: "",
      tag: "DJ KULTUUR"
    },
    {
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10c91e34-672d-4d73-b8e2-e54abaa8531a_1600w.png",
      date: "",
      tag: ""
    }
  ];

  return (
    <section className="md:px-12 bg-neutral-950 pb-24 px-4" id="portfolio">
      <div className="flex justify-between items-end mb-12 border-b border-neutral-900 pb-6">
        <h3 className="serif text-xl text-white tracking-tight">Social Events</h3>
        <a href="https://www.instagram.com/dejavunightclub_/" target="_blank" className="uppercase hover:text-white transition-colors flex items-center gap-2 text-[10px] text-neutral-500 tracking-widest">
          Instagram <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="masonry-grid">
        {items.map((item, i) => (
          <div key={i} className="break-inside-avoid mb-6 group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm bg-neutral-900">
              <img 
                src={item.img} 
                alt={`Event ${i}`} 
                className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale"
              />
            </div>
            {(item.date || item.tag) && (
              <div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] text-neutral-400">{item.date}</span>
                <span className="text-[10px] text-gray-50 uppercase tracking-tighter">{item.tag}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Process Section ---
const Process: React.FC = () => {
  return (
    <section className="md:px-12 border-y bg-neutral-900/30 border-neutral-900 py-24 px-6" id="process">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl serif text-white tracking-tight mb-2">The Vibe</h3>
          <p className="text-sm text-neutral-500 max-w-lg">
            As the evening unfolds, refined Afro and Caribbean rhythms set the tone, creating a seamless flow from relaxed elegance to a lively, sophisticated dancefloor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { id: "01", title: "Afrobeat", desc: "The rhythmic heart of the night, bringing authentic African energy to Aberdeen." },
            { id: "02", title: "R&B Classics", desc: "Smooth transitions into timeless tracks for a sophisticated crowd." },
            { id: "03", title: "Amapiano", desc: "The deepest house grooves from South Africa to keep the floor moving until dawn." }
          ].map((step) => (
            <div key={step.id} className="group">
              <span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">{step.id}</span>
              <h4 className="text-lg font-medium text-white mb-3">{step.title}</h4>
              <p className="leading-relaxed text-sm text-neutral-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Studio Section ---
const Studio: React.FC = () => {
  return (
    <section className="md:px-12 bg-neutral-950 py-24 px-6" id="studio">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <div className="overflow-hidden bg-neutral-900 w-full h-[500px] border-neutral-800 border rounded-sm relative shadow-2xl">
          <iframe 
            src="https://www.google.com/maps?q=1%20Diamond%20St%2C%20Aberdeen%20AB10%201QX%2C%20UK&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="map-dark absolute inset-0 w-full h-full"
          ></iframe>
          <div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-4 py-2 rounded-sm z-10 pointer-events-none">
            <span className="text-[10px] text-white uppercase tracking-widest flex items-center gap-2">
              <MapPin size={12} /> 1 Diamond St, Aberdeen AB10 1QX, UK
            </span>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="serif text-3xl text-white tracking-tight mb-4 text-center lg:text-left uppercase">The Venue</h3>
            <p className="leading-relaxed text-sm text-neutral-400 text-center lg:text-left">
              A luxury nightclub in the heart of the city, where elegant design, prime location, and an electric atmosphere come together for an unforgettable night.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-neutral-900 rounded-full text-neutral-300">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-1 uppercase tracking-wider">Premium Security</h5>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  A safe, inclusive, and professional environment managed by experienced staff.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-neutral-900 rounded-full text-neutral-300">
                <Star size={18} />
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-1 uppercase tracking-wider">VIP Service</h5>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Exclusive table service and premium offerings for an elevated celebration.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-neutral-900 rounded-full text-neutral-300">
                <Music size={18} />
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-1 uppercase tracking-wider">Crystal Audio</h5>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  State-of-the-art sound systems engineered for the best Afro-Carib beats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="mx-auto text-neutral-700 mb-6" size={32} />
        <p className="md:text-xl serif leading-relaxed text-lg italic text-neutral-300 mb-6">
          "Excellent nightlife experience in the bustling Aberdeen city centre."
        </p>
        <p className="uppercase text-[10px] text-neutral-500 tracking-widest">— Taiwo A</p>
      </div>
    </section>
  );
};

// --- Contact Section ---
const Contact: React.FC = () => {
  return (
    <section className="md:px-12 bg-neutral-900 py-24 px-6" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="md:text-4xl serif text-3xl text-white tracking-tight mb-4 uppercase">GET IN TOUCH</h3>
          <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Inquiries & VIP Bookings</p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" 
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Email</label>
              <input 
                type="email" 
                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" 
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Message</label>
            <textarea 
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors min-h-[120px]" 
              placeholder="Tell us about your event or VIP booking inquiry..."
            ></textarea>
          </div>

          <div className="pt-6 text-center">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-[10px] font-medium tracking-widest uppercase text-white border border-neutral-700 hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
              <span>Send Request</span>
              <ArrowRight className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={16} />
            </button>
            <p className="text-[9px] text-neutral-600 mt-4 uppercase">By submitting this form, you consent to being contacted to discuss your request.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-neutral-900 border-t py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-center md:text-left">
          <p className="text-xl text-white tracking-tight font-serif uppercase">DEJA VU.</p>
          <p className="text-[10px] text-neutral-600 mt-1 uppercase">Aberdeen, UK</p>
        </div>

        <div className="flex gap-x-6">
          <a href="https://www.instagram.com/dejavunightclub_?igsh=MXBwOXVkcmR6anphdA==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-neutral-500">
            <Instagram size={20} className="text-white" />
          </a>
          <a href="https://www.facebook.com/share/18F89k5gqA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-neutral-500">
            <Facebook size={20} className="text-white" />
          </a>
        </div>

        <div className="text-[10px] text-neutral-700 font-medium uppercase">
          © {new Date().getFullYear()} Deja Vu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Statement />
      <Portfolio />
      <Process />
      <Studio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

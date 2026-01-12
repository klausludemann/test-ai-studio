
import React, { useState, useEffect } from 'react';
import { INGREDIENTS, TESTIMONIALS } from '../constants';
import { generateAITagline } from '../geminiService';

interface LandingPageProps {
  onNavigate: (page: 'home' | 'science' | 'shop' | 'editor') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [mood, setMood] = useState<string>('Grinding');
  const [aiContent, setAiContent] = useState({ tagline: 'Crystal Clear Energy', motivation: 'Precision energy for high-performance humans.' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMoodChange = async (newMood: string) => {
    setMood(newMood);
    setIsGenerating(true);
    const content = await generateAITagline(newMood);
    setAiContent(content);
    setIsGenerating(false);
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-gradient-almandine rounded-bl-xl rounded-tr-xl flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 font-display font-black text-xs text-black">A</div>
            </div>
            <span className="font-display text-2xl font-black tracking-tighter italic ml-4">ALMANDINE</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <button onClick={() => onNavigate('science')} className="hover:text-white transition-colors uppercase">Science</button>
            <a href="#ai-spark" className="hover:text-white transition-colors">AI Spark</a>
          </div>
          <button 
            onClick={() => onNavigate('shop')}
            className="bg-gradient-almandine px-6 py-2 rounded-full text-xs font-bold text-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#39ff14]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-block px-4 py-1 rounded-full border border-green-900/50 bg-green-950/20 text-[#39ff14] text-xs font-bold uppercase tracking-widest mb-6">
              Next-Gen Performance Drink
            </div>
            <h1 className="font-display text-5xl lg:text-8xl font-black leading-none tracking-tighter mb-8 uppercase italic">
              Unleash the <span className="text-gradient">Voltage</span> within
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Engineered for the elite. Almandine delivers ultra-pure energy with zero sugar, zero crash, and unmatched focus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('shop')}
                className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#39ff14] hover:text-black transition-all transform active:scale-95 shadow-xl"
              >
                Get Started
              </button>
              <button onClick={() => onNavigate('science')} className="w-full sm:w-auto border border-white/20 hover:border-white/50 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                Learn Science
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20"></div>
            <div className="relative animate-float">
              <div className="w-64 h-[450px] lg:w-72 lg:h-[550px] bg-gradient-to-b from-[#39ff14] to-[#004d00] rounded-[40px] shadow-[0_0_100px_rgba(57,255,20,0.4)] border-4 border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-10 w-full text-center">
                   <h3 className="font-display text-4xl font-black tracking-tighter text-black opacity-80">ALMANDINE</h3>
                   <p className="text-[10px] tracking-[0.3em] font-bold text-green-950 uppercase mt-1">Neon Pulse Edition</p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-black/30 flex items-center justify-center">
                    <i className="fas fa-bolt text-black text-xl"></i>
                  </div>
                  <p className="mt-4 text-[8px] uppercase tracking-widest font-black text-black/40">500ml | 0 Sugar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-6xl font-black mb-4 uppercase">For the <span className="text-gradient">1%</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto italic">Designed for those who demand more from every second of their day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl hover:border-[#39ff14]/30 transition-all group cursor-pointer" onClick={() => onNavigate('science')}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform">
                <i className="fas fa-gem text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic text-[#39ff14]">Crystalline Purity</h3>
              <p className="text-gray-400 leading-relaxed">Filtered through active garnet substrates for a mineral-rich, ultra-smooth mouthfeel.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl hover:border-[#39ff14]/30 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform">
                <i className="fas fa-microchip text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic text-[#39ff14]">Neural Focus</h3>
              <p className="text-gray-400 leading-relaxed">Nootropic-enhanced formula designed to bridge the gap between body and mind.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl hover:border-[#39ff14]/30 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform">
                <i className="fas fa-dna text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic text-[#39ff14]">Bio-Optimized</h3>
              <p className="text-gray-400 leading-relaxed">Bioavailable ingredients ensure your body absorbs every mg of performance power.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Motivation Section (The "Spark") */}
      <section id="ai-spark" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-600/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-[40px] p-8 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 uppercase italic">Fuel Your <span className="text-[#39ff14]">Vibe</span></h2>
              <p className="text-gray-400 mb-8 text-lg">Tell us what you're doing, and let Almandine AI generate your personalized performance mantra.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {['Grinding', 'Gaming', 'Gym', 'Late Night'].map((m) => (
                  <button
                    key={m}
                    onClick={() => handleMoodChange(m)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${mood === m ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 min-h-[160px] flex flex-col justify-center">
                {isGenerating ? (
                  <div className="flex items-center space-x-3 text-gray-500 italic">
                    <div className="w-4 h-4 border-2 border-[#39ff14] border-t-transparent rounded-full animate-spin"></div>
                    <span>AI is calculating your frequency...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-[#39ff14] font-display text-xl font-bold mb-2 uppercase tracking-tight">"{aiContent.tagline}"</p>
                    <p className="text-gray-300 italic text-lg">"{aiContent.motivation}"</p>
                  </>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-square bg-gradient-almandine rounded-[60px] flex items-center justify-center p-12 overflow-hidden">
                  <i className="fas fa-robot text-[120px] lg:text-[180px] text-black/20 absolute -right-10 -bottom-10 transform rotate-12"></i>
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-black/10 backdrop-blur-md rounded-full mx-auto flex items-center justify-center mb-6 border border-white/20">
                      <i className="fas fa-sparkles text-[#39ff14] text-3xl"></i>
                    </div>
                    <p className="text-black font-display text-2xl font-black uppercase tracking-widest leading-tight">Almandine AI<br/><span className="text-green-900">Engineered Pulse</span></p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section id="ingredients" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl lg:text-6xl font-black uppercase tracking-tighter">The Science of <br/><span className="text-gradient">Intensity</span></h2>
            </div>
            <div className="max-w-md text-gray-500 text-sm italic">
              We don't hide behind proprietary blends. Every milligram of Almandine is calculated for maximum physiological response and cognitive clarity.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INGREDIENTS.map((ing, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl group hover:bg-[#39ff14]/5 transition-colors cursor-pointer" onClick={() => onNavigate('science')}>
                <i className={`fas ${ing.icon} text-3xl text-[#39ff14] mb-6 group-hover:scale-110 transition-transform`}></i>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide italic">{ing.name}</h3>
                <p className="text-[#39ff14] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{ing.benefit}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{ing.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-black uppercase mb-16 tracking-[0.3em] opacity-50 italic">Trusted by the Elite</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-black/50 border border-white/5 p-8 rounded-2xl relative group hover:border-[#39ff14]/30 transition-colors">
                <div className="flex text-[#39ff14] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs mr-1"></i>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-almandine rounded-full mr-4 flex items-center justify-center font-bold text-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase">{t.name}</h4>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-40 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-none">
              Stop surviving. <br/> <span className="text-gradient underline decoration-[#39ff14]/30">Start conquering.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Ready to feel the crystalline difference? Your first 12-pack is waiting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate('shop')}
                className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-[#39ff14] hover:text-black transition-all shadow-2xl"
              >
                Order Almandine Now
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="flex items-center"><i className="fas fa-check-circle text-[#39ff14] mr-2"></i> Fast Shipping</span>
              <span className="flex items-center"><i className="fas fa-check-circle text-[#39ff14] mr-2"></i> Lab Tested</span>
              <span className="flex items-center"><i className="fas fa-check-circle text-[#39ff14] mr-2"></i> No Crash Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center space-x-2 mb-6 md:mb-0 cursor-pointer" onClick={() => onNavigate('home')}>
             <span className="font-display text-lg font-black tracking-tighter text-white">ALMANDINE</span>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <button onClick={() => onNavigate('editor')} className="hover:text-white transition-colors uppercase">Admin</button>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#39ff14] text-lg"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#39ff14] text-lg"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-[#39ff14] text-lg"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <div className="text-center mt-10 text-[10px] text-gray-800 uppercase tracking-widest">
          © {new Date().getFullYear()} Almandine Energy. All rights reserved. Spark the Fire.
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

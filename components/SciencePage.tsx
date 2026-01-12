
import React, { useEffect } from 'react';

interface SciencePageProps {
  onNavigate: (page: 'home' | 'science') => void;
}

const SciencePage: React.FC<SciencePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20">
      {/* Mini Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-6 h-6 bg-gradient-almandine rounded flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 font-display font-black text-[10px]">A</div>
            </div>
            <span className="font-display text-lg font-black tracking-tighter italic ml-3">ALMANDINE</span>
          </div>
          <button 
            onClick={() => onNavigate('home')} 
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to HQ
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,76,0.05)_0%,_transparent_100%)]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#ff004c] text-xs font-black uppercase tracking-[0.4em] mb-4">Laboratory Report v3.1</p>
          <h1 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none mb-6">
            THE PHYSICS OF <br/><span className="text-gradient">PERFORMANCE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light italic">
            Almandine isn't just a drink; it's a bio-molecular interface designed to optimize the human neural network.
          </p>
        </div>
      </section>

      {/* The Garnet Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-20 h-2 bg-[#ff004c] mb-10"></div>
              <h2 className="font-display text-3xl lg:text-4xl font-black uppercase italic mb-8">Phase 01: <br/>Garnet Filtration</h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                Our base water undergoes a proprietary **Garnet-Press** cycle. Using naturally sourced Almandine garnet crystals from the deep mantle, we strip impurities while mineralizing the solution with specific silicate trace elements.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-[#ff004c]/30 rounded flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-[#ff004c] font-black text-xs">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide mb-1">Crystalline Stabilization</h4>
                    <p className="text-gray-500 text-sm italic">Harmonizing the molecular clusters of H2O for rapid gastric emptying.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-[#ff004c]/30 rounded flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-[#ff004c] font-black text-xs">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide mb-1">Magnetic Enrichment</h4>
                    <p className="text-gray-500 text-sm italic">Utilizing the unique iron-rich structure of garnet to ionize key electrolytes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video bg-black rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#ff004c]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 <div className="z-10 text-center">
                    <div className="w-32 h-32 border-2 border-[#ff004c] rounded-full mx-auto flex items-center justify-center relative animate-pulse">
                      <i className="fas fa-gem text-5xl text-white"></i>
                      <div className="absolute inset-0 border-4 border-white/5 rounded-full scale-125"></div>
                    </div>
                    <p className="mt-8 text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Molecular Visualization v2.0</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Deep Dive */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-black uppercase tracking-tighter text-center mb-20 italic">Compound <span className="text-[#ff004c]">Analysis</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Caffeine + L-Theanine */}
            <div className="bg-black/40 p-10 rounded-[30px] border border-white/5 hover:border-[#ff004c]/20 transition-all">
              <div className="flex items-center mb-8">
                 <div className="p-4 bg-red-950/20 rounded-2xl mr-6">
                    <i className="fas fa-brain text-2xl text-[#ff004c]"></i>
                 </div>
                 <h3 className="text-2xl font-black uppercase italic">The Smart Caffeine Stack</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Standard energy drinks use synthetic caffeine that causes a spike and a subsequent adrenal crash. We utilize a precise 2:1 ratio of **Green Coffee Caffeine** and **L-Theanine**.
              </p>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center"><i className="fas fa-check text-[#ff004c] mr-3"></i> Alpha Wave Production Increase</li>
                <li className="flex items-center"><i className="fas fa-check text-[#ff004c] mr-3"></i> Peripheral Vasodilation Enhancement</li>
                <li className="flex items-center"><i className="fas fa-check text-[#ff004c] mr-3"></i> Zero Nervous Jitters</li>
              </ul>
            </div>

            {/* Red Beet Root */}
            <div className="bg-black/40 p-10 rounded-[30px] border border-white/5 hover:border-[#ff004c]/20 transition-all">
              <div className="flex items-center mb-8">
                 <div className="p-4 bg-red-950/20 rounded-2xl mr-6">
                    <i className="fas fa-bolt text-2xl text-[#ff004c]"></i>
                 </div>
                 <h3 className="text-2xl font-black uppercase italic">Nitric Oxide Fueling</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                By including fermented Red Beet Root, we increase bioavailable nitrates. This leads to higher oxygen delivery to the muscle and brain tissues.
              </p>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center"><i className="fas fa-check text-[#ff004c] mr-3"></i> Mitochondria Efficiency Optimization</li>
                <li className="flex items-center"><i className="fas fa-check text-[#ff004c] mr-3"></i> Increased V02 Max Utility</li>
                <li className="flex items-center"><i className="fas fa-check text-[#ff004c] mr-3"></i> Sustained Energy via Natural Bloodflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-black uppercase tracking-[0.3em] mb-12 italic">Performance Metrics</h2>
          <div className="max-w-5xl mx-auto glass-card p-12 rounded-[40px] border border-[#ff004c]/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-black text-[#ff004c] mb-2">94%</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Retention of Focus</div>
                <p className="mt-4 text-sm text-gray-600 italic">Vs. 61% for leading synthetic brands.</p>
              </div>
              <div className="border-x border-white/5">
                <div className="text-5xl font-black text-white mb-2">0.2s</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Reaction Time Decrease</div>
                <p className="mt-4 text-sm text-gray-600 italic">Average improvement in neural response.</p>
              </div>
              <div>
                <div className="text-5xl font-black text-[#ff004c] mb-2">7hrs</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Active Peak Energy</div>
                <p className="mt-4 text-sm text-gray-600 italic">Sustained release without the drop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-8">Validation complete.</p>
          <button 
            onClick={() => onNavigate('home')}
            className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-[#ff004c] hover:text-white transition-all shadow-2xl"
          >
            EXPERIENCE THE SCIENCE
          </button>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;

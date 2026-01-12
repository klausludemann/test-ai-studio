
import React, { useState } from 'react';
import { Product } from '../types';

interface ShopPageProps {
  onNavigate: (page: 'home' | 'science' | 'shop' | 'editor') => void;
  products: Product[];
}

const ShopPage: React.FC<ShopPageProps> = ({ onNavigate, products }) => {
  // Use products from props, or fallback to empty array if not loaded yet
  const displayProducts = products.length > 0 ? products : [];
  const [selectedProductId, setSelectedProductId] = useState<string>(displayProducts[0]?.id || '');
  const [isAdding, setIsAdding] = useState(false);

  const selectedProduct = displayProducts.find(p => p.id === selectedProductId) || displayProducts[0];

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1500);
  };

  if (displayProducts.length === 0) return <div className="p-20 text-center uppercase font-black tracking-widest italic">Initializing Inventory...</div>;

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Shop Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md py-4 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-6 h-6 bg-gradient-almandine rounded flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 font-display font-black text-[10px] text-black">G</div>
            </div>
            <span className="font-display text-lg font-black tracking-tighter italic ml-3">G-VERVE</span>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('home')} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Home</button>
            <button onClick={() => onNavigate('science')} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Science</button>
            <div className="relative cursor-pointer">
              <i className="fas fa-shopping-bag text-white opacity-50"></i>
              <span className="absolute -top-2 -right-2 bg-[#39ff14] text-[8px] font-black text-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Visual Column */}
            <div className="w-full lg:w-1/2">
              <div className="sticky top-32">
                <div className="relative group">
                  <div className="aspect-[4/5] bg-gradient-to-br from-green-950/40 to-black rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl flex items-center justify-center">
                    {/* The dynamic image from DB */}
                    <img 
                      src={selectedProduct.picture} 
                      alt={selectedProduct.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Floating Product Name/Claim Overlay */}
                    <div className="relative z-10 text-center px-8">
                       <h2 className="font-display text-4xl font-black italic uppercase tracking-tighter mb-2 transform group-hover:-translate-y-2 transition-transform text-[#39ff14]">{selectedProduct.name}</h2>
                       <p className="text-[#39ff14] font-black uppercase tracking-[0.3em] text-[10px]">{selectedProduct.claim}</p>
                    </div>

                    {/* 3D Can Visual Component - Neon Green Box Style */}
                    <div className="absolute -bottom-20 right-10 w-32 h-[300px] bg-gradient-to-b from-[#39ff14] to-[#004d00] rounded-[24px] shadow-2xl border-2 border-white/10 transform rotate-12 group-hover:rotate-6 transition-transform duration-500 hidden sm:block">
                      <div className="absolute top-4 w-full text-center">
                        <span className="font-display text-xl font-black text-black/80">G</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-4 gap-4">
                  {displayProducts.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => setSelectedProductId(p.id)}
                      className={`aspect-square rounded-2xl border overflow-hidden transition-all ${selectedProductId === p.id ? 'border-[#39ff14] ring-2 ring-[#39ff14]/20' : 'border-white/10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
                    >
                      <img src={p.picture} className="w-full h-full object-cover" alt={p.name} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selection Column */}
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <div className="inline-block px-3 py-1 rounded-full border border-green-900/50 bg-green-950/20 text-[#39ff14] text-[10px] font-black uppercase tracking-widest mb-6 italic">
                  Premium Selection
                </div>
                <h1 className="font-display text-4xl lg:text-5xl font-black uppercase tracking-tighter italic mb-4">
                  {selectedProduct.name}
                </h1>
                <p className="text-[#39ff14] font-bold text-sm uppercase tracking-widest mb-6 italic">
                  "{selectedProduct.claim}"
                </p>
                <p className="text-gray-400 text-lg leading-relaxed italic mb-8">
                  {selectedProduct.description}
                </p>
                
                <div className="flex items-baseline space-x-4">
                  <span className="text-5xl font-black italic text-[#39ff14]">${selectedProduct.price}</span>
                  <span className="text-gray-600 line-through text-lg">${(selectedProduct.price * 1.25).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Select Configuration</p>
                <div className="grid grid-cols-1 gap-3">
                  {displayProducts.map((p) => (
                    <div 
                      key={p.id}
                      onClick={() => setSelectedProductId(p.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex justify-between items-center group ${selectedProductId === p.id ? 'border-[#39ff14] bg-green-950/10' : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-4 border ${selectedProductId === p.id ? 'bg-[#39ff14] border-[#39ff14]' : 'border-gray-700'}`}></div>
                        <div>
                           <h4 className={`font-bold text-sm uppercase italic tracking-tight transition-colors ${selectedProductId === p.id ? 'text-[#39ff14]' : 'text-white'}`}>{p.name}</h4>
                           <span className="text-[9px] text-gray-500 uppercase font-black">{p.tag || 'Available'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black italic">${p.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`w-full py-6 rounded-full font-black uppercase tracking-widest text-lg transition-all shadow-[0_10px_40px_rgba(57,255,20,0.2)] flex items-center justify-center ${isAdding ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-[#39ff14] hover:text-black active:scale-95'}`}
                >
                  {isAdding ? (
                    <><i className="fas fa-check mr-3"></i> Added to Batch</>
                  ) : (
                    <><i className="fas fa-shipping-fast mr-3"></i> Secure Order</>
                  )}
                </button>
                <p className="text-center text-[10px] text-gray-600 uppercase font-black tracking-widest">
                  Secure 256-bit encrypted checkout
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                <div className="text-center">
                  <i className="fas fa-gem text-[#39ff14] text-xl mb-3"></i>
                  <h6 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Purity</h6>
                </div>
                <div className="text-center">
                  <i className="fas fa-bolt text-[#39ff14] text-xl mb-3"></i>
                  <h6 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Velocity</h6>
                </div>
                <div className="text-center">
                  <i className="fas fa-shield-alt text-[#39ff14] text-xl mb-3"></i>
                  <h6 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Safety</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 mt-10">
        <div className="container mx-auto px-6 text-center text-gray-800 text-[9px] font-black uppercase tracking-[0.4em]">
          G-Verve Laboratory Grade Energy • Est. 2024
        </div>
      </footer>
    </div>
  );
};

export default ShopPage;

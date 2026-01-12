
import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_DB } from '../constants';

interface EditorPageProps {
  onNavigate: (page: 'home' | 'science' | 'shop' | 'editor') => void;
  products: Product[];
  onUpdate: (products: Product[]) => void;
}

const EditorPage: React.FC<EditorPageProps> = ({ onNavigate, products, onUpdate }) => {
  const [localProducts, setLocalProducts] = useState<Product[]>([...products]);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleChange = (id: string, field: keyof Product, value: string | number) => {
    const updated = localProducts.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    );
    setLocalProducts(updated);
  };

  const handleSave = () => {
    onUpdate(localProducts);
    setSaveStatus('Changes saved successfully!');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all product data to factory defaults?')) {
      setLocalProducts([...PRODUCTS_DB]);
      onUpdate([...PRODUCTS_DB]);
      setSaveStatus('Database reset to defaults.');
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pb-20">
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md py-4 border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
             <i className="fas fa-tools text-[#39ff14] mr-4"></i>
             <h1 className="font-display text-lg font-black uppercase italic tracking-tighter">Inventory Manager</h1>
          </div>
          <button 
            onClick={() => onNavigate('shop')} 
            className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white flex items-center transition-colors"
          >
            <i className="fas fa-times mr-2"></i> Exit Editor
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-32 max-w-4xl">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-4xl font-black uppercase italic tracking-tighter mb-2">Edit <span className="text-gradient">Database</span></h2>
            <p className="text-gray-500 text-sm italic">Manage G-Verve product pricing, visuals, and marketing claims in real-time.</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleReset}
              className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
              Reset to Default
            </button>
            <button 
              onClick={handleSave}
              className="px-8 py-2 bg-gradient-almandine rounded-full text-[10px] font-black text-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
            >
              Commit Changes
            </button>
          </div>
        </div>

        {saveStatus && (
          <div className="mb-8 p-4 bg-green-900/20 border border-green-500/50 rounded-xl text-green-400 text-xs font-bold text-center">
            {saveStatus}
          </div>
        )}

        <div className="space-y-8">
          {localProducts.map((p) => (
            <div key={p.id} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Product Name</label>
                    <input 
                      type="text" 
                      value={p.name} 
                      onChange={(e) => handleChange(p.id, 'name', e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#39ff14] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Price ($)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={p.price} 
                      onChange={(e) => handleChange(p.id, 'price', parseFloat(e.target.value))}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#39ff14] outline-none transition-colors font-display"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Marketing Claim</label>
                    <input 
                      type="text" 
                      value={p.claim} 
                      onChange={(e) => handleChange(p.id, 'claim', e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#39ff14] outline-none transition-colors italic"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Image URL</label>
                    <input 
                      type="text" 
                      value={p.picture} 
                      onChange={(e) => handleChange(p.id, 'picture', e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[10px] focus:border-[#39ff14] outline-none transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Preview</label>
                    <div className="aspect-video bg-black rounded-xl border border-white/10 overflow-hidden">
                      <img src={p.picture} className="w-full h-full object-cover opacity-60" alt="Preview" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <span className="text-[10px] font-black uppercase text-[#39ff14]/20 tracking-[0.5em]">Live Render</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Detailed Description</label>
                <textarea 
                  value={p.description} 
                  onChange={(e) => handleChange(p.id, 'description', e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#39ff14] outline-none transition-colors h-24 resize-none"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-3xl border border-dashed border-white/10 text-center">
           <i className="fas fa-plus text-gray-700 text-3xl mb-4"></i>
           <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.3em]">Module for Adding New SKUs Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;

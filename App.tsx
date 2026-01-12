
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SciencePage from './components/SciencePage';
import ShopPage from './components/ShopPage';
import EditorPage from './components/EditorPage';
import { PRODUCTS_DB } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'science' | 'shop' | 'editor'>('home');
  const [products, setProducts] = useState<Product[]>([]);

  // Initialize products from localStorage or constants
  useEffect(() => {
    const savedProducts = localStorage.getItem('almandine_products');
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        setProducts(PRODUCTS_DB);
      }
    } else {
      setProducts(PRODUCTS_DB);
    }
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('almandine_products', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'science' | 'shop' | 'editor') => {
    setCurrentPage(page);
  };

  const handleUpdateProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#ff004c] selection:text-white">
      {currentPage === 'home' && <LandingPage onNavigate={navigateTo} />}
      {currentPage === 'science' && <SciencePage onNavigate={navigateTo} />}
      {currentPage === 'shop' && <ShopPage onNavigate={navigateTo} products={products} />}
      {currentPage === 'editor' && (
        <EditorPage 
          onNavigate={navigateTo} 
          products={products} 
          onUpdate={handleUpdateProducts} 
        />
      )}
    </div>
  );
};

export default App;

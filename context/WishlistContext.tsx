'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types';

interface WishlistState {
  items: Product[];
}

const WishlistContext = createContext<{
  state: WishlistState;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
} | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<WishlistState>({
    items: [],
  });

  useEffect(() => {
    const savedWishlist = localStorage.getItem('royalwood-wishlist');
    if (savedWishlist) {
      try {
        const wishlistData = JSON.parse(savedWishlist);
        setState({ items: wishlistData });
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('royalwood-wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addToWishlist = (product: Product) => {
    setState(prev => ({
      items: prev.items.find(item => item.id === product.id)
        ? prev.items
        : [...prev.items, product]
    }));
  };

  const removeFromWishlist = (productId: string) => {
    setState(prev => ({
      items: prev.items.filter(item => item.id !== productId)
    }));
  };

  const isInWishlist = (productId: string): boolean => {
    return state.items.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ state, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
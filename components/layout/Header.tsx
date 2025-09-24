'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useWishlist } from '@/context/WishlistContext';
import AuthModal from '@/components/auth/AuthModal';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const { state: cartState } = useCart();
  const { state: authState } = useAuth();
  const { state: wishlistState } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">R</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white">Royalwood</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-gold transition-colors">
                Products
              </Link>
              <Link href="/categories" className="text-gray-300 hover:text-gold transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search furniture..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:text-gold"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Wishlist */}
              <Link href="/wishlist">
                <Button variant="ghost" size="sm" className="relative text-white hover:text-gold">
                  <Heart className="w-5 h-5" />
                  {wishlistState.items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {wishlistState.items.length}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Cart */}
              <Link href="/cart">
                <Button variant="ghost" size="sm" className="relative text-white hover:text-gold">
                  <ShoppingBag className="w-5 h-5" />
                  {cartState.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {cartState.itemCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* User Account */}
              {authState.isAuthenticated ? (
                <Button variant="ghost" size="sm" className="text-white hover:text-gold">
                  <User className="w-5 h-5" />
                </Button>
              ) : (
                <div className="hidden sm:flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-gold"
                    onClick={() => openAuthModal('login')}
                  >
                    Login
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold/90 text-black font-medium"
                    onClick={() => openAuthModal('signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:text-gold"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search furniture..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-gold transition-colors">
                Products
              </Link>
              <Link href="/categories" className="block text-gray-300 hover:text-gold transition-colors">
                Categories
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-gold transition-colors">
                Contact
              </Link>
              
              {!authState.isAuthenticated && (
                <div className="flex space-x-4 pt-4 border-t border-white/10">
                  <Button
                    variant="ghost"
                    className="text-white hover:text-gold flex-1"
                    onClick={() => openAuthModal('login')}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-gold hover:bg-gold/90 text-black font-medium flex-1"
                    onClick={() => openAuthModal('signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;
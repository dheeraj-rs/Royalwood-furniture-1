'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 ml-3">
              Collections
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Handpicked masterpieces that showcase the finest in luxury furniture design. 
            Each piece represents our commitment to exceptional craftsmanship and timeless elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button 
              size="lg" 
              variant="outline"
              className="border-gold/30 text-gold hover:bg-gold hover:text-black backdrop-blur-sm px-8 py-4 text-lg group transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
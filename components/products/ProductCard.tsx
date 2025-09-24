'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className={cn(
        "group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-all duration-700 group-hover:scale-110",
              imageLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'
            )}
            onLoad={() => setImageLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
            {product.sale && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white font-medium">
                Sale
              </Badge>
            )}
            {product.featured && (
              <Badge className="bg-gold hover:bg-gold/90 text-black font-medium">
                Featured
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="destructive">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className={cn(
            "absolute top-4 right-4 z-20 flex flex-col space-y-2 transition-all duration-300",
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
          )}>
            <Button
              size="sm"
              variant="ghost"
              className="w-10 h-10 p-0 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 hover:text-gold transition-all duration-200"
              onClick={handleWishlistToggle}
            >
              <Heart className={cn("w-4 h-4", isWishlisted ? 'fill-red-500 text-red-500' : '')} />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className="w-10 h-10 p-0 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 hover:text-gold transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className={cn(
            "absolute bottom-4 left-4 right-4 z-20 transition-all duration-300",
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          )}>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-gold hover:bg-gold/90 text-black font-medium group/btn"
            >
              <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category */}
          <div className="text-sm text-gold font-medium uppercase tracking-wider">
            {product.category}
          </div>

          {/* Name */}
          <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(product.rating) 
                      ? "text-gold fill-current" 
                      : "text-gray-600"
                  )} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Materials */}
          <div className="text-sm text-gray-400">
            {product.materials.slice(0, 2).join(', ')}
            {product.materials.length > 2 && '...'}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
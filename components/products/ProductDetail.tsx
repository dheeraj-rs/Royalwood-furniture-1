'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getProductById } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const product = getProductById(productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
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
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={cn(
                    "aspect-square w-20 rounded-lg overflow-hidden border-2 transition-all",
                    selectedImageIndex === index 
                      ? "border-gold" 
                      : "border-transparent hover:border-white/30"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm text-gold font-medium uppercase tracking-wider">
                {product.category}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(product.rating) 
                          ? "text-gold fill-current" 
                          : "text-gray-600"
                      )} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gold">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-6">
              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="space-y-3">
                  <label className="text-white font-medium">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-3">
                <label className="text-white font-medium">Quantity</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(Math.min(10, product.stockQuantity))].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-gold hover:bg-gold/90 text-black font-semibold py-3 text-lg"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button
                variant="outline"
                onClick={handleWishlistToggle}
                className="border-white/20 text-white hover:text-gold hover:border-gold"
              >
                <Heart className={cn("w-5 h-5", isWishlisted ? 'fill-red-500 text-red-500' : '')} />
              </Button>
              
              <Button
                variant="outline"
                className="border-white/20 text-white hover:text-gold hover:border-gold"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Truck className="w-5 h-5 text-gold" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Shield className="w-5 h-5 text-gold" />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <RotateCcw className="w-5 h-5 text-gold" />
                <span>30-day returns</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Ruler className="w-5 h-5 text-gold" />
                <span>Custom sizing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
              <TabsTrigger value="details" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Details
              </TabsTrigger>
              <TabsTrigger value="dimensions" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Dimensions
              </TabsTrigger>
              <TabsTrigger value="care" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Care
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gold mb-2">Materials</h4>
                    <ul className="text-gray-300 space-y-1">
                      {product.materials.map((material, index) => (
                        <li key={index}>• {material}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-2">Features</h4>
                    <ul className="text-gray-300 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dimensions" className="mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Dimensions & Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gold mb-2">Size</h4>
                    <div className="text-gray-300 space-y-1">
                      <div>Width: {product.dimensions.width}cm</div>
                      <div>Height: {product.dimensions.height}cm</div>
                      <div>Depth: {product.dimensions.depth}cm</div>
                      <div>Weight: {product.weight}kg</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-2">Available Colors</h4>
                    <div className="text-gray-300 space-y-1">
                      {product.colors.map((color, index) => (
                        <div key={index}>• {color}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Care Instructions</h3>
                <ul className="text-gray-300 space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Customer Reviews</h3>
                <div className="text-center py-8">
                  <p className="text-gray-400">Reviews feature coming soon</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
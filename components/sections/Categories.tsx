'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'living-room',
    name: 'Living Room',
    description: 'Comfortable seating and elegant tables',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    count: 45,
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Restful furniture for peaceful nights',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    count: 32,
  },
  {
    id: 'office',
    name: 'Office',
    description: 'Professional workspace solutions',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    count: 28,
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    description: 'Tables and chairs for memorable meals',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
    count: 25,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Shop by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 ml-3">
              Category
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Explore our curated collections designed for every room in your home. 
            From intimate bedrooms to impressive dining spaces.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
                  <div className="text-sm text-gold font-medium mb-2">
                    {category.count} Products
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 opacity-90">
                    {category.description}
                  </p>
                  <div className="flex items-center text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="mr-2">Shop Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
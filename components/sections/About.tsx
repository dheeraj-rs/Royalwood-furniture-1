'use client';

import React from 'react';
import { Award, Leaf, Truck, Users } from 'lucide-react';

const stats = [
  { icon: Award, label: '25+ Years', description: 'Crafting Excellence' },
  { icon: Users, label: '10,000+', description: 'Happy Customers' },
  { icon: Leaf, label: '100%', description: 'Sustainable Materials' },
  { icon: Truck, label: 'Global', description: 'Shipping Available' },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Crafted with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 block">
                  Passion & Precision
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                For over two decades, Royalwood has been synonymous with exceptional craftsmanship 
                and timeless design. Each piece in our collection tells a story of artisanal mastery, 
                sustainable practices, and unwavering commitment to quality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Handcrafted Excellence</h3>
                  <p className="text-gray-400">
                    Every piece is meticulously crafted by skilled artisans using traditional techniques 
                    passed down through generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Sustainable Materials</h3>
                  <p className="text-gray-400">
                    We source only the finest sustainable woods and eco-friendly materials, 
                    ensuring both beauty and responsibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Timeless Design</h3>
                  <p className="text-gray-400">
                    Our designs blend contemporary aesthetics with classic elegance, 
                    creating pieces that transcend trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-sm border border-gold/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-gold">25+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-black/90 backdrop-blur-sm border border-gold/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-gold">500+</div>
              <div className="text-sm text-gray-400">Unique Designs</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-xl font-bold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    content: 'Royalwood furniture has transformed every space I\'ve designed. The quality is exceptional, and clients are always amazed by the craftsmanship.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    content: 'We furnished our entire home with Royalwood pieces. Two years later, everything still looks brand new. Worth every penny.',
    rating: 5,
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Business Owner',
    content: 'The office furniture we purchased has impressed every client who visits. Professional, elegant, and incredibly well-made.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 ml-3">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Don't just take our word for it. Here's what real customers have to say 
            about their Royalwood experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-gold" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-8 mt-16 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-gold mb-1">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gold mb-1">1000+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gold mb-1">99%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
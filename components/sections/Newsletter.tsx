'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-gold" />
          </div>

          {/* Content */}
          <div className="space-y-6 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Stay in the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400 ml-3">
                Loop
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Be the first to know about new arrivals, exclusive offers, design tips, 
              and special events. Join our community of furniture enthusiasts.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 h-12 group"
              >
                {isLoading ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <h3 className="font-semibold text-white mb-1">Exclusive Offers</h3>
              <p className="text-sm text-gray-400">Get special discounts only for subscribers</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <h3 className="font-semibold text-white mb-1">Design Tips</h3>
              <p className="text-sm text-gray-400">Weekly interior design insights and trends</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <h3 className="font-semibold text-white mb-1">Early Access</h3>
              <p className="text-sm text-gray-400">Be first to see new collections</p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
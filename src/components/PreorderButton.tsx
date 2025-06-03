'use client';

import { useState } from 'react';

export default function PreorderButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handlePreorder = () => {
    // Redirect to Stripe checkout
    window.open('https://buy.stripe.com/3cIbJ17h1gFM2d30un8IU0k', '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
      {/* LIMITED TIME Badge */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full mb-3 sm:mb-4">
          <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
          <span className="text-xs sm:text-sm text-red-300 font-bold uppercase tracking-wider">LIMITED TIME</span>
        </div>

        {/* Limited Pre-orders Scarcity */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium text-red-400">LIMITED PRE-ORDERS</span>
            <span className="text-xs sm:text-sm font-bold text-white">195/200 CLAIMED</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300" 
                 style={{ width: '97.5%' }}></div>
          </div>
          
          <div className="flex items-center justify-center">
            <span className="text-xs text-red-300 font-medium animate-pulse">⚡ Only 5 spots remaining!</span>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-2 sm:mb-3">
            <span className="text-2xl sm:text-3xl font-light text-gray-500 line-through">$50</span>
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              $25
            </span>
          </div>
          <p className="text-base sm:text-lg text-gray-400">
            Preorder now and save 50%
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            One-time payment • Get early access
          </p>
        </div>
      </div>

      {/* Preorder Button */}
      <div className="relative group mb-6 sm:mb-8">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <button
          onClick={handlePreorder}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full py-4 sm:py-6 px-6 sm:px-8 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 hover:from-green-700 hover:via-green-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500/50 text-lg sm:text-xl overflow-hidden group touch-manipulation"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
            <span>🚀</span>
            <span className="text-base sm:text-lg">Preorder Now - Save 50%</span>
            <span>💰</span>
          </div>
        </button>
      </div>

      {/* Features Included */}
      <div className="p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-sm">
        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center">What's Included:</h4>
        <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300">AI Avatar Creation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300">AI Baby Creator</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300">Bulk Video Creation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300">Multi-Platform Export</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300">50+ Avatar Options</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300">Viral Hooks</span>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-4 sm:mt-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-500 mb-3 sm:mb-4">
          <div className="flex items-center space-x-1">
            <svg className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Early Access</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Launch Access</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          💳 We accept all major credit cards and PayPal
        </p>
      </div>
    </div>
  );
} 
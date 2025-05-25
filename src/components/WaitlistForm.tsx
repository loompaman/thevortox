'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call - replace with your actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-transparent rounded-3xl border border-purple-500/20 backdrop-blur-xl">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Welcome to the Vortox!</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            You're in! We'll notify you when we launch.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Add another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-focus-within:opacity-50 transition duration-300"></div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to join"
            required
            disabled={isLoading}
            className="relative w-full px-8 py-5 bg-black/50 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-xl transition-all duration-300 text-lg"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !email}
          className="relative w-full py-5 px-8 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50 text-lg overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <span className="relative">
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Entering the Vortox...</span>
              </div>
            ) : (
              'Step Into the Vortox'
            )}
          </span>
        </button>
      </form>
      
      <p className="text-xs text-gray-500 text-center mt-6 font-light">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
} 
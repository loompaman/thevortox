'use client';

export default function Navigation() {
  const scrollToPreorder = () => {
    const preorderSection = document.getElementById('preorder-section');
    if (preorderSection) {
      preorderSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vortox
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation links removed for cleaner preorder focus */}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button 
              onClick={scrollToPreorder}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Preorder Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
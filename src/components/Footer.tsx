'use client'

export default function Footer() {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault()
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <div className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
                VortoxAI
              </div>
            </a>
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-8">
            <a href="https://buy.stripe.com/8x214n30L2OW9Fveld8IU0m" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Design Prompts
            </a>
            <a href="https://buy.stripe.com/3cIbJ17h1gFM2d30un8IU0k" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Slideshow Generator
            </a>
            <button onClick={scrollToFeatures} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Viral Guides
            </button>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-xs sm:text-sm">
            © 2025 VortoxAI. All rights reserved.
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            AI-powered tools for viral content creation that actually converts
          </p>
        </div>
      </div>
    </footer>
  )
} 
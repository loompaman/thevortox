import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SlideshowPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="w-full px-3 sm:px-6 py-12 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Floating 3D Elements for TikTok vibe */}
        <div className="absolute top-8 sm:top-20 left-3 sm:left-20 w-6 sm:w-16 h-6 sm:h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg sm:rounded-2xl transform rotate-12 shadow-lg animate-float neon-glow"></div>
        <div className="absolute top-12 sm:top-32 right-3 sm:right-32 w-4 sm:w-12 h-4 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 sm:w-14 h-6 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl transform -rotate-12 shadow-lg animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="text-4xl sm:text-6xl mb-4 block animate-bounce">🎥</span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-none tracking-tighter">
              TikTok Slideshow
            </h1>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-none tracking-tighter">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent neon-text">
                Generator
              </span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Upload your photos and create viral TikTok slideshows with trending templates. 
            <span className="text-pink-400 font-bold neon-text"> Coming Soon!</span>
          </p>
          
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-700 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">
              🚀 Preorder Now - Half Price!
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8">
              Be the first to get access when our TikTok slideshow generator launches. 
              Preorder now for <span className="text-green-400 font-bold">50% off</span> the regular price of $50!
            </p>
            
            <a
              href="https://buy.stripe.com/3cIbJ17h1gFM2d30un8IU0k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 font-bold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 btn-hover text-lg"
            >
              <span className="text-xl">🎬</span>
              <span>Preorder for $25 (50% Off)</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 
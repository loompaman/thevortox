'use client'
import { useState } from 'react'

interface DesignItem {
  id: number
  title: string
  image: string
  prompt: string
  category: string
  color: string
  accent: string
}

const sampleDesigns: DesignItem[] = [
  {
    id: 1,
    title: "Fashion Collection",
    image: "/designs/1.png",
    prompt: "Create a minimalist fashion poster with clean typography and modern aesthetic for a luxury clothing brand",
    category: "Clothing",
    color: "from-pink-500 to-rose-500",
    accent: "pink"
  },
  {
    id: 2,
    title: "Luxury Cosmetics",
    image: "/designs/2.png",
    prompt: "Design an elegant cosmetics advertisement with premium gold accents and sophisticated color palette",
    category: "Makeup",
    color: "from-purple-500 to-violet-500",
    accent: "purple"
  },
  {
    id: 3,
    title: "Athletic Brand Identity",
    image: "/designs/3.png",
    prompt: "Generate a dynamic sports brand visual with bold typography and energetic color scheme",
    category: "Athletics",
    color: "from-red-500 to-orange-500",
    accent: "red"
  },
  {
    id: 4,
    title: "Skincare Packaging",
    image: "/designs/4.png",
    prompt: "Create a clean, natural skincare product design with organic elements and calming colors",
    category: "Skincare",
    color: "from-yellow-500 to-amber-500",
    accent: "yellow"
  },
  {
    id: 5,
    title: "Product Packaging",
    image: "/designs/5.png",
    prompt: "Design modern product packaging with geometric patterns and contemporary branding elements",
    category: "Packaging",
    color: "from-blue-500 to-cyan-500",
    accent: "blue"
  },
  {
    id: 6,
    title: "Wellness Brand",
    image: "/designs/6.png",
    prompt: "Create a holistic wellness brand visual with natural textures and earth-tone color palette",
    category: "Wellness",
    color: "from-green-500 to-emerald-500",
    accent: "green"
  },
  {
    id: 7,
    title: "Food & Beverage",
    image: "/designs/7.png",
    prompt: "Generate an appetizing food brand design with warm colors and inviting typography",
    category: "Food & Bev",
    color: "from-orange-500 to-red-500",
    accent: "orange"
  }
]

export default function Hero() {
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)

  return (
    <section className="w-full px-3 sm:px-6 py-12 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),rgba(0,0,0,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),rgba(0,0,0,0))]"></div>
      <div className="absolute top-1/4 right-1/4 w-32 sm:w-96 h-32 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-96 h-32 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Design Elements */}
      <div className="absolute top-8 sm:top-20 left-3 sm:left-20 w-4 sm:w-12 h-4 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg transform rotate-12 shadow-xl animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-3 sm:right-20 w-3 sm:w-8 h-6 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-400 transform rotate-45 shadow-xl animate-float opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-5 sm:w-14 h-5 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-xl animate-float opacity-60" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl mr-3 animate-pulse">🧠</span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-2 sm:mb-4 leading-none tracking-tighter">
              AI Design
            </h1>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-none tracking-tighter">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Prompt Packs
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Professional <span className="text-blue-400 font-bold neon-text">AI prompts</span> for 
            <span className="text-purple-400 font-bold neon-text"> brand visuals</span>, 
            <span className="text-cyan-400 font-bold neon-text"> product mockups</span>, and 
            <span className="text-pink-400 font-bold neon-text"> marketing materials</span>.
          </p>
          
          <a
            href="https://buy.stripe.com/8x214n30L2OW9Fveld8IU0m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-bold text-lg sm:text-xl tracking-wide shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 btn-hover mb-12 sm:mb-16"
          >
            <span className="text-xl sm:text-2xl">🚀</span>
            <span>GET PROMPTS - $25 (50% Off)</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Design Gallery */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl glass border border-gray-700 shadow-2xl">
            <div 
              className="flex transition-transform duration-[28000ms] ease-linear"
              style={{
                transform: 'translateX(0%)',
                animation: 'infiniteScroll 28s linear infinite'
              }}
            >
              {/* First set of images */}
              {sampleDesigns.map((design) => (
                <div
                  key={design.id}
                  className="flex-shrink-0 w-64 sm:w-80 lg:w-96 p-3 sm:p-4 cursor-pointer group"
                  onClick={() => setSelectedDesign(design)}
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={design.image} 
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to gradient placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-60 flex items-center justify-center hidden`}>
                        <div className="text-4xl sm:text-6xl lg:text-8xl font-black text-white/40 select-none">
                          {design.id}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="p-3 sm:p-4 bg-gray-800/90 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-${design.accent}-500/20 text-${design.accent}-400 border border-${design.accent}-500/30`}>
                          {design.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {design.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {sampleDesigns.map((design) => (
                <div
                  key={`duplicate-${design.id}`}
                  className="flex-shrink-0 w-64 sm:w-80 lg:w-96 p-3 sm:p-4 cursor-pointer group"
                  onClick={() => setSelectedDesign(design)}
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={design.image} 
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to gradient placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-60 flex items-center justify-center hidden`}>
                        <div className="text-4xl sm:text-6xl lg:text-8xl font-black text-white/40 select-none">
                          {design.id}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="p-3 sm:p-4 bg-gray-800/90 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-${design.accent}-500/20 text-${design.accent}-400 border border-${design.accent}-500/30`}>
                          {design.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {design.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Click any design to see the full prompt →
          </p>
          <a
            href="https://buy.stripe.com/8x214n30L2OW9Fveld8IU0m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-bold text-sm sm:text-lg tracking-wide shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 btn-hover"
          >
            <span className="text-lg sm:text-xl">💎</span>
            <span>GET ALL PROMPTS - $25 (50% Off)</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedDesign(null)}>
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-gray-600 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-white">{selectedDesign.title}</h3>
              <button 
                onClick={() => setSelectedDesign(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-bold bg-${selectedDesign.accent}-500/20 text-${selectedDesign.accent}-400 border border-${selectedDesign.accent}-500/30`}>
                {selectedDesign.category}
              </span>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
              <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">AI PROMPT:</h4>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{selectedDesign.prompt}</p>
            </div>
            
            <a
              href="https://buy.stripe.com/8x214n30L2OW9Fveld8IU0m"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-bold text-center block tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105 btn-hover"
            >
              GET ALL PROMPTS - $25 (50% Off)
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
} 
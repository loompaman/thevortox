'use client'
import { useState } from 'react'

interface DesignItem {
  id: number
  title: string
  image: string
  prompt: string
  category: string
  colors: string[]
  accentColor: string
}

const sampleDesigns: DesignItem[] = [
  {
    id: 1,
    title: "Fashion Collection",
    image: "/designs/1.png",
    prompt: "Develop a complete fashion brand identity with lookbooks, hangtags, and seasonal campaigns. Modern typography with editorial photography style.",
    category: "Clothing",
    colors: ["#fdf2f8", "#be185d", "#000000"],
    accentColor: "pink"
  },
  {
    id: 2,
    title: "Luxury Cosmetics",
    image: "/designs/2.png",
    prompt: "Develop premium cosmetics branding with sophisticated color schemes, elegant typography, and high-end packaging design. Focus on exclusivity.",
    category: "Makeup",
    colors: ["#1f2937", "#d946ef", "#a21caf"],
    accentColor: "purple"
  },
  {
    id: 3,
    title: "Athletic Brand Identity",
    image: "/designs/3.png",
    prompt: "Create a dynamic athletic brand with bold logos, energetic color schemes, and performance-focused messaging. Design for sportswear, equipment, and digital presence.",
    category: "Athletics",
    colors: ["#000000", "#ff6b35", "#ffffff"],
    accentColor: "red"
  },
  {
    id: 4,
    title: "Skincare Packaging",
    image: "/designs/4.png",
    prompt: "Design elegant skincare packaging with clean typography, premium materials, and minimalist aesthetic. Focus on luxury feel and ingredient transparency.",
    category: "Skincare",
    colors: ["#f8f4f0", "#d4af37", "#2d5016"],
    accentColor: "yellow"
  },
  {
    id: 5,
    title: "Product Packaging",
    image: "/designs/5.png",
    prompt: "Create eye-catching product packaging that stands out on shelves. Include structural design, color psychology, and brand storytelling elements.",
    category: "Packaging",
    colors: ["#ffffff", "#3b82f6", "#1e40af"],
    accentColor: "blue"
  },
  {
    id: 6,
    title: "Luxury Perfume",
    image: "/designs/6.png",
    prompt: "Design an elegant perfume brand with sophisticated bottle design, premium packaging, and luxurious visual identity. Focus on exclusivity and sensory appeal.",
    category: "Perfume",
    colors: ["#f0fdf4", "#16a34a", "#15803d"],
    accentColor: "green"
  },
  {
    id: 7,
    title: "Sneaker Brand",
    image: "/designs/7.png",
    prompt: "Create a dynamic sneaker brand identity with bold graphics, street culture aesthetics, and performance-focused design. Include shoe design and lifestyle branding.",
    category: "Sneakers",
    colors: ["#fff7ed", "#ea580c", "#dc2626"],
    accentColor: "cyan"
  }
]

export default function Hero() {
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      pink: 'bg-pink-100 text-pink-700 border-pink-200',
      cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    }
    return colorMap[color] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  // Triple designs for seamless infinite scroll effect
  const duplicatedDesigns = [...sampleDesigns, ...sampleDesigns, ...sampleDesigns]

  return (
    <section className="w-full px-3 sm:px-6 py-12 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-7 * (280px + 1rem)));
          }
        }
        @keyframes scrollMobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-7 * (200px + 0.75rem)));
          }
        }
        .animate-scroll {
          animation: scroll 28s linear infinite;
          will-change: transform;
        }
        .animate-scroll-mobile {
          animation: scrollMobile 28s linear infinite;
          will-change: transform;
        }
        
        /* Ensure smooth performance */
        .carousel-container {
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scrollMobile 28s linear infinite;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),rgba(255,255,255,0))]"></div>
      <div className="absolute top-1/4 right-1/4 w-32 sm:w-96 h-32 sm:h-96 bg-gray-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-96 h-32 sm:h-96 bg-gray-800/5 rounded-full blur-3xl"></div>
      
      {/* Floating 3D Elements - Smaller on mobile */}
      <div className="absolute top-8 sm:top-20 left-3 sm:left-20 w-6 sm:w-16 h-6 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg sm:rounded-2xl transform rotate-12 shadow-lg animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
      <div className="absolute top-12 sm:top-32 right-3 sm:right-32 w-4 sm:w-12 h-4 sm:h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-3 sm:w-8 h-6 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-45 shadow-lg animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-6 sm:w-14 h-6 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-lg sm:rounded-xl transform -rotate-12 shadow-lg animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
      <div className="absolute top-1/2 right-3 sm:right-20 w-4 sm:w-10 h-4 sm:h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}></div>
      <div className="absolute bottom-8 sm:bottom-20 left-1/3 w-6 sm:w-12 h-3 sm:h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg transform rotate-30 shadow-lg animate-bounce" style={{animationDelay: '2.5s', animationDuration: '4s'}}></div>
      <div className="absolute top-16 sm:top-40 left-1/2 w-2 sm:w-6 h-4 sm:h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 transform -rotate-30 shadow-lg animate-bounce" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
      <div className="absolute bottom-16 sm:bottom-40 right-1/4 w-6 sm:w-16 h-2 sm:h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.2s', animationDuration: '4.2s'}}></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-1 sm:mb-4 leading-none tracking-tighter">
            DESIGN
          </h1>
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black mb-1 sm:mb-4 leading-none tracking-tighter">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GALLERY
            </span>
          </h1>
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-3 sm:mb-8 leading-none tracking-tighter">
            & PROMPTS
          </h1>
        </div>
        
        <p className="text-sm sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-medium px-2">
          Discover <span className="text-blue-600 font-bold">stunning designs</span> and the exact 
          <span className="text-purple-600 font-bold"> AI prompts</span> used to create them. 
          Get inspired by our <span className="text-pink-600 font-bold">curated collection</span>.
        </p>
        
        <div className="flex justify-center mb-8 sm:mb-20">
          <a
            href="https://buy.stripe.com/8x214n30L2OW9Fveld8IU0m"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-12 py-3 sm:py-6 rounded-xl sm:rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 font-bold text-sm sm:text-xl tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>PREORDER PROMPTS</span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Moving Design Carousel */}
        <div className="w-full overflow-hidden carousel-container">
          <div className="flex gap-3 sm:gap-8 pb-6 sm:pb-8 animate-scroll sm:animate-scroll">
            {duplicatedDesigns.map((design, index) => (
              <div
                key={`${design.id}-${index}`}
                className="group flex-shrink-0 w-50 sm:w-80 bg-white rounded-xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50 flex items-center justify-center hidden">
                    <span className="text-gray-500 text-xs sm:text-lg font-bold tracking-wide">DESIGN PREVIEW</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-all duration-300"></div>
                </div>
                <div className="p-2 sm:p-4">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className={`text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold tracking-wide border ${getColorClasses(design.accentColor)}`}>
                      {design.category.toUpperCase()}
                    </span>
                    <div className="flex space-x-1">
                      {design.colors.slice(0, 3).map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-2 sm:w-3 h-2 sm:h-3 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-lg font-black text-gray-900 mb-1 tracking-tight group-hover:text-gray-700 transition-colors">
                    {design.title.toUpperCase()}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Mobile Optimized */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-3 sm:p-8">
              <div className="flex items-center justify-between mb-3 sm:mb-8">
                <h3 className="text-lg sm:text-3xl font-black text-gray-900 tracking-tight">
                  {selectedDesign.title.toUpperCase()}
                </h3>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 sm:p-2 hover:bg-gray-100 rounded-xl"
                >
                  <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10">
                <div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-2xl mb-3 sm:mb-6 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                    <img 
                      src={selectedDesign.image} 
                      alt={selectedDesign.title}
                      className="w-full h-full object-cover rounded-lg sm:rounded-2xl"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center hidden">
                      <span className="text-gray-500 text-sm sm:text-xl font-bold">DESIGN PREVIEW</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-6">
                    <span className={`text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold tracking-wide border ${getColorClasses(selectedDesign.accentColor)}`}>
                      {selectedDesign.category.toUpperCase()}
                    </span>
                    <div className="flex space-x-1 sm:space-x-3">
                      {selectedDesign.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 sm:w-8 sm:h-8 rounded-full border-2 border-gray-300 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg sm:text-2xl font-black text-gray-900 mb-3 sm:mb-6 tracking-tight">
                    AI PROMPT
                  </h4>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-8">
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-lg">
                      {selectedDesign.prompt}
                    </p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-4 rounded-lg sm:rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-bold text-sm sm:text-lg tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105">
                    COPY PROMPT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 
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
    title: "AI Dashboard",
    image: "/api/placeholder/400/300",
    prompt: "Create a futuristic AI dashboard with clean lines, minimal interface, and subtle gradients. Focus on typography hierarchy and whitespace for a premium feel.",
    category: "AI/Tech",
    colors: ["#f8fafc", "#1f2937", "#6366f1"],
    accentColor: "blue"
  },
  {
    id: 2,
    title: "Crypto Landing",
    image: "/api/placeholder/400/300",
    prompt: "Design a minimalist cryptocurrency landing page with bold typography, clean layouts, and subtle shadows. Light theme with strategic use of contrast.",
    category: "Crypto",
    colors: ["#ffffff", "#111827", "#3b82f6"],
    accentColor: "purple"
  },
  {
    id: 3,
    title: "Gaming Interface",
    image: "/api/placeholder/400/300",
    prompt: "Create a clean gaming UI with minimal elements, sharp edges, and modern typography. Focus on usability with subtle visual hierarchy.",
    category: "Gaming",
    colors: ["#f9fafb", "#374151", "#10b981"],
    accentColor: "green"
  },
  {
    id: 4,
    title: "Brand Identity 2.0",
    image: "/api/placeholder/400/300",
    prompt: "Design a cutting-edge brand identity with geometric shapes, clean typography, and minimal color palette. Focus on modern, professional aesthetic.",
    category: "Branding",
    colors: ["#ffffff", "#000000", "#ef4444"],
    accentColor: "red"
  },
  {
    id: 5,
    title: "NFT Marketplace",
    image: "/api/placeholder/400/300",
    prompt: "Create an NFT marketplace interface with clean design, minimal cards, and subtle hover effects. Light theme with strategic color accents.",
    category: "Web3",
    colors: ["#f8fafc", "#1f2937", "#8b5cf6"],
    accentColor: "pink"
  },
  {
    id: 6,
    title: "Data Visualization Pro",
    image: "/api/placeholder/400/300",
    prompt: "Design clean data visualization with minimal charts, clear typography, and subtle color coding. Focus on readability and clean aesthetics.",
    category: "Data Viz",
    colors: ["#ffffff", "#111827", "#059669"],
    accentColor: "cyan"
  }
]

const categoryColors: { [key: string]: string } = {
  'All': 'gray',
  'AI/Tech': 'blue',
  'Crypto': 'purple',
  'Gaming': 'green',
  'Branding': 'red',
  'Web3': 'pink',
  'Data Viz': 'cyan'
}

export default function Gallery() {
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(sampleDesigns.map(design => design.category)))]
  
  const filteredDesigns = filter === 'All' 
    ? sampleDesigns 
    : sampleDesigns.filter(design => design.category === filter)

  const getColorClasses = (color: string, isActive: boolean = false) => {
    const colorMap: { [key: string]: { bg: string, hover: string, text: string, border: string } } = {
      gray: { bg: 'bg-gray-100', hover: 'hover:bg-gray-200', text: 'text-gray-700', border: 'border-gray-200' },
      blue: { bg: 'bg-blue-100', hover: 'hover:bg-blue-200', text: 'text-blue-700', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-100', hover: 'hover:bg-purple-200', text: 'text-purple-700', border: 'border-purple-200' },
      green: { bg: 'bg-green-100', hover: 'hover:bg-green-200', text: 'text-green-700', border: 'border-green-200' },
      red: { bg: 'bg-red-100', hover: 'hover:bg-red-200', text: 'text-red-700', border: 'border-red-200' },
      pink: { bg: 'bg-pink-100', hover: 'hover:bg-pink-200', text: 'text-pink-700', border: 'border-pink-200' },
      cyan: { bg: 'bg-cyan-100', hover: 'hover:bg-cyan-200', text: 'text-cyan-700', border: 'border-cyan-200' }
    }
    
    if (isActive) {
      const activeMap: { [key: string]: string } = {
        gray: 'bg-gray-900 text-white',
        blue: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
        purple: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
        green: 'bg-gradient-to-r from-green-500 to-green-600 text-white',
        red: 'bg-gradient-to-r from-red-500 to-red-600 text-white',
        pink: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white',
        cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white'
      }
      return activeMap[color] || activeMap.gray
    }
    
    const colors = colorMap[color] || colorMap.gray
    return `${colors.bg} ${colors.text} ${colors.hover} hover:text-gray-900 border ${colors.border}`
  }

  return (
    <section id="gallery" className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">
            DESIGN
          </h2>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Explore our <span className="text-blue-600 font-bold">curated collection</span> of cutting-edge designs and discover the 
            <span className="text-purple-600 font-bold"> AI prompts</span> behind each creation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-2xl transition-all duration-300 font-bold tracking-wide transform hover:scale-105 ${
                filter === category
                  ? getColorClasses(categoryColors[category], true) + ' shadow-lg'
                  : getColorClasses(categoryColors[category])
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-bold tracking-wide">DESIGN PREVIEW</span>
                </div>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm px-4 py-2 rounded-full font-bold tracking-wide border ${getColorClasses(design.accentColor)}`}>
                    {design.category.toUpperCase()}
                  </span>
                  <div className="flex space-x-2">
                    {design.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 rounded-full border-2 border-gray-300 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-gray-700 transition-colors">
                  {design.title.toUpperCase()}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {design.prompt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-gray-200 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                  {selectedDesign.title.toUpperCase()}
                </h3>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-xl"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-500 text-xl font-bold">DESIGN PREVIEW</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className={`text-sm px-4 py-2 rounded-full font-bold tracking-wide border ${getColorClasses(selectedDesign.accentColor)}`}>
                      {selectedDesign.category.toUpperCase()}
                    </span>
                    <div className="flex space-x-3">
                      {selectedDesign.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                    AI PROMPT
                  </h4>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedDesign.prompt}
                    </p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-bold text-lg tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105">
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
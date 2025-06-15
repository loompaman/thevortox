export default function Header() {
  return (
    <header className="w-full px-6 py-6 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-lg">V</span>
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter">VORTOX</span>
        </div>
        
        <a
          href="https://buy.stripe.com/8x214n30L2OW9Fveld8IU0m"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-bold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 text-sm uppercase"
        >
          PREORDER PROMPTS
        </a>
      </div>
    </header>
  )
} 
import PreorderButton from '@/components/PreorderButton';
import CountdownTimer from '@/components/CountdownTimer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      
      {/* Enhanced background with flowing gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
        </div>
      </div>

      {/* Flowing abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-2xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-blue-500/15 to-transparent rounded-full blur-2xl transform -rotate-45 animate-float delay-1000"></div>
      </div>

      {/* Main Hero Section - moved up */}
      <main className="relative z-10 pt-16 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 mb-6 sm:mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">Coming Soon</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Create <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">viral content</span> in seconds with AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Transform your content creation with AI avatars that generate millions of views. 
            Join <span className="text-red-400 font-semibold animate-pulse">the final 13 spots</span> - limited preorder ending soon!
          </p>
          
          {/* Countdown Timer - more compact */}
          <div className="mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm text-purple-300 mb-3 sm:mb-4 uppercase tracking-wider">Launching In</p>
            <CountdownTimer />
          </div>
          
          {/* Waitlist Form - more prominent */}
          <div id="preorder-section" className="mb-4 sm:mb-6 px-2">
            <PreorderButton />
          </div>
          
          {/* Simplified social proof */}
          <p className="text-xs sm:text-sm text-gray-500 px-2">
            Only <span className="text-red-400 font-semibold animate-pulse">13 spots left</span> out of 200 limited preorders
          </p>
        </div>
      </main>

      {/* Examples Section - Space reserved for content */}
      <section className="relative z-10 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Create Any Video You Can Imagine
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-2">
              From AI avatars to trending content - generate unlimited UGC videos in seconds
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* AI Avatars */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Video Example for AI Avatars - TikTok Ratio */}
                <div className="relative mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-xs mx-auto" style={{ aspectRatio: '9/16' }}>
                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-xl overflow-hidden h-full">
                    <video 
                      className="w-full h-full object-cover rounded-xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/videos/ai-avatar-example.mp4" type="video/mp4" />
                      {/* Fallback content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p className="text-xs text-purple-300">AI Avatar Example</p>
                        </div>
                      </div>
                    </video>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
                    {/* View Count Overlay */}
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1 sm:space-x-2">
                      <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-white text-xs font-semibold">28.8M</span>
                    </div>
                    {/* Vortox Branding Watermark */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/60 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center space-x-1">
                      <img 
                        src="/vortox-icon.svg" 
                        alt="Vortox" 
                        className="w-3 sm:w-4 h-3 sm:h-4"
                      />
                      <span className="text-white text-xs font-medium">vortox</span>
                    </div>
                    {/* Video overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white text-center">AI Avatars</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 text-center">
                      Create realistic AI spokespeople for your content. Choose from diverse avatars or generate custom ones.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-xs sm:text-sm text-purple-300">
                    <span>50+ Avatar Options</span>
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mx-2"></div>
                    <span>Custom Voices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Baby */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Video Example for AI Baby - TikTok Ratio */}
                <div className="relative mb-6 w-full max-w-xs mx-auto" style={{ aspectRatio: '9/16' }}>
                  <div className="bg-gradient-to-br from-blue-900/20 to-blue-600/10 rounded-xl overflow-hidden h-full">
                    <video 
                      className="w-full h-full object-cover rounded-xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/videos/ai-baby-example.mp4" type="video/mp4" />
                      {/* Fallback content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <p className="text-xs text-blue-300">AI Baby Example</p>
                        </div>
                      </div>
                    </video>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                    {/* View Count Overlay */}
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-white text-xs font-semibold">3.8M</span>
                    </div>
                    {/* Vortox Branding Watermark */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                      <img 
                        src="/vortox-icon.svg" 
                        alt="Vortox" 
                        className="w-4 h-4"
                      />
                      <span className="text-white text-xs font-medium">vortox</span>
                    </div>
                    {/* Video overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white text-center">AI Baby Content</h3>
                    <p className="text-gray-400 mb-4 text-center">
                      Generate adorable baby-related content that goes viral. Perfect for going viral and growing your audience.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-sm text-blue-300">
                    <span>Viral Templates</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full mx-2"></div>
                    <span>High Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bulk Creation */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Calendar Scheduling Interface - Same size as other boxes */}
                <div className="relative mb-4 w-full max-w-xs mx-auto" style={{ aspectRatio: '9/16' }}>
                  <div className="bg-gradient-to-br from-green-900/20 to-green-600/10 rounded-xl overflow-hidden h-full">
                    <img 
                      src="/images/bulk-creation-calendar.png" 
                      alt="Bulk Content Scheduling Calendar"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Fallback content if image doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-900/20 to-green-600/10">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-green-300">Content Calendar</p>
                      </div>
                    </div>
                    {/* Image overlay with gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>

                {/* Platform Icons - Below the calendar */}
                <div className="flex items-center justify-center space-x-3 mb-3">
                  {/* TikTok Icon */}
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.286-1.643-1.542-2.41C15.985 1.322 16 .849 16 .849h-3.967v13.934c0 .308-.02.599-.067.879a3.99 3.99 0 0 1-1.032 2.139 3.99 3.99 0 0 1-2.139 1.032c-.28.047-.571.067-.879.067-2.209 0-4-1.791-4-4s1.791-4 4-4c.308 0 .599.02.879.067v-4.055c-.291-.02-.586-.029-.879-.029C4.477 6.88 1 10.357 1 14.796s3.477 7.916 7.916 7.916 7.916-3.477 7.916-7.916V8.695a9.969 9.969 0 0 0 2.4.849V5.562z"
                        fill="url(#tiktokGradient)"
                      />
                      <defs>
                        <linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF0050" />
                          <stop offset="25%" stopColor="#FF0050" />
                          <stop offset="50%" stopColor="#00F2EA" />
                          <stop offset="75%" stopColor="#00F2EA" />
                          <stop offset="100%" stopColor="#FF0050" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Instagram Icon */}
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>

                  {/* YouTube Icon */}
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white text-center">Bulk Creation</h3>
                    <p className="text-gray-400 mb-4 text-center">
                      Schedule and publish hundreds of videos across all platforms. Complete content calendar automation.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-sm text-green-300">
                    <span>Multi-Platform Scheduling</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full mx-2"></div>
                    <span>Auto Publishing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Ready to create viral content?</p>
            <a 
              href="#preorder-section"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <span>Preorder Now</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Elegant floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-violet-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>
    </div>
  );
}

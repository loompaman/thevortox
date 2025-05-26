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
            Turn your clips into viral content — instantly.
            <span className="block mt-2 text-yellow-400 font-semibold">$25 now → save 50% + get early access before public launch</span>
          </p>
          
          {/* Countdown Timer - more compact */}
          <div className="mb-8 sm:mb-10">
            <CountdownTimer />
          </div>
          
          {/* Waitlist Form - more prominent */}
          <div id="preorder-section" className="mb-4 sm:mb-6 px-2">
            <PreorderButton />
            <p className="text-sm text-gray-400 mt-3 font-medium">One-time payment. No monthly fees. No tools needed.</p>
          </div>
          
          {/* Simplified social proof */}
          <p className="text-xs sm:text-sm text-gray-500 px-2">
            Only <span className="text-red-400 font-semibold animate-pulse">13 spots left</span> out of 200 limited preorders
          </p>
        </div>
      </main>

      {/* Creator Story Section */}
      <section className="relative z-10 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                V
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">From the Creator Who Went Viral</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "I built Vortox to automate the viral edits I was already doing at @baby.podcast28. This tool is how I turned clips into 
                  <span className="text-yellow-400 font-bold"> 2M+ view bangers</span> in hours instead of days."
                </p>
                <p className="text-purple-300 text-sm mt-2 font-medium">— Founder & Viral Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People Are Saying Section */}
      <section className="relative z-10 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                What People Are Saying
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                  J
                </div>
                <div>
                  <p className="text-white font-medium">@jacksmith_viral</p>
                  <p className="text-gray-400 text-sm">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                "Bro I NEED this tool 😭 Been trying to make content like this for months"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                  M
                </div>
                <div>
                  <p className="text-white font-medium">@mia_creates</p>
                  <p className="text-gray-400 text-sm">TikTok Creator</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                "You made this with AI?? This is exactly what I've been looking for!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                  A
                </div>
                <div>
                  <p className="text-white font-medium">@alex_viral_king</p>
                  <p className="text-gray-400 text-sm">YouTuber</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                "When can I get access?! This is going to save me HOURS every week 🔥"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section - AI Avatars & AI Baby */}
      <section className="relative z-10 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Vortox Core Features
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              The AI-powered tools that turn your ideas into viral content instantly
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* AI Avatars */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Video Example for AI Avatars - TikTok Ratio */}
                <div className="relative mb-6 w-full max-w-[280px] mx-auto" style={{ aspectRatio: '9/16' }}>
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
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p className="text-xs text-purple-300">AI Avatar Example</p>
                        </div>
                      </div>
                    </video>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    {/* View Count Overlay */}
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-white text-xs font-semibold">28.8M</span>
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
                    <h3 className="text-2xl font-bold mb-3 text-white text-center">🎭 AI Avatars</h3>
                    <p className="text-gray-300 mb-4 text-center text-lg">
                      Create realistic AI spokespeople for your content. Choose from diverse avatars or generate custom ones that speak with any voice.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-sm text-purple-300">
                    <span>50+ Avatar Options</span>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mx-2"></div>
                    <span>Custom Voices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Baby */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Video Example for AI Baby - TikTok Ratio */}
                <div className="relative mb-6 w-full max-w-[280px] mx-auto" style={{ aspectRatio: '9/16' }}>
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
                    <h3 className="text-2xl font-bold mb-3 text-white text-center">👶 AI Baby Videos</h3>
                    <p className="text-gray-300 mb-4 text-center text-lg">
                      Generate adorable baby content that goes viral instantly. Turn any audio into hilarious baby roast clips that millions love.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-sm text-blue-300">
                    <span>Viral Templates</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full mx-2"></div>
                    <span>Instant Viral</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Can You Make Section */}
      <section className="relative z-10 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
                What Can You Make With Vortox?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Specific viral content ideas that make people go "Ohhhh I could totally use it for that"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👶</span>
                </div>
                <h3 className="text-xl font-bold text-white">Baby Roast Clips</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Turn any audio into hilarious baby roast content that goes viral on TikTok. Perfect for reaction videos and comedy skits.
              </p>
              <div className="flex items-center text-sm text-red-300">
                <span>🔥 Viral Template</span>
                <div className="w-2 h-2 bg-red-400 rounded-full mx-2"></div>
                <span>Instant Export</span>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🗣️</span>
                </div>
                <h3 className="text-xl font-bold text-white">AI Debates</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Create Trump vs Kanye-style debates on any topic. Generate controversial discussions that drive massive engagement.
              </p>
              <div className="flex items-center text-sm text-blue-300">
                <span>🎭 Celebrity Voices</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full mx-2"></div>
                <span>Any Topic</span>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎤</span>
                </div>
                <h3 className="text-xl font-bold text-white">Voiceover Rants</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Transform your voiceover rants into animated memes and visual content that amplifies your message.
              </p>
              <div className="flex items-center text-sm text-green-300">
                <span>📢 Voice + Visual</span>
                <div className="w-2 h-2 bg-green-400 rounded-full mx-2"></div>
                <span>Meme Ready</span>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎧</span>
                </div>
                <h3 className="text-xl font-bold text-white">Podcast Meme Edits</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Extract the best moments from podcasts and turn them into shareable meme content for social media.
              </p>
              <div className="flex items-center text-sm text-yellow-300">
                <span>🎙️ Podcast Clips</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full mx-2"></div>
                <span>Meme Format</span>
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white">Reaction Duets</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Create reaction videos with AI hosts that respond to trending content and boost your engagement rates.
              </p>
              <div className="flex items-center text-sm text-purple-300">
                <span>🎭 AI Hosts</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full mx-2"></div>
                <span>Reaction Ready</span>
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-white">TikTok Trends</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Jump on any TikTok trend instantly by generating AI content that fits the latest viral formats and sounds.
              </p>
              <div className="flex items-center text-sm text-pink-300">
                <span>📈 Trending Sounds</span>
                <div className="w-2 h-2 bg-pink-400 rounded-full mx-2"></div>
                <span>Instant Trends</span>
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

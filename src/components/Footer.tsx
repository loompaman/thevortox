export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <span className="text-3xl font-black text-gray-900 tracking-tight">VORTOX</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-8">
              Revolutionizing design with <span className="text-blue-600 font-bold">AI-powered creativity</span> and 
              <span className="text-purple-600 font-bold"> cutting-edge innovation</span>. 
              Join the future of digital design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight">QUICK LINKS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium hover:font-bold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium hover:font-bold">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 font-medium hover:font-bold">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium hover:font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight">RESOURCES</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 font-medium hover:font-bold">
                  AI Prompts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium hover:font-bold">
                  Design Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 font-medium hover:font-bold">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium hover:font-bold">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 font-medium mb-4 md:mb-0">
            © 2025 <span className="text-gray-900 font-bold">VORTOX</span>. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium hover:font-bold">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium hover:font-bold">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 font-medium hover:font-bold">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
'use client'
import Link from "next/link";



export default function Footer () {

    const scrollToSection = (sectionId : string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
      <footer id="footer" className="bg-gray-900 text-white border-t-2 border-gray-600">
        {/* Main Footer */}
        <div className=" mx-auto flex px-4 sm:px-6 lg:px-8 py-16 " >
          <div className="flex flex-col gap-8 w-fullgap-x-10 sm:flex-row">
            {/* Company Info */}
            <div className="space-y-4 w-auto sm:w-1/3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  DC
                </div>
                <span className="ml-3 text-xl font-bold">DC web developer</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Puoi contattarmi per discutere delle tue idee o anche solo per fare due chiacchere!!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mt-1 ">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors text-left mt-8"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('footer')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contatti
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-1 ">Contact</h3>
              <div className="space-y-3 mt-8 text-gray-400">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a className=" text-blue-200 hover:text-blue-400 underline " href="mailto:info@dcwebdeveloper.it">info@dcwebdeveloper.it</a>
                </div>
                <div className=" hidden items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm">
                  © 2024 DC web solution. All rights reserved.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
}
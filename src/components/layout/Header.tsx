import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    
    if (item === 'Stats' || item === 'Features' || item === 'Updates') {
      if (location.pathname !== '/') {
        window.location.href = `/#${item.toLowerCase()}`;
      } else {
        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-black/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Bot className="w-8 h-8 text-blue-500 relative z-10 transform group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kayzo
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Commands', 'Premium', 'Stats', 'Updates'].map((item) => (
              ['Stats', 'Features', 'Updates'].includes(item) ? (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="relative group text-gray-400 hover:text-white transition-colors"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            ))}
            <a
              href="https://guns.lol/r3nm4rss"
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-blue-500 rounded-lg group hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full group-hover:translate-y-0 ease">
                Guns.lol
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-y-[-100%] ease">
              Guns.lol
              </span>
              <span className="relative invisible">Guns.lol</span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <nav className="flex flex-col gap-4 py-6">
            {['Features', 'Commands', 'Premium', 'Stats', 'Updates'].map((item) => (
              ['Stats', 'Features', 'Updates'].includes(item) ? (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-gray-400 hover:text-white transition-colors px-4 py-2"
                >
                  {item}
                </button>
              ) : (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            ))}
            <a
              href="https://guns.lol/r3nm4rss"
              className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-blue-500 rounded-lg group hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 mx-4"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full group-hover:translate-y-0 ease">
              Guns.lol
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-y-[-100%] ease">
              Guns.lol
              </span>
              <span className="relative invisible">Guns.lol</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

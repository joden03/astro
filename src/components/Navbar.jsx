import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Rocket, Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto relative">
      
      {/* Mobile Menu Button (Left side) */}
      <button 
        onClick={toggleMenu}
        className="md:hidden z-50"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-900" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900" />
        )}
      </button>

      {/* Desktop Left Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.id}
            to={link.path}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      {/* Center Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-xl">Astratto</span>
      </Link>
      
      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Link 
          to="/about" 
          className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors font-medium"
        >
          Careers
        </Link>
        <Link 
          to="/contact"
          className="px-3 md:px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all flex items-center gap-2 text-sm"
        >
          <span className="hidden sm:inline">Contact</span>
          <Rocket className="w-4 h-4" />
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                to={link.path}
                onClick={closeMenu}
                className="text-lg text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/about"
              onClick={closeMenu}
              className="text-lg text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Careers
            </Link>
            <Link 
              to="/contact"
              onClick={closeMenu}
              className="text-lg text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { footerText } from '../data/content';

function Footer() {
  return (
    <footer className="bg-gray-50 py-12 md:py-20 px-6 md:px-8">
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        
        {/* Label */}
        <p className="text-purple-600 text-sm uppercase tracking-wider mb-6">
          Open the door to forging your brand's story
        </p>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            {footerText.heading}
            <br />
            Shaping{' '}
            <span className="text-yellow-400">Your Brand's Destiny</span>{' '}
            Through our
            <br />
            <span className="text-purple-600">{footerText.highlight}</span>
          </h2>
        </motion.div>
        
        {/* CTA Text */}
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Join us on a transformative journey to shape your brand's destiny through our dedicated partnership, crafting the narrative of your success with precision and care.
        </p>
        
        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all flex items-center gap-2 mx-auto font-semibold shadow-lg"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
      
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full" />
            <span className="font-bold text-xl">Astratto</span>
          </div>
          
          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy & Cookie Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Astratto © 2025</a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
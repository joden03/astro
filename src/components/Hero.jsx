import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="px-6 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
      
      {/* Subheading */}
      <div className="text-center mb-6 md:mb-8">
        <p className="text-gray-500 text-sm md:text-base">
          Igniting the Spark of Inspiration
        </p>
      </div>

      {/* Main Heading with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 md:mb-12">
          Unleash Your
          <br />
          Brand{' '}
          <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-2">
            <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-white" />
          </span>{' '}
          with Our
          <br />
          <span className="text-purple-600">Mágico</span> Design
        </h1>
      </motion.div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2 text-sm md:text-base"
        >
          Create Magic
          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
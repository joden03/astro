import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div className="px-6 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-purple-600">Astratto</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are a team of passionate designers and developers dedicated to creating exceptional digital experiences
          </p>
        </motion.div>
        
        {/* About Content */}
        <AboutSection />
        
        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-purple-50 rounded-3xl">
            <h3 className="text-4xl font-bold text-purple-600 mb-4">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center p-8 bg-orange-50 rounded-3xl">
            <h3 className="text-4xl font-bold text-orange-600 mb-4">200+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center p-8 bg-blue-50 rounded-3xl">
            <h3 className="text-4xl font-bold text-blue-600 mb-4">50+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default About;
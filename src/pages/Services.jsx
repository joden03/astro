import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

function Services() {
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
            Our <span className="text-purple-600">Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer comprehensive creative solutions to bring your brand vision to life
          </p>
        </motion.div>
        
        {/* Services */}
        <ServicesSection />
      </div>
      
      <Footer />
    </>
  );
}

export default Services;
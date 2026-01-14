import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

function Work() {
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
            Our <span className="text-purple-600">Work</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative design solutions and creative projects
          </p>
        </motion.div>
        
        {/* Projects */}
        <ProjectsSection />
      </div>
      
      <Footer />
    </>
  );
}

export default Work;
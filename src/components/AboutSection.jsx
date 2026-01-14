import { motion } from 'framer-motion';
import { aboutText } from '../data/content';

function AboutSection() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8 max-w-4xl mx-auto text-center">
      
      {/* Label */}
      <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
        About Astratto
      </p>
      
      {/* Main Text - Now using imported data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-yellow-500">Our</span>{' '}
          <span className="text-orange-400">visionary</span>{' '}
          <span className="text-orange-500">artisans</span>{' '}
          {aboutText.heading}{' '}
          <span className="text-purple-600">{aboutText.subheading}</span>{' '}
          to craft{' '}
          <span className="text-purple-600">✨ inspiring</span>{' '}
          <span className="text-gray-400">experiences,</span>
          <br />
          <span className="text-orange-400">leaving</span>{' '}
          {aboutText.description}{' '}
          <span className="text-yellow-500">⭐</span>
        </h2>
      </motion.div>
    </section>
  );
}

export default AboutSection;
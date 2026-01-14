import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Users } from 'lucide-react';

function ProjectCard({ title, description, gradient, category, tag, duration, team }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
    >
      {/* Gradient Background with Pattern */}
      <div className={`h-64 md:h-80 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-white/20 text-9xl font-bold"
          >
            {category.charAt(0)}
          </motion.div>
        </div>
        
        {/* Floating Icon */}
        <motion.div 
          whileHover={{ rotate: 45, scale: 1.1 }}
          className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <ArrowUpRight className="w-6 h-6 text-gray-900" />
        </motion.div>
        
        {/* Category Tag */}
        <div className="absolute bottom-6 left-6 z-10">
          <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-lg inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
            {tag}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-white p-6 md:p-8">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-4">
          {description}
        </p>
        
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{team} Team</span>
          </div>
        </div>
        
        {/* View Project Link */}
        <motion.div 
          className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between group/link"
          whileHover={{ x: 5 }}
        >
          <span className="text-purple-600 font-semibold text-sm">View Project</span>
          <ArrowUpRight className="w-5 h-5 text-purple-600 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
import { motion } from 'framer-motion';
import { Sparkles, Palette, Zap, Rocket, Star, Heart, Target, TrendingUp } from 'lucide-react';

function FloatingBox({ colors, direction, duration, emoji, icon, label, subtitle }) {
  const yAnimation = direction === "up" ? [0, -10, 0] : [0, 10, 0];
  
  const gradientClasses = {
    'purple-200-purple-400': 'bg-gradient-to-br from-purple-200 to-purple-400',
    'orange-200-orange-400': 'bg-gradient-to-br from-orange-200 to-orange-400',
    'blue-200-blue-400': 'bg-gradient-to-br from-blue-200 to-blue-400',
    'pink-200-pink-400': 'bg-gradient-to-br from-pink-200 to-pink-400',
    'green-200-green-400': 'bg-gradient-to-br from-green-200 to-green-400',
    'yellow-200-yellow-400': 'bg-gradient-to-br from-yellow-200 to-yellow-400',
    'red-200-red-400': 'bg-gradient-to-br from-red-200 to-red-400',
    'indigo-200-indigo-400': 'bg-gradient-to-br from-indigo-200 to-indigo-400',
  };
  
  const iconComponents = {
    'sparkles': Sparkles,
    'palette': Palette,
    'zap': Zap,
    'rocket': Rocket,
    'star': Star,
    'heart': Heart,
    'target': Target,
    'trending': TrendingUp
  };
  
  const gradientKey = `${colors[0]}-${colors[1]}`;
  const gradientClass = gradientClasses[gradientKey];
  const IconComponent = iconComponents[icon];
  
  return (
    <motion.div 
      animate={{ y: yAnimation }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`relative w-32 h-32 md:w-48 md:h-48 ${gradientClass} rounded-3xl shadow-lg overflow-hidden group cursor-pointer`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-16 h-16 border-4 border-white rounded-full" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/50 rounded-full" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 md:gap-2 p-4">
        {/* Emoji */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl relative z-10"
        >
          {emoji}
        </motion.div>
        
        {/* Icon (Small, next to emoji) */}
        {IconComponent && (
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
          </motion.div>
        )}
        
        {/* Label */}
        <div className="text-center relative z-10">
          <p className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">
            {label}
          </p>
          {subtitle && (
            <p className="text-white/80 text-[10px] md:text-xs mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-2 right-2 md:top-3 md:right-3 z-20"
      >
        <Star className="w-3 h-3 md:w-4 md:h-4 text-white/70" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 8, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-20"
      >
        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white/60" />
      </motion.div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.div>
  );
}

export default FloatingBox;
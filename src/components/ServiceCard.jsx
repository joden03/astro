import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

function ServiceCard({ icon, title, description, features, bgColor, textColor, borderColor, hoverBg }) {
  const isWhiteCard = textColor !== 'text-white';
  
  return (
    <motion.div 
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className={`${bgColor} ${textColor || 'text-gray-900'} ${borderColor} ${hoverBg || ''} border-2 rounded-3xl p-6 md:p-8 shadow-lg transition-all cursor-pointer relative overflow-hidden group h-full flex flex-col`}
    >
      {/* Decorative gradient circle */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Icon + Arrow */}
        <div className="flex items-start justify-between mb-6">
          <div className={`text-5xl md:text-6xl ${!isWhiteCard ? 'filter drop-shadow-lg' : ''}`}>
            {icon}
          </div>
          <div className={`w-10 h-10 ${textColor === 'text-white' ? 'bg-white/20' : 'bg-purple-100'} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <ArrowUpRight className={`w-5 h-5 ${textColor === 'text-white' ? 'text-white' : 'text-purple-600'}`} />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          {title}
        </h3>
        
        {/* Description */}
        <p className={`${textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'} text-sm md:text-base mb-6 flex-1`}>
          {description}
        </p>
        
        {/* Features List */}
        <div className="space-y-2 pt-4 border-t border-current/20">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full ${textColor === 'text-white' ? 'bg-white/20' : 'bg-purple-100'} flex items-center justify-center flex-shrink-0`}>
                <Check className={`w-3 h-3 ${textColor === 'text-white' ? 'text-white' : 'text-purple-600'}`} />
              </div>
              <span className={`text-sm ${textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
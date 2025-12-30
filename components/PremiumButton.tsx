
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface PremiumButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative flex items-center bg-[#0052cc] rounded-full pl-2 pr-8 py-2.5 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 ${className}`}
    >
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform group-hover:rotate-12">
        <ArrowUpRight className="w-5 h-5 text-[#8b5cf6]" />
      </div>
      <span className="ml-4 text-white font-bold text-lg tracking-tight">
        {text}
      </span>
    </motion.button>
  );
};

export default PremiumButton;

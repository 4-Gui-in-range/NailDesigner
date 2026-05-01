
import React from 'react';
import { motion } from 'framer-motion';

function PortfolioCard({ image, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="text-background">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-background/90">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;


import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary rounded-2xl p-8 luxury-shadow hover:luxury-shadow-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-foreground/80 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;

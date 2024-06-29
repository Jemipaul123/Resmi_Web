import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import happycouple from '../assets/happycouple.jpg';

export default function Homepage() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${happycouple})` }}>
        <motion.div 
          className="absolute inset-0 bg-white opacity-45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      <nav className="relative p-2 flex justify-between items-center z-10">
        <motion.div 
          className="text-black text-2xl font-semibold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Dr. Resmi's Counseling
        </motion.div>
        <div className="flex space-x-4">
          {['About', 'Services', 'Contact'].map((text, index) => (
            <motion.a 
              key={text}
              href={`#${text.toLowerCase()}`}
              className="text-black text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {text}
            </motion.a>
          ))}
        </div>
      </nav>
      <div className="relative text-center p-8 z-10 flex flex-col items-center justify-center h-full">
        <motion.h1 
          className="text-5xl text-black font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Dr. Resmi's Counseling
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Providing compassionate and professional counseling services.
        </motion.p>
      </div>
    </div>
  );
}

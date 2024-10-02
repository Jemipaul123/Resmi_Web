import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import happycouple from '../assets/happycouple.jpg';
import testimonials from '../components/testimonials.js';
import services from '../components/services.js';
import resmiImage from '../assets/Designer.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone'; 
import EmailIcon from '@mui/icons-material/Email'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 

export default function Homepage() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative h-screen bg-yellow-50">
      {/* Header Section */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${happycouple})` }}>
        <motion.div 
          className="absolute inset-0 bg-yellow-50 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      <div className="relative text-center p-8 z-10 flex flex-col items-center justify-center h-full">
        <motion.h1 
          className="text-5xl text-gray-800 font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Dr. Resmi's Counseling
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Providing compassionate and professional counseling services.
        </motion.p>
      </div>

      {/* About Section */}
      <motion.div
        id="about"
        className="relative text-center p-12 z-10 flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-100 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl font-semibold text-gray-800 mb-8">
          About Dr. Resmi Sudhir
        </motion.h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <img 
              src={resmiImage} 
              alt="Dr. Resmi Sudhir" 
              className="w-64 h-64 rounded-full shadow-lg object-cover"
            />
          </div>

          <div className="max-w-2xl text-left md:ml-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Dr. Resmi has about 20 years of experience in clinical psychology, working in various hospitals in Kerala such as MIMS, Lakeshore, Rajagiri, Sunrise, Al Azar, and Smita Memorial. Her areas of expertise include Child & Adolescent Mental Health, Learning Disabilities, and Qualitative Research.
            </p>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              She is passionate about helping people solve problems, create stability, and reconcile with modern life's challenges through personalized care. Dr. Resmi focuses on providing Individual, Group, and Corporate Counseling with a deep commitment to hospital and clinical care.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Treatments Section */}
      <motion.div
        id="treatments"
        className="relative text-center p-8 z-10 flex flex-col items-center justify-center min-h-screen bg-yellow-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl text-gray-800 font-semibold mb-8">
          Treatments
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform transform hover:scale-105 ${selectedService === index ? "ring-4 ring-yellow-400" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleServiceClick(index)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              {selectedService === index && (
                <motion.p
                  className="text-gray-700 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {service.details}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        id="testimonials"
        className="relative text-center p-8 z-10 flex flex-col items-center justify-center h-screen bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <br /><br /><br />
        <motion.h1 className="text-5xl text-gray-800 font-semibold mb-8">
          Testimonials
        </motion.h1>
        <div className="w-full max-w-6xl">
          <motion.div 
            className="flex space-x-8 overflow-x-auto pb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
           
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-yellow-100 rounded-lg shadow-lg p-6 min-w-[300px] max-w-[400px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-gray-800">{testimonial.text}</p>
                <p className="text-gray-600 mt-4 font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        className="relative text-center p-8 z-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <motion.h1 className="text-5xl text-gray-800 font-semibold mb-8">
          Contact Me
        </motion.h1>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-xl p-10 max-w-5xl mx-auto border border-gray-200">

          
          <div className="flex flex-col space-y-6 md:space-y-8 text-left">
            <div className="flex items-center">
              <PhoneIcon className="text-gray-600 mr-2" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 9446482976</p>
              </div>
            </div>

            <div className="flex items-center">
              <EmailIcon className="text-gray-600 mr-2" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">dr.resmisudhir@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <LocationOnIcon className="text-gray-600 mr-2" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Thodupuzha, Kerala, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-6 md:space-y-8 text-left">
            <div className="flex items-center">
              <LinkedInIcon className="text-gray-600 mr-2" />
              <a href="https://www.linkedin.com/in/drresmisudhir/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-800">LinkedIn</a>
            </div>

            <div className="flex items-center">
              <FacebookIcon className="text-gray-600 mr-2" />
              <a href="https://www.facebook.com/drresmi.sudhir/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-800">Facebook</a>
            </div>

            <div className="flex items-center">
              <TwitterIcon className="text-gray-600 mr-2" />
              <a href="https://twitter.com/drresmisudhir" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-800">Twitter</a>
            </div>
          </div>
        </div>
      </motion.div>
      <footer className="bg-gray-800 text-white p-6">
  <div className="text-center">
    <p className="mb-2">© 2024 Dr. Resmi Sudhir. All rights reserved.</p>
    <p className="text-sm">Designed and developed by Arpitha Sudhir</p>
  </div>
</footer>
    </div>
    
  );
}

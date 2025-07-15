import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className='w-full px-[12%] py-10 scroll-mt-20'
    >

      {/* Section Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I specialize in building full-stack web applications using MERN and .NET stacks, with secure authentication and scalable backend systems. I also integrate AI APIs, design responsive UIs, and automate deployments using CI/CD pipelines.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'
      >
        {serviceData.map(({ icon, title, description, details }, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={index}
              className={`relative border border-gray-400 rounded-lg px-8 py-6 flex flex-col justify-between hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-500 dark:hover:bg-darkHover dark:hover:shadow-white ${
                isExpanded ? 'min-h-[330px]' : 'min-h-[230px]'
              }`}
            >
              <div>
                <Image src={icon} alt='' className='w-10 mb-2' />
                <h3 className='text-lg my-2 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  {description}
                </p>

                {isExpanded && details && (
                  <div className="mt-4 text-sm text-gray-800 dark:text-white/70">
                    <p className="font-semibold mb-1">Used in:</p>
                    <ul className="list-disc list-inside mb-2">
                      {details.projects.map((proj, i) => (
                        <li key={i}>{proj}</li>
                      ))}
                    </ul>
                    <p className="font-semibold mb-1">Technologies:</p>
                    <ul className="list-disc list-inside">
                      {details.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Read More Button */}
              <button
                onClick={() => toggleExpand(index)}
                className='mt-6 self-start flex items-center gap-2 text-sm text-blue-700 border border-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-100 dark:hover:bg-white/10 transition'
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <Image alt='' src={assets.right_arrow} className='w-4' />
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;

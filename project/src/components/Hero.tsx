import React from 'react';
import { ArrowDown } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Chandar Rathi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Cloud & DevOps Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Cloud infrastructure and DevOps specialist with extensive experience in AWS services, automation, and containerization.
              Strong background in developing and deploying scalable, secure cloud solutions with proven ability to optimize system
              performance and reduce costs. Experienced in collaborative environments with excellent communication skills and a passion
              for continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900 shadow-xl">
              <img
                src={getAssetPath('/assets/images/profile.jpg')}
                alt="Chandar Rathi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
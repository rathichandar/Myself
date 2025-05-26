import React from 'react';
import { FileDown } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Cloud and DevOps Infrastructure" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a Cloud Infrastructure and DevOps specialist with a strong foundation in AWS services, automation, and containerization. 
              My expertise lies in developing and implementing scalable, secure cloud solutions that optimize performance and reduce costs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At Blue Data IT Services, I've successfully improved API response times by 30% and reduced system deployment time by 80% through 
              efficient CI/CD pipelines. My experience includes working with cutting-edge technologies like Docker, Kubernetes, and Terraform.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm passionate about continuous learning and staying ahead of the latest developments in cloud technology and DevOps practices. 
              My approach combines technical expertise with strong problem-solving skills to deliver robust solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Fullerton, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">rathichandar@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">M.S. Computer Science<br/>California State University</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer<br/>Cloud & DevOps</p>
              </div>
            </div>

            <a
              href={getAssetPath('/assets/docs/resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            >
              <FileDown className="mr-2" size={20} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
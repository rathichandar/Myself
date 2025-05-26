import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rathichandar',
      icon: Github,
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/chandarrathi/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      href: 'mailto:rathichandar@gmail.com',
      icon: Mail,
      color: 'hover:text-indigo-400',
    },
    {
      name: 'Resume',
      href: '/resume.pdf',
      icon: FileText,
      color: 'hover:text-green-400',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-400 dark:text-indigo-300">Chandar Rathi</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Cloud & DevOps Engineer</p>
            <p className="text-gray-400 dark:text-gray-500 mt-4 max-w-md">
              Specializing in cloud infrastructure, automation, and DevOps practices. 
              Building scalable solutions and optimizing development workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-300">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 dark:text-gray-500 ${link.color} transition-colors`}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Chandar Rathi. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-4 md:mt-0">
              Made with <span className="text-red-500">❤</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 dark:bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
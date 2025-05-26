import React, { useState } from 'react';
import { ExternalLink, Github, X, FileImage } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  category: string;
  achievements: string[];
  architectureDiagram?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Architecture Diagram: {title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 overflow-auto">
          <img
            src={imageUrl}
            alt={`${title} Architecture Diagram`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'StreamFlow: Automated Data Pipeline',
      description: 'A sophisticated ETL pipeline built on AWS infrastructure that streamlines data processing and analytics workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      tags: ['AWS', 'Terraform', 'MERN Stack', 'GitHub Actions'],
      githubUrl: 'https://github.com/rathichandar',
      category: 'cloud',
      achievements: [
        'Reduced data processing time by 60%',
        'Decreased infrastructure costs by 40%',
        'Built ETL pipeline using AWS S3, Lambda, and Glue',
        'Implemented monitoring with Prometheus/Grafana'
      ]
    },
    {
      id: 2,
      title: 'Stock Prediction System',
      description: 'A comprehensive stock analysis and prediction system using LSTM neural networks to forecast stock prices based on historical data from Yahoo Finance.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      tags: ['Python', 'React', 'Flask', 'LSTM', 'Machine Learning'],
      githubUrl: 'https://github.com/rathichandar/Ml_Project',
      category: 'ml',
      achievements: [
        'Built full-stack application with React frontend and Flask backend',
        'Implemented LSTM neural network for accurate price predictions',
        'Created responsive UI with real-time stock data visualization',
        'Integrated error handling and loading states for better UX'
      ]
    },
    {
      id: 3,
      title: 'Cloud Security Automation',
      description: 'Comprehensive cloud security solution implementing automated compliance checks and secure resource management in AWS environments.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      tags: ['AWS', 'Python', 'IAM', 'Lambda'],
      githubUrl: 'https://github.com/rathichandar',
      category: 'security',
      achievements: [
        'Automated security compliance checks',
        'Implemented least privilege IAM policies',
        'Automated SSL certificate management',
        'Created event-driven security responses'
      ]
    },
    {
      id: 4,
      title: 'CI/CD Pipeline Optimization',
      description: 'Developed and optimized CI/CD pipelines at Blue Data IT Services, significantly improving deployment efficiency and reliability.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      tags: ['Jenkins', 'AWS CodePipeline', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com/rathichandar',
      category: 'devops',
      achievements: [
        'Reduced release time by 80%',
        'Increased system reliability by 35%',
        'Automated testing and deployment',
        'Containerized applications with Docker'
      ]
    },
    {
      id: 5,
      title: 'Infrastructure as Code Implementation',
      description: 'Developed comprehensive IaC solutions using Terraform to automate cloud infrastructure provisioning and management.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      tags: ['Terraform', 'AWS', 'Infrastructure as Code', 'DevOps'],
      githubUrl: 'https://github.com/rathichandar',
      category: 'devops',
      achievements: [
        'Reduced setup time by 50%',
        'Automated cloud provisioning',
        'Implemented infrastructure version control',
        'Standardized deployment processes'
      ]
    },
    {
      id: 6,
      title: 'Full-Stack Election Rating System',
      description: 'A modern election rating system built with FastAPI and Svelte, utilizing containerized microservices architecture deployed on AWS ECS Fargate. Features comprehensive CI/CD pipelines for automated testing and zero-downtime deployments.',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      tags: ['AWS ECS', 'FastAPI', 'Svelte', 'Docker', 'GitHub Actions', 'Microservices'],
      githubUrl: 'https://github.com/rathichandar/policy-duck',
      category: 'fullstack',
      achievements: [
        'Implemented containerized microservices architecture on AWS ECS Fargate',
        'Built multi-stage CI/CD pipelines with GitHub Actions for automated deployments',
        'Designed zero-downtime deployment strategy across multiple environments',
        'Created modern UI with Svelte and RESTful API with FastAPI',
        'Developed comprehensive testing and staging environments'
      ],
      architectureDiagram: getAssetPath('/assets/diagrams/election-system-architecture.png')
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in cloud infrastructure, DevOps automation, and full-stack development.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter('cloud')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'cloud'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
              }`}
            >
              Cloud
            </button>
            <button
              type="button"
              onClick={() => setFilter('ml')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'ml'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
              }`}
            >
              ML/AI
            </button>
            <button
              type="button"
              onClick={() => setFilter('security')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'security'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
              }`}
            >
              Security
            </button>
            <button
              type="button"
              onClick={() => setFilter('devops')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'devops'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
              }`}
            >
              DevOps
            </button>
            <button
              type="button"
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'fullstack'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                      {achievement}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.architectureDiagram && (
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      <FileImage size={16} className="mr-1" /> View Architecture
                    </button>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <Github size={16} className="mr-1" /> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageUrl={selectedProject.architectureDiagram || ''}
          title={selectedProject.title}
        />
      )}
    </section>
  );
};

export default Projects;
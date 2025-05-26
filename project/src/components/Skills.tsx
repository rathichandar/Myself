import React from 'react';

const Skills = () => {
  const cloudSkills = [
    { name: 'AWS Services', level: 90 },
    { name: 'Cloud Architecture', level: 85 },
    { name: 'Infrastructure as Code', level: 85 },
    { name: 'AWS Lambda', level: 80 },
    { name: 'AWS S3', level: 90 },
    { name: 'AWS EC2', level: 85 },
    { name: 'AWS RDS', level: 80 },
  ];

  const devopsSkills = [
    { name: 'Docker', level: 90 },
    { name: 'Kubernetes', level: 85 },
    { name: 'Jenkins', level: 85 },
    { name: 'Terraform', level: 80 },
    { name: 'CI/CD Pipelines', level: 90 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Ansible', level: 80 },
  ];

  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Express.js', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Linux/UNIX', level: 85 },
  ];

  const monitoringSkills = [
    { name: 'Prometheus', level: 85 },
    { name: 'Grafana', level: 80 },
    { name: 'AWS CloudWatch', level: 85 },
    { name: 'Log Management', level: 80 },
    { name: 'Performance Optimization', level: 85 },
    { name: 'Security Compliance', level: 80 },
    { name: 'Troubleshooting', level: 90 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized in cloud infrastructure, DevOps practices, and modern development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Cloud Services</h3>
            {cloudSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">DevOps Tools</h3>
            {devopsSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Development</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Monitoring & Security</h3>
            {monitoringSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
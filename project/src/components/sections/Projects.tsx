import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern MERN stack architecture.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/jaypedhadiya/ecommerce-app",
      liveUrl: "https://ecommerce-demo.netlify.app",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      techStack: ["React", "Express.js", "MongoDB", "CSS3"],
      githubUrl: "https://github.com/jaypedhadiya/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides real-time weather information with interactive charts and location-based forecasts.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      githubUrl: "https://github.com/jaypedhadiya/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.netlify.app",
      featured: false
    },
    {
      title: "Personal Blog Platform",
      description: "A full-featured blog platform with content management, user comments, and responsive design. Includes admin panel for content management.",
      techStack: ["React", "Node.js", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/jaypedhadiya/blog-platform",
      liveUrl: "https://blog-platform-demo.netlify.app",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      techStack: ["React", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/jaypedhadiya/portfolio",
      liveUrl: "https://jaypedhadiya.netlify.app",
      featured: false
    },
    {
      title: "Recipe Finder App",
      description: "A recipe discovery application with search functionality, meal planning features, and ingredient-based recipe suggestions.",
      techStack: ["React", "Express.js", "Recipe API", "Bootstrap"],
      githubUrl: "https://github.com/jaypedhadiya/recipe-finder",
      liveUrl: "https://recipe-finder-demo.netlify.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Highlighted Work
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
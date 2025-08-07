import React from 'react';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: <Lightbulb className="text-purple-600" size={32} />,
      title: "Problem Solver",
      description: "I enjoy breaking down complex problems into manageable solutions and learning new technologies."
    },
    {
      icon: <Target className="text-green-600" size={32} />,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality projects on time while continuously improving my skills."
    },
    {
      icon: <Coffee className="text-orange-600" size={32} />,
      title: "Continuous Learner",
      description: "Always excited to learn new frameworks, tools, and best practices in web development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a fresher full-stack developer, I'm excited to begin my journey in the tech industry. 
              I have a strong foundation in modern web technologies and a passion for creating 
              user-centric applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise lies in the MERN stack (MongoDB, Express.js, React, Node.js), along with 
              front-end technologies like HTML5, CSS3, JavaScript, and Bootstrap. I'm always eager 
              to learn new technologies and contribute to innovative projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. 
              My goal is to create exceptional digital experiences that make a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
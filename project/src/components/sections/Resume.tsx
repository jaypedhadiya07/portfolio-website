import React from 'react';
import { Download, Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Atmiya University",
      location: "Rajkot, Gujarat",
      duration: "2020 - 2024"
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Red & White Multimedia Education",
      date: "2025"
    },
    {
      name: "React.js Certification",
      issuer: "Red & White Multimedia Education",
      date: "2025"
    },
    {
      name: "C++ Algorithms and Data Structures",
      issuer: "Red & White Multimedia Education",
      date: "2025"
    }
  ];

  const achievements = [
    "Built 6+ full-stack web applications using MERN stack",
    "Completed 100+ coding challenges on various platforms",
    "Contributed to open-source projects on GitHub",
    "Maintained clean code practices with 95%+ code quality",
    "Implemented responsive designs for mobile-first approach"
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Download my resume or view my qualifications and achievements below
          </p>
          <a href="https://www.canva.com/design/DAGwgH6COlw/FgXrStv5o4qmrd89m0JNrg/view?utm_content=DAGwgH6COlw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc6c6f7996c" target="_blank">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <Download size={20} />
            <span>View Resume</span>
          </button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" size={28} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-sm">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {edu.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="mr-3 text-purple-600" size={28} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Skills Summary */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Proficiency */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Proficiency
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { skill: 'Frontend', level: 'Advanced' },
                  { skill: 'Backend', level: 'Intermediate' },
                  { skill: 'Database', level: 'Intermediate' },
                  { skill: 'Version Control', level: 'Advanced' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg text-center shadow hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.skill}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
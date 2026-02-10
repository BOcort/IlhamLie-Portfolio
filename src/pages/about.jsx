/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import skillsData from '../data/skill.json';
import experiencesData from '../data/experience.json';
import certificationsData from '../data/cerfication.json';

export default function About() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <div>
      <div id="container" className="w-5/6 mx-auto">
        <div id="about-title" className="text-center my-10">
          <h2 className="text-6xl font-bold font-sans italic">
            See My profile <span className="text-red-500">!</span>
          </h2>
        </div>

        {/* About Content */}
        <div id="about-content" className="md:grid md:grid-cols-3 gap-5 mb-20">
          <div id="about-text" className="text-xl text-justify font-mono md:col-span-2 max-md:hidden">
            <p className="mb-5">
              <span className="text-red-500 font-semibold"> My journey as a Software Engineer! </span> 
              defined by a relentless drive to build robust and efficient systems. Currently a final-year student at the University of Papua, I have already bridged the gap between academic theory and enterprise application through my tenure as a Software Engineering Intern at PT Freeport Indonesia. There, I contributed to engineering full-stack solutions and optimizing workflows using modern cloud architecture.
            </p>
            <p className="mb-5">
              Since high school, I have wholeheartedly delved into the realm of computer science. I actively participated in 
              various informatics competitions during my high school years and even succeeded in winning competitions at the 
              district level. My passion and dedication to the field of computer science have continued to grow over time.
            </p>
            <p className="mb-5">
              In addition to formal education, I attended a full stack developer bootcamp on harisenin.com to further enhance 
              my knowledge and skills in this field. I enjoy challenges and logic competitions, which help sharpen my analytical 
              thinking and foster creative problem-solving in software development.
            </p>
            <p className="mb-5">
              Throughout my learning journey, I have taken various courses to improve my understanding of front-end, databases, 
              and back-end development. I have also successfully worked on several projects where I played the role of a full 
              stack developer, applying the knowledge and skills I have acquired.
            </p>
          </div>

          <div id="about-picture" className="md:col-span-1">
            <div className="relative max-md:flex max-md:justify-center max-md:mb-10">
              <div className="bg-gray-700 w-64 h-64 absolute top-3 left-3 rounded-xl -z-10 max-md:hidden"></div>
              <div className="bg-white w-64 h-64 relative flex rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/image/IMG_4189_YB_-removebg-preview.png" 
                  alt="Profile" 
                  className="h-56 m-auto object-cover" 
                />
              </div>
            </div>

            <div className="mt-10 max-md:flex max-md:flex-col max-md:items-center max-md:gap-4">
              <div className="h-24 flex w-72 hover:bg-white hover:text-black duration-300 rounded-xl border border-gray-700 p-2">
                <img src="/image/logo-unipa.webp" alt="UNIPA" className="h-full object-contain ml-2" />
                <p className="my-auto ml-4 text-xl font-bold font-mono">
                  Bachelor <span className="text-sm block">Informatic Engineering</span>
                </p>
              </div>
              <div className="mt-5 h-24 flex w-72 hover:bg-white hover:text-black duration-300 rounded-xl border border-gray-700 p-2">
                <p className="my-auto mr-4 text-xl font-bold font-mono text-right">
                  Bootcamp <span className="text-sm block">Fullstack Developer</span>
                </p>
                <img src="/image/logo-harisenin.jpeg" alt="HariSenin" className="h-full object-contain rounded-full mr-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience-section" className="mb-20">
          <h3 className="text-5xl font-bold text-center my-10">
            Professional <span className="text-blue-500">Experience</span>
          </h3>
          
          {experiencesData.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative border-l-4 border-blue-500 pl-8 mb-10 hover:border-blue-400 transition-all duration-300"
            >
              <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-blue-500 animate-pulse"></div>
              
              <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-blue-400">{exp.position}</h4>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.duration} • {exp.period}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 italic">{exp.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Projects */}
                <div className="mt-6">
                  <button
                    onClick={() => setActiveExperience(activeExperience === index ? -1 : index)}
                    className="text-blue-400 hover:text-blue-300 font-semibold mb-4 flex items-center gap-2"
                  >
                    {activeExperience === index ? '▼' : '▶'} View Key Projects & Contributions
                  </button>
                  
                  {activeExperience === index && (
                    <div className="space-y-4 animate-fadeIn">
                      {exp.projects.map((project, idx) => (
                        <div 
                          key={idx}
                          className="pl-4 border-l-2 border-gray-700 hover:border-blue-500 transition-colors duration-300"
                        >
                          <h5 className="font-semibold text-lg text-white">{project.name}</h5>
                          <p className="text-gray-400 text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div id="about-skill" className="mb-20">
          <h3 className="text-5xl font-bold text-center my-10">
            Technical <span className="text-green-500">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([key, skillCategory]) => (
              <div 
                key={key}
                className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-105"
              >
                <h4 className="font-semibold text-2xl mb-4 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  {skillCategory.title}
                </h4>
                <hr className="border-gray-700 mb-4" />
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillCategory.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-800 hover:bg-white hover:text-black rounded-lg transition-all duration-300 cursor-pointer text-sm font-medium transform hover:scale-110"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div id="Certificate" className="mb-20">
          <h3 className="text-5xl font-bold text-center my-10">
            Certifications & <span className="text-yellow-500">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 h-full">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative p-6 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="h-20 w-20 object-contain rounded-full bg-white p-2 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium group-hover:text-yellow-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-lg text-gray-300">{cert.issuer}</p>
                      <p className="text-sm text-gray-400">{cert.date}</p>
                      <p className="text-xs text-gray-500 mt-1">Skills: {cert.skills}</p>
                    </div>
                    <div className="text-yellow-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

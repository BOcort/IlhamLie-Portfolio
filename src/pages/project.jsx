import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import projectsData from '../data/project.json';

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };
    
    const handleSectionChange = () => {
      if (selectedProject) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('sectionChange', handleSectionChange);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('sectionChange', handleSectionChange);
    };
  }, [selectedProject]);

  const getCategoryColor = (category) => {
    const colors = {
      'Machine Learning': 'from-purple-500 to-pink-500',
      'Full Stack': 'from-blue-500 to-cyan-500',
      'Mobile App': 'from-green-500 to-teal-500'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const nextImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      <div id="container" className="w-5/6 mx-auto py-10">
        <h2 className="text-center text-5xl font-bold mb-4 max-md:text-4xl">
          My <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-md:text-sm">
          Explore my latest work and professional projects
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
            >
              {/* Shadow Effect */}
              <div className={`absolute top-4 left-4 w-full h-full rounded-xl -z-10 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-50 transition-all duration-300 group-hover:top-6 group-hover:left-6`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] h-full">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  {project.logo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`}
                        className="h-24 w-24 object-contain z-10"
                      />
                    </div>
                  )}
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${project.logo ? 'opacity-30' : ''}`}
                  />
                  {/* Category Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-sky-400 transition-colors max-md:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{project.type} • {project.date}</p>
                  
                  {/* Short Description on Hover */}
                  <div className={`transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 max-md:p-2 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] max-md:max-h-[95vh] border border-gray-700 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 max-md:w-9 max-md:h-9 rounded-full bg-gray-800/80 hover:bg-red-500 transition-colors duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <svg className="w-6 h-6 max-md:w-5 max-md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1">
              {/* Modal Header with Gallery */}
              <div className="relative">
                {/* Image Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                  <div className="relative h-80 bg-gray-900 overflow-hidden max-md:h-52">
                    {/* Logo Overlay */}
                    {selectedProject.logo && (
                      <div className="absolute top-4 left-4 z-10 bg-white rounded-xl p-2 max-md:p-1.5 shadow-xl">
                        <img 
                          src={selectedProject.logo} 
                          alt={`${selectedProject.title} logo`}
                          className="h-16 w-16 max-md:h-12 max-md:w-12 object-contain"
                        />
                      </div>
                    )}

                    {/* Current Image */}
                    <img 
                      src={selectedProject.gallery[currentImageIndex]} 
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain bg-gray-900"
                    />

                    {/* Navigation Arrows */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 max-md:left-1 top-1/2 -translate-y-1/2 w-12 h-12 max-md:w-9 max-md:h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                        >
                          <svg className="w-6 h-6 max-md:w-5 max-md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 max-md:right-1 top-1/2 -translate-y-1/2 w-12 h-12 max-md:w-9 max-md:h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                        >
                          <svg className="w-6 h-6 max-md:w-5 max-md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex 
                                  ? 'bg-white w-8' 
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="h-64 bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-500">No preview available</p>
                  </div>
                )}

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 max-md:p-4">
                  <div className={`inline-block px-4 py-2 max-md:px-3 max-md:py-1 rounded-full text-sm max-md:text-xs font-semibold bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white mb-3 max-md:mb-2`}>
                    {selectedProject.category}
                  </div>
                  <h2 className="text-4xl font-bold mb-2 max-md:text-xl max-md:mb-1">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-base max-md:text-xs">{selectedProject.type} • {selectedProject.date}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 max-md:p-4">
                {/* Description */}
                <div className="mb-8 max-md:mb-6">
                  <h3 className="text-2xl font-bold mb-4 max-md:mb-3 text-sky-400 flex items-center gap-2 max-md:text-lg">
                    <svg className="w-6 h-6 max-md:w-5 max-md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Overview
                  </h3>
                  <div className="bg-gray-800/50 rounded-xl p-5 max-md:p-4 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed mb-4 max-md:mb-3 text-base max-md:text-sm">{selectedProject.description}</p>
                    <p className="text-gray-400 leading-relaxed text-sm max-md:text-xs">{selectedProject.fullDescription}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8 max-md:mb-6">
                  <h3 className="text-2xl font-bold mb-4 max-md:mb-3 text-sky-400 flex items-center gap-2 max-md:text-lg">
                    <svg className="w-6 h-6 max-md:w-5 max-md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3 max-md:gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 max-md:px-3 max-md:py-1.5 text-base max-md:text-xs bg-gray-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 rounded-lg transition-all duration-300 cursor-default border border-gray-700 hover:border-transparent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 max-md:mb-6">
                  <h3 className="text-2xl font-bold mb-4 max-md:mb-3 text-sky-400 flex items-center gap-2 max-md:text-lg">
                    <svg className="w-6 h-6 max-md:w-5 max-md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h3>
                  <div className="bg-gray-800/50 rounded-xl p-5 max-md:p-4 backdrop-blur-sm">
                    <ul className="space-y-3 max-md:space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 max-md:gap-2">
                          <svg className="w-6 h-6 max-md:w-5 max-md:h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300 text-base max-md:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links */}
                {(selectedProject.links.github || selectedProject.links.demo || selectedProject.links.githubBackend) && (
                  <div className="flex flex-wrap gap-4 max-md:gap-2">
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 max-md:px-4 max-md:py-2 text-base max-md:text-sm bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-700"
                      >
                        <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="max-md:hidden">GitHub Repository</span>
                        <span className="md:hidden">GitHub</span>
                      </a>
                    )}
                    {selectedProject.links.githubBackend && (
                      <a
                        href={selectedProject.links.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 max-md:px-4 max-md:py-2 text-base max-md:text-sm bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-700"
                      >
                        <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="max-md:hidden">Backend Repository</span>
                        <span className="md:hidden">Backend</span>
                      </a>
                    )}
                    {selectedProject.links.demo && (
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 max-md:px-4 max-md:py-2 text-base max-md:text-sm bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
                      >
                        <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

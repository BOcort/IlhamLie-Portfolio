/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useRef } from "react";
import { Home, About, Project, Contact } from "../pages";
import SEO from "./SEO";

export default function FullPageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  
  const sections = [
    { 
      name: "Home", 
      component: <Home />,
      seo: {
        title: null,
        description: "Welcome to Ilham Tatayo Lie's portfolio. Full Stack Developer passionate about creating innovative web solutions with React, Node.js, and modern technologies.",
        keywords: "Ilham Tatayo Lie, Full Stack Developer, React Developer, Node.js, JavaScript, Web Development, Portfolio, Informatics Engineering Student",
        url: "https://ilhamlie.vercel.app/"
      }
    },
    { 
      name: "About", 
      component: <About />,
      seo: {
        title: "About",
        description: "Learn about Ilham Tatayo Lie - Informatics Engineering student, Full Stack Developer bootcamp graduate from Harisenin.com. Skilled in HTML, CSS, JavaScript, React, Node.js, MySQL, and PostgreSQL.",
        keywords: "About Ilham Tatayo Lie, Full Stack Developer Skills, Web Development Education, Harisenin Bootcamp, University of Papua, Programming Skills, Front-end Developer, Back-end Developer",
        url: "https://ilhamlie.vercel.app/about"
      }
    },
    { 
      name: "Project", 
      component: <Project />,
      seo: {
        title: "Projects",
        description: "Explore Ilham Tatayo Lie's web development projects and portfolio work. View full stack applications built with React, Node.js, and modern web technologies.",
        keywords: "Web Development Projects, React Projects, Full Stack Applications, Portfolio Projects, Event Management System, JavaScript Projects",
        url: "https://ilhamlie.vercel.app/project"
      }
    },
    { 
      name: "Contact", 
      component: <Contact />,
      seo: {
        title: "Contact",
        description: "Get in touch with Ilham Tatayo Lie. Connect via email, LinkedIn, or GitHub. Available for full stack development opportunities and collaborations.",
        keywords: "Contact Ilham Tatayo Lie, Hire Full Stack Developer, Web Developer Contact, Email ilhamlie014@gmail.com, LinkedIn, GitHub",
        url: "https://ilhamlie.vercel.app/contact"
      }
    }
  ];

  // Dispatch event when section changes to close any open modals
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: { section: currentSection } }));
  }, [currentSection]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      const currentSectionElement = sectionRefs.current[currentSection];
      if (!currentSectionElement) return;

      const { scrollTop, scrollHeight, clientHeight } = currentSectionElement;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      const isAtTop = scrollTop === 0;

      // Scroll down
      if (e.deltaY > 0) {
        if (isAtBottom && currentSection < sections.length - 1) {
          e.preventDefault();
          setIsScrolling(true);
          setCurrentSection(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      } 
      // Scroll up
      else if (e.deltaY < 0) {
        if (isAtTop && currentSection > 0) {
          e.preventDefault();
          setIsScrolling(true);
          setCurrentSection(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      if ((e.key === "ArrowDown" || e.key === "PageDown") && currentSection < sections.length - 1) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if ((e.key === "ArrowUp" || e.key === "PageUp") && currentSection > 0) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isScrolling, sections.length]);

  const handleNavigationClick = (index) => {
    if (isScrolling || index === currentSection) return;
    setIsScrolling(true);
    setCurrentSection(index);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Get visible navigation items for desktop (3 items: prev, current, next)
  const getVisibleNavItems = () => {
    const items = [];
    if (currentSection > 0) {
      items.push({ ...sections[currentSection - 1], index: currentSection - 1, position: 'prev' });
    }
    items.push({ ...sections[currentSection], index: currentSection, position: 'current' });
    if (currentSection < sections.length - 1) {
      items.push({ ...sections[currentSection + 1], index: currentSection + 1, position: 'next' });
    }
    return items;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Dynamic SEO based on current section */}
      <SEO 
        title={sections[currentSection].seo.title}
        description={sections[currentSection].seo.description}
        keywords={sections[currentSection].seo.keywords}
        url={sections[currentSection].seo.url}
      />
      {/* Main Content Container */}
      <div 
        ref={containerRef}
        className="flex h-screen transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSection * 100}vw)`,
          width: `${sections.length * 100}vw`
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            ref={el => sectionRefs.current[index] = el}
            className={`w-screen h-screen flex-shrink-0 overflow-y-auto transition-opacity duration-700 ${
              index === currentSection ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="min-h-screen flex items-center justify-center py-10">
              {section.component}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Navigation - Horizontal Scroll at Top */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex gap-4 px-4 py-4 overflow-x-auto scrollbar-hide">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              className={`whitespace-nowrap transition-all duration-300 font-sans px-4 py-2 rounded-lg ${
                index === currentSection 
                  ? 'font-bold text-xl text-white bg-white/10' 
                  : 'font-normal text-base text-gray-400'
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Navigation - Vertical 3 Items */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {getVisibleNavItems().map((item) => (
          <button
            key={item.index}
            onClick={() => handleNavigationClick(item.index)}
            className={`text-right transition-all duration-500 font-sans ${
              item.position === 'current'
                ? 'font-bold text-2xl text-white scale-110' 
                : 'font-normal text-base text-gray-500 hover:text-gray-300'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-1 h-64 bg-gray-800 rounded-full">
        <div 
          className="w-full bg-white rounded-full transition-all duration-1000 ease-in-out"
          style={{ 
            height: `${(1 / sections.length) * 100}%`,
            transform: `translateY(${currentSection * 100}%)`
          }}
        />
      </div>

      {/* Section Counter */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-gray-400 font-mono text-sm">
        {String(currentSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
      </div>

      {/* Contact Icons - Fixed Top Right, Animate to Bottom Center on Contact Page */}
      <div className={`fixed z-50 transition-all duration-1000 ease-in-out ${
        currentSection === 3 
          ? 'bottom-32 max-md:bottom-24 left-1/2 -translate-x-1/2' 
          : 'top-8 right-8 max-md:top-20 max-md:right-4'
      }`}>
        <div className={`flex transition-all duration-1000 ${
          currentSection === 3 
            ? 'flex-row gap-6 md:gap-8' 
            : 'flex-col gap-3'
        }`}>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ilhamlie"
            target="_blank"
            rel="noopener noreferrer"
            className={`group transition-all duration-500 ${
              currentSection === 3
                ? 'w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 flex items-center justify-center shadow-2xl hover:scale-110'
                : 'w-12 h-12 max-md:w-10 max-md:h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg hover:scale-110'
            }`}
          >
            <svg className={`transition-all duration-500 ${
              currentSection === 3 ? 'w-8 h-8 md:w-10 md:h-10' : 'w-6 h-6 max-md:w-5 max-md:h-5'
            }`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ilhamlie_/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group transition-all duration-500 ${
              currentSection === 3
                ? 'w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 flex items-center justify-center shadow-2xl hover:scale-110'
                : 'w-12 h-12 max-md:w-10 max-md:h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:opacity-90 flex items-center justify-center shadow-lg hover:scale-110'
            }`}
          >
            <svg className={`transition-all duration-500 ${
              currentSection === 3 ? 'w-8 h-8 md:w-10 md:h-10' : 'w-6 h-6 max-md:w-5 max-md:h-5'
            }`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Email/Gmail */}
          <a
            href="mailto:ilhamlie014@gmail.com"
            className={`group transition-all duration-500 ${
              currentSection === 3
                ? 'w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 flex items-center justify-center shadow-2xl hover:scale-110'
                : 'w-12 h-12 max-md:w-10 max-md:h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg hover:scale-110'
            }`}
          >
            <svg className={`transition-all duration-500 ${
              currentSection === 3 ? 'w-8 h-8 md:w-10 md:h-10' : 'w-6 h-6 max-md:w-5 max-md:h-5'
            }`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

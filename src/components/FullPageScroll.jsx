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
    </div>
  );
}

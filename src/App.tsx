import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Events from './components/Events';
import Gallery from './components/Gallery';
import MemberQuotes from './components/MemberQuotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Smooth scroll to a section on click
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Scroll spy to update active nav item as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'regras', 'eventos', 'galeria', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 250; // trigger early for better feeling

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="app-root" className="min-h-screen bg-neutral-950 font-sans selection:bg-leather-600 selection:text-white antialiased">
      {/* Sticky Premium Navbar */}
      <Navbar onNavClick={scrollToSection} activeSection={activeSection} />

      {/* Hero Intro banner */}
      <Hero onExploreClick={scrollToSection} />

      {/* About the Group Section */}
      <About />

      {/* Community rules guidelines */}
      <Rules />

      {/* Events Schedule */}
      <Events />

      {/* Interactive Photo Gallery */}
      <Gallery />

      {/* Emotional Member Testimonials */}
      <MemberQuotes />

      {/* Double Contact option & Form */}
      <Contact />

      {/* Non-commercial Footer */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}

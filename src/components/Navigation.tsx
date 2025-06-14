
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-golden/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className={`font-playfair text-2xl font-bold transition-all duration-300 hover:scale-105 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <span className="text-golden">Golden</span> Closet Studio
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-lato font-medium transition-all duration-300 hover:text-golden hover:scale-105 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-lato font-medium transition-all duration-300 hover:text-golden hover:scale-105 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-lato font-medium transition-all duration-300 hover:text-golden hover:scale-105 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-lato font-medium transition-all duration-300 hover:text-golden hover:scale-105 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Contact Button */}
          <a 
            href="tel:9373694606"
            className="bg-golden hover:bg-golden/90 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

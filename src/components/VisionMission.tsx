
import { useEffect, useRef, useState } from "react";
import { Leaf, Home, Infinity } from "lucide-react";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Vision & Mission
          </h2>
          <div className={`w-24 h-1 bg-golden mx-auto ${
            isVisible ? 'animate-slide-in animation-delay-300' : 'opacity-0'
          }`} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className={`bg-white/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
          }`}>
            <div className="flex items-center justify-center w-16 h-16 bg-golden rounded-full mb-6 mx-auto">
              <Leaf className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-center mb-6 text-foreground">
              Our Vision
            </h3>
            <p className="text-lg text-center text-foreground/80 leading-relaxed">
              "To design spaces that reflect who you are and enrich your everyday living."
            </p>
          </div>

          {/* Mission Card */}
          <div className={`bg-white/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            isVisible ? 'animate-fade-in-up animation-delay-900' : 'opacity-0'
          }`}>
            <div className="flex items-center justify-center w-16 h-16 bg-golden rounded-full mb-6 mx-auto">
              <Home className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-center mb-6 text-foreground">
              Our Mission
            </h3>
            <p className="text-lg text-center text-foreground/80 leading-relaxed">
              "To create timeless, functional, and eco-conscious designs that harmonize with the natural world."
            </p>
          </div>
        </div>

        {/* Infinity Symbol - Connecting Element */}
        <div className={`flex justify-center mt-12 ${
          isVisible ? 'animate-fade-in-up animation-delay-1200' : 'opacity-0'
        }`}>
          <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
            <Infinity className="w-6 h-6 text-golden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

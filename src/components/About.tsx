
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 bg-gradient-to-b from-cream to-warm-beige"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            About Golden Closet Studio
          </h2>
          <div className={`w-24 h-1 bg-golden mx-auto ${
            isVisible ? 'animate-slide-in animation-delay-300' : 'opacity-0'
          }`} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${
            isVisible ? 'animate-slide-in animation-delay-600' : 'opacity-0'
          }`}>
            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                Poonam's distinctive <span className="font-semibold text-golden">GCS mission</span> is dedicated to ensuring each project becomes a dignified living narrative that embodies the emotion and lifestyle of you and your loved ones, creating homes that resonate with your unique story.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                <span className="font-semibold text-golden">GCS insists</span> on designing with strategies that focus on connection—with humans, communities, and the city. We aim to build self-sustaining, impactful, and functional spaces tailored to you.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/80">
                Welcome to <span className="font-semibold text-golden">Golden Closet Studio</span>—an architectural and interior design consultancy passionate about sustainable, authentic, and home-friendly design. Since 2009, we've delivered innovative and thoughtful solutions across Pune and beyond. From residential villas to commercial spaces, our work blends beauty, function, and environmental responsibility.
              </p>
            </div>

            {/* Contact Info */}
          </div>

          {/* Image */}
          <div className={`${
            isVisible ? 'animate-fade-in-up animation-delay-900' : 'opacity-0'
          }`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
                alt="Golden Closet Studio Interior Design Living Room"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-golden rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm text-center">Since<br/>2009</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 ${
          isVisible ? 'animate-fade-in-up animation-delay-1200' : 'opacity-0'
        }`}>
          <div className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">🌱</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Sustainable</h3>
            <p className="text-foreground/70">Environmental responsibility meets beautiful design in every project we undertake.</p>
          </div>

          <div className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">🏡</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Authentic</h3>
            <p className="text-foreground/70">Each space tells your unique story, reflecting your personality and lifestyle.</p>
          </div>

          <div className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">✨</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Functional</h3>
            <p className="text-foreground/70">Beauty and practicality work in harmony to create spaces that truly work for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

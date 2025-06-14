
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Aditi R.",
    review: "GCS transformed our small apartment into a cozy dream home! Poonam has magic in her hands.",
    rating: 5
  },
  {
    name: "Manoj S.",
    review: "Loved the traditional touch in our restaurant decor. Our customers notice and appreciate it!",
    rating: 5
  },
  {
    name: "Sneha & Rajesh T.",
    review: "Professional, detail-oriented, and so creative. We'll come back to GCS for all future projects!",
    rating: 5
  },
  {
    name: "Rohit G.",
    review: "Great understanding of what we needed. It felt like they read our minds and gave us more!",
    rating: 5
  }
];

const ClientTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-golden' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

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
            Stories from Our Happy Clients
          </h2>
          <div className={`w-24 h-1 bg-golden mx-auto ${
            isVisible ? 'animate-slide-in animation-delay-300' : 'opacity-0'
          }`} />
        </div>

        <div className={`max-w-4xl mx-auto ${
          isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
        }`}>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    {/* Polaroid-style card */}
                    <div className="bg-white p-8 pb-12 mx-auto max-w-2xl rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 left-8">
                        <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                          <span className="text-black text-lg font-bold">"</span>
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <div className="pt-4">
                        <p className="text-lg text-foreground/80 mb-6 italic leading-relaxed">
                          "{testimonial.review}"
                        </p>
                        
                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        {/* Name */}
                        <p className="font-playfair text-xl font-semibold text-foreground text-center">
                          - {testimonial.name}
                        </p>
                      </div>
                      
                      {/* Polaroid bottom space */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-golden/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-golden' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;

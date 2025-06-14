
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Living Area Design",
    description: "Smart layouts for comfort and class.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Study Cum Guest Room",
    description: "Multi-functional, space-saving elegance.",
    images: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Bedroom Décor",
    description: "Serene, customized personal sanctuaries.",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded47280c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551298370-9c890d38a87d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Kitchen and Dining",
    description: "Efficient, stylish, and family-friendly spaces.",
    images: [
      "https://images.unsplash.com/photo-1556909114-4f5f7d5ca8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-29c707de8b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f8d4b2dd5d2a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Boutique Décor (Traditional)",
    description: "Unique, artisanal visual appeal.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Restaurant (Traditional)",
    description: "Cultural ambiance with timeless charm.",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const OurExpertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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
      className="py-20 bg-gradient-to-b from-cream to-warm-beige"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Our Expertise
          </h2>
          <div className={`w-24 h-1 bg-golden mx-auto ${
            isVisible ? 'animate-slide-in animation-delay-300' : 'opacity-0'
          }`} />
        </div>

        <div className={`${
          isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
        }`}>
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-80 cursor-pointer"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.images[0]})` }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className={`transform transition-all duration-500 ${
                        hoveredService === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'
                      }`}>
                        <h3 className="font-playfair text-xl font-semibold mb-2">
                          {service.title}
                        </h3>
                        <p className={`text-sm transition-opacity duration-300 ${
                          hoveredService === index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className={`absolute top-4 right-4 w-8 h-8 bg-golden rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredService === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}>
                      <span className="text-black text-xs font-bold">✨</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Service Counter */}
        <div className={`text-center mt-8 ${
          isVisible ? 'animate-fade-in-up animation-delay-900' : 'opacity-0'
        }`}>
          <p className="text-sm text-muted-foreground">
            Swipe or use arrows to explore all our services
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;

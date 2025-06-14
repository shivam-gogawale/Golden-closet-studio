
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Interior design images with descriptions
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Modern Living Room Design",
      title: "Contemporary Living Space"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant Bedroom Interior",
      title: "Luxurious Bedroom Suite"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80",
      alt: "Kitchen Design",
      title: "Modern Kitchen Layout"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      alt: "Dining Room Setup",
      title: "Elegant Dining Area"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      alt: "Home Office Design",
      title: "Productive Workspace"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80",
      alt: "Bathroom Interior",
      title: "Spa-like Bathroom"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?auto=format&fit=crop&w=800&q=80",
      alt: "Walk-in Closet",
      title: "Custom Wardrobe Design"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
      alt: "Reading Nook",
      title: "Cozy Reading Corner"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
      alt: "Minimalist Interior",
      title: "Clean Minimalist Design"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      alt: "Rustic Living Room",
      title: "Rustic Charm Interior"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial Style Kitchen",
      title: "Industrial Kitchen Design"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      alt: "Scandinavian Bedroom",
      title: "Scandinavian Style Bedroom"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      alt: "Art Deco Living Room",
      title: "Art Deco Inspired Space"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80",
      alt: "Bohemian Style Room",
      title: "Bohemian Chic Interior"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
      alt: "Classic Traditional Room",
      title: "Traditional Elegance"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
      alt: "Open Plan Living",
      title: "Open Concept Design"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Penthouse",
      title: "Penthouse Interior"
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1564540574859-0dfb63293365?auto=format&fit=crop&w=800&q=80",
      alt: "Small Apartment Design",
      title: "Smart Small Space"
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=800&q=80",
      alt: "Outdoor Living Space",
      title: "Outdoor Entertainment Area"
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=800&q=80",
      alt: "Kids Room Design",
      title: "Creative Kids Space"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of stunning interior designs that showcase our expertise across various styles and spaces
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden mb-8">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id}>
                  <Card>
                    <CardContent className="p-2">
                      <div className="relative group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-105"
                          onClick={() => setSelectedImage(image.src)}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-semibold">{image.title}</h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-golden transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Inspired by our work? Let's create something beautiful together.
          </p>
          <a 
            href="tel:9373694606"
            className="bg-golden hover:bg-golden/90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

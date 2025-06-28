import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import OurExpertise from '@/components/OurExpertise';
import ClientTestimonials from '@/components/ClientTestimonials';
import ContactSection from '@/components/ContactSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Gallery from '@/components/Gallery';

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <OurExpertise />
      <Gallery />
      <ClientTestimonials />

      {/* Detailed Services Section */}
      <section id='services' className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Our Services
            </h2>
            <div className='w-24 h-1 bg-golden mx-auto mb-6' />
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Comprehensive interior design solutions tailored to transform your
              spaces into extraordinary environments
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Residential Design */}
            <div className='bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>🏠</span>
              </div>
              <h3 className='font-playfair text-2xl font-bold text-foreground mb-4'>
                Residential Design
              </h3>
              <p className='text-muted-foreground mb-4'>
                Complete home makeovers from concept to completion. We create
                personalized living spaces that reflect your lifestyle and
                preferences.
              </p>
              <ul className='text-sm text-muted-foreground space-y-2'>
                <ul className='text-sm text-muted-foreground space-y-2'>
                  <li>• Living, Dining, Bedroom & Bathroom Interiors</li>
                  <li>• Kitchen Planning & Home Office Design</li>
                  <li>• Space Optimization & Storage Solutions</li>
                  <li>• Terrace, Balcony & Landscape Styling</li>
                  <li>• Sample Flat Design & Presentation</li>
                </ul>
              </ul>
            </div>

            {/* Commercial Spaces */}
            <div className='bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>🏢</span>
              </div>
              <h3 className='font-playfair text-2xl font-bold text-foreground mb-4'>
                Commercial Spaces
              </h3>
              <p className='text-muted-foreground mb-4'>
                Professional commercial interiors that enhance productivity and
                create memorable brand experiences for your clients.
              </p>
              <ul className='text-sm text-muted-foreground space-y-2'>
                <li>• Office & Reception Area Design</li>
                <li>• Retail Store & Boutique Layouts</li>
                <li>• Restaurant, Café & Showroom Interiors</li>
                <li>• Building Lobby & Entrance Design</li>
                <li>• Functional & Brand-Centric Commercial Spaces</li>
              </ul>
            </div>

            {/* Design Consultancy */}
            <div className='bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
              <div className='w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6'>
                <span className='text-2xl'>💡</span>
              </div>
              <h3 className='font-playfair text-2xl font-bold text-foreground mb-4'>
                Design Consultancy
              </h3>
              <p className='text-muted-foreground mb-4'>
                Expert guidance and professional advice to help you make
                informed design decisions for your space.
              </p>
              <ul className='text-sm text-muted-foreground space-y-2'>
                <li>• Color Scheme Selection</li>
                <li>• Furniture Placement Advice</li>
                <li>• Material & Texture Guidance</li>
                <li>• Lighting Design Solutions</li>
                <li>• Budget Planning & Optimization</li>
              </ul>
            </div>
            {/* Sustainable Solutions */}
            {/* <div className="bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Sustainable Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Eco-friendly design approaches that prioritize environmental responsibility without compromising on style.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Eco-Friendly Material Selection</li>
                <li>• Energy-Efficient Lighting</li>
                <li>• Sustainable Furniture Options</li>
                <li>• Green Building Practices</li>
                <li>• Waste Reduction Strategies</li>
              </ul>
            </div> */}
          </div>
          <div className='flex justify-center mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full'>
              {/* Custom Furniture */}
              <div className='bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                <div className='w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6'>
                  <span className='text-2xl'>🪑</span>
                </div>
                <h3 className='font-playfair text-2xl font-bold text-foreground mb-4'>
                  Custom Furniture
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Bespoke furniture pieces designed and crafted specifically for
                  your space, ensuring perfect fit and unique style.
                </p>
                <ul className='text-sm text-muted-foreground space-y-2'>
                  <li>• Built-in Storage Solutions</li>
                  <li>• Custom Wardrobes & Closets</li>
                  <li>• Modular Furniture Design</li>
                  <li>• Space-Saving Innovations</li>
                  <li>• Artisanal Craftsmanship</li>
                </ul>
              </div>

              {/* Project Management */}
              <div className='bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                <div className='w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6'>
                  <span className='text-2xl'>📋</span>
                </div>
                <h3 className='font-playfair text-2xl font-bold text-foreground mb-4'>
                  Project Management
                </h3>
                <p className='text-muted-foreground mb-4'>
                  End-to-end project coordination ensuring timely delivery,
                  quality execution, and seamless communication.
                </p>
                <ul className='text-sm text-muted-foreground space-y-2'>
                  <li>• Timeline Planning & Scheduling</li>
                  <li>• Vendor Coordination</li>
                  <li>• Quality Control & Inspection</li>
                  <li>• Budget Management</li>
                  <li>• Progress Reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className='text-center mt-16'>
            <p className='text-lg text-muted-foreground mb-6'>
              Ready to transform your space? Let's discuss your vision.
            </p>
            <a
              href='tel:9373694606'
              className='bg-golden hover:bg-golden/90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block'
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

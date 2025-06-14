
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-warm-beige to-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Let's Create Your Dream Space
          </h2>
          <div className={`w-24 h-1 bg-golden mx-auto ${
            isVisible ? 'animate-slide-in animation-delay-300' : 'opacity-0'
          }`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className={`${
            isVisible ? 'animate-slide-in animation-delay-600' : 'opacity-0'
          }`}>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Modern Interior Design by Golden Closet Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-playfair font-semibold">
                  Dhayri, Pune - 43
                </p>
                <p className="text-sm opacity-90">
                  Where dreams meet design
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & Form */}
          <div className={`space-y-8 ${
            isVisible ? 'animate-fade-in-up animation-delay-900' : 'opacity-0'
          }`}>
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-white/80 border-golden/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-black text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-foreground">Phone</h3>
                      <a 
                        href="tel:9373694606" 
                        className="text-golden hover:text-golden/80 transition-colors text-lg"
                      >
                        9373694606
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-golden/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-black text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-foreground">Email</h3>
                      <a 
                        href="mailto:Poonam.todarmal@gmail.com" 
                        className="text-golden hover:text-golden/80 transition-colors break-all"
                      >
                        Poonam.todarmal@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-golden/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <span className="text-black text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-foreground">Address</h3>
                      <p className="text-foreground/80">Dhayri, Pune – 43</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/90 border-golden/20">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4 text-center">
                  Let's Build Your Dream Space
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-golden/20 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent transition-colors bg-white/50"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-golden/20 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent transition-colors bg-white/50"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your dream space..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-golden/20 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent transition-colors bg-white/50 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-golden hover:bg-golden/90 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

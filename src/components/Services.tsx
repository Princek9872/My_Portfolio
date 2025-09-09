import { Palette, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly interfaces through comprehensive design processes.",
      features: [
        "Wireframing & Prototyping",
        "User Experience Research",
        "Interactive Design Systems",
        "Usability Testing & Optimization",
        "Mobile-First Design Approach",
        "Accessibility-Focused Solutions"
      ],
      highlight: "Transform Ideas into Engaging Experiences"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Design & Development", 
      description: "Building responsive, performant websites that bring your vision to life with modern technologies.",
      features: [
        "Responsive Web Development",
        "Frontend Development (React, JS)",
        "Backend Development (Node.js)",
        "Database Design & Integration",
        "Performance Optimization",
        "SEO & Analytics Implementation"
      ],
      highlight: "From Concept to Deployment"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions combining technical expertise with creative design thinking
            to deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-border hover-lift hover-glow transition-smooth">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-primary font-medium text-sm">{service.highlight}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">{service.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                >
                  Get Started
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">My Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Design", desc: "Creating user-centered solutions" },
              { step: "03", title: "Develop", desc: "Building with modern technologies" },
              { step: "04", title: "Deploy", desc: "Launching and optimizing performance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm">{process.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
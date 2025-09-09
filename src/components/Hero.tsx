import { ArrowDown, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const profileImage = '/lovable-uploads/7b7a8b55-2c25-4cb8-b667-53984c064a20.png';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Hello, I'm</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              <span className="text-gradient">Prince Kumar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90">
              Data Scientist & Software Engineer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Passionate about data-driven problem-solving and creating innovative web solutions. 
            Specializing in Python, MERN stack development, and turning complex data into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
            >
              Let's Connect
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <a href="tel:+917819805619">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Phone className="mr-2 h-4 w-4" />
                +91 7819805619
              </Button>
            </a>
          </div>

          {/* Quick Skills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-large hover-lift ring-4 ring-primary/20">
              <img 
                src={profileImage} 
                alt="Prince Kumar - Data Scientist & Software Engineer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
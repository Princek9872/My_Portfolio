import { GraduationCap, Code, Palette, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      description: "Experienced in full-stack web development with MERN stack and modern frameworks"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Design", 
      description: "Skilled in UI/UX design, graphic design, and creating visually appealing user interfaces"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Data Science",
      description: "Passionate about extracting insights from data and building predictive models"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies to stay current"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate technologist with a diverse skill set spanning software engineering, 
            data science, and creative design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Prince Kumar, an aspiring Data Scientist and Software Engineer with a passion 
                for creating innovative solutions that bridge the gap between technology and real-world problems.
              </p>
              <p>
                My journey in technology began with freelance web development, where I honed my skills 
                in creating responsive, user-friendly websites. This experience taught me the importance 
                of combining technical excellence with creative design thinking.
              </p>
              <p>
                Beyond development, I have extensive experience in graphic design and content creation, 
                which gives me a unique perspective on user experience and visual communication. 
                This multidisciplinary approach allows me to create holistic solutions that are both 
                functional and aesthetically pleasing.
              </p>
              <p>
                I'm driven by curiosity and a commitment to continuous learning. Whether it's exploring 
                new frameworks, diving deep into data analysis, or experimenting with the latest design trends, 
                I'm always looking for ways to expand my skill set and deliver better results.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Education & Background</h3>
            <div className="space-y-6">
              <Card className="card-gradient border-border hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Secondary Education</h4>
                      <p className="text-muted-foreground">Class 10th & 12th - Completed</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Strong foundation in mathematics and sciences
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Self-Taught Developer</h4>
                      <p className="text-muted-foreground">Continuous Learning Journey</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mastered programming through online resources and hands-on projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-gradient border-border hover-lift hover-glow">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <div className="text-primary">{highlight.icon}</div>
                </div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
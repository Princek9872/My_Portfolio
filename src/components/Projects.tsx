import { ExternalLink, Github, Code, Database, Globe, CheckSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Local Business Website",
      description: "Designed and deployed a comprehensive website for a local store featuring product display, contact forms, and responsive design optimized for customer engagement.",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Product Showcase", "Contact Forms", "Mobile Optimized", "SEO Friendly"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Weather Dashboard App",
      description: "Built a responsive weather application using JavaScript and OpenWeather API, providing real-time weather updates with an intuitive user interface.",
      icon: <Code className="h-6 w-6" />,
      technologies: ["JavaScript", "OpenWeather API", "CSS3", "Local Storage"],
      features: ["Real-time Weather", "7-day Forecast", "Location Search", "Responsive UI"],
      category: "Frontend Development"
    },
    {
      id: 3,
      title: "Social Media Mini-Clone",
      description: "Full-stack MERN application with JWT authentication, post creation, likes, comments, and real-time updates via WebSockets and Firebase integration.",
      icon: <Database className="h-6 w-6" />,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Firebase"],
      features: ["User Authentication", "Real-time Updates", "Post Interactions", "WebSocket Integration"],
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Interactive To-Do List App",
      description: "A comprehensive task management application built with vanilla JavaScript, featuring local storage persistence and an intuitive task organization system.",
      icon: <CheckSquare className="h-6 w-6" />,
      technologies: ["JavaScript", "Local Storage", "CSS3", "DOM Manipulation"],
      features: ["Task Management", "Local Persistence", "Priority Levels", "Progress Tracking"],
      category: "JavaScript"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="card-gradient border-border hover-lift hover-glow transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <div className="text-primary">{project.icon}</div>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{project.description}</p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more projects?</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
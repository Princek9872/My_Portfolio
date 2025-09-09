import { Code, Database, Palette, Globe, Server, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Responsive Design", level: 92 }
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 82 },
        { name: "RESTful APIs", level: 85 },
        { name: "Authentication (JWT)", level: 78 }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Data",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Python", level: 88 },
        { name: "Data Analysis", level: 82 }
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design & Creative",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Graphic Design", level: 80 },
        { name: "Figma/Adobe Tools", level: 78 },
        { name: "Prototyping", level: 82 }
      ]
    }
  ];

  const technologies = [
    { category: "Languages", items: ["JavaScript", "Python", "HTML5", "CSS3", "SQL"] },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap", "jQuery"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "VS Code", "Figma", "Adobe Creative Suite", "Postman"] }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning both technical development and creative design,
            enabling me to deliver complete digital solutions.
          </p>
        </div>

        {/* Skill Categories with Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-gradient border-border hover-lift hover-glow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-center">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="px-3 py-2 bg-accent/30 rounded-md text-sm text-center transition-smooth hover:bg-primary/10 hover:text-primary"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Competencies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Full-Stack Development", "Data Analysis", "Responsive Design", "API Integration",
              "Database Design", "Version Control", "Agile Methodology", "Problem Solving",
              "User Experience", "Performance Optimization", "Cross-Browser Compatibility", "SEO"
            ].map((competency, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover-lift transition-smooth hover:border-primary hover:text-primary"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
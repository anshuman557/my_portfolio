import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Anywhere-Notes",
      period: "Jan 2024 - Jan 2024",
      description: "MERN Stack development",
      details: [
        "Designed and developed a responsive user interface using React.js, incorporating state management with hooks and context API.",
        "Implemented RESTful APIs using Node.js and Express.js to handle CRUD operations.",
        "Utilized MongoDB Atlas as the database solution, employing Mongoose for schema definition and data modeling.",
        "Integrated user authentication and authorization features.",
        "Technologies used: React.js, Node.js, Express.js, MongoDB"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      color: "from-primary to-primary-glow",
      category: "Full Stack"
    },
    {
      title: "Dashboard",
      period: "Apr 2024 - Apr 2024", 
      description: "Data visualization dashboard",
      details: [
        "Engineered a sophisticated, responsive dashboard application using React, React Router, and Material-UI, delivering a seamless user experience and dynamic data visualization.",
        "Designed and implemented a visually appealing and responsive UI using Material-UI, ensuring consistency and usability across all devices.",
        "Developed advanced filtering functionality with features such as sorting and pagination, facilitating efficient data handling and presentation.",
        "Implemented chart components for insightful data visualization on the Analytics page, using lightweight libraries to maintain performance.",
        "Technologies Used: React, React Router, Material-UI, React Google Charts, RESTful APIs, Vercel for deployment."
      ],
      technologies: ["React", "Material-UI", "React Router", "Google Charts", "RESTful APIs"],
      color: "from-secondary to-accent",
      category: "Frontend"
    },
    {
      title: "Savy-Weather",
      period: "Mar 2024 - Mar 2024",
      description: "Weather Dashboard",
      details: [
        "Developed a responsive weather dashboard using React and Material-UI.",
        "Implemented a search functionality to allow users to enter city and country names.",
        "Integrated OpenWeatherMap API to fetch and display weather information.",
        "Displayed weather details such as temperature, humidity, wind speed, and more on a separate details page.",
        "Technologies Used: React, Material-UI, OpenWeatherMap API, Netlify/Vercel for deployment."
      ],
      technologies: ["React", "Material-UI", "OpenWeatherMap API", "Responsive Design"],
      color: "from-accent to-secondary",
      category: "Frontend"
    },
    {
      title: "NewsNook",
      period: "Jun 2023 - Aug 2023",
      description: "Where Curiosity gets Comfy",
      details: [
        "Developed a news website and potential application that fetches news using an API key.",
        "Implemented the front end using React and integrated with the News API to fetch and display news articles.",
        "Designed and optimized the user interface for a seamless reading experience.",
        "Implemented pagination functionality to allow users to navigate through articles.",
        "Technologies Used: React.js, News API, UI Design, API Integration"
      ],
      technologies: ["React.js", "News API", "UI Design", "API Integration"],
      color: "from-primary-glow to-primary",
      category: "Frontend"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 group overflow-hidden">
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${project.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="h-3 w-3" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {project.details.slice(0, 3).map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group/btn"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
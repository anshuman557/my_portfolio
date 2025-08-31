import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Loankrone (Founding Member)",
      location: "Remote",
      period: "Dec 2024 - Present",
      type: "Full-time",
      description: [
        "Managing multiple Projects.",
        "Handling Client Requirements.",
        "Collaborated with team to design seamless flow of application."
      ],
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      color: "from-primary to-primary-glow"
    },
    {
      title: "Software Development Intern",
      company: "OneBharat",
      location: "Remote",
      period: "May 2024 - Nov 2024",
      type: "Internship",
      description: [
        "Integrated APIs into the company dashboard using React and TypeScript.",
        "Developed reusable components and enhanced dashboard functionality.",
        "Collaborated with the team to design and implement new features."
      ],
      technologies: ["React", "TypeScript", "APIs", "Dashboard"],
      color: "from-secondary to-accent"
    },
    {
      title: "Software Engineering Virtual Experience",
      company: "J.P. Morgan",
      location: "Virtual",
      period: "Jan 2024 - Jan 2024",
      type: "Virtual Experience",
      description: [
        "Set up a local dev environment by downloading the necessary files, tools, and dependencies.",
        "Fixed broken files in the repository to make web application output correctly.",
        "Used JPMorgan Chase's open-source library called Perspective to generate a live graph."
      ],
      technologies: ["JavaScript", "Web Development", "Data Visualization"],
      color: "from-accent to-secondary"
    },
    {
      title: "Trainee",
      company: "Wipro",
      location: "Remote",
      period: "Jan 2023 - Apr 2023",
      type: "Training",
      description: [
        "Training Program for AI and ML Application Developers.",
        "Learned fundamentals of Artificial Intelligence, Cloud Computing, and IOT."
      ],
      technologies: ["AI", "ML", "Cloud Computing", "IOT"],
      color: "from-primary-glow to-primary"
    },
    {
      title: "Summer Trainee",
      company: "Internshala",
      location: "Remote",
      period: "Jun 2022 - Jul 2022",
      type: "Training",
      description: [
        "Completed an Introduction to Data Science.",
        "Python for Data Science, Understanding the Statistics for Data Science.",
        "Predictive Modeling and Basics of Machine Learning"
      ],
      technologies: ["Python", "Data Science", "Machine Learning", "Statistics"],
      color: "from-secondary to-primary"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-8 h-px bg-primary"></div>
            <span>CAREER JOURNEY</span>
            <div className="w-8 h-px bg-primary"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey through various roles and the impact I've made in the tech industry
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 group overflow-hidden">
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${exp.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-foreground/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-primary/20"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
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

export default ExperienceSection;
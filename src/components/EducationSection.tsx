import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.E - Computer Science & Engineering",
      institution: "Chandigarh University",
      location: "Chandigarh, India",
      period: "Aug 2020 - Jun 2024",
      type: "Bachelor's Degree",
      description: "Comprehensive study of computer science fundamentals, software engineering, and modern development practices.",
      highlights: [
        "Strong foundation in Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems"
      ],
      color: "from-primary to-primary-glow"
    },
    {
      degree: "12th CBSE",
      institution: "Sant Karam Singh Academy",
      location: "Rupnagar, India", 
      period: "Jun 2019 - May 2020",
      type: "Higher Secondary",
      description: "Completed higher secondary education with focus on Science and Mathematics.",
      highlights: [
        "Science Stream",
        "Mathematics",
        "Physics",
        "Chemistry"
      ],
      color: "from-secondary to-accent"
    },
    {
      degree: "10th CBSE",
      institution: "Sant Karam Singh Academy",
      location: "Rupnagar, India",
      period: "Jun 2017 - May 2018", 
      type: "Secondary",
      description: "Foundation education with excellent academic performance.",
      highlights: [
        "Strong Academic Performance",
        "Mathematics",
        "Science",
        "English"
      ],
      color: "from-accent to-secondary"
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Solutions Architect",
      issuer: "Coursera",
      type: "Cloud Computing"
    },
    {
      title: "Programming_JavaScript",
      issuer: "Meta",
      type: "Programming"
    },
    {
      title: "Certified As Elite In Software Testing",
      issuer: "NPTEL", 
      type: "Testing"
    },
    {
      title: "J.P. Morgan Software Engineering",
      issuer: "J.P.Morgan",
      type: "Virtual Experience"
    },
    {
      title: "React Basic",
      issuer: "META",
      type: "Frontend"
    },
    {
      title: "Data Science using Python",
      issuer: "Internshala",
      type: "Data Science"
    },
    {
      title: "English For Career Development",
      issuer: "Coursera", 
      type: "Communication"
    },
    {
      title: "Certified as Elite in Data Mining",
      issuer: "NPTEL",
      type: "Data Mining"
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
    <section className="py-20 px-4 md:px-8 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                    <motion.div
                      className={`w-full h-1 bg-gradient-to-r ${edu.color}`}
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
                              <GraduationCap className="h-5 w-5 text-primary" />
                            </motion.div>
                            <div>
                              <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                {edu.degree}
                              </h4>
                              <p className="text-muted-foreground font-medium">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {edu.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-4">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                            >
                              {highlight}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <Card className="glass border-primary/20 p-6">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="p-1.5 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Award className="h-3 w-3 text-primary" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          {cert.type}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
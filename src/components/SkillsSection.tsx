import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ReactIcon, 
  JavaScriptIcon, 
  TypeScriptIcon, 
  NodeIcon, 
  MongoIcon, 
  MySQLIcon,
  GitHubIcon,
  SpringBootIcon,
  MaterialUIIcon,
  FigmaIcon,
  JavaIcon,
  PythonIcon,
  DockerIcon
} from "./TechIcons";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90, icon: JavaScriptIcon, color: "#F7DF1E" },
        { name: "TypeScript", level: 85, icon: TypeScriptIcon, color: "#3178C6" },
        { name: "React.js", level: 95, icon: ReactIcon, color: "#61DAFB" },
        { name: "Material UI", level: 85, icon: MaterialUIIcon, color: "#0081CB" }
      ],
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 80, icon: NodeIcon, color: "#339933" },
        { name: "Java", level: 80, icon: JavaIcon, color: "#ED8B00" },
        { name: "Spring Boot", level: 75, icon: SpringBootIcon, color: "#6DB33F" },
        { name: "Python", level: 70, icon: PythonIcon, color: "#3776ab" }
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 80, icon: MongoIcon, color: "#47A248" },
        { name: "MySQL", level: 85, icon: MySQLIcon, color: "#4479A1" },
        { name: "GitHub", level: 90, icon: GitHubIcon, color: "#000000" },
        { name: "Docker", level: 65, icon: DockerIcon, color: "#2496ED" }
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Design & Others",
      skills: [
        { name: "Figma", level: 75, icon: FigmaIcon, color: "#F24E1E" },
        { name: "Data Structures & Algorithms", level: 90, icon: null, color: "#FF6B6B" },
        { name: "Object Oriented Programming", level: 85, icon: null, color: "#4ECDC4" },
        { name: "Operating Systems", level: 75, icon: null, color: "#45B7D1" }
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
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
            <span>TECHNICAL EXPERTISE</span>
            <div className="w-8 h-px bg-primary"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the technologies I use to build amazing digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card className="p-8 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 group">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {categoryIndex + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {skill.icon && (
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                              >
                                <skill.icon className="w-6 h-6" color={skill.color} />
                              </motion.div>
                            )}
                            <span className="font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <div className="relative w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ 
                              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: [0.25, 0.46, 0.45, 0.94] as any
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/30"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: categoryIndex * 0.5 + skillIndex * 0.2
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack showcase */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { Icon: ReactIcon, name: "React" },
              { Icon: JavaScriptIcon, name: "JavaScript" },
              { Icon: TypeScriptIcon, name: "TypeScript" },
              { Icon: NodeIcon, name: "Node.js" },
              { Icon: JavaIcon, name: "Java" },
              { Icon: PythonIcon, name: "Python" },
              { Icon: MongoIcon, name: "MongoDB" },
              { Icon: MySQLIcon, name: "MySQL" },
              { Icon: DockerIcon, name: "Docker" },
              { Icon: GitHubIcon, name: "GitHub" },
              { Icon: FigmaIcon, name: "Figma" }
            ].map(({ Icon, name }, index) => (
              <motion.div
                key={name}
                className="group flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-medium transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
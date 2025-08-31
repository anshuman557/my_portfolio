import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, MapPin, Phone } from "lucide-react";
import { ReactIcon,JavaScriptIcon, TypeScriptIcon, NodeIcon } from "./TechIcons";
// import JavaScriptIcon from "@/assets/TechIcons/javaScript.svg"
import { TypingAnimation } from "./TypingAnimation";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: ReactIcon, delay: 0, x: "10%", y: "20%" },
    { Icon: JavaScriptIcon, delay: 0.5, x: "80%", y: "30%" },
    { Icon: TypeScriptIcon, delay: 1, x: "15%", y: "70%" },
    { Icon: NodeIcon, delay: 1.5, x: "85%", y: "80%" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block opacity-10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            y: [0, -20, 0]
          }}
          transition={{
            duration: 0.8,
            delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Icon className="w-16 h-16" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div 
          className="space-y-8 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <div className="w-8 h-px bg-primary"></div>
              <span className="text-sm font-medium">HELLO, I'M</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Anshuman</span>
              <span className="gradient-text">Singh</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 h-12 flex items-center">
              <TypingAnimation 
                text="Full-Stack Software Developer"
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={3000}
              />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Passionate about creating innovative web solutions with modern technologies. 
              I specialize in React, Node.js, and building scalable applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Rupnagar, Punjab, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 7905083975</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-medium transition-all duration-300 group px-8"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-300 group px-8"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:anshumansingh1247@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              >
                <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Animated background shapes */}
            <motion.div
              className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full blur-sm"
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Profile image container */}
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-large bg-gradient-to-br from-muted/50 to-muted/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Professional placeholder with initials */}
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-white/90">AS</span>
              </div>
              
              {/* Overlay with tech stack */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-center pb-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-2">
                  {[ReactIcon, JavaScriptIcon, TypeScriptIcon, NodeIcon].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="w-8 h-8 bg-white/90 rounded-full p-1.5"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Icon className="w-full h-full" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs text-muted-foreground font-medium">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
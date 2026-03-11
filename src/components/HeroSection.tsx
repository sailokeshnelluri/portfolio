import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Work
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Nelluri Sai Lokesh</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-3 font-medium">
              Computer Science Engineering Student | Java Developer | Cloud & AI Enthusiast
            </p>

            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Building intelligent software solutions with Java, Cloud, and AI technologies.
              Passionate about clean code, Data Structures & Algorithms, and exploring
              the frontiers of Artificial Intelligence and Machine Learning.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground gradient-bg rounded-full hover:opacity-90 transition-all hover:shadow-lg"
              >
                <FolderOpen size={16} />
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border rounded-full hover:bg-secondary transition-all"
              >
                <Mail size={16} />
                Contact Me
              </a>

              {/* Resume Button */}
             <a
                href="/resume/ResumeLoki.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border rounded-full hover:bg-secondary transition-all"
            >
                <Download size={16} />
                 Resume
            </a>

            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10">
                <img
                  src={profilePhoto}
                  alt="Nelluri Sai Lokesh"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 rounded-full gradient-bg opacity-20 blur-2xl scale-110" />

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

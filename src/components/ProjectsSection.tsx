import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Event Registration System",
    description: "A web application that allows users to register and manage event participants using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "To-Do List App",
    description: "A task management application that enables users to add, edit, and delete daily tasks efficiently.",
    tags: ["JavaScript", "HTML", "CSS"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "YOLOv8–YOLACT Hybrid Framework",
    description: "An AI-powered project combining YOLOv8 and YOLACT frameworks for detecting and segmenting garbage in real time to support smart waste management.",
    tags: ["Python", "AI/ML", "Computer Vision"],
    color: "from-emerald-500 to-teal-400",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Recent work and side projects</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card-hover rounded-xl overflow-hidden group"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
                <h3 className="font-display font-bold text-lg text-center" style={{ color: 'white' }}>{project.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/SaiLokesh99" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                    <Github size={14} /> View Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

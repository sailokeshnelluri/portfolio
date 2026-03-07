import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "DBMS", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full gradient-bg"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * ci }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="font-display font-semibold text-lg mb-5">{category.title}</h3>
              {category.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={0.2 + si * 0.15} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vardhaman College of Engineering, JNTUH",
    score: "CGPA: 7.34 (Up to Semester V)",
    period: "Aug 2023 – Present",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, APBIE",
    score: "Percentage: 84.5%",
    period: "Aug 2021 – May 2023",
  },
  {
    degree: "Tenth Class",
    institution: "Sri Chaitanya International School, CBSE",
    score: "Percentage: 68%",
    period: "Aug 2020 – May 2021",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle">Academic journey so far</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <div className="absolute left-3 top-1 w-7 h-7 rounded-full gradient-bg flex items-center justify-center">
                <GraduationCap size={14} className="text-primary-foreground" />
              </div>
              <div className="glass-card-hover p-5 rounded-xl">
                <span className="text-xs font-medium text-primary">{item.period}</span>
                <h3 className="font-semibold font-display mt-1">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                <p className="text-sm font-medium text-primary mt-2">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

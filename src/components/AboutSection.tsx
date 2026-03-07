import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card">
              <img src={profilePhoto} alt="Sai Lokesh" className="w-full h-full object-cover" />
              <div className="absolute inset-0 gradient-bg opacity-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated Computer Science Engineering student currently pursuing my B.Tech degree at 
              Vardhaman College of Engineering. I am passionate about software development and building 
              impactful technology solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My primary focus is on Java development and mastering Data Structures & Algorithms. I'm 
              actively expanding my knowledge in Artificial Intelligence and Machine Learning while building 
              practical applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, efficient code and continuously improving my problem-solving 
              abilities through competitive programming and real-world projects.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Focus", value: "Java & DSA" },
                { label: "Exploring", value: "AI & ML" },
                { label: "Location", value: "Hyderabad" },
                { label: "Degree", value: "B.Tech CSE" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

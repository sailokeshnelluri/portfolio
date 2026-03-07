import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code2, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive and interactive websites with clean UI using modern technologies.",
  },
  {
    icon: Code2,
    title: "Java Application Development",
    description: "Developing scalable Java-based applications with strong focus on object-oriented design and efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing Solutions",
    description: "Building and deploying cloud-based applications with understanding of cloud infrastructure and services.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">What I can do for you</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card-hover p-6 rounded-xl text-center group"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

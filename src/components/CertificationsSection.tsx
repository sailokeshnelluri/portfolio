import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X } from "lucide-react";

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [open, setOpen] = useState(false);

  return (
    <section id="certifications">
      <div className="section-container" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications earned
          </p>
        </motion.div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setOpen(true)}
          className="max-w-md mx-auto glass-card-hover p-8 rounded-xl text-center cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
            <Award size={28} className="text-primary-foreground" />
          </div>

          <h3 className="font-display font-bold text-xl mb-2">
            Agentforce Specialist
          </h3>

          <p className="text-primary font-medium text-sm mb-1">
            Salesforce Certification
          </p>

          <p className="text-muted-foreground text-sm">
            Professional certification validating expertise in Salesforce Agentforce platform.
          </p>
        </motion.div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="relative bg-white rounded-xl p-4 max-w-4xl w-full h-[80vh]">

              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10"
              >
                <X size={24} />
              </button>

              <iframe
                src="/certificates/Cert7239605_AgentforceSpecialist_20251220.pdf"
                className="w-full h-full rounded-lg"
              />

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default CertificationsSection;

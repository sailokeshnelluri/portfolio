import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nellurilokesh23@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's collaborate on innovative technology solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-sm">Email</p>
                <a href="mailto:nellurilokesh23@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  nellurilokesh23@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-sm">Location</p>
                <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-medium text-sm mb-3">Follow Me</p>
              <div className="flex gap-3">
                <a href="https://github.com/SaiLokesh99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/sai-lokesh-6ba69928b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-xl space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <textarea
              placeholder="Your message..."
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground gradient-bg rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const alumni = [
  {
    name: "Arun Kumar Mishra",
    role: "CEO",
    company: "Tech Corporation",
    batch: "1995",
  },
  {
    name: "Priya Sharma",
    role: "Senior VP",
    company: "Global Industries",
    batch: "2001",
  },
  {
    name: "Rajesh Patel",
    role: "Founder",
    company: "StartupX",
    batch: "2008",
  },
  {
    name: "Sunita Verma",
    role: "Director",
    company: "Consulting Firm",
    batch: "2005",
  },
];

export const AlumniSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Our Pride</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Notable Alumni</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our alumni are making remarkable contributions across industries worldwide, carrying the legacy of NIT Raipur forward.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-elegant text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                {person.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="font-bold text-foreground mb-1">{person.name}</h3>
              <p className="text-accent text-sm font-medium">{person.role}</p>
              <p className="text-muted-foreground text-sm">{person.company}</p>
              <p className="text-xs text-muted-foreground mt-2">Batch of {person.batch}</p>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  Connect
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
// This import is already valid JavaScript
import tpcHeadImage from "@/assets/tpc-head.jpg"; 

const faculty = [
  {
    image: tpcHeadImage,
    name: "Dr. Vivek Kumar Gaba",
    role: "Faculty In-Charge, T&P Cell",
    department: "Mechanical Engineering",
    email: "tpo@nitrr.ac.in",
    phone: "+91 9406173242",
  },
];

export const FacultySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Our Faculty</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Training & Placement Team</h2>
        </motion.div>

        <div className="flex justify-center">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant max-w-sm w-full group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.department}</p>
                
                <div className="flex items-center justify-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mt-2"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
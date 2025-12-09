import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const recruiters = [
  "Tata", "Amazon", "Samsung", "Oracle", "Deloitte", "Siemens",
  "Wipro", "Infosys", "L&T", "Vedanta", "Reliance", "Adobe",
  "Cognizant", "Barclays", "JP Morgan", "Texas Instruments",
  "GE", "Coal India", "ONGC", "NTPC"
];

export const RecruitersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Our Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Prime Recruiters</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Leading companies from various industries trust NIT Raipur for their talent acquisition needs.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...recruiters, ...recruiters].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 px-8 py-4 bg-card rounded-xl shadow-sm border border-border hover:shadow-elegant transition-shadow duration-300"
            >
              <span className="text-foreground font-semibold whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground"
        >
          And 100+ more companies recruiting from our campus every year
        </motion.p>
      </div>
    </section>
  );
};
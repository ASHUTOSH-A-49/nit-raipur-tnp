import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// This import is already valid JavaScript, assuming the image file itself is .jpg
import campusImage from "@/assets/nit_raipur.jpg"; 

export const AboutSection = () => {
  const ref = useRef(null);
  // This syntax is standard JavaScript and framer-motion library usage
  const isInView = useInView(ref, { once: true, margin: "-100px" }); 

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={campusImage}
                alt="NIT Raipur Campus"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-900/90 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl cursor-default"
            >
              <div className="text-center text-white">
                <p className="text-3xl font-bold">1956</p>
                <p className="text-xs font-medium">Established</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent text-lg font-extrabold uppercase tracking-wider mb-2">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              National Institute of Technology Raipur
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                National Institute of Technology Raipur (erstwhile Government Engineering College Raipur), situated in the capital of the state of Chhattisgarh, is serving the cause of technical education for more than six decades.
              </p>
              <p>
                This institute has the unique privilege of being blessed by the first President of India, Dr. Rajendra Prasad, in the foundation laying ceremony on 14th September 1956, and again by the first Prime Minister of India, Pt. Jawaharlal Nehru, inaugurating the institute building on 14th March 1963.
              </p>
              <p>
                To harness the ample mineral resources in the region and to fuel the growth of the nation, the foundation stone was laid as Government College of Mining and Metallurgy, which has since evolved into an Institute of National Importance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
// Imports are valid JavaScript
import directorImage from "@/assets/director.jpg";
import tpcHeadImage from "@/assets/tpc-head.jpg";

const messages = [
  {
    image: directorImage,
    name: "Dr. Samir Bajpai",
    role: "Head, Career Development Center",
    message:
      "Industry and Institute collaborations and linkages are a must for sustainable growth of technology, economy, and human civilisation. NIT Raipur is sincerely working for symbiotic relationship with industries since its inception in 1956. Campus placement process is an important aspect of this relationship and further strengthening this relationship by undertaking a visit to our Institute for the campus placement of our students.",
  },
  // {
  //   image: tpcHeadImage,
  //   name: "Dr. Vivek Kumar Gaba",
  //   role: "Faculty In-Charge, Training & Placement Cell",
  //   message:
  //     "The aim of the Placement Cell is to provide good career opportunities to all the students of the institute. The department keeps close contact with potential employers and organises the campus placements for the students. About 100 leading companies from various premier industries participate in the placement process every year. The consistent positive feedback from industry shows that our students are successfully meeting their expectations.",
  // },
];

export const MessageSection = () => {
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
          <p className="text-accent text-lg font-bold uppercase tracking-wider mb-2">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Messages from Leadership</h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-[800px] w-full">
          {messages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-elegant relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <p className="text-sm text-accent">{item.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed italic">"{item.message}"</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
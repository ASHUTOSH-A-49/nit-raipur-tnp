import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

import directorImage from "@/assets/director.jpg";
import tpcHeadImage from "@/assets/tpc-head.jpg";
import cdchead from "@/assets/cdchead.jpg";

const messages = [
  {
    image: directorImage,
    name: "Dr. N V Ramana Rao",
    role: "Director, NIT Raipur",
    message:
      "Industry and Institute collaborations and linkages are a must for sustainable growth of technology, economy, and human civilisation. NIT Raipur is sincerely working for symbiotic relationship with industries since its inception in 1956. Campus placement process is an important aspect of this relationship and further strengthening this relationship by undertaking a visit to our Institute for the campus placement of our students. NIT Raipur, established as one of the earliest engineering colleges of independent India, has continuously strived to achieve excellence in technology education and research; in the process, it has carved a niche for itself on the national level. On account of its academic atmosphere, well qualified and committed faculty members, regular extra-curricular activities and regular and examination procedure, the institute ensures the holistic development of students. The distinguished alumni of the institute have contributed significantly to various fields such as industry, academia, and administration and bear a testimony to the caliber of the institution. I am confident that a placement visit to our campus will be mutually beneficial and students of the institute will prove to be an asset to your organization. I heartily welcome you to NIT Raipur and hope that this interaction leads to a lasting partnership between our institute and your organisation.",
  },
  {
    image: cdchead,
    name: "Dr. Samir Bajpai",
    role: "Head, Career Development Center",
    message: "",
  },
  {
    image: tpcHeadImage,
    name: "Dr. Vivek Kumar Gaba",
    role: "Faculty In-Charge, Placement Cell",
    message: "",
  },
];

export const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ANIMATION = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    whileHover: { scale: 1.01, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.05, ease: "easeOut" },
  };

  return (
    <section ref={ref} className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent text-lg font-bold uppercase tracking-wider mb-2">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Messages from Leadership
          </h2>
        </motion.div>

        {/* 🔹 DIRECTOR FULL WIDTH CARD */}
        <motion.div
          {...ANIMATION}
          className="
            mx-auto relative bg-white w-full max-w-[1100px]
            p-8 rounded-2xl border border-border
            shadow-[0_18px_35px_-10px_rgba(0,0,0,0.35)]
            hover:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.45)]
            transition-all
          "
        >
          <Quote className="absolute right-6 top-6 w-12 h-12 text-primary/10" />

          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <img
              src={messages[0].image}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl text-foreground">{messages[0].name}</h3>
              <p className="text-sm text-accent">{messages[0].role}</p>
            </div>
          </div>

          <p className="text-muted-foreground italic leading-relaxed text-justify">
            "{messages[0].message}"
          </p>
        </motion.div>

        {/* 🔹 TWO SMALL CARDS (side-by-side desktop / stacked mobile) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {messages.slice(1).map((item, i) => (
            <motion.div
              key={i}
              {...ANIMATION}
              className="
                relative bg-white p-6 rounded-2xl border border-border
                shadow-[0_18px_35px_-10px_rgba(0,0,0,0.25)]
                hover:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.45)]
                transition-all
              "
            >
              <Quote className="absolute right-4 top-4 w-8 h-8 text-primary/10" />
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <p className="text-sm text-accent">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

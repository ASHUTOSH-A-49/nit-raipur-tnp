import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* ---- IMPORT LOGOS ---- */
import tata from "@/assets/logos/tata.jpg";
import amazon from "@/assets/logos/amazon.jpg";
import samsung from "@/assets/logos/samsung.jpg";
import oracle from "@/assets/logos/oracle.jpg";
import deloitte from "@/assets/logos/deloitte.jpg";
import siemens from "@/assets/logos/siemens.jpg";
import wipro from "@/assets/logos/wipro.jpg";
import infosys from "@/assets/logos/infosys.jpg";
import lnt from "@/assets/logos/lnt.jpg";
import vedanta from "@/assets/logos/vedanta.jpg";
import reliance from "@/assets/logos/reliance.jpg";
import adobe from "@/assets/logos/adobe.jpg";
import cognizant from "@/assets/logos/cognizant.jpg";
import barclays from "@/assets/logos/barclays.jpg";
import jpmorgan from "@/assets/logos/jpmorgan.jpg";
import texas from "@/assets/logos/texas.jpg";
import coalIndia from "@/assets/logos/coalindia.jpg";
import ongc from "@/assets/logos/ongc.jpg";
import ntpc from "@/assets/logos/ntpc.jpg";

/* ---- RECRUITERS DATA ---- */
const recruiters = [
  { name: "Tata", logo: tata },
  { name: "Amazon", logo: amazon },
  { name: "Samsung", logo: samsung },
  { name: "Oracle", logo: oracle },
  { name: "Deloitte", logo: deloitte },
  { name: "Siemens", logo: siemens },
  { name: "Wipro", logo: wipro },
  { name: "Infosys", logo: infosys },
  { name: "L&T", logo: lnt },
  { name: "Vedanta", logo: vedanta },
  { name: "Reliance", logo: reliance },
  { name: "Adobe", logo: adobe },
  { name: "Cognizant", logo: cognizant },
  { name: "Barclays", logo: barclays },
  { name: "JP Morgan", logo: jpmorgan },
  { name: "Texas Instruments", logo: texas },
  { name: "Coal India", logo: coalIndia },
  { name: "ONGC", logo: ongc },
  { name: "NTPC", logo: ntpc },
];

export const RecruitersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent text-lg font-bold uppercase tracking-wider mb-2">
            Our Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Prime Recruiters
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Leading companies from diverse industries trust NIT Raipur for
            their talent acquisition needs.
          </p>
        </motion.div>
      </div>

      {/* -------- MARQUEE -------- */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {[...recruiters, ...recruiters].map((company, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                mx-6
                w-[200px]
                h-[160px]
                flex items-center justify-center
                bg-card
                rounded-2xl
                border border-border

                /* BASE SHADOW (STRONGER) */
                shadow-[0_18px_35px_-10px_rgba(0,0,0,0.35)]

                /* HOVER EFFECT */
                hover:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.45)]
                hover:scale-[1.04]

                transition-all duration-200 ease-out
              "
            >
              {/* LOGO NORMALIZER */}
              <div className="w-[150px] h-[135px] flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 lg:px-8 mt-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground"
        >
          And 100+ more companies recruit from our campus every year
        </motion.p>
      </div>
    </section>
  );
};

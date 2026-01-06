import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* -------------------------------------------
   🔥 ALL LOGO IMPORTS (OLD + NEW)
------------------------------------------- */

// OLD IMPORTS
import deloitte from "@/assets/logos/deloitte.jpg";
import siemens from "@/assets/logos/siemens.jpg";
import infosys from "@/assets/logos/infosys.jpg";
import lnt from "@/assets/logos/lnt.jpg";
import vedanta from "@/assets/logos/vedanta.jpg";
import adobe from "@/assets/logos/adobe.jpg";
import cognizant from "@/assets/logos/cognizant.jpg";
import barclays from "@/assets/logos/barclays.jpg";
import jpmorgan from "@/assets/logos/jpmorgan.jpg";
import texas from "@/assets/logos/texas.jpg";
import coalIndia from "@/assets/logos/coalindia.jpg";
import ongc from "@/assets/logos/ongc.jpg";
import ntpc from "@/assets/logos/ntpc.jpg";

// NEW IMPORTS
import dassault from "@/assets/logos/dassaultSystemes.jpg";
import samsung from "@/assets/logos/samsung.jpg";
import deshaw from "@/assets/logos/deShaw.jpg";
import fanatics from "@/assets/logos/fanatics.jpg";
import jsl from "@/assets/logos/jsl.jpg";
import optum from "@/assets/logos/optum.jpg";
import phonepe from "@/assets/logos/phonepe.jpg";
import ril from "@/assets/logos/reliance.jpg";
import tata from "@/assets/logos/tata.jpg";
import visa from "@/assets/logos/visa.jpg";
import zs from "@/assets/logos/zs-associates.jpg";
import accenture from "@/assets/logos/accenture.jpg";
import sixt from "@/assets/logos/sixt.jpg";
import jindal from "@/assets/logos/jindal.jpg";
import icici from "@/assets/logos/icici.jpg";
import tcs from "@/assets/logos/tcs.jpg";
import wipro from "@/assets/logos/wipro.jpg";
import cisco from "@/assets/logos/cisco.jpg";
import mathworks from "@/assets/logos/mathworks.jpg";
import blackrock from "@/assets/logos/blackrock.jpg";
import oracle from "@/assets/logos/oracle.jpg";
import cloudera from "@/assets/logos/cloudera.jpg";
import swiggy from "@/assets/logos/swiggy.jpg";
import ge from "@/assets/logos/ge-healthcare.jpg";
import amazon from "@/assets/logos/amazon.jpg";

/* -------------------------------------------
   ✨ COMPLETE RECRUITERS DATA
------------------------------------------- */

const recruiters = [
  { name: "Coal India", logo: coalIndia },
  { name: "ONGC", logo: ongc },
  { name: "NTPC", logo: ntpc },
  { name: "L&T", logo: lnt },
  { name: "Vedanta", logo: vedanta },
  { name: "Siemens", logo: siemens },
  { name: "Tata", logo: tata },
  { name: "Reliance Industries", logo: ril },
  { name: "Jindal", logo: jindal },
  { name: "JSL", logo: jsl },

  { name: "Accenture", logo: accenture },
  { name: "Deloitte", logo: deloitte },
  { name: "Infosys", logo: infosys },
  { name: "Wipro", logo: wipro },
  { name: "TCS", logo: tcs },
  { name: "Cognizant", logo: cognizant },
  { name: "ZS Associates", logo: zs },

  { name: "Amazon", logo: amazon },
  { name: "Samsung", logo: samsung },
  { name: "Oracle", logo: oracle },
  { name: "Cisco", logo: cisco },
  { name: "Adobe", logo: adobe },
  { name: "MathWorks", logo: mathworks },
  { name: "Cloudera", logo: cloudera },
  { name: "Dassault Systemes", logo: dassault },
  { name: "Texas Instruments", logo: texas },

  { name: "BlackRock", logo: blackrock },
  { name: "JP Morgan", logo: jpmorgan },
  { name: "Barclays", logo: barclays },
  { name: "ICICI", logo: icici },
  { name: "Visa", logo: visa },
  { name: "DE Shaw", logo: deshaw },

  { name: "GE Healthcare", logo: ge },
  { name: "Optum", logo: optum },
  { name: "PhonePe", logo: phonepe },
  { name: "Swiggy", logo: swiggy },
  { name: "Fanatics", logo: fanatics },
  { name: "Sixt", logo: sixt },
];

/* -------------------------------------------
   🔠 ALPHABETICAL SORT (A → Z)
------------------------------------------- */

const sortedRecruiters = [...recruiters].sort((a, b) =>
  a.name.localeCompare(b.name)
);

/* -------------------------------------------
   ⚙️ COMPONENT
------------------------------------------- */

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

      {/* ---- MARQUEE ---- */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {[...sortedRecruiters, ...sortedRecruiters].map((company, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 mx-6 w-[200px] h-[160px] flex items-center justify-center
                bg-card rounded-2xl border border-border shadow-[0_18px_35px_-10px_rgba(0,0,0,0.35)]
                hover:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.45)]
                hover:scale-[1.04] transition-all duration-200 ease-out
              "
            >
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

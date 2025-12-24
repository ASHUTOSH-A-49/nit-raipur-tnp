import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const faculty = [
  {
    name: "Dr. Samir Bajpai",
    role: "Head, Career Development Center",//change data of department, email, phone when you get it
    email: "tpo@nitrr.ac.in",
    phone: "+91 9406173242",
  },
  {
    name: "Dr. Vivek Kumar Gaba",
    role: "Faculty-in-charge,Placement Cell",
    email: "xyz@nitrr.ac.in",
    phone: "+91 9000000000",
  },
  
];

export const FacultySection = () => {
  /* ---------- Faculty Card (INLINE) ---------- */
  const FacultyCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div
        className="h-[420px] cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* ROTATING WRAPPER (shadow + border live here) */}
        <div
          className="
            relative w-full h-full
            rounded-2xl
            border border-border
            bg-card
            shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)]
            hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.45)]
            transition-shadow duration-500
            hover:scale-[1.03]
          "
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* ---------- FRONT ---------- */}
          <div
            className="absolute w-full h-full rounded-2xl overflow-hidden bg-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <span className="absolute top-4 right-4 px-3 py-1 bg-primary-foreground/20 rounded-full text-xs text-primary-foreground">
                Faculty
              </span>
            </div>

            <div className="p-5 text-center">
              <h3 className="font-bold text-2xl text-blue-950 mt-6 mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-lg font-bold mb-6">
                {member.role}
              </p>
              <p className="text-muted-foreground text-md">
                {member.department}
              </p>

              <p className="mt-10 text-sm text-accent">
                {/* Click to view contact */}
              </p>
            </div>
          </div>

          {/* ---------- BACK ---------- */}
          <div
            className="absolute w-full h-full rounded-2xl p-6 flex flex-col justify-center bg-card"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="font-bold text-3xl text-center mb-6">
              {member.name}
            </p>

            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${member.email}`}
                className="flex gap-3 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                {member.email}
              </a>

              <a
                href={`tel:${member.phone}`}
                className="flex gap-3 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                {member.phone}
              </a>
            </div>

            <p className="mt-6 pt-4 border-t text-center text-xs text-muted-foreground">
              {/* Tap card to flip back */}
            </p>
          </div>
        </div>
      </div>
    );
  };

  /* ---------- Section ---------- */
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-lg font-bold uppercase tracking-wider mb-2">
            Our Faculty
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Training & Placement Team
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <FacultyCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

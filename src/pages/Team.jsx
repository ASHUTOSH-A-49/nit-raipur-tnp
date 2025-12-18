import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const conveners = [
  {
    name: "Rahul Sharma",
    branch: "Computer Science & Engineering",
    year: "Final Year",
    role: "Overall Coordinator",
    email: "rahul.tpc@nitrr.ac.in",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/rahul",
  },
  {
    name: "Priya Patel",
    branch: "Electronics & Communication",
    year: "Final Year",
    role: "Company Coordinator",
    email: "priya.tpc@nitrr.ac.in",
    phone: "+91 98765 43211",
    linkedin: "https://linkedin.com/in/priya",
  },
  {
    name: "Amit Kumar",
    branch: "Mechanical Engineering",
    year: "Final Year",
    role: "Core Coordinator",
    email: "amit.tpc@nitrr.ac.in",
    phone: "+91 98765 43212",
    linkedin: "https://linkedin.com/in/amit",
  },
  {
    name: "Sneha Gupta",
    branch: "Information Technology",
    year: "Final Year",
    role: "Placement Coordinator",
    email: "sneha.tpc@nitrr.ac.in",
    phone: "+91 98765 43213",
    linkedin: "https://linkedin.com/in/sneha",
  },
  {
    name: "Vikram Singh",
    branch: "Electrical Engineering",
    year: "Pre-Final Year",
    role: "Operations Coordinator",
    email: "vikram.tpc@nitrr.ac.in",
    phone: "+91 98765 43214",
    linkedin: "https://linkedin.com/in/vikram",
  },
  {
    name: "Ananya Mishra",
    branch: "Civil Engineering",
    year: "Pre-Final Year",
    role: "Media Coordinator",
    email: "ananya.tpc@nitrr.ac.in",
    phone: "+91 98765 43215",
    linkedin: "https://linkedin.com/in/ananya",
  },
  {
    name: "Rohan Agrawal",
    branch: "Chemical Engineering",
    year: "Pre-Final Year",
    role: "Industry Relations",
    email: "rohan.tpc@nitrr.ac.in",
    phone: "+91 98765 43216",
    linkedin: "https://linkedin.com/in/rohan",
  },
  {
    name: "Kavya Reddy",
    branch: "Biomedical Engineering",
    year: "Pre-Final Year",
    role: "Student Relations",
    email: "kavya.tpc@nitrr.ac.in",
    phone: "+91 98765 43217",
    linkedin: "https://linkedin.com/in/kavya",
  },
];

const TeamCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isMobile = window.innerWidth < 1024;
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: isMobile ? 0 : 60,
        x: isMobile ? 60 : 0,
        scale: isMobile ? 1 : 0.8,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={cardRef}
      className="h-[420px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={handleCardClick}
    >
      <div
        className="relative w-full h-full hover:scale-[1.03]"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 1.2s cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-card rounded-2xl overflow-hidden shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Avatar */}
          <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-3xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs text-primary-foreground font-medium">
                {member.role}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
            <p className="text-accent text-sm font-medium">{member.branch}</p>
            <p className="text-muted-foreground text-sm mb-6">{member.year}</p>

            <div className="mt-10 text-center">
              <p className="text-sm text-accent font-medium">
                Click to see details
              </p>
            </div>
          </div>
        </div>

        {/* Back Side */}
<div
  className="
    absolute w-full h-full bg-card rounded-2xl overflow-hidden
    p-6 flex flex-col justify-center
    shadow-[0_26px_60px_rgba(37,99,235,0.45)]
  "
  style={{
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
  }}
>


          <h3 className="font-bold text-xl text-foreground text-center mb-8">
            {member.name}
          </h3>

          <div className="space-y-4 text-sm">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">{member.email}</span>
            </a>
            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>{member.phone}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Meet the dedicated student placement conveners who work tirelessly
              to connect students with their dream careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
              Student Leaders
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Placement Conveners 2024-25
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conveners.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

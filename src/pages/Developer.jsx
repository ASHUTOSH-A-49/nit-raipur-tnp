import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Layout } from "../components/layout/Layout.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import indreshImg from "../data/developers/indresh_verma.jpg";
import soumyajeetImg from "../data/developers/Soumyajeet.jpeg";
import mayurImg from "../data/developers/mayur_nanwani.jpg";
import shouryaImg from "../data/developers/shourya_sinha.jpg"; 
import ashutoshImg from "../data/developers/ashutosh_behera.jpeg"; 
import dineshImg from "../data/developers/ronanki_dinesh.jpeg"; 
import vaibhaviImg from "../data/developers/vaibhavi.jpeg"; 


gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */

const seniors = [
  {
    name: "Indresh Verma",
    branch: "Computer Science & Engineering",
    batch: "2023 – 2027",
    email: "indreshkverma2004@gmail.com",
    contact: "+91 8817690820",
    linkedin: "https://www.linkedin.com/in/indreshverma04/",
    photo: indreshImg,
  },
  {
    name: "Mayur Nanwani",
    branch: "Electronics Engineering",
    batch: "2023 – 2027",
    email: "mayurnanwani17@gmail.com",
    contact: "+91 9399556248",
    linkedin: "https://www.linkedin.com/in/mayur-nanwani-7705b5153/",
    photo: mayurImg,
  },
  {
    name: "Soumyajeet Ghatak",
    branch: "Information Technology",
    batch: "2023 – 2027",
    email: "soumyajeetghatak50@gmail.com",
    contact: "+91 6294290773",
    linkedin: "https://www.linkedin.com/in/soumyajeet-ghatak-a98ab62a1/",
    photo: soumyajeetImg,
  },
];

const executives = [
  {
    name: "Ashutosh Behra",
    branch: "Computer Science & Engineering",
    batch: "2024 – 2028",
    email: "abehera015.btech2024@cse.nitrr.ac.in",
    contact: "+91 9302744613",
    linkedin:
      "https://www.linkedin.com/in/ashutosh-behera-211b6b252",
    photo: ashutoshImg,
  },
  {
    name: "Ronanki Dinesh",
    branch: "Electrical Engineering",
    batch: "2024 – 2028",
    email: "dineshronanki777@gmail.com",
    contact: "+91 7587794306",
    linkedin: "https://www.linkedin.com/in/ronanki-dinesh",
    photo: dineshImg,
  },
  {
    name: "S Vaibhavi",
    branch: "Computer Science & Engineering",
    batch: "2024 – 2028",
    email: "vaibhavi.s147@gmail.com",
    contact: "+91 9902058369",
    linkedin:
      "https://www.linkedin.com/in/vaibhavi-s-680bb3330/",
    photo: vaibhaviImg,
  },
  {
    name: "Shourya Sinha",
    branch: "Computer Science & Engineering",
    batch: "2024 – 2028",
    email: "shouryasinha23@gmail.com",
    contact: "+91 7987949123",
    linkedin:
      "https://www.linkedin.com/in/shourya-sinha-12ba0732b/",
    photo: shouryaImg,
  },
];

/* ================= CARD ================= */

const DeveloperCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isMobile = window.innerWidth < 1024;

    const anim = gsap.fromTo(
      card,
      {
        opacity: 0,
        y: isMobile ? 0 : 60,
        x: isMobile ? 60 : 0,
        scale: isMobile ? 1 : 0.85,
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
        },
        delay: index * 0.1,
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="h-[400px] w-full max-w-[260px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 1s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-card rounded-3xl shadow-lg overflow-hidden ring-1 ring-black/5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-44 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
<div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/40 shadow-md group">
  <img
    src={member.photo}
    alt={member.name}
    className="
      w-full h-full object-cover
      transition-transform duration-500 ease-out
      group-hover:scale-110
    "
  />
</div>

          </div>

          <div className="p-5 text-center">
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-sm text-accent">{member.branch}</p>
            <p className="text-sm text-muted-foreground">
              Batch {member.batch}
            </p>

            <p className="mt-8 text-xs italic text-muted-foreground/70">
              Click to flip
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full bg-card rounded-3xl p-6 flex flex-col justify-center ring-1 ring-black/5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="font-bold text-xl text-center mb-6">
            {member.name}
          </h3>

          <div className="space-y-4 text-sm">
            <a href={`mailto:${member.email}`} className="flex gap-3">
  <Mail className="w-5 h-5 shrink-0" />
  <span className="break-all">{member.email}</span>
</a>

            <a href={`tel:${member.contact}`} className="flex gap-3">
              <Phone className="w-5 h-5" />
              {member.contact}
            </a>
          </div>

          <div className="mt-6 pt-4 border-t">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 text-accent hover:underline"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= PAGE ================= */

const Developer = () => {
  return (
    <Layout>
      <section className="bg-hero-gradient py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl text-center text-primary-foreground"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Development Team
          </h1>
          <p className="text-primary-foreground/80">
            The developers and mentors who built and maintained this platform.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto space-y-20">
          <div>
  <h2 className="text-2xl font-semibold mb-8 text-center">
    Senior Developers & Mentors
  </h2>

  <div className="
    flex flex-wrap justify-center
    gap-10
    sm:grid sm:grid-cols-2
    lg:flex
  ">
    {seniors.map((m, i) => (
      <DeveloperCard key={i} member={m} index={i} />
    ))}
  </div>
</div>


          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Executive Developers
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
              {executives.map((m, i) => (
                <DeveloperCard key={i} member={m} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Developer;

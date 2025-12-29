import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Layout } from "../components/layout/Layout.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  currentConveners,
  pastConveners,
} from "../data/convenersData.js";

gsap.registerPlugin(ScrollTrigger);

/* ================= IMAGE HELPER ================= */

const teamImages = import.meta.glob(
  "../data/team_2026/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true }
);

const normalize = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[_-]+/g, " ")
    .replace(/[^a-z0-9 ]/g, "");

const getConvenerImage = (name) => {
  const target = normalize(name);

  for (const [path, mod] of Object.entries(teamImages)) {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png)$/i, "");

    if (normalize(fileName) === target) {
      return mod.default;
    }
  }
  return null;
};

/* ================= TEAM CARD ================= */

const TeamCard = ({ member, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isMobile = window.innerWidth < 1024;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: isMobile ? 0 : 40,
        x: isMobile ? 30 : 0,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=80",
        },
        delay: index * 0.04,
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="h-[420px]">
      <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">

        {/* Avatar */}
        <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          {member.image ? (
            <div
              className="
                w-44 h-44 rounded-full
                border-4 border-white/30
                shadow-xl
                bg-center bg-cover bg-no-repeat
                transition-transform duration-300
                hover:scale-[1.03]
              "
              style={{
                backgroundImage: `url(${member.image})`,
              }}
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-3xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-accent text-sm">{member.branch}</p>

          <div className="mt-6 space-y-3 text-sm">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex justify-center gap-2 hover:text-primary"
              >
                <Mail className="w-4 h-4" />
                {member.email}
              </a>
            )}

            <a
              href={`tel:${member.contact}`}
              className="flex justify-center gap-2 hover:text-primary"
            >
              <Phone className="w-4 h-4" />
              {member.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= TEAM PAGE ================= */

const Team = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [selectedBranch, setSelectedBranch] = useState("All");

  const sortByBranchThenName = (a, b) =>
    a.branch.localeCompare(b.branch) || a.name.localeCompare(b.name);

  const getCurrentData = () => {
    let data = [];

    if (currentFilter === "core") data = currentConveners.core;
    else if (currentFilter === "nonCore") data = currentConveners.nonCore;
    else data = [...currentConveners.core, ...currentConveners.nonCore];

    return [...data].sort(sortByBranchThenName);
  };

  return (
    <Layout>
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Meet the dedicated student placement conveners who work tirelessly
              to connect students with their dream careers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCurrentData().map((m, i) => (
              <TeamCard
                key={i}
                index={i}
                member={{
                  ...m,
                  image: getConvenerImage(m.name),
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Team;

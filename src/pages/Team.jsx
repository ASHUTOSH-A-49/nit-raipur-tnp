import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Layout } from "../components/layout/Layout.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamBanner from "../assets/team.jpeg";

import {
  currentConveners,
  pastConveners,
} from "../data/convenersData.js";

import { facultyAdvisors } from "../data/facultyAdvisors.js";

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

/* ================= FACULTY CARD ================= */

const FacultyCard = ({ advisor }) => {
  return (
    <div className="h-[380px]">
      <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform">
        <div className="relative h-48 bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-white/30 shadow-xl"
          />
        </div>

        <div className="p-5 text-center">
          <h3 className="font-bold pt-6 text-lg">{advisor.name}</h3>
          <p className="text-accent pt-3 text-md font-semibold">
            {advisor.designation}
          </p>

          {advisor.email && (
            <a
              href={`mailto:${advisor.email}`}
              className="mt-4 inline-flex justify-center gap-2 text-sm hover:text-primary"
            >
              <Mail className="w-4 h-4" />
              {advisor.email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
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
        x: isMobile ? 40 : 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=80",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="h-[420px]">
      <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform">
        <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-40 h-40 rounded-full object-cover border-4 border-white/30 shadow-xl"
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

  /* ✅ ONLY ADDITION FOR FACULTY HIERARCHY */
  const topFaculty = facultyAdvisors.slice(0, 2);
  const otherFaculty = facultyAdvisors.slice(2);

  const sortByBranchThenName = (a, b) => {
    const arch = "Architecture";
    if (a.branch === arch && b.branch !== arch) return 1;
    if (a.branch !== arch && b.branch === arch) return -1;
    return a.branch.localeCompare(b.branch) || a.name.localeCompare(b.name);
  };

  const getCurrentData = () => {
    let data = [];
    if (currentFilter === "core") data = currentConveners.core;
    else if (currentFilter === "nonCore") data = currentConveners.nonCore;
    else data = [...currentConveners.core, ...currentConveners.nonCore];
    return [...data].sort(sortByBranchThenName);
  };

  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative py-20 lg:py-28 flex items-center justify-center"
        style={{
          backgroundImage: `url(${teamBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="container relative text-center text-white z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Meet the dedicated student placement conveners who work tirelessly
              to connect students with their dream careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">

          {/* FACULTY ADVISORS */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Our Faculty Advisors</h2>
              <p className="text-muted-foreground mt-2">
                Guiding and mentoring the Training & Placement Cell
              </p>
            </div>

            {/* TOP 2 FACULTY */}
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {topFaculty.map((advisor, i) => (
                <FacultyCard key={i} advisor={advisor} />
              ))}
            </div>

            {/* REMAINING 3 FACULTY */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {otherFaculty.map((advisor, i) => (
                <FacultyCard key={i} advisor={advisor} />
              ))}
            </div>
          </section>

          {/* MAIN TABS */}
          <div className="flex justify-center gap-4 mb-10">
            {["current", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md border ${
                  activeTab === tab
                    ? "bg-blue-900 text-white"
                    : "bg-background text-muted-foreground"
                }`}
              >
                {tab === "current" ? "Current Conveners" : "Past Conveners"}
              </button>
            ))}
          </div>

          {/* CURRENT & PAST CONVENERS — UNCHANGED */}
          {activeTab === "current" && (
            <>
              <div className="flex justify-center gap-4 mb-12">
                {[
                  { key: "all", label: "All" },
                  { key: "core", label: "Core" },
                  { key: "nonCore", label: "Non-Core" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setCurrentFilter(t.key)}
                    className={`px-5 py-2 rounded-md border ${
                      currentFilter === t.key
                        ? "bg-blue-900 text-white"
                        : "bg-background text-muted-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getCurrentData().map((m, i) => (
                  <TeamCard
                    key={i}
                    index={i}
                    member={{ ...m, image: getConvenerImage(m.name) }}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === "past" && (
            <div className="space-y-16">
              <div className="flex justify-end">
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="rounded-xl border bg-background px-4 py-3 text-sm"
                >
                  <option value="All">All Branches</option>
                  {[...new Set(Object.values(pastConveners).flat().map(m => m.branch))]
                    .sort()
                    .map(branch => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                </select>
              </div>

              {Object.keys(pastConveners)
                .sort((a, b) => b - a)
                .map((year) => {
                  const data =
                    selectedBranch === "All"
                      ? pastConveners[year]
                      : pastConveners[year].filter(
                          (m) => m.branch === selectedBranch
                        );

                  if (!data.length) return null;

                  return (
                    <div key={year} className="space-y-5">
                      <h3 className="text-xl font-semibold">
                        Academic Year {year}
                      </h3>

                      <div className="rounded-2xl border bg-card shadow-sm overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-blue-50 border-b">
                            <tr>
                              <th className="px-6 py-4 text-left">Name</th>
                              <th className="px-6 py-4 text-left">Branch</th>
                              <th className="px-6 py-4 text-left">Contact</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((m, i) => (
                              <tr key={i}>
                                <td className="px-6 py-4">{m.name}</td>
                                <td className="px-6 py-4">{m.branch}</td>
                                <td className="px-6 py-4">
                                  <a href={`tel:${m.contact}`}>
                                    {m.contact}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default Team;

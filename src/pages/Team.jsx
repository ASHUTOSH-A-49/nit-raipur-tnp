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
        duration: 0.45, // ⚡ faster
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=80",
        },
        delay: index * 0.03, // ⚡ faster stagger
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="h-[420px]">
      <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform">
        {/* Avatar */}
        <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-3xl font-bold">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-accent text-sm">{member.branch}</p>

          <div className="mt-6 space-y-3 text-sm">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {member.email}
              </a>
            )}

            <a
              href={`tel:${member.contact}`}
              className="flex justify-center gap-2"
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

  /* ---------- SORT HELPERS ---------- */
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
      {/* Hero */}
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

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">

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

          {/* ================= CURRENT ================= */}
          {activeTab === "current" && (
            <>
              {/* SUB TABS */}
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

              {/* CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getCurrentData().map((m, i) => (
                  <TeamCard key={i} member={m} index={i} />
                ))}
              </div>
            </>
          )}

          {/* ================= PAST ================= */}
          {activeTab === "past" && (
            <div className="space-y-16">

              {/* Branch Filter */}
              <div className="flex justify-end">
                <div className="relative w-64">
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
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
              </div>

              {/* Year Tables */}
              {Object.keys(pastConveners)
                .sort((a, b) => b - a)
                .map((year) => {
                  const rawData =
                    selectedBranch === "All"
                      ? pastConveners[year]
                      : pastConveners[year].filter(
                          (m) => m.branch === selectedBranch
                        );

                  const data = [...rawData].sort(sortByBranchThenName);

                  if (data.length === 0) return null;

                  return (
                    <div key={year} className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-1.5 bg-blue-900 rounded-full" />
                        <h3 className="text-xl font-semibold">
                          Academic Year {year}
                        </h3>
                      </div>

                      <div className="rounded-2xl border bg-card shadow-sm">
                        <div className="max-h-[420px] overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead className="sticky top-0 bg-blue-50 border-b">
                              <tr className="text-xs uppercase text-blue-900">
                                <th className="px-6 py-4 text-left">Name</th>
                                <th className="px-6 py-4 text-left">Branch</th>
                                <th className="px-6 py-4 text-left">Contact</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((m, i) => (
                                <tr
                                  key={i}
                                  className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                                >
                                  <td className="px-6 py-4 font-medium">{m.name}</td>
                                  <td className="px-6 py-4">{m.branch}</td>
                                  <td className="px-6 py-4 font-mono">
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

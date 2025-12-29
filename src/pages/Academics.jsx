import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout.jsx";
import library from "@/assets/libraryImg.png";
import academicsDataRaw from "@/data/academics.json"; // Import the JSON

import {
  GraduationCap,
  Users,
  BookOpen,
  ChevronRight,
  FlaskConical,
  Briefcase,
  Monitor,
  Cpu,
  Target,
  History,
  Award
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* 🎓 DATA PREPARATION - MAP ICONS                                            */
/* -------------------------------------------------------------------------- */

// 1. Map string names from JSON to actual React components
const iconMap = {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Briefcase,
  Monitor,
  Cpu
};

// 2. Transform the JSON data to include the actual Icon component
const programsData = Object.keys(academicsDataRaw).reduce((acc, key) => {
  const program = academicsDataRaw[key];
  acc[key] = {
    ...program,
    icon: iconMap[program.icon] || BookOpen // Default fallback if icon not found
  };
  return acc;
}, {});


/* -------------------------------------------------------------------------- */
/* 🎓 PAGE COMPONENT                                                          */
/* -------------------------------------------------------------------------- */

const Academics = () => {
  const [activeProgram, setActiveProgram] = useState("btech");
  const [selectedBranch, setSelectedBranch] = useState(null);

  const currentProgram = programsData[activeProgram];

  return (
    <Layout>

      {/* ------------------------------------------------------------------ */}
      {/* 🔵 HERO BANNER WITH LIBRARY IMAGE                                  */}
      {/* ------------------------------------------------------------------ */}
      
      <section
        className="relative py-16 lg:py-24 flex items-center justify-center min-h-[280px]"
        style={{
          backgroundImage: `url(${library})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[1px]"  />

        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              NIT Raipur offers undergraduate, postgraduate, and doctoral programs across
              engineering, science, and management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 🎓 MAIN CONTENT                                                    */}
      {/* ------------------------------------------------------------------ */}

      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ------------------ SIDEBAR ------------------ */}
            <div className="lg:w-72 shrink-0">
              <div className="sticky top-24 bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
                <div className="bg-primary px-4 py-4">
                  <h2 className="text-primary-foreground font-semibold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" /> Programs Offered
                  </h2>
                </div>

                <nav className="p-2 space-y-1">
                  {Object.entries(programsData).map(([key, program]) => {
                    const Icon = program.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setActiveProgram(key);
                          setSelectedBranch(null);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          activeProgram === key
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "hover:bg-secondary"
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <div className="flex-1 truncate">
                          <span className="block font-medium truncate">{program.title}</span>
                          <span className="text-xs opacity-70">{program.duration}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            activeProgram === key ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* ------------------ MAIN CONTENT PANEL ------------------ */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgram}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >

                  {/* Header card */}
                  <div className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-primary to-accent-foreground/10 px-6 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                          <currentProgram.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{currentProgram.title}</h2>
                          <p className="text-white/80 text-sm">
                            {currentProgram.duration} • {currentProgram.branches.length} Specializations
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 text-muted-foreground leading-relaxed">
                      {currentProgram.description}
                    </div>
                  </div>

                  {/* Branch list */}
                  <div className="space-y-4">
                    {currentProgram.branches.map((branch, index) => (
                      <motion.div
                        key={index}
                        className={`bg-card rounded-xl border-2 transition-all overflow-hidden ${
                          selectedBranch === index
                            ? "border-primary shadow-md"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setSelectedBranch(selectedBranch === index ? null : index)
                          }
                          className="w-full p-5 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{branch.name}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" /> Intake: {branch.seats}
                                </span>
                                <span className="flex items-center gap-1">
                                  <History className="w-4 h-4" /> Estd: {branch.established}
                                </span>
                              </p>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 text-primary transition-transform ${
                              selectedBranch === index ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {selectedBranch === index && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-secondary/30 border-t"
                            >
                              <div className="p-6 space-y-6">

                                {/* Vision + Mission */}
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                  <div>
                                    <h5 className="font-bold text-primary flex items-center gap-2 mb-2">
                                      <Target className="w-4 h-4" /> Vision
                                    </h5>
                                    <p className="italic text-muted-foreground">"{branch.vision}"</p>
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-primary flex items-center gap-2 mb-2">
                                      <Award className="w-4 h-4" /> Mission
                                    </h5>
                                    <p className="text-muted-foreground">{branch.mission}</p>
                                  </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
                                  <div className="p-2 bg-background rounded border text-center">
                                    <p className="text-[10px] font-bold opacity-60">ESTABLISHED</p>
                                    <p className="text-sm font-bold">{branch.established}</p>
                                  </div>
                                  <div className="p-2 bg-background rounded border text-center">
                                    <p className="text-[10px] font-bold opacity-60">INTAKE</p>
                                    <p className="text-sm font-bold">{branch.seats}</p>
                                  </div>
                                  <div className="p-2 bg-background rounded border text-center">
                                    <p className="text-[10px] font-bold opacity-60">DEGREE</p>
                                    <p className="text-sm font-bold truncate px-1">{branch.degree}</p>
                                  </div>
                                  <div className="p-2 bg-background rounded border text-center">
                                    <p className="text-[10px] font-bold opacity-60">HIGHLIGHTS</p>
                                    <p className="text-[11px] font-bold truncate px-1">{branch.highlights[0]}</p>
                                  </div>
                                </div>

                                <div className="pt-2">
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {branch.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
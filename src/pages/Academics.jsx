import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout.jsx";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  BookOpen, 
  ChevronRight,
  Building2,
  FlaskConical,
  Briefcase,
  Monitor,
  Cpu
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const programsData = {
  btech: {
    title: "B.Tech Programs",
    duration: "4 Years",
    description: "NIT Raipur offers Bachelor of Technology (B.Tech) programs across 12 engineering and technology disciplines. These programs are designed to develop strong technical foundations, problem-solving abilities, and industry-ready skills in students.",
    icon: Cpu,
    branches: [
      {
        name: "Computer Science & Engineering",
        seats: 180,
        description: "The CSE program focuses on software development, algorithms, data structures, artificial intelligence, machine learning, and computer networks. Students gain expertise in programming languages, database management, and system design.",
        highlights: ["Programming & Algorithms", "AI & Machine Learning", "Database Systems", "Computer Networks"]
      },
      {
        name: "Electronics & Communication Engineering",
        seats: 120,
        description: "ECE covers analog and digital electronics, communication systems, signal processing, VLSI design, and embedded systems. The curriculum emphasizes both theoretical concepts and practical applications.",
        highlights: ["Signal Processing", "VLSI Design", "Communication Systems", "Embedded Systems"]
      },
      {
        name: "Electrical Engineering",
        seats: 120,
        description: "The Electrical Engineering program covers power systems, electrical machines, control systems, power electronics, and renewable energy technologies.",
        highlights: ["Power Systems", "Control Systems", "Power Electronics", "Renewable Energy"]
      },
      {
        name: "Mechanical Engineering",
        seats: 120,
        description: "ME focuses on thermodynamics, fluid mechanics, manufacturing processes, machine design, and automobile engineering. Students learn CAD/CAM tools and modern manufacturing techniques.",
        highlights: ["Thermodynamics", "Manufacturing", "Machine Design", "CAD/CAM"]
      },
      {
        name: "Civil Engineering",
        seats: 120,
        description: "Civil Engineering covers structural engineering, geotechnical engineering, transportation, water resources, and environmental engineering with focus on sustainable construction.",
        highlights: ["Structural Engineering", "Transportation", "Water Resources", "Environmental Engineering"]
      },
      {
        name: "Chemical Engineering",
        seats: 60,
        description: "The program covers chemical process engineering, reaction engineering, process control, and environmental engineering with emphasis on petrochemical and pharmaceutical industries.",
        highlights: ["Process Engineering", "Reaction Engineering", "Process Control", "Petrochemicals"]
      },
      {
        name: "Metallurgical & Materials Engineering",
        seats: 60,
        description: "MME focuses on material science, extractive metallurgy, physical metallurgy, and advanced materials including composites and nanomaterials.",
        highlights: ["Material Science", "Physical Metallurgy", "Advanced Materials", "Nanomaterials"]
      },
      {
        name: "Mining Engineering",
        seats: 60,
        description: "Mining Engineering covers mine planning, rock mechanics, mineral processing, and mine safety. Special emphasis on sustainable mining practices.",
        highlights: ["Mine Planning", "Rock Mechanics", "Mineral Processing", "Mine Safety"]
      },
      {
        name: "Biomedical Engineering",
        seats: 60,
        description: "BME combines engineering principles with medical sciences covering medical imaging, biomechanics, biomaterials, and clinical engineering.",
        highlights: ["Medical Imaging", "Biomechanics", "Biomaterials", "Clinical Engineering"]
      },
      {
        name: "Information Technology",
        seats: 90,
        description: "IT program focuses on software engineering, web technologies, information security, cloud computing, and data analytics.",
        highlights: ["Software Engineering", "Web Technologies", "Information Security", "Cloud Computing"]
      },
      {
        name: "Biotechnology",
        seats: 60,
        description: "Biotechnology covers genetic engineering, bioprocess technology, molecular biology, and bioinformatics with applications in healthcare and agriculture.",
        highlights: ["Genetic Engineering", "Bioprocess Technology", "Molecular Biology", "Bioinformatics"]
      },
      {
        name: "Architecture",
        seats: 40,
        description: "The B.Arch program develops skills in architectural design, building construction, urban planning, and sustainable architecture over a 5-year duration.",
        highlights: ["Architectural Design", "Building Construction", "Urban Planning", "Sustainable Architecture"]
      }
    ]
  },
  mtech: {
    title: "M.Tech Programs",
    duration: "2 Years",
    description: "Master of Technology (M.Tech) programs at NIT Raipur provide advanced specialization in various engineering disciplines. These programs emphasize research, innovation, and deep technical expertise.",
    icon: BookOpen,
    branches: [
      {
        name: "Computer Science & Engineering",
        seats: 25,
        description: "Advanced study in algorithms, distributed systems, computer vision, natural language processing, and high-performance computing.",
        highlights: ["Advanced Algorithms", "Distributed Systems", "Computer Vision", "NLP"]
      },
      {
        name: "VLSI Design",
        seats: 20,
        description: "Specialization in integrated circuit design, digital system design, FPGA implementation, and semiconductor technology.",
        highlights: ["IC Design", "Digital Systems", "FPGA", "Semiconductor Technology"]
      },
      {
        name: "Power Electronics",
        seats: 20,
        description: "Focus on power semiconductor devices, converters, motor drives, and power quality improvement techniques.",
        highlights: ["Power Semiconductors", "Converters", "Motor Drives", "Power Quality"]
      },
      {
        name: "Structural Engineering",
        seats: 25,
        description: "Advanced structural analysis, earthquake engineering, concrete technology, and structural dynamics.",
        highlights: ["Structural Analysis", "Earthquake Engineering", "Concrete Technology", "Structural Dynamics"]
      },
      {
        name: "Thermal Engineering",
        seats: 20,
        description: "Study of advanced thermodynamics, heat transfer, refrigeration, and energy systems.",
        highlights: ["Advanced Thermodynamics", "Heat Transfer", "Refrigeration", "Energy Systems"]
      },
      {
        name: "Environmental Engineering",
        seats: 20,
        description: "Focus on water treatment, air pollution control, solid waste management, and environmental impact assessment.",
        highlights: ["Water Treatment", "Air Pollution Control", "Waste Management", "EIA"]
      },
      {
        name: "Industrial Metallurgy",
        seats: 15,
        description: "Advanced study in metallurgical processes, material characterization, and industrial applications of metals.",
        highlights: ["Metallurgical Processes", "Material Characterization", "Industrial Applications"]
      },
      {
        name: "Data Science",
        seats: 25,
        description: "Covers machine learning, big data analytics, statistical modeling, and data visualization techniques.",
        highlights: ["Machine Learning", "Big Data Analytics", "Statistical Modeling", "Data Visualization"]
      },
      {
        name: "Information Security",
        seats: 20,
        description: "Focus on cryptography, network security, cyber forensics, and secure software development.",
        highlights: ["Cryptography", "Network Security", "Cyber Forensics", "Secure Development"]
      }
    ]
  },
  msc: {
    title: "M.Sc Programs",
    duration: "2 Years",
    description: "Master of Science programs offer advanced theoretical knowledge and research opportunities in fundamental sciences, preparing students for research careers and higher studies.",
    icon: FlaskConical,
    branches: [
      {
        name: "Physics",
        seats: 30,
        description: "Advanced study in classical mechanics, quantum mechanics, solid state physics, and specialized topics in condensed matter and nuclear physics.",
        highlights: ["Quantum Mechanics", "Solid State Physics", "Condensed Matter", "Nuclear Physics"]
      },
      {
        name: "Chemistry",
        seats: 30,
        description: "Covers organic, inorganic, physical, and analytical chemistry with research focus on materials chemistry and catalysis.",
        highlights: ["Organic Chemistry", "Physical Chemistry", "Materials Chemistry", "Catalysis"]
      },
      {
        name: "Mathematics",
        seats: 30,
        description: "Study of pure and applied mathematics including algebra, analysis, differential equations, and numerical methods.",
        highlights: ["Algebra", "Analysis", "Differential Equations", "Numerical Methods"]
      }
    ]
  },
  phd: {
    title: "Ph.D Programs",
    duration: "3-5 Years",
    description: "Doctoral programs at NIT Raipur provide opportunities for cutting-edge research across all engineering, science, and humanities departments. Research scholars work on sponsored projects and publish in reputed journals.",
    icon: GraduationCap,
    branches: [
      {
        name: "Engineering Departments",
        seats: "Various",
        description: "Ph.D opportunities in all engineering departments including CSE, ECE, EE, ME, CE, Chemical, MME, Mining, BME, and IT.",
        highlights: ["Research Projects", "Industry Collaboration", "Publications", "Patents"]
      },
      {
        name: "Science Departments",
        seats: "Various",
        description: "Research opportunities in Physics, Chemistry, Mathematics, and Applied Sciences.",
        highlights: ["Fundamental Research", "Applied Research", "Interdisciplinary Studies"]
      },
      {
        name: "Humanities & Social Sciences",
        seats: "Various",
        description: "Research in management, economics, English, and social sciences with focus on interdisciplinary approaches.",
        highlights: ["Management Research", "Social Studies", "Linguistics", "Economics"]
      }
    ]
  },
  mba: {
    title: "MBA Program",
    duration: "2 Years",
    description: "The Master of Business Administration program at NIT Raipur develops future business leaders with strong analytical, managerial, and entrepreneurial skills. The curriculum integrates technology management with core business principles.",
    icon: Briefcase,
    branches: [
      {
        name: "Master of Business Administration",
        seats: 60,
        description: "Comprehensive MBA program covering finance, marketing, operations, HR, and strategic management with specializations in technology management and analytics.",
        highlights: ["Finance", "Marketing", "Operations", "Strategic Management", "Analytics"]
      }
    ]
  },
  mca: {
    title: "MCA Program",
    duration: "2 Years",
    description: "The Master of Computer Applications program provides comprehensive training in software development, system design, and IT management, preparing students for careers in the IT industry.",
    icon: Monitor,
    branches: [
      {
        name: "Master of Computer Applications",
        seats: 60,
        description: "Covers programming, software engineering, database management, networking, and emerging technologies like AI/ML and cloud computing.",
        highlights: ["Software Development", "Database Management", "Web Technologies", "AI/ML", "Cloud Computing"]
      }
    ]
  }
};

const Academics = () => {
  const [activeProgram, setActiveProgram] = useState("btech");
  const [selectedBranch, setSelectedBranch] = useState(null);

  const currentProgram = programsData[activeProgram];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              NIT Raipur offers a diverse range of undergraduate, postgraduate, and doctoral programs across engineering, science, and management disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Tabs - Desktop */}
            <div className="lg:w-72 shrink-0">
              <div className="sticky top-24 bg-card rounded-2xl shadow-elegant overflow-hidden">
                <div className="bg-primary px-4 py-3">
                  <h2 className="text-lg font-semibold text-primary-foreground flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Programs Offered
                  </h2>
                </div>
                <nav className="p-2">
                  {Object.entries(programsData).map(([key, program]) => {
                    const Icon = program.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setActiveProgram(key);
                          setSelectedBranch(null);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                          activeProgram === key
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "hover:bg-secondary text-foreground"
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="block font-medium truncate">{program.title}</span>
                          <span className={`text-xs ${activeProgram === key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                            {program.duration}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeProgram === key ? "rotate-90" : ""}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgram}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Program Header */}
                  <div className="bg-card rounded-2xl shadow-elegant overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-primary to-accent px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                          <currentProgram.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-primary-foreground">{currentProgram.title}</h2>
                          <div className="flex items-center gap-4 mt-1 text-primary-foreground/80 text-sm">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {currentProgram.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {currentProgram.branches.length} {currentProgram.branches.length === 1 ? "Branch" : "Branches"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed">{currentProgram.description}</p>
                    </div>
                  </div>

                  {/* Branches Grid */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Available Branches
                    </h3>
                    
                    <div className="grid gap-4">
                      {currentProgram.branches.map((branch, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer border-2 ${
                            selectedBranch === index 
                              ? "border-primary shadow-lg" 
                              : "border-transparent hover:border-primary/30 hover:shadow-lg"
                          }`}
                          onClick={() => setSelectedBranch(selectedBranch === index ? null : index)}
                        >
                          {/* Branch Header */}
                          <div className="p-5 flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground text-lg">{branch.name}</h4>
                              <div className="flex items-center gap-4 mt-1 text-muted-foreground text-sm">
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {branch.seats} Seats
                                </span>
                              </div>
                            </div>
                            <ChevronRight className={`w-5 h-5 text-primary transition-transform duration-300 ${selectedBranch === index ? "rotate-90" : ""}`} />
                          </div>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {selectedBranch === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5 pt-0 border-t border-border">
                                  <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-4">
                                    {branch.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {branch.highlights.map((highlight, hIndex) => (
                                      <span 
                                        key={hIndex}
                                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                      >
                                        {highlight}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Info Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-secondary rounded-xl text-center"
          >
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Seat numbers are approximate and may vary based on government regulations. For the latest information, please visit the official NIT Raipur website or contact the academic section.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;

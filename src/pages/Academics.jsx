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
  Cpu,
  Target,
  History,
  Award
} from "lucide-react";

const programsData = {
  btech: {
    title: "B.Tech Programs",
    duration: "4 Years",
    description: "NIT Raipur offers Bachelor of Technology (B.Tech) programs across 12 engineering and technology disciplines. These programs are designed to develop strong technical foundations, problem-solving abilities, and industry-ready skills in students.",
    icon: Cpu,
    branches: [
      {
        name: "Computer Science & Engineering",
        established: 2000,
        degree: "B.Tech in CSE",
        seats: 114,
        vision: "To produce ethically strong, highly competent professionals in Computer Science and Engineering for serving the society.",
        mission: "To impart quality education, promote research and innovation, and develop leadership qualities through a robust curriculum.",
        description: "Focuses on software development, algorithms, data structures, AI, machine learning, and computer networks.",
        highlights: ["Programming & Algorithms", "AI & Machine Learning", "Database Systems", "Computer Networks"]
      },
      {
        name: "Electronics & Communication Engineering",
        established: 1985,
        degree: "B.Tech in ECE",
        seats: 114,
        vision: "To be a leader in providing quality education and research in the field of Electronics and Communication Engineering.",
        mission: "To create an environment for students to acquire technical skills and research capabilities to solve global challenges.",
        description: "Covers analog and digital electronics, communication systems, signal processing, VLSI design, and embedded systems.",
        highlights: ["Signal Processing", "VLSI Design", "Communication Systems", "Embedded Systems"]
      },
      {
        name: "Electrical Engineering",
        established: 1958,
        degree: "B.Tech in Electrical Engineering",
        seats: 115,
        vision: "To produce globally competent electrical engineers capable of adapting to the changing needs of industry and society.",
        mission: "To provide quality education in Electrical Engineering with emphasis on professional ethics and research.",
        description: "Covers power systems, electrical machines, control systems, power electronics, and renewable energy technologies.",
        highlights: ["Power Systems", "Control Systems", "Power Electronics", "Renewable Energy"]
      },
      {
        name: "Mechanical Engineering",
        established: 1956,
        degree: "B.Tech in Mechanical Engineering",
        seats: 115,
        vision: "To be recognized as a center of excellence in Mechanical Engineering education and research.",
        mission: "To provide state-of-the-art education and research environment in Mechanical Engineering and allied areas.",
        description: "Focuses on thermodynamics, fluid mechanics, manufacturing processes, machine design, and automobile engineering.",
        highlights: ["Thermodynamics", "Manufacturing", "Machine Design", "CAD/CAM"]
      },
      {
        name: "Civil Engineering",
        established: 1958,
        degree: "B.Tech in Civil Engineering",
        seats: 97,
        vision: "To produce civil engineers of international standard who can contribute to infrastructure development.",
        mission: "To promote excellence in civil engineering education and research through collaborative learning.",
        description: "Covers structural engineering, geotechnical engineering, transportation, water resources, and environmental engineering.",
        highlights: ["Structural Engineering", "Transportation", "Water Resources", "Environmental Engineering"]
      },
      {
        name: "Chemical Engineering",
        established: 1962,
        degree: "B.Tech in Chemical Engineering",
        seats: 79,
        vision: "To be a center of excellence for education and research in Chemical Engineering.",
        mission: "To provide a conducive atmosphere for students to excel in technical knowledge and research.",
        description: "Covers chemical process engineering, reaction engineering, process control, and environmental engineering.",
        highlights: ["Process Engineering", "Reaction Engineering", "Process Control", "Petrochemicals"]
      },
      {
        name: "Metallurgical & Materials Engineering",
        established: 1956,
        degree: "B.Tech in Metallurgy",
        seats: 115,
        vision: "To emerge as a premier center for metallurgical and materials science education.",
        mission: "To foster innovation in material development and sustainable extraction processes.",
        description: "Focuses on material science, extractive metallurgy, physical metallurgy, and advanced materials.",
        highlights: ["Material Science", "Physical Metallurgy", "Advanced Materials", "Nanomaterials"]
      },
      {
        name: "Mining Engineering",
        established: 1956,
        degree: "B.Tech in Mining",
        seats: 97,
        vision: "To be a leading department for providing skilled mining engineers for sustainable mineral development.",
        mission: "To provide high-quality education and conduct research in mining and allied areas.",
        description: "Covers mine planning, rock mechanics, mineral processing, and mine safety.",
        highlights: ["Mine Planning", "Rock Mechanics", "Mineral Processing", "Mine Safety"]
      },
      {
        name: "Biomedical Engineering",
        established: 2003,
        degree: "B.Tech in Biomedical",
        seats: 80,
        vision: "To integrate engineering with life sciences for the betterment of healthcare.",
        mission: "To develop skilled professionals capable of designing advanced medical instrumentation.",
        description: "Combines engineering with medical sciences covering medical imaging, biomechanics, and clinical engineering.",
        highlights: ["Medical Imaging", "Biomechanics", "Biomaterials", "Clinical Engineering"]
      },
      {
        name: "Information Technology",
        established: 2000,
        degree: "B.Tech in IT",
        seats: 114,
        vision: "To excel in information technology education and research for human development.",
        mission: "To provide quality technical education and develop professionals with strong ethics.",
        description: "Focuses on software engineering, web technologies, information security, and cloud computing.",
        highlights: ["Software Engineering", "Web Technologies", "Information Security", "Cloud Computing"]
      },
      {
        name: "Biotechnology",
        established: 2003,
        degree: "B.Tech in Biotechnology",
        seats: 79,
        vision: "To be a sound center for education and research in field of Biotechnology in India.",
        mission: "To provide adequate and scientific education in Biotechnology and prepare students for innovative careers.",
        description: "Covers genetic engineering, bioprocess technology, molecular biology, and bioinformatics.",
        highlights: ["Genetic Engineering", "Bioprocess Technology", "Molecular Biology", "Bioinformatics"]
      },
      {
        name: "Architecture",
        established: 1984,
        degree: "B.Arch",
        seats: 40,
        vision: "To create professionals with a sensitivity toward the environment and architectural aesthetics.",
        mission: "To promote excellence in architecture and planning through a blend of tradition and modernity.",
        description: "The B.Arch program develops skills in architectural design and urban planning over a 5-year duration.",
        highlights: ["Architectural Design", "Building Construction", "Urban Planning", "Sustainable Architecture"]
      }
    ]
  },
  mtech: {
    title: "M.Tech Programs",
    duration: "2 Years",
    description: "Master of Technology (M.Tech) programs provide advanced specialization in various engineering and geoscience disciplines.",
    icon: BookOpen,
    branches: [
      { 
        name: "Applied Geology", 
        established: 1961, 
        degree: "M. Tech. (Applied Geology)",
        seats: 19, 
        vision: "To promote the sustainable development and conservation of mineral and natural resources.", 
        mission: "To promote Human Resource Development in achieving goals of sustainable development and conservation of natural resources.",
        description: "Specialized study in structural geology, mineralogy, and mineral exploration.", 
        highlights: ["Hydrogeology", "Mineral Exploration", "Remote Sensing & GIS"] 
      },
      { name: "Computer Science & Engineering", established: 2011, degree: "M.Tech in CSE", seats: 25, vision: "To produce competent professionals with specialized knowledge in CSE.", mission: "To impart quality technical education and promote research.", description: "Advanced study in algorithms and distributed systems.", highlights: ["Advanced Algorithms", "Distributed Systems"] },
      { name: "VLSI Design", established: 2010, degree: "M.Tech in VLSI", seats: 20, vision: "To lead in VLSI education and research.", mission: "To create skilled professionals in semiconductor technology.", description: "Specialization in IC design and FPGA implementation.", highlights: ["IC Design", "FPGA"] }
    ]
  },
  msc: {
    title: "M.Sc Programs",
    duration: "2 Years",
    description: "Master of Science programs offer advanced theoretical knowledge and research in fundamental and applied sciences.",
    icon: FlaskConical,
    branches: [
      { 
        name: "Physics", 
        established: 1956, 
        degree: "M.Sc. in Physics",
        seats: 20, 
        vision: "To provide quality scientific and technical education, training, innovation and creativity in Pure and Applied Physics.", 
        mission: "To contribute towards the country through excellence in scientific education and research.",
        description: "Advanced study in quantum mechanics, solid state physics, and nuclear physics.", 
        highlights: ["Quantum Mechanics", "Solid State Physics", "Cutting-edge Research"] 
      },
      { 
        name: "Chemistry", 
        established: 1956, 
        degree: "M.Sc. in Chemistry",
        seats: 20, 
        vision: "To provide a platform of nationally recognized model of education to compete in a technology-centered world.", 
        mission: "To nurture students by providing quality education in classroom teaching, laboratories, and research.",
        description: "Covers organic, inorganic, physical, and analytical chemistry.", 
        highlights: ["Environmental Impact", "Materials Chemistry", "Catalysis"] 
      },
      { 
        name: "Mathematics", 
        established: 1956, 
        degree: "M.Sc. in Mathematics",
        seats: 20, 
        vision: "To emerge as a center of excellence in mathematical sciences and its applications.", 
        mission: "To promote excellence in mathematical education and research.",
        description: "Study of pure and applied mathematics including algebra and numerical methods.", 
        highlights: ["Algebra", "Numerical Methods", "Analysis"] 
      }
    ]
  },
  phd: {
    title: "Ph.D Programs",
    duration: "3-5 Years",
    description: "Doctoral programs are offered across Engineering, Science, Management, and Humanities departments.",
    icon: GraduationCap,
    branches: [
      { 
        name: "Humanities & Social Sciences", 
        established: 1958, 
        degree: "Ph.D. in Humanities",
        seats: "As per requirement", 
        vision: "To render world class professionals efficient in communicative, managerial and entrepreneurial skills.", 
        mission: "To develop an immersive learning and innovative environment and state-of-art interdisciplinary research.",
        description: "Research in English literature, Linguistics, Sociology, and Management.", 
        highlights: ["Professional Communication", "Sociology", "Management"] 
      },
      { name: "Engineering Departments", established: 1956, degree: "Ph.D. (Engineering)", seats: "Variable", vision: "To promote innovation and high-quality research in engineering.", mission: "To produce researchers who can solve technical problems of society.", description: "Ph.D opportunities in all major engineering branches.", highlights: ["Research", "Patents"] }
    ]
  },
  mba: {
    title: "MBA Program",
    duration: "2 Years",
    description: "The MBA program integrates technical expertise with managerial decision-making skills.",
    icon: Briefcase,
    branches: [
      { 
        name: "Master of Business Administration", 
        established: 1958, 
        degree: "MBA",
        seats: 60, 
        vision: "To render world class professionals efficient in communicative, managerial and entrepreneurial skills.", 
        mission: "To inculcate higher order decision making skills through a broad spectrum of learning content.",
        description: "Comprehensive MBA covering finance, marketing, and strategy.", 
        highlights: ["Managerial Skills", "Entrepreneurship", "Strategic Management"] 
      }
    ]
  },
  mca: {
    title: "MCA Program",
    duration: "2 Years",
    description: "The Master of Computer Applications program focuses on high-level software development and IT management.",
    icon: Monitor,
    branches: [
      { 
        name: "Master of Computer Applications", 
        established: 1986, 
        degree: "MCA",
        seats: 110, 
        vision: "To provide best possible education that would help in developing students with strong technical backgrounds.", 
        mission: "To impart quality education to meet the needs of professional societies and the nation.",
        description: "Covers data structures, cloud computing, AI/ML, and network security.", 
        highlights: ["Software Development", "Cloud Computing", "NIMCET Entrance"] 
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
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              NIT Raipur offers undergraduate, postgraduate, and doctoral programs across engineering, science, and management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
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
                      <button key={key} onClick={() => { setActiveProgram(key); setSelectedBranch(null); }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${activeProgram === key ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-secondary"}`}>
                        <Icon className="w-5 h-5 shrink-0" />
                        <div className="flex-1 truncate">
                          <span className="block font-medium truncate">{program.title}</span>
                          <span className="text-xs opacity-70">{program.duration}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeProgram === key ? "rotate-90" : ""}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content Display Area */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div key={activeProgram} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-primary to-accent-foreground/10 px-6 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                          <currentProgram.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{currentProgram.title}</h2>
                          <p className="text-white/80 text-sm">{currentProgram.duration} • {currentProgram.branches.length} Specializations</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-muted-foreground leading-relaxed">{currentProgram.description}</div>
                  </div>

                  <div className="space-y-4">
                    {currentProgram.branches.map((branch, index) => (
                      <motion.div key={index} className={`bg-card rounded-xl border-2 transition-all overflow-hidden ${selectedBranch === index ? "border-primary shadow-md" : "border-border hover:border-primary/40"}`}>
                        <button onClick={() => setSelectedBranch(selectedBranch === index ? null : index)} className="w-full p-5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{index + 1}</div>
                            <div>
                              <h4 className="font-bold text-lg">{branch.name}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-4">
                                <span className="flex items-center gap-1"><Users className="w-4 h-4"/> Intake: {branch.seats}</span>
                                <span className="flex items-center gap-1"><History className="w-4 h-4"/> Estd: {branch.established}</span>
                              </p>
                            </div>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-primary transition-transform ${selectedBranch === index ? "rotate-90" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {selectedBranch === index && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-secondary/30 border-t">
                              <div className="p-6 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                  <div>
                                    <h5 className="font-bold text-primary flex items-center gap-2 mb-2"><Target className="w-4 h-4"/> Vision</h5>
                                    <p className="italic text-muted-foreground">"{branch.vision}"</p>
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-primary flex items-center gap-2 mb-2"><Award className="w-4 h-4"/> Mission</h5>
                                    <p className="text-muted-foreground">{branch.mission}</p>
                                  </div>
                                </div>
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
                                  <p className="text-xs text-muted-foreground leading-relaxed">{branch.description}</p>
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
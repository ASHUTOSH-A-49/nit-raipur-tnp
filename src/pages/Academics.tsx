import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Clock, Users, BookOpen } from "lucide-react";

const programs = [
  {
    category: "B.Tech Programs",
    duration: "4 Years",
    courses: [
      { name: "Computer Science & Engineering", seats: 180 },
      { name: "Electronics & Communication Engineering", seats: 120 },
      { name: "Electrical Engineering", seats: 120 },
      { name: "Mechanical Engineering", seats: 120 },
      { name: "Civil Engineering", seats: 120 },
      { name: "Chemical Engineering", seats: 60 },
      { name: "Metallurgical & Materials Engineering", seats: 60 },
      { name: "Mining Engineering", seats: 60 },
      { name: "Biomedical Engineering", seats: 60 },
      { name: "Information Technology", seats: 90 },
      { name: "Biotechnology", seats: 60 },
      { name: "Architecture", seats: 40 },
    ],
  },
  {
    category: "M.Tech Programs",
    duration: "2 Years",
    courses: [
      { name: "Computer Science & Engineering", seats: 25 },
      { name: "VLSI Design", seats: 20 },
      { name: "Power Electronics", seats: 20 },
      { name: "Structural Engineering", seats: 25 },
      { name: "Thermal Engineering", seats: 20 },
      { name: "Environmental Engineering", seats: 20 },
      { name: "Industrial Metallurgy", seats: 15 },
      { name: "Data Science", seats: 25 },
      { name: "Information Security", seats: 20 },
    ],
  },
  {
    category: "M.Sc Programs",
    duration: "2 Years",
    courses: [
      { name: "Physics", seats: 30 },
      { name: "Chemistry", seats: 30 },
      { name: "Mathematics", seats: 30 },
    ],
  },
  {
    category: "Ph.D Programs",
    duration: "3-5 Years",
    courses: [
      { name: "All Engineering Departments", seats: "Various" },
      { name: "Science Departments", seats: "Various" },
      { name: "Humanities & Social Sciences", seats: "Various" },
    ],
  },
  {
    category: "MBA Program",
    duration: "2 Years",
    courses: [
      { name: "Master of Business Administration", seats: 60 },
    ],
  },
  {
    category: "MCA Program",
    duration: "2 Years",
    courses: [
      { name: "Master of Computer Applications", seats: 60 },
    ],
  },
];

const Academics = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              NIT Raipur offers a diverse range of undergraduate, postgraduate, and doctoral programs across engineering, science, and management disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl shadow-elegant overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-primary px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    <h2 className="text-xl font-bold text-primary-foreground">{program.category}</h2>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                </div>

                {/* Courses Grid */}
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {program.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors duration-200 group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {course.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                              <Users className="w-4 h-4" />
                              <span>{course.seats} Seats</span>
                            </div>
                          </div>
                          <BookOpen className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-secondary rounded-xl text-center"
          >
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Seat numbers are approximate and may vary. For the latest information, please visit the official NIT Raipur website or contact the academic section.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;

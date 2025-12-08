import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Linkedin, Mail, Phone } from "lucide-react";

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

const Team = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Meet the dedicated student placement conveners who work tirelessly to connect students with their dream careers.
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
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Student Leaders</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Placement Conveners 2024-25</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conveners.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant group hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar */}
                <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
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
                  <p className="text-muted-foreground text-sm mb-4">{member.year}</p>

                  <div className="space-y-2 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

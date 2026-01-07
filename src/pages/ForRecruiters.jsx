import { Layout } from "@/components/layout/Layout.jsx";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Award, 
  MapPin, 
  CheckCircle2,
  FileText,
  Download,
  Search,
  ClipboardCheck,
  Send,
  Globe,
  Eye,
  UserCheck,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

import CCCImg from "@/assets/facilities/ccc.jpeg";
import LibraryImg from "@/assets/facilities/central-library.jpeg";
import GardenImg from "../assets/facilities/Central-garden.jpg";
import LabImg from "@/assets/facilities/computer-lab.jpeg";
import GuestHouseImg from "@/assets/facilities/guest-house.jpeg";
import GDRoomImg from "@/assets/facilities/interview-panel.jpeg";
import PPTHallImg from "@/assets/facilities/ppt-hall.jpeg";


//docs
import PlacementBrochure from "@/assets/docs/placement_brochure_2026.pdf";
import PlacementPolicy from "@/assets/docs/placement_policy_2025-26.pdf";
import InternshipPolicy from "@/assets/docs/Internship_Policy_2025-26.pdf";
import JobResponseForm from "@/assets/docs/job_response_form.pdf";
import InternshipResponseForm from "@/assets/docs/Internship_response_form.pdf";

const whyRecruitReasons = [
  {
    icon: Award,
    title: "Institute of National Importance",
    description: "Ranked among the top engineering institutions in India, producing graduates with rigorous technical training and analytical skills."
  },
  {
    icon: GraduationCap,
    title: "Diverse Specializations",
    description: "A wide talent pool from 11 B.Tech branches and 20+ PG programs including specialized fields like Mining, Metallurgy, and Biomedical Engineering."
  },
  {
    icon: Building2,
    title: "Industry-Aligned Curriculum",
    description: "Coursework is regularly updated with industry inputs, ensuring students are proficient in modern tools, AI/ML, and core engineering fundamentals."
  },
  {
    icon: Users,
    title: "Holistic Development",
    description: "Our students manage 20+ technical and cultural clubs, fostering leadership, teamwork, and soft skills essential for corporate roles."
  },
  {
    icon: Trophy,
    title: "Legacy of Excellence",
    description: "Over 60 years of heritage with a strong alumni network of 25,000+ professionals leading global Fortune 500 companies."
  },
  {
    icon: MapPin,
    title: "Excellent Logistics",
    description: "Raipur is well-connected by air and rail. The TPO provides seamless on-campus hospitality and state-of-the-art recruitment infrastructure."
  }
];

const placementSteps = [
  {
    step: 1,
    icon: Search,
    title: "Company Registration",
    description: "Companies click on the placement/internship drive invitation link to register their organization on the portal."
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Creating a Job",
    description: "Choose job type (Full-Time, B.Tech/M.Tech Internship). Fill details in the Job Announcement Form (JAF) or Internship Release Form (IRF)."
  },
  {
    step: 3,
    icon: Send,
    title: "Post Job to Institute",
    description: "The created job profile is sent to the Placement Officer who reviews and verifies the JAF/IRF requirements."
  },
  {
    step: 4,
    icon: Globe,
    title: "Publishing JAF/IRF",
    description: "After verification, the JAF/IRF is published online to eligible students along with all company-provided details."
  },
  {
    step: 5,
    icon: Eye,
    title: "Viewing Jobs & Applicants",
    description: "Interested students apply. The list of eligible candidates and their resumes are made available via the recruiter's account."
  },
  {
    step: 6,
    icon: UserCheck,
    title: "Conducting the Interview",
    description: "Recruiters shortlist students and conduct tests/interviews through online or offline modes as per convenience."
  },
  {
    step: 7,
    icon: CheckCircle2,
    title: "Declaring the Results",
    description: "Final selections and waitlists are provided to the Placement Officer. A placement representative assists throughout the process."
  }
];

const faqs = [
  {
    question: "What are the job categories and the 'One Student One Job' policy?",
    answer: "NIT Raipur follows a 'One Student One Job' policy. However, jobs are categorized into A1, A2, and Dream. If a student is placed in a lower category, they may be eligible to sit for a 'Dream' company or a higher category company as per TPO guidelines."
  },
  {
    question: "What are JAF and IRF?",
    answer: "JAF (Job Announcement Form) is for Full-Time recruitment, while IRF (Internship Release Form) is for Summer or Semester-long internships. These forms capture details like CTC, job description, and eligibility."
  },
  {
    question: "How are the interview slots assigned?",
    answer: "Slots are assigned based on the company's rank, CTC offered, historical relationship with the institute, and student preferences. The TPO office coordinates with recruiters for mutually convenient dates."
  },
  {
    question: "What is the policy for Summer Internships?",
    answer: "The internship season starts alongside the placement season. Students are eligible for 2-month summer internships (May-July) or 6-month semester internships (Final Year) depending on department permissions."
  },
  {
    question: "Does the institute provide infrastructure for online testing?",
    answer: "Yes, the Central Computer Centre (CCC) can accommodate over 250 students simultaneously for proctored online assessments with high-speed internet connectivity."
  },
  {
    question: "What is the procedure for extending a PPO?",
    answer: "Companies must inform the TPO office regarding Pre-Placement Offers (PPO) made to interns before the placement season begins. PPOs are counted as the student's primary job offer under the placement policy."
  }
];

const facilities = [
  { title: "Central Computer Centre", description: "High-end computing facilities for online tests.", image: CCCImg },
  { title: "Central Library", description: "Resource-rich environment for students.", image: LibraryImg },
  { title: "Central Garden", description: "Serene environment within the campus.", image: GardenImg },
  { title: "Computer Lab", description: "Specialized labs for technical assessments.", image: LabImg },
  { title: "Guest Rooms", description: "Comfortable stay for visiting recruiters.", image: GuestHouseImg },
  { title: "GD & PI Rooms", description: "Dedicated spaces for interviews and discussions.", image: GDRoomImg },
  { title: "Online Presentation and Seminar Hall", description: "State-of-the-art Auditorium & Seminar Halls.", image: PPTHallImg },
];

const documents = [
  {
    title: "Placement Brochure 2026",
    description: "Comprehensive guide featuring department overviews, student demographics, and past recruitment statistics.",
    type: "PDF",
    link: PlacementBrochure
  },
  {
    title: "Placement Policy 2025-26",
    description: "Official recruitment guidelines covering job categories (A1, A2, Dream) and student eligibility rules.",
    type: "PDF",
    link: PlacementPolicy
  },
  {
    title: "Internship Policy 2025-26",
    description: "Guidelines for summer and semester-long internships, including PPO conversion rules.",
    type: "PDF",
    link: InternshipPolicy
  },
  {
    title: "Job Announcement Form (JAF)",
    description: "Standard response form for recruiters to provide full-time job details and salary breakdowns.",
    type: "PDF",
    link: JobResponseForm
  },
  {
    title: "Internship Response Form (IRF)",
    description: "Standard response form for organizations offering internship opportunities to students.",
    type: "PDF",
    link: InternshipResponseForm
  }
];

const ForRecruiters = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Empower Your Team with NIT Raipur Talent
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Partner with one of India's premier technical institutions. Our recruitment process is 
              streamlined, transparent, and designed to connect you with industry-ready professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Recruit Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Recruit from NIT Raipur?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our graduates are defined by technical prowess, resilience, and a drive for innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRecruitReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 bg-card">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Procedure Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Step-by-Step Placement Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A digitized and efficient workflow for campus recruitment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

              {placementSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-elegant z-10">
                    {step.step}
                  </div>

                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <step.icon className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recruitment Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Equipped with modern technology to support both physical and virtual drives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-lg
                  ${index === 6 ? "lg:col-start-2" : ""} 
                `}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Placement Policy & FAQs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential information regarding recruitment regulations and logistics
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem 
                    value={`faq-${index}`} 
                    className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {documents.map((doc, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`
            ${documents.length % 2 !== 0 && index === documents.length - 1 
              ? "md:col-span-2 md:w-1/2 md:mx-auto" 
              : "w-full"}
          `}
        >
          <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {doc.title}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold uppercase shrink-0">
                      {doc.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {doc.description}
                  </p>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto" asChild>
                      <a href={doc.link} download={`${doc.title}.pdf`} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" /> Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Recruitment Journey
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Reach out to our Training & Placement Office to schedule your visit or virtual drive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold" asChild>
                <a href="mailto:tpo@nitrr.ac.in">Email TPO Office</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+917400730333">+91-7400730333</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ForRecruiters;
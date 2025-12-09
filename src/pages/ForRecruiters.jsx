import { Layout } from "@/components/layout/Layout.jsx"; // <-- Updated
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Award, 
  MapPin, 
  Wifi, 
  Monitor, 
  Presentation, 
  Home, 
  HeadphonesIcon,
  FileText,
  Download,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx"; // <-- Updated
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx"; // <-- Updated
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx"; // <-- Updated

const whyRecruitReasons = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Students with strong fundamentals in engineering and technology, trained by experienced faculty with industry and research expertise."
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description: "Access to talented students from 11 undergraduate and 20+ postgraduate programs across various engineering and science disciplines."
  },
  {
    icon: Building2,
    title: "Industry-Ready Graduates",
    description: "Our curriculum is designed with industry inputs, ensuring graduates are equipped with practical skills and modern technologies."
  },
  {
    icon: Award,
    title: "60+ Years of Excellence",
    description: "Established in 1956, NIT Raipur has a rich legacy of producing successful engineers who are leaders in their respective fields."
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Located in Raipur, the capital of Chhattisgarh, with excellent air, rail, and road connectivity for easy access."
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "Consistent placement record with 150+ recruiters visiting campus annually, including Fortune 500 companies."
  }
];

const placementSteps = [
  {
    step: 1,
    title: "Invitation & Registration",
    description: "Formal invitation sent to companies. Companies confirm participation and register on the TPO portal."
  },
  {
    step: 2,
    title: "Job Notification Form (JNF)",
    description: "Companies submit JNF with job description, eligibility criteria, salary package, and selection process details."
  },
  {
    step: 3,
    title: "Pre-Placement Talk (Optional)",
    description: "Companies conduct PPT sessions to provide insights about the organization, work culture, and opportunities."
  },
  {
    step: 4,
    title: "Resume Shortlisting",
    description: "Access to interested students' resumes is provided. Companies shortlist candidates based on their criteria."
  },
  {
    step: 5,
    title: "Online Assessment",
    description: "Conduct aptitude tests, coding challenges, or technical assessments using our computer center facilities."
  },
  {
    step: 6,
    title: "Interviews & Selection",
    description: "Technical and HR interviews conducted on campus. Final list of selected candidates submitted to TPO."
  },
  {
    step: 7,
    title: "Offer Rollout",
    description: "Selected students receive offer letters. TPO coordinates with company and students for joining formalities."
  }
];

const facilities = [
  {
    icon: Monitor,
    title: "Central Computer Centre",
    description: "State-of-the-art facility for online tests with 250+ computer systems at one place."
  },
  {
    icon: Presentation,
    title: "Auditorium & Seminar Halls",
    description: "Well-equipped and spacious auditorium for pre-placement talks and company presentations."
  },
  {
    icon: Wifi,
    title: "Video Conferencing",
    description: "Advanced video conferencing facility for remote interviews and virtual recruitment drives."
  },
  {
    icon: Users,
    title: "GD & PI Rooms",
    description: "Well-equipped rooms specifically designed for group discussions and personal interviews."
  },
  {
    icon: Home,
    title: "Guest House",
    description: "Comfortable accommodation facilities for recruiting team members during campus visits."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Fully computerized and air-conditioned TPO office with dedicated placement coordinators."
  }
];

const faqs = [
  {
    question: "What programs are available for recruitment at NIT Raipur?",
    answer: "NIT Raipur offers 11 undergraduate B.Tech programs, 20+ M.Tech programs, MCA, MBA, M.Sc, and Ph.D programs. Companies can recruit from any of these programs based on their requirements."
  },
  {
    question: "When does the placement season begin?",
    answer: "The placement season typically begins in July-August for full-time positions and December-January for internships. Companies can register throughout the year for recruitment."
  },
  {
    question: "What is the process for virtual/online recruitment?",
    answer: "We provide complete support for virtual recruitment including video conferencing facilities, proctored online assessments, and coordination for remote interviews. Our technical team ensures smooth conduct of online drives."
  },
  {
    question: "How can we schedule a campus visit?",
    answer: "Companies can contact the TPO office via email at tpo@nitrr.ac.in or call +91-7400730333 to schedule a campus visit. We provide complete hospitality support including accommodation and local transport."
  },
  {
    question: "What is the minimum CTC for registration?",
    answer: "There is no strict minimum CTC requirement. However, companies are encouraged to offer competitive packages aligned with industry standards for NITs."
  },
  {
    question: "Can we conduct Pre-Placement Offers (PPO)?",
    answer: "Yes, companies that have provided internships to our students can extend PPOs. The process is coordinated through the TPO office with proper documentation."
  }
];

const documents = [
  {
    title: "Placement Brochure 2024-25",
    description: "Comprehensive guide about NIT Raipur, programs, and placement statistics",
    type: "PDF",
    link: "https://tpo.nitrr.ac.in/"
  },
  {
    title: "Job Notification Form (JNF)",
    description: "Form for companies to submit job details and requirements",
    type: "DOC",
    link: "https://tpo.nitrr.ac.in/"
  },
  {
    title: "Placement Policy",
    description: "Official placement policies and guidelines for recruiters",
    type: "PDF",
    link: "https://tpo.nitrr.ac.in/"
  },
  {
    title: "Internship Notification Form (INF)",
    description: "Form for companies offering internship opportunities",
    type: "DOC",
    link: "https://tpo.nitrr.ac.in/"
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
              Partner with NIT Raipur
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join 150+ leading companies that recruit top engineering talent from NIT Raipur. 
              Our students are industry-ready professionals equipped with strong technical skills and innovative mindset.
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
              Discover what makes NIT Raipur graduates stand out from the crowd
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
              Placement Procedure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined recruitment process designed for your convenience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
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
                  {/* Step Number */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-elegant z-10">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
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
              Facilities Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              World-class infrastructure for a seamless recruitment experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-card to-secondary/20 border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                      <p className="text-muted-foreground text-sm">{facility.description}</p>
                    </div>
                  </CardContent>
                </Card>
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
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common queries about recruiting from NIT Raipur
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
                    <AccordionContent className="text-muted-foreground pb-4">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Important Documents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download essential documents and forms for the recruitment process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{doc.title}</h3>
                          <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                            {doc.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          asChild
                        >
                          <a href={doc.link} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </Button>
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
              Ready to Recruit from NIT Raipur?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join our network of leading recruiters and get access to exceptional engineering talent. 
              Contact us to begin your recruitment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-sky hover:bg-sky/90 text-primary font-semibold"
                asChild
              >
                <a href="mailto:tpo@nitrr.ac.in">Contact TPO Office</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
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
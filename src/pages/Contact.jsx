import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout.jsx"; 
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button.jsx"; 
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { toast } from "sonner";
import contactBanner from "@/assets/audi.jpg";
import emailjs from '@emailjs/browser';




const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Training & Placement Cell, NIT Raipur, G.E. Road, Raipur, Chhattisgarh 492010",
  },
  {
    icon: Phone,
    title: "Phone",
    person: {
      name: "Dr. Vivek Kumar Gabba",
      designation: "Faculty Incharge, Training & Placement Cell",
      phone: "+91-9406173242",
    },
    links: [
      { label: "+91-9406173242", href: "tel:+919406173242", primary: true },
      { divider: true },
      { label: "+91-7400730333", href: "tel:+917400730333" },
      { label: "+91-7712253675", href: "tel:+917712253675" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    links: [
      { label: "tpo@nitrr.ac.in", href: "mailto:tpo@nitrr.ac.in" },
      { label: "placementcell@nitrr.ac.in", href: "mailto:placementcell@nitrr.ac.in" },
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
];

const Contact = () => {
  console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sending via EmailJS using your .env variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Trigger the custom popup
      setShowSuccessPopup(true);
      
      // Secondary toast notification
      toast.success("Message sent successfully!");

      // Clear the form fields
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });

      // Automatically hide the popup after 4 seconds
      setTimeout(() => setShowSuccessPopup(false), 4000);

    } catch (error) {
  console.error("EmailJS Error Details:", error);
  // This will show you the exact error message from EmailJS in a popup
  toast.error(`Error: ${error.text || "Check console for details"}`);
} finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Success Notification Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100] bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-green-500/50 min-w-[300px]"
          >
            <div className="bg-white/20 p-2 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold">Message Sent!</p>
              <p className="text-sm text-green-50/90">We'll get back to you as soon as possible.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-28 flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[1px]" />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get in touch with our Training & Placement Cell for recruitment queries,
              partnerships, or any other inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help and answer any questions you might have. We look forward to hearing from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.person && (
                        <div className="mb-2">
                          <p className="font-medium text-foreground">{item.person.name}</p>
                          <p className="text-sm text-muted-foreground">{item.person.designation}</p>
                        </div>
                      )}
                      {item.links ? (
                        <div className="flex flex-col">
                          {item.links.map((link, idx) =>
                            link.divider ? (
                              <div key={idx} className="h-2" />
                            ) : (
                              <a
                                key={idx}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary transition-colors block text-sm md:text-base"
                              >
                                {link.label}
                              </a>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.54847387349!2d81.60284041121081!3d21.249722100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddce40000001%3A0x334a65499292393!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NIT Raipur Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your recruitment needs or any queries..."
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
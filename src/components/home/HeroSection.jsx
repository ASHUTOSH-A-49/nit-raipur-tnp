import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button.jsx"; // <-- Updated
import { Link } from "react-router-dom";
// This import is already valid JavaScript
import campusImage from "@/assets/nitrr-campus.jpg"; 

const stats = [
  { icon: Users, value: "3000+", label: "Students Placed" },
  { icon: Building2, value: "150+", label: "Recruiters" },
  { icon: Award, value: "60+", label: "Years Legacy" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={campusImage}
          alt="NIT Raipur Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sky text-xl font-bold tracking-wider uppercase mb-4"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Training & Placement Cell
            <span className="block text-sky mt-2">NIT Raipur</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-xl leading-relaxed"
          >
            Bridging talented engineers with industry leaders. Serving the cause of technical education and career excellence for over six decades.
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="flex flex-wrap gap-4 mb-12"
>
  {/* Primary CTA */}
  <motion.div
    whileHover={{ y: -4, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
  >
    <Button
      asChild
      size="lg"
      className="
        group
        bg-sky
        hover:bg-sky/90
        text-primary
        font-semibold
        shadow-lg
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <Link to="/placements" className="flex items-center">
        View Placements
        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Button>
  </motion.div>

  {/* Secondary CTA */}
  <motion.div
    whileHover={{ y: -4, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
  >
    <Button
      asChild
      size="lg"
      variant="outline"
      className="
        relative overflow-hidden
        border-primary-foreground/40
        bg-primary-foreground/10
        text-primary-foreground
        font-semibold
        hover:bg-primary-foreground/20
        shadow-md
        hover:shadow-lg
        transition-all duration-300
      "
    >
      <Link to="/recruiters" className="relative z-10">
        Recruit from NITRR
      </Link>
    </Button>
  </motion.div>
</motion.div>

          {/* Stats */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  }}
  className="grid grid-cols-3 gap-6 max-w-lg"
>
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -4, scale: 1.05 }}
      className=""
    >
      <div className="w-12 h-12 mb-2  rounded-lg bg-primary-foreground/10 flex items-center justify-center transition-colors duration-300 hover:bg-primary-foreground/20">
        <stat.icon className="w-6 h-6 text-sky" />
      </div>
      <p className="text-2xl font-bold text-primary-foreground">
        {stat.value}
      </p>
      <p className="text-xs text-primary-foreground/70">
        {stat.label}
      </p>
    </motion.div>
  ))}
</motion.div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
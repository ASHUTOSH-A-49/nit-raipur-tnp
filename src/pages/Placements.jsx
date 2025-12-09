import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout.jsx"; // <-- Updated
import { TrendingUp, Award, Users, Briefcase } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const batches = ["2025", "2024", "2023", "2022", "2021"];

// CRITICAL CHANGE 1: The TypeScript type definition (Record<...>) is removed, 
// keeping only the JavaScript object literal assignment.
const placementData = {
  "2025": {
    // CRITICAL CHANGE 2: Removed ': typeof TrendingUp' type assertion from icon
    stats: [
      { value: "85%", label: "Overall Placement Rate", icon: TrendingUp }, 
      { value: "₹54 LPA", label: "Highest Package", icon: Award },
      { value: "₹12.5 LPA", label: "Average Package", icon: Briefcase },
      { value: "520+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", placed: 165, percentage: 95 },
      { name: "ECE", placed: 98, percentage: 88 },
      { name: "EE", placed: 85, percentage: 82 },
      { name: "ME", placed: 78, percentage: 75 },
      { name: "CE", placed: 65, percentage: 70 },
      { name: "IT", placed: 75, percentage: 92 },
      { name: "MME", placed: 35, percentage: 68 },
      { name: "CHE", placed: 32, percentage: 65 },
    ],
    sectorWise: [
      { name: "IT/Software", value: 45 },
      { name: "Core Engineering", value: 25 },
      { name: "Consulting", value: 12 },
      { name: "Finance", value: 10 },
      { name: "Others", value: 8 },
    ],
  },
  "2024": {
    stats: [
      { value: "82%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹48 LPA", label: "Highest Package", icon: Award },
      { value: "₹11.8 LPA", label: "Average Package", icon: Briefcase },
      { value: "490+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", placed: 155, percentage: 92 },
      { name: "ECE", placed: 90, percentage: 85 },
      { name: "EE", placed: 80, percentage: 78 },
      { name: "ME", placed: 72, percentage: 72 },
      { name: "CE", placed: 60, percentage: 65 },
      { name: "IT", placed: 70, percentage: 90 },
      { name: "MME", placed: 30, percentage: 62 },
      { name: "CHE", placed: 28, percentage: 60 },
    ],
    sectorWise: [
      { name: "IT/Software", value: 48 },
      { name: "Core Engineering", value: 22 },
      { name: "Consulting", value: 14 },
      { name: "Finance", value: 9 },
      { name: "Others", value: 7 },
    ],
  },
  "2023": {
    stats: [
      { value: "80%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹44 LPA", label: "Highest Package", icon: Award },
      { value: "₹10.5 LPA", label: "Average Package", icon: Briefcase },
      { value: "460+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", placed: 148, percentage: 90 },
      { name: "ECE", placed: 85, percentage: 82 },
      { name: "EE", placed: 75, percentage: 75 },
      { name: "ME", placed: 68, percentage: 70 },
      { name: "CE", placed: 55, percentage: 62 },
      { name: "IT", placed: 65, percentage: 88 },
      { name: "MME", placed: 28, percentage: 58 },
      { name: "CHE", placed: 25, percentage: 55 },
    ],
    sectorWise: [
      { name: "IT/Software", value: 50 },
      { name: "Core Engineering", value: 20 },
      { name: "Consulting", value: 13 },
      { name: "Finance", value: 10 },
      { name: "Others", value: 7 },
    ],
  },
  "2022": {
    stats: [
      { value: "78%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹40 LPA", label: "Highest Package", icon: Award },
      { value: "₹9.8 LPA", label: "Average Package", icon: Briefcase },
      { value: "420+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", placed: 140, percentage: 88 },
      { name: "ECE", placed: 80, percentage: 80 },
      { name: "EE", placed: 70, percentage: 72 },
      { name: "ME", placed: 62, percentage: 68 },
      { name: "CE", placed: 50, percentage: 58 },
      { name: "IT", placed: 60, percentage: 85 },
      { name: "MME", placed: 25, percentage: 55 },
      { name: "CHE", placed: 22, percentage: 52 },
    ],
    sectorWise: [
      { name: "IT/Software", value: 46 },
      { name: "Core Engineering", value: 24 },
      { name: "Consulting", value: 12 },
      { name: "Finance", value: 11 },
      { name: "Others", value: 7 },
    ],
  },
  "2021": {
    stats: [
      { value: "75%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹36 LPA", label: "Highest Package", icon: Award },
      { value: "₹8.5 LPA", label: "Average Package", icon: Briefcase },
      { value: "380+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", placed: 130, percentage: 85 },
      { name: "ECE", placed: 75, percentage: 78 },
      { name: "EE", placed: 65, percentage: 70 },
      { name: "ME", placed: 58, percentage: 65 },
      { name: "CE", placed: 45, percentage: 55 },
      { name: "IT", placed: 55, percentage: 82 },
      { name: "MME", placed: 22, percentage: 52 },
      { name: "CHE", placed: 20, percentage: 48 },
    ],
    sectorWise: [
      { name: "IT/Software", value: 44 },
      { name: "Core Engineering", value: 26 },
      { name: "Consulting", value: 11 },
      { name: "Finance", value: 12 },
      { name: "Others", value: 7 },
    ],
  },
};

const COLORS = ["hsl(213, 78%, 21%)", "hsl(210, 100%, 56%)", "hsl(213, 65%, 40%)", "hsl(45, 93%, 47%)", "hsl(215, 20%, 65%)"];

const Placements = () => {
  const [selectedBatch, setSelectedBatch] = useState("2025");
  const currentData = placementData[selectedBatch];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Statistics</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive analysis of placement data and career outcomes across academic years.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Batch Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Academic Year Selection</h2>
            <p className="text-muted-foreground mb-6">Choose a year to view detailed placement statistics</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {batches.map((batch) => (
                <button
                  key={batch}
                  onClick={() => setSelectedBatch(batch)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedBatch === batch
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {batch} Batch
                </button>
              ))}
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            key={selectedBatch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Key Performance Indicators</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {currentData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-elegant text-center border-l-4 border-accent"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Branch-wise Chart */}
              <div className="bg-card rounded-2xl p-6 shadow-elegant">
                <h3 className="text-xl font-bold text-foreground mb-6">Branch-wise Placement Rate</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={currentData.branchWise} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                    <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" width={50} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      // CRITICAL CHANGE 3: Removed TypeScript type annotation from formatter
                      formatter={(value) => [`${value}%`, "Placement Rate"]}
                    />
                    <Bar dataKey="percentage" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Sector-wise Chart */}
              <div className="bg-card rounded-2xl p-6 shadow-elegant">
                <h3 className="text-xl font-bold text-foreground mb-6">Sector-wise Distribution</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={currentData.sectorWise}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={120}
                      dataKey="value"
                    >
                      {currentData.sectorWise.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
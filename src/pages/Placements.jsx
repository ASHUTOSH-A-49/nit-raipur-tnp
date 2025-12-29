import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout.jsx";
import { TrendingUp, Award, Users, Briefcase } from "lucide-react";
import placementBanner from "@/assets/placement-banner-2.png"; 
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const batches = ["2025", "2024", "2023"];

const placementData = {
  "2025": {
    stats: [
      { value: "76.73%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹60 LPA", label: "Highest Package", icon: Award },
      { value: "₹11.1 LPA", label: "Average Package", icon: Briefcase },
      { value: "700+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
  { name: "CSE", highest: 40, average: 12.2, median: 10.1, placed: 165, percentage: 95 },
  { name: "IT",  highest: 34, average: 11.6, median: 9.9,  placed: 75,  percentage: 92 },

  { name: "ECE", highest: 28, average: 9.9,  median: 8.6,  placed: 98,  percentage: 88 },
  { name: "EE",  highest: 24, average: 9.0,  median: 7.7,  placed: 85,  percentage: 82 },
  { name: "ME",  highest: 22, average: 8.6,  median: 7.3,  placed: 78,  percentage: 75 },
  { name: "CE",  highest: 19, average: 7.8,  median: 6.5,  placed: 65,  percentage: 70 },

  { name: "MME", highest: 16, average: 7.0,  median: 5.9,  placed: 35,  percentage: 68 },
  { name: "CHE", highest: 14, average: 6.6,  median: 5.5,  placed: 32,  percentage: 65 },
],

    sectorWise: [
      { name: "IT/Software", value: 45 },
      { name: "Core Engineering", value: 25 },
      { name: "Consulting", value: 12 },
      { name: "Finance", value: 10 },
      { name: "Others", value: 8 },
    ],
    salaryStats: [
      { name: "Highest", value: 54 },
      { name: "Average", value: 12.5 },
      { name: "Median", value: 10.2 },
      { name: "Lowest", value: 4.5 },
    ],
  },

  "2024": {
    stats: [
      { value: "75%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹62 LPA", label: "Highest Package", icon: Award },
      { value: "₹10.8 LPA", label: "Average Package", icon: Briefcase },
      { value: "750+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
  { name: "CSE", highest: 38, average: 11.8, median: 9.8,  placed: 155, percentage: 92 },
  { name: "IT",  highest: 32, average: 11.1, median: 9.4,  placed: 70,  percentage: 90 },

  { name: "ECE", highest: 26, average: 9.4,  median: 8.2,  placed: 90,  percentage: 85 },
  { name: "EE",  highest: 23, average: 8.7,  median: 7.4,  placed: 80,  percentage: 78 },
  { name: "ME",  highest: 21, average: 8.3,  median: 7.0,  placed: 72,  percentage: 72 },
  { name: "CE",  highest: 18, average: 7.5,  median: 6.2,  placed: 60,  percentage: 65 },

  { name: "MME", highest: 15, average: 6.8,  median: 5.6,  placed: 30,  percentage: 62 },
  { name: "CHE", highest: 13, average: 6.3,  median: 5.2,  placed: 28,  percentage: 60 },
],

    sectorWise: [
      { name: "IT/Software", value: 48 },
      { name: "Core Engineering", value: 22 },
      { name: "Consulting", value: 14 },
      { name: "Finance", value: 9 },
      { name: "Others", value: 7 },
    ],
    salaryStats: [
      { name: "Highest", value: 48 },
      { name: "Average", value: 11.8 },
      { name: "Median", value: 9.6 },
      { name: "Lowest", value: 4.2 },
    ],
  },

  "2023": {
    stats: [
      { value: "76%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹55 LPA", label: "Highest Package", icon: Award },
      { value: "₹13.8 LPA", label: "Average Package", icon: Briefcase },
      { value: "800+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
  { name: "CSE", highest: 36, average: 11.2, median: 9.3,  placed: 148, percentage: 90 },
  { name: "IT",  highest: 30, average: 10.5, median: 8.9,  placed: 65,  percentage: 88 },

  { name: "ECE", highest: 25, average: 8.9,  median: 7.8,  placed: 85,  percentage: 82 },
  { name: "EE",  highest: 22, average: 8.2,  median: 7.0,  placed: 75,  percentage: 75 },
  { name: "ME",  highest: 20, average: 7.9,  median: 6.7,  placed: 68,  percentage: 70 },
  { name: "CE",  highest: 17, average: 7.1,  median: 5.9,  placed: 55,  percentage: 62 },

  { name: "MME", highest: 14, average: 6.4,  median: 5.3,  placed: 28,  percentage: 58 },
  { name: "CHE", highest: 12, average: 6.0,  median: 4.9,  placed: 25,  percentage: 55 },
],

    sectorWise: [
      { name: "IT/Software", value: 50 },
      { name: "Core Engineering", value: 20 },
      { name: "Consulting", value: 13 },
      { name: "Finance", value: 10 },
      { name: "Others", value: 7 },
    ],
  },
};

const COLORS = [
  "hsl(213, 78%, 21%)",
  "hsl(210, 100%, 56%)",
  "hsl(213, 65%, 40%)",
  "hsl(45, 93%, 47%)",
  "hsl(215, 20%, 65%)",
];

const Placements = () => {
  const [selectedBatch, setSelectedBatch] = useState("2025");
  const [showBranchDetails, setShowBranchDetails] = useState(false);

  const currentData = placementData[selectedBatch];

  return (
    <Layout>
     {/* Hero */}
<section
  className="relative py-20 lg:py-28 flex items-center justify-center"
  style={{
    backgroundImage: `url(${placementBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* 🔷 Blue Overlay */}
  <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-[1px]" />

  <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Statistics</h1>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        Comprehensive analysis of placement data and career outcomes.
      </p>
    </motion.div>
  </div>
</section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Batch Selection */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Academic Year Selection</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {batches.map((batch) => (
                <button
                  key={batch}
                  onClick={() => {
                    setSelectedBatch(batch);
                    setShowBranchDetails(false);
                  }}
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    selectedBatch === batch
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {batch} Batch
                </button>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <h2 className="text-2xl font-bold text-center mb-8">
            Key Performance Indicators
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentData.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl text-center shadow-elegant border-l-4 border-accent"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="text-center mb-16">
            <button
              onClick={() => setShowBranchDetails(!showBranchDetails)}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90"
            >
              {showBranchDetails
                ? "Hide Branch-wise Placement Summary"
                : `View Branch-wise Placement Summary (${selectedBatch})`}
            </button>
          </div>

          {/* Branch-wise Cards */}
          {showBranchDetails && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-20">
              <h3 className="text-2xl font-bold text-center mb-8">
                Branch-wise Placement Overview
              </h3>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {currentData.branchWise.map((b, i) => (
    <div
      key={i}
      className="bg-card p-6 rounded-xl shadow-elegant border-t-4 border-primary"
    >
      <h4 className="text-lg font-semibold text-center mb-4">
        {b.name}
      </h4>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Highest</span>
          <span className="font-semibold">₹{b.highest} LPA</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Average</span>
          <span className="font-semibold">₹{b.average} LPA</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Median</span>
          <span className="font-semibold">₹{b.median} LPA</span>
        </div>
      </div>
    </div>
  ))}
</div>

            </motion.div>
          )}

          {/* Existing Charts */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Branch Chart */}
            <div className="bg-card p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-bold mb-6">Branch-wise Placement Rate</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={currentData.branchWise} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip formatter={(v) => [`${v}%`, "Placement Rate"]} />
                  <Bar dataKey="percentage" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Sector Chart */}
            <div className="bg-card p-6 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-bold mb-6">Sector-wise Distribution</h3>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={currentData.sectorWise}
                    dataKey="value"
                    outerRadius={120}
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {currentData.sectorWise.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          

        </div>
      </section>
    </Layout>
  );
};

export default Placements;

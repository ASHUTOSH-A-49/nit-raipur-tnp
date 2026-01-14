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
      { value: "750+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
  { name: "CSE", highest: 60, average: 19, median: 13.65, placed: 91, percentage: 85.8 },
  { name: "IT",  highest: 60, average: 19.85, median: 13.65, placed: 95, percentage: 85.5 },
  { name: "ECE", highest: 58.3, average: 14.03, median: 11.4, placed: 76, percentage: 79.2 },
  { name: "EE",  highest: 42, average: 9.75, median: 8, placed: 95, percentage: 90.4 },
  { name: "ME",  highest: 24, average: 8.67, median: 8, placed: 89, percentage: 94.6 },
  { name: "CE",  highest: 19.85, average: 6.74, median: 6, placed: 51, percentage: 63.75 },
  { name: "MME", highest: 14.45, average: 9.15, median: 8, placed: 72, percentage: 85 },
  { name: "CHE", highest: 13, average: 6.3, median: 5.2, placed: 63, percentage: 91.3 },
  { name: "MIN", highest: 16.5, average: 10.77, median: 10, placed: 46, percentage: 54.7 },
  { name: "BME", highest: 15, average: 11.37, median: 10.5, placed: 6, percentage: 20 },
  { name: "BT",  highest: 13.6, average: 10.56, median: 10.8, placed: 4, percentage: 10 },
  { name: "Arch",  highest: 13.6, average: 10.56, median: 10.8, placed: 4, percentage: 10 },
  { name: "MCA",  highest: 13.6, average: 10.56, median: 10.8, placed: 4, percentage: 10 },
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
      { value: "75%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹62 LPA", label: "Highest Package", icon: Award },
      { value: "₹10.8 LPA", label: "Average Package", icon: Briefcase },
      { value: "750+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", highest: 62, average: 19, median: 13.65,  placed: 84, percentage: 80 },
      { name: "IT",  highest: 58, average: 19.85, median: 13.65,  placed: 89,  percentage: 80 },
      { name: "ECE", highest: 58.3, average: 14.03,  median: 11.4,  placed: 96,  percentage: 85 },
      { name: "EE",  highest: 42, average: 9.75,  median: 8,  placed: 92,  percentage: 92 },
      { name: "ME",  highest: 24, average: 8.67,  median: 8,  placed: 87,  percentage: 92 },
      { name: "CE",  highest: 19.85, average: 6.74,  median: 6,  placed: 50,  percentage: 62.5 },
      { name: "MME", highest: 14.45, average: 9.15,  median: 8,  placed: 71,  percentage: 73.2 },
      { name: "CHE", highest: 13, average: 6.3,  median: 5.2,  placed: 28,  percentage: 60 },
      { name: "MIN", highest: 16.5, average: 10.77, median: 10, placed: 23, percentage: 27.4},
      { name: "BME", highest: 15, average: 11.37, median: 10.5, placed: 6, percentage: 14 },
      { name: "BT",  highest: 13.6, average: 10.56, median: 10.8, placed: 4, percentage: 9 },
      { name: "Arch",  highest: 13.6, average: 10.56, median: 10.8, placed: 4, percentage: 9 },
      { name: "MCA",  highest: 13.6, average: 10.56, median: 10.8, placed: 4, percentage: 9 },
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
      { value: "76%", label: "Overall Placement Rate", icon: TrendingUp },
      { value: "₹55 LPA", label: "Highest Package", icon: Award },
      { value: "₹13.8 LPA", label: "Average Package", icon: Briefcase },
      { value: "800+", label: "Total Offers", icon: Users },
    ],
    branchWise: [
      { name: "CSE", highest: 36, average: 11.2, median: 9.3,  placed: 87, percentage: 83.65},
      { name: "IT",  highest: 30, average: 10.5, median: 8.9,  placed: 67,  percentage: 84.4},
      { name: "ECE", highest: 25, average: 8.9,  median: 7.8,  placed: 84,  percentage: 81.5 },
      { name: "EE",  highest: 22, average: 8.2,  median: 7.0,  placed: 85,  percentage: 80.2 },
      { name: "ME",  highest: 20, average: 7.9,  median: 6.7,  placed: 83,  percentage: 81.37 },
      { name: "CE",  highest: 17, average: 7.1,  median: 5.9,  placed: 59,  percentage: 78.7 },
      { name: "MME", highest: 14, average: 6.4,  median: 5.3,  placed: 71,  percentage: 71.7},
      { name: "CHE", highest: 12, average: 6.0,  median: 4.9,  placed: 67,  percentage: 90.5 },
      { name: "MIN", highest: 13, average: 6.5, median: 5.4, placed: 60, percentage: 71.42 },
      { name: "BME", highest: 10, average: 5.6, median: 4.5, placed: 28, percentage: 48.2 },
      { name: "BT",  highest: 11, average: 5.9, median: 4.8, placed: 17, percentage: 34.7 },
      { name: "Arch",  highest: 11, average: 5.9, median: 4.8, placed: 17, percentage: 34.7 },
      { name: "MCA",  highest: 11, average: 5.9, median: 4.8, placed: 17, percentage: 34.7 },
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

const branchFullNameMap = {
  CSE: "Computer Science & Engineering",
  IT: "Information Technology",
  ECE: "Electronics & Communication ",
  EE: "Electrical ",
  ME: "Mechanical ",
  CE: "Civil ",
  CHE: "Chemical ",
  MME: "Metallurgical & Materials ",
  BME: "Biomedical ",
  BT: "Biotechnology",
  MIN: "Mining ",
  MCA: "Master in Computer Applications",
  Arch:"Architecture",

};

// ✅custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const branchCode = payload[0].payload.name;
    const fullName = branchFullNameMap[branchCode] || branchCode;

    return (
      // 👇 THIS div controls tooltip background
      <div className="bg-white text-black border rounded-md p-3 shadow-lg">
        <p className="font-semibold">
          {fullName}
        </p>
        <p className="text-sm">
          Placement Rate: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};



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
        {branchFullNameMap[b.name] || b.name}
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
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={currentData.branchWise} layout="vertical">
  <CartesianGrid strokeDasharray="3 3" />

  <XAxis type="number" domain={[0, 100]} />

  <YAxis
    dataKey="name"
    type="category"
    interval={0}
  />

  <Tooltip content={<CustomTooltip />} />

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
          {/* ================= DOWNLOAD PLACEMENT DOCUMENTS ================= */}
<section className="mt-10">
  <div className="container mx-auto px-4 lg:px-8 text-center">
    <h2 className="text-2xl font-bold mb-4">
      Download Placement Reports (Year-wise)
    </h2>

    <p className="text-muted-foreground mb-10">
      Official placement statistics and company-wise reports for previous academic years.
    </p>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      
      {/* 2024–25 */}
      <div className="w-full max-w-sm border rounded-xl p-6 shadow-sm bg-background">
        <h3 className="text-lg font-semibold mb-4">
          Academic Year 2024–2025
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="/Placement_Doc/senate_report_2024.pdf"
            download
            className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
          >
            Placement Statistics
          </a>

          <a
            href="/Placement_Doc/placement_report_2024.pdf"
            download
            className="px-5 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition"
          >
            Company-Wise Placements
          </a>
        </div>
      </div>

      {/* 2023–24 */}
      <div className="w-full max-w-sm border rounded-xl p-6 shadow-sm bg-background">
        <h3 className="text-lg font-semibold mb-4">
          Academic Year 2023–2024
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="/Placement_Doc/senate_report_2023.pdf"
            download
            className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
          >
            Placement Statistics
          </a>

          <a
            href="/Placement_Doc/placement_report_2023.pdf"
            download
            className="px-5 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition"
          >
            Company-Wise Placements
          </a>
        </div>
      </div>

      {/* 2022–23 */}
      <div className="w-full max-w-sm border rounded-xl p-6 shadow-sm bg-background">
        <h3 className="text-lg font-semibold mb-4">
          Academic Year 2022–2023
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="/Placement_Doc/senate_report_2022.pdf"
            download
            className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
          >
            Placement Statistics
          </a>

          <a
            href="/Placement_Doc/placement_report_2022.pdf"
            download
            className="px-5 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition"
          >
            Company-Wise Placements
          </a>
        </div>
      </div>

      {/* 2021–22 */}
      <div className="w-full max-w-sm border rounded-xl p-6 shadow-sm bg-background">
        <h3 className="text-lg font-semibold mb-4">
          Academic Year 2021–2022
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="/Placement_Doc/senate_report_2022.pdf"
            download
            className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
          >
            Placement Statistics
          </a>

          <a
            href="/Placement_Doc/placement_report_2021.pdf"
            download
            className="px-5 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition"
          >
            Company-Wise Placements
          </a>
        </div>
      </div>

      {/* 2020–21 */}
      <div className="w-full max-w-sm border rounded-xl p-6 shadow-sm bg-background">
        <h3 className="text-lg font-semibold mb-4">
          Academic Year 2020–2021
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="/Placement_Doc/senate_report_2022.pdf"
            download
            className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
          >
            Placement Statistics
          </a>

          <a
            href="/Placement_Doc/placement_report_2020.pdf"
            download
            className="px-5 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition"
          >
            Company-Wise Placements
          </a>
        </div>
      </div>


    </div>
  </div>
</section>


          

        </div>
      </section>

      
    </Layout>
  );
};

export default Placements;

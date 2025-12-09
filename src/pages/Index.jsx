import { Layout } from "@/components/layout/Layout.jsx"; // <-- Updated
import { HeroSection } from "@/components/home/HeroSection.jsx"; // <-- Updated
import { AboutSection } from "@/components/home/AboutSection.jsx"; // <-- Updated
import { MessageSection } from "@/components/home/MessageSection.jsx"; // <-- Updated
import { FacultySection } from "@/components/home/FacultySection.jsx"; // <-- Updated
import { AlumniSection } from "@/components/home/AlumniSection.jsx"; // <-- Updated
import { RecruitersSection } from "@/components/home/RecruitersSection.jsx"; // <-- Updated

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MessageSection />
      <FacultySection />
      <AlumniSection />
      <RecruitersSection />
    </Layout>
  );
};

export default Index;
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MessageSection } from "@/components/home/MessageSection";
import { FacultySection } from "@/components/home/FacultySection";
import { AlumniSection } from "@/components/home/AlumniSection";
import { RecruitersSection } from "@/components/home/RecruitersSection";

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

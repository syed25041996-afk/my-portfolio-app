import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import SkillsOverview from "@/components/home/SkillsOverview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsOverview />
      <FeaturedPosts />
    </Layout>
  );
};

export default Index;

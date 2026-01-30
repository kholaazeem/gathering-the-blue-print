import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Values from "@/components/home/Values";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Values />
      <CTASection />
    </Layout>
  );
};

export default Index;

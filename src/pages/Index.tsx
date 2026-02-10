import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Background from "@/components/landing/Background";
import CoreConcept from "@/components/landing/CoreConcept";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import UserModel from "@/components/landing/UserModel";
import WhyRecoza from "@/components/landing/WhyRecoza";
import OpenSource from "@/components/landing/OpenSource";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="background">
          <Background />
        </section>
        <section id="core-concept">
          <CoreConcept />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <UserModel />
        <WhyRecoza />
        <section id="open-source">
          <OpenSource />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

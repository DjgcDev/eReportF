import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesCarousel } from "./components/FeaturesCarousel";
import { HowItWorks } from "./components/HowItWorks";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <FeaturesCarousel />
        <HowItWorks />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

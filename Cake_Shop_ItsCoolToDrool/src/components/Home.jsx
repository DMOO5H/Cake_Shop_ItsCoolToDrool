import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FooterSection from "./FooterSection";

function Home() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
}

export default Home;

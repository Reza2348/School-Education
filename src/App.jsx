import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import OurBenefits from "./components/OurBenefits/Our Benefits";
import OurTestimonials from "./components/OurTestimonials/OurTestimonials";
import ThroughourPages from "./components/ThroughourPages/ThroughourPages";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurBenefits />
      <OurTestimonials />
      <ThroughourPages />
      <Footer />
    </>
  );
}

export default App;

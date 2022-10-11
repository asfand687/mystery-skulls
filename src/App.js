
import './App.css';
import Navbar from './components/Navbar';
import RoadmapSection from './section/RoadmapSection';
import HeroSection from './section/HeroSection';
import IntroductionSection from './section/IntroductionSection';
import FAQSection from './section/FAQSection';
import TeamSection from './section/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="overflow-hidden bg-[#394834]">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <RoadmapSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default App;


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
    <main className="overflow-x-hidden bg-[#394834]">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <RoadmapSection />
      <FAQSection />
      <TeamSection />
      <Footer />
    </main>
  );
}

export default App;

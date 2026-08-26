import Hero from "../components/Hero.jsx";
import Process from "../components/Process.jsx";
import Team from "../components/Team.jsx";
import About from "../components/About.jsx";
import FeaturedWorks from "../components/FeaturedWorks.jsx";
export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-['Plus_Jakarta_Sans',-apple-system,sans-serif]">
      <Hero />
        <About />
        <FeaturedWorks />
     
      <Team />
    
    </div>
  );
}
import Hero from "./components/Hero.jsx";
import ShowReel from "./components/ShowReel.jsx";
import Display from "./components/Display.jsx";
import Expertise from "./components/Expertise.jsx";
import Projects from "./components/Projects.jsx";
import HowWeDo from "./components/HowWeDo.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
        <Hero />
        <ShowReel />
        <Display />
        <Expertise />
        <Projects />
        <HowWeDo />
        <Faq />
        <Footer />
    </div>
  );
}

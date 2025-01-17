import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero.jsx";
import ShowReel from "./components/ShowReel.jsx";
import Display from "./components/Display.jsx";
import Expertise from "./components/Expertise.jsx";
import Projects from "./components/Projects.jsx";
import HowWeDo from "./components/HowWeDo.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import KeyFigure from "./components/KeyFigure.jsx";
import LogoSlider from "./components/LogoSlider.jsx";

export default function Home() {
  return (
    <div>
        <Hero />
        <ShowReel />
        <Display />
        <Expertise />
        <Projects />
        <HowWeDo />
        <Reviews />
        <Faq />
        <KeyFigure />
        <LogoSlider />
    </div>
  );
}

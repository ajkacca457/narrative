import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/homepage/Hero.jsx";
import ShowReel from "./components/homepage/ShowReel.jsx";
import Display from "./components/homepage/Display.jsx";
import Expertise from "./components/homepage/Expertise.jsx";
import Projects from "./components/homepage/Projects.jsx";
import HowWeDo from "./components/homepage/HowWeDo.jsx";
import Reviews from "./components/homepage/Reviews.jsx";
import Faq from "./components/homepage/Faq.jsx";
import KeyFigure from "./components/homepage/KeyFigure.jsx";
import LogoSlider from "./components/homepage/LogoSlider.jsx";

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

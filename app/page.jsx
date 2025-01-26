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
import CircularPattern from "./components/decors/CircularPattern.jsx";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ShowReel />
      <Display />
      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -right-[50px] -top-[250px] -z-[1] radial-light opacity-40"></div>
        <CircularPattern
          customClass="absolute right-[250px] top-[50px]"
          width="189.5"
          height="183"
        />
        <Expertise />
      </div>

      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -left-[150px] top-[300px] -z-[1] radial-light opacity-40"></div>
        <div className="w-[800px] h-[800px] absolute -right-[150px] top-[400px] -z-[1] radial-light opacity-40"></div>
        <Projects />
        <HowWeDo />
      </div>
      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -right-[150px] top-[250px] -z-[1] radial-light opacity-40"></div>
        <Reviews />
      </div>

      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -left-[150px] top-[300px] -z-[1] radial-light opacity-40"></div>
        <Faq />
        <CircularPattern customClass="absolute -right-[50px] -bottom-[50px]" />
      </div>
      <KeyFigure />
      <LogoSlider />
    </div>
  );
}

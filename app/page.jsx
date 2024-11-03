import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TextGrid from "./components/TextGrid.jsx";
import Footer from "./components/Footer.jsx";
import { data, whatWeDo } from "./data/data.js";
import Testimonial from "./components/Testimonial.jsx";
import Slider from "./components/Slider.jsx";
import Reveal from "./components/Reveal.jsx";
import Projects from "./components/Projects.jsx";

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <TextGrid {...data} />
        <Slider />
        <Reveal {...whatWeDo} />
        <Projects />
        <Testimonial />
        <Footer />
    </div>
  );
}

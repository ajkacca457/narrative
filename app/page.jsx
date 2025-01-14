import Hero from "./components/Hero.jsx";
import ShowReel from "./components/ShowReel.jsx";
import Footer from "./components/Footer.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Projects from "./components/Projects.jsx";
import Faq from "./components/Faq.jsx";

export default function Home() {
  return (
    <div>
        <Hero />
        <ShowReel />
        <Projects />
        <Testimonial />
        <Faq />
        <Footer />
    </div>
  );
}

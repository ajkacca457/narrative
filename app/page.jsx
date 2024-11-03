import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ProjectDisplay from "./components/ProjectDisplay.jsx";
import TextHighlight from "./components/TextHighlight.jsx";
import Testimonial from "./components/Testimonial.jsx";
import ImageLink from "./components/ImageLink.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <ProjectDisplay />
        <TextHighlight settings={{textClass:"text-white", showButton:false}}/>
        <Testimonial />
        <ImageLink />
        <TextHighlight settings={{textClass:"text-white", showButton:true}}/>
        <Footer />
    </div>
  );
}

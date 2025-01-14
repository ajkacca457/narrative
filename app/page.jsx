import Hero from "./components/Hero.jsx";
import ShowReel from "./components/ShowReel.jsx";
import Display from "./components/Display.jsx";
import Expertise from "./components/Expertise.jsx";
import Footer from "./components/Footer.jsx";
import Faq from "./components/Faq.jsx";

export default function Home() {
  return (
    <div>
        <Hero />
        <ShowReel />
        <Display />
        <Expertise />
        <Faq />
        <Footer />
    </div>
  );
}

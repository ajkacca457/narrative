import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TextGrid from "./components/TextGrid.jsx";
import Footer from "./components/Footer.jsx";
import { expertise } from "./data/expertise.js";

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <TextGrid {...expertise} />
        <Footer />
    </div>
  );
}

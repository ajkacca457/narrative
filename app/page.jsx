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

async function Home() {
  const res = await fetch(
    "https://narrative-rest-7d1f3a.ingress-bonde.ewp.live/wp-json/wp/v2/pages?slug=home&acf_format=standard",
    { cache: "no-store" }
  );
  const data = await res.json();
  const acfContent = data?.[0]?.acf?.hero_page || []; // Default to empty array

  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      {acfContent.map((block, index) => {
        if (block.acf_fc_layout === "front_hero") {
          return <Hero key={index} content={block} />;
        }
        return null;
      })}

      {/* SHOWREEL & DISPLAY SECTION */}
      {acfContent.some((block) =>
        ["showreel", "display"].includes(block.acf_fc_layout)
      ) && (
        <>
          <ShowReel />
          <Display />
        </>
      )}

      {/* EXPERTISE SECTION */}
      {acfContent.some((block) => block.acf_fc_layout === "expertise") && (
        <div className="relative">
          <div className="w-[800px] h-[800px] absolute -right-[50px] -top-[250px] -z-[1] radial-light opacity-40"></div>
          <CircularPattern
            customClass="absolute right-[250px] top-[50px]"
            width="189.5"
            height="183"
          />
          {acfContent
            .filter((block) => block.acf_fc_layout === "expertise")
            .map((block, index) => (
              <Expertise key={index} content={block} />
            ))}
        </div>
      )}

      {/* PROJECTS & HOW WE DO SECTION */}
      {acfContent.some((block) =>
        ["projects", "process"].includes(block.acf_fc_layout)
      ) && (
        <div className="relative">
          <div className="w-[800px] h-[800px] absolute -left-[150px] top-[300px] -z-[1] radial-light opacity-40"></div>
          <div className="w-[800px] h-[800px] absolute -right-[150px] top-[400px] -z-[1] radial-light opacity-40"></div>
          {acfContent
            .filter((block) => block.acf_fc_layout === "projects")
            .map((block, index) => (
              <Projects key={index} content={block} />
            ))}
          <HowWeDo />
        </div>
      )}

      {/* REVIEWS SECTION */}
      {acfContent.some((block) => block.acf_fc_layout === "reviews") && (
        <div className="relative">
          <div className="w-[800px] h-[800px] absolute -right-[150px] top-[250px] -z-[1] radial-light opacity-40"></div>
          <Reviews />
        </div>
      )}

      {/* FAQ SECTION */}
      {acfContent.some((block) => block.acf_fc_layout === "faq") && (
        <div className="relative">
          <div className="w-[800px] h-[800px] absolute -left-[150px] top-[300px] -z-[1] radial-light opacity-40"></div>
          {acfContent
            .filter((block) => block.acf_fc_layout === "faq")
            .map((block, index) => (
              <Faq key={index} content={block} />
            ))}
          <CircularPattern customClass="absolute -right-[50px] -bottom-[50px]" />
        </div>
      )}

      {/* KEY FIGURE & LOGO SLIDER */}
      {acfContent.some((block) => block.acf_fc_layout === "key_figures") && (
        <KeyFigure />
      )}
      {acfContent.some((block) => block.acf_fc_layout === "brand_logos") && (
        <LogoSlider />
      )}
    </div>
  );
}

export default Home;

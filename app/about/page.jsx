import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutHero from '../components/aboutpage/AboutHero'
import AboutExpertise from '../components/aboutpage/AboutExpertise'
import AboutTestimonial from '../components/aboutpage/AboutTestimonial'
import AboutOurTeam from '../components/aboutpage/AboutOurTeam';

const page = () => {
  return (
    <div>
        <AboutHero />
        <AboutExpertise />
        <AboutTestimonial />
        <AboutOurTeam />
    </div>
  )
}

export default page
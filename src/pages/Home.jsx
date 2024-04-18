import React from 'react'
import Hero from '../components/Hero'
import DisplayVideo from '../components/DisplayVideo'
import ScrollInfo from '../components/ScrollInfo'
import Notes from '../components/Notes'
import Offerings from '../components/Offerings'
import Branding from '../components/Branding'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <DisplayVideo />
        <ScrollInfo />
        <Notes />
        <Offerings />
        <Branding/>
        <Footer/>
    </>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import DisplayVideo from '../components/DisplayVideo'
import ScrollInfo from '../components/ScrollInfo'
import Notes from '../components/Notes'
import Offerings from '../components/Offerings'

const Home = () => {
  return (
    <>
        <Hero />
        <DisplayVideo />
        <ScrollInfo />
        <Notes />
        <Offerings />
    </>
  )
}

export default Home
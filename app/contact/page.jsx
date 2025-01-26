import React from 'react'
import ContactHero from '../components/contactpage/ContactHero'
import ContactInfo from '../components/contactpage/ContactInfo'
import ContactForm from '../components/contactpage/ContactForm'

const page = () => {
  return (
    <div>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
    </div>
  )
}

export default page
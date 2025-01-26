import React from 'react'
import ContactHero from '../components/contactpage/ContactHero'
import ContactInfo from '../components/contactpage/ContactInfo'
import ContactForm from '../components/contactpage/ContactForm'
import ContactFaq from '../components/contactpage/ContactFaq'

const page = () => {
  return (
    <div>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactFaq />
    </div>
  )
}

export default page
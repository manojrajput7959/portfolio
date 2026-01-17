import React from 'react'
import Hero from '../Components/Hero'
import About from '../Sections/About'
import Services from '../Sections/Services'
import Work from '../Sections/Work'
import Marquee from '../Sections/Marquee'
import CTA from '../Components/CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Marquee />
      <CTA />
    </div>
  )
}

export default Home

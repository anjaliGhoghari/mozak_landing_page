import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import MassAdoptionSection from '../components/sections/MassAdoptionSection'
import EndUsersSection from '../components/sections/EndUsersSection'
import MadeofDev from '../components/sections/MadeofDev'

function Home() {
  return (
    <>
      <HeroSection/>
      <MassAdoptionSection/>
      <EndUsersSection/>
      <MadeofDev/>
    </>
  )
}

export default Home
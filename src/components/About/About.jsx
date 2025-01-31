import React from 'react'
import Back from "../common/back/Back"
import AboutCard from './AboutCard'
import AWrapper from './AWrapper'
import '../../App.css'

const About = () => {
  return (
    <div>
      <Back title="About Us" />
      <AboutCard />
      <AWrapper/>
    </div>
  )
}

export default About

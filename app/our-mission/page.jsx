
import Image from 'next/image'
import React from 'react'
import Missionvision from '../components/ourMisison/Missionvision'
import Legacy from '../components/ourMisison/Legacy'
import VictorianTrust from '../components/ourMisison/VictorianTrust'
import SpeechArchieve from '../components/ourMisison/SpeechArchieve'
import Hero from '../components/ourMisison/Hero'
import { useScroll } from 'framer-motion'
import SmoothScroll from '../components/SmoothScroll'

const page = () => {
    // const {scrollYProgress}=useScroll()
    // console.log(scrollYProgress);
    
  return (
    <SmoothScroll>
   
   <Hero />
    <Missionvision/>
    <Legacy/>
    <VictorianTrust/>
    {/* <SpeechArchieve/> */}
   
   </SmoothScroll>
  )
}

export default page

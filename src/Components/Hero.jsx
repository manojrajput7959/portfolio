import React, { useRef } from 'react'
import GradientBtn from './GradientBtn'
import Star from '../assets/Star.png'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const Hero = () => {

  const heroRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      markers: false,
      start: "top top",
      bottom: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });

    SplitText.create(".grade", {
      type: "lines , words",
      masks: "lines",
      autoSplit : true,
      onSplit(self) {
        gsap.from(self.words, {
          opacity: 0,
          stagger:0.13,
          y:30,
        })
      }
    })


       SplitText.create(".h2Class h2", {
      type: "lines , words",
      masks: "lines",
      autoSplit : true,
      onSplit(self) {
        gsap.from(self.words, {
          opacity: 0,
          stagger:0.13,
          delay:0.3,
          y:100
        })
      }
    })

    gsap.from(".btnAnimate",{
      opacity: 0,
      duration : 0.5,
      y: 40,
      delay:1.25,
      easy:"power2.out"
    })

  })

  return (
    <>
      <div ref={heroRef} className="flex flex-col font-heading w-full h-screen relative lg:justify-center items-start lg:pt-20 pl-7 lg:pl-24 max-lg:pt-35">
        <div className="grade text-2xl lg:text-[3vw]"><h1>MANOJ</h1></div>
        <div className="text-[18vw] lg:text-[10vw] py-4 md:p-2 tracking-tight leading-15 lg:leading-35 h2Class"><h2>Web Developer <br />& <span className='text-stork'>Designer</span></h2></div>
        <GradientBtn text="let's talk" className="btnAnimate" />

        <div className=" absolute top-85 left-43 md:left-210 lg:-right-100 lg:top-15 lg:bottom-0 -z-10 w-[99%] lg:w-[70%]">
          <img src={Star} className='lg:w-[90%] w-[99%] star-animate' />
        </div>
      </div>
    </>
  )
}

export default Hero

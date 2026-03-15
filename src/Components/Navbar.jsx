import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Navbar = () => {

  const navbarRef = useRef(null)
  
  useGSAP(()=>{
    gsap.from(navbarRef.current,{
      y:-100,
      opacity:0,
      duration:1
    })
  })

  return (
    <>
      <nav ref={navbarRef} className='fixed top-0 w-[96vw]  mix-blend-difference z-1'>
        <div className="main-component  w-full p-8 sm:px-20 sm:py-6  flex justify-between">
          <div className="">
            <h1 className='font-heading text-4xl md:text-6xl'>M
              <span className='inline-block w-2 h-2 md:w-3 md:h-3 bg-white text-white rounded-full'></span>
              <span className='inline-block w-2 h-2 ml-0.5 md:ml-1 md:w-3 md:h-3 bg-white text-white rounded-full'></span>
            </h1>
          </div>
    
          <div className='leading-5.5'>
            <span className='inline-block w-8 h-0.5 lg:w-8  bg-white'></span>
            <span className='block w-8 h-0.5 lg:w-8 md:h-0.5 bg-white'></span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

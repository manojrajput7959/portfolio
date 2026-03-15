import React, { useEffect, useRef } from 'react'
import GradientBtn from '../Components/GradientBtn'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project 4.png'
import project5 from '../assets/project5.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  const projects = [
    {
      _id: 1,
      // url: "https://img.sanishtech.com/u/c54bcb9f7512474bf7c6d789b5849f65.png",
      url: project1,
      link: "https://twosnap.netlify.app",
      name: "Two Snap",
      class: "bg-gradient-to-b from-lime-600 from-40% to-black to-50%"
    },
    {
      _id: 2,
      // url: "https://img.sanishtech.com/u/1ff47cfa030e31fffedcb0692c5c580b.png",
      url: project5,
      link: "https://foodbilings.netlify.app",
      name: "FoodBilling",
      class: "bg-gradient-to-b from-rose-700 from-20% to-yellow-400 to-100%"
    },
    {
      _id: 3,
      // url: "https://img.sanishtech.com/u/2a283b5512fe30d07a4ab04f6901bb71.png",
      url: project3,
      link: " ",
      name: "Food Delivery",
      class: "bg-gradient-to-b from-neutral-500 from-20% to-orange-400  to-100%"
    },
    {
      _id: 4,
      // url: "https://img.sanishtech.com/u/a8aae170a216ac43886fb12d6658c05a.png",
      url: project2,
      link: " ",
      name: "K72",
      class: "bg-gradient-to-b from-yellow-100 from-10% to-zinc-300 to-100%"

    },
    {
      _id: 5,
      // url: "https://img.sanishtech.com/u/1ff47cfa030e31fffedcb0692c5c580b.png",
      url: project4,
      link: " ",
      name: "vidtube",
      class: "bg-gradient-to-b from-indigo-200 from-20% to-zinc-800 to-100%"
    },
    
    
  ]

    const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Detect Mobile vs Desktop
    const isMobile = window.innerWidth < 1024

    // 2. Calculate Scroll Distance Dynamically
    const totalWidth = container.scrollWidth
    const viewportWidth = window.innerWidth
    const moveAmount = totalWidth - viewportWidth

    // 3. Configure GSAP based on Screen Size
    const tween = gsap.to(container, {
      x: -moveAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scroller: "body",
        start: "top top",
        end: () => `+=${moveAmount}`,
        scrub: 1,
        // Disable pinning on mobile to allow native swipe
        pin: !isMobile, 
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })

    // Cleanup
    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="flex flex-col px-10  md:px-20 py-10 lg:pt-40 text-black bg-white lg:w-full">
        <div className="uppercase font-heading text-1xl md:text-3xl">Selected work</div>
        <div className='flex flex-col  w-full lg:justify-between pt-3 md:mt-7'>
          <div className="font-extralight tracking-tight leading-6">A showcase of my selected projects-designed to <br /> inspire, engage and deliever real results.</div>
          <div className='text-center pt-10'>
            <GradientBtn text="Explore All" className="Btn-explore" />
          </div>
        </div>
      </div>
      {/* --------------------------  project wrapper ---------------------------------------------------- */}
      <div className="bg-white overflow-y-hidden lg:overflow-x-clip">
        <div ref={containerRef} className="flex z-10 lg:flex-row flex-col lg:gap-6 lg:px-6 lg:ms-[40%] pl-5 spin-box">
          {projects.map((item, index) => (
            <div key={item._id} className={`relative w-[88vw] lg:w-120 h-[57vw] my-5  lg:h-[20vw] pt-9 lg:pt-10 px-4 lg:px-5 block rounded-lg flex-shrink-0 group ${item.class}`}>
              <a href={item.link}>
                <img src={item.url} className="lg:w-full w-full h-[18vh] lg:h-50 rounded-sm lg:rounded-lg shadow-2xl shadow-zinc-800 lg:transition-transform duration-300 group-hover:scale-105" />

                <span className="absolute top-1 right-4 lg:top-2 lg:right-4 bg-zinc-900 text-white px-5 py-1 text-sm rounded-2xl">
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Work

import React from 'react'
import sun from '../assets/Sun.png'
const Marquee = () => {
  return (
    <>
      <div className="text-black bg-white py-20 overflow-hidden">
        <div className=" w-full text-5xl lg:text-6xl whitespace-nowrap font-semibold marquee-animate font-heading leading-1 tracking-tight">
          <span className='flex items-center gap-2 lg:gap-3'>
           DESGIN <img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           CREATE <img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           INSPIRE<img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           CREATE <img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           DESGIN <img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           INSPIRE<img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           CREATE <img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           DESGIN <img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           INSPIRE<img src={sun}className='lg:w-30 w-24 marquee-star1'/>
           </span>
        </div>

        {/* row-2 */}
        
        <div className=" w-full text-5xl lg:text-6xl whitespace-nowrap font-semibold marquee-animate-reverse font-heading leading-1 tracking-tight">
          <span className='flex items-center gap-2 lg:gap-3'>
           DESGIN <img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           CREATE <img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           INSPIRE<img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           CREATE <img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           DESGIN <img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           INSPIRE<img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           CREATE <img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           DESGIN <img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           INSPIRE<img src={sun}className='lg:w-30 w-24 marquee-star2'/>
           </span>
        </div>
      </div>
    </>
  )
}

export default Marquee

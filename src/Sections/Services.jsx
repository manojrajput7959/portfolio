import React from 'react'

const Services = () => {
    return (
        <>
            <div className="px-5 py-5 lg:px-23 lg:py-10  text-black">
                <div className="font-heading font-medium uppercase text-1xl">
                    <p>services in detail</p>
                </div>
            </div>

            <div className='relative'>
                <div className="pt-16 lg:px-20 lg:pt-5  lg:pb-[20.833vw] sticky top-5 lg:top-10 ">
                    <div className='grid grid-cols-1 font-heading px-3 mb:px-24 md:grid-cols-2 gap-6 md:gap-12 items-center'>
                         {/* left - side */}
                        <div className='flex gap-6'>
                            <span className='text-gray-600 text-3xl'>01</span>
                            <h3 className='text-4xl'>Full-Stack <br/> Development</h3>
                        </div>

                        {/* right-side */}
                        <div className="text-1xl md:text-1xl flex items-center">
                            <p className='mb:leading-relaxed'>
                               I build complete web applications by combining frontend and backend technologies. From designing responsive user interfaces to developing secure server logic and APIs, I focus on creating fast, scalable, and reliable digital solutions that work smoothly across devices.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="text-black bg-gray-300 pt-12 lg:m-auto lg:px-20 lg:pt-5 pb-[13rem] sticky top-45 lg:top-1/3">
                    <div className='grid grid-cols-1 font-heading px-3 mb:px-24 md:grid-cols-2 gap-6 md:gap-12 items-center'>
                         {/* left - side */}
                        <div className='flex gap-6'>
                            <span className='text-gray-600 text-4xl'>02</span>
                            <h3 className='lg:text-5xl text-4xl'>React<br/>Development</h3>
                        </div>

                        {/* right-side */}
                        <div className="text-1xl md:text-1xl flex items-center">
                            <p className='mb:leading-relaxed'>
                                  I create dynamic web applications using React, focusing on reusable components, efficient state management, and scalable project structures for modern web products with advanced features.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="text-black lg:p-auto pt-12 py-16 lg:py-10 bg-white lg:px-20 sticky lg:top-2/3">
                    <div className='grid grid-cols-1 font-heading px-3 mb:px-24 md:grid-cols-2 gap-6 md:gap-12 items-center'>
                         {/* left - side */}
                        <div className='flex gap-6'>
                            <span className='text-gray-600 text-4xl '>03</span>
                            <h3 className='text-5xl'>UI Design <br/>Branding</h3>
                        </div>

                        {/* right-side */}
                        <div className="text-1xl md:text-1xl flex items-center">
                            <p className='mb:leading-relaxed'>
                                I design simple and intuitive user interfaces while solving real-world problems through thoughtful layouts, usability improvements, and modern design practices
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

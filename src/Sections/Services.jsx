import React from 'react'

const Services = () => {
    return (
        <>
            <div className="px-5 py-5 lg:px-23 mb:py-10 bg-white text-black">
                <div className="font-heading font-medium uppercase text-1xl">
                    <p>services in detail</p>
                </div>
            </div>

            <div className='relative'>
                <div className="pt-16 lg:px-20 lg:pt-5 pb-[20rem] sticky top-5 lg:top-10 ">
                    <div className='grid grid-cols-1 font-heading px-3 mb:px-24 md:grid-cols-2 gap-6 md:gap-12 items-center'>
                         {/* left - side */}
                        <div className='flex gap-6'>
                            <span className='text-gray-600 text-3xl'>01</span>
                            <h3 className='text-5xl'>Web Desgin</h3>
                        </div>

                        {/* right-side */}
                        <div className="text-1xl md:text-1xl flex items-center">
                            <p className='mb:leading-relaxed'>
                                Crafting modern, user-focused website with clean layouts, thoughtful typography and smooth interactions, Every desgin is tailored to deliver both aesthetic appeal and seamless usability.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="text-black bg-gray-300 pt-12 lg:px-20 lg:pt-5 pb-[13rem] sticky top-1/5 lg:top-1/3">
                    <div className='grid grid-cols-1 font-heading px-3 mb:px-24 md:grid-cols-2 gap-6 md:gap-12 items-center'>
                         {/* left - side */}
                        <div className='flex gap-6'>
                            <span className='text-gray-600 text-4xl'>02</span>
                            <h3 className='text-5xl'>Shopify <br/>Development</h3>
                        </div>

                        {/* right-side */}
                        <div className="text-1xl md:text-1xl flex items-center">
                            <p className='mb:leading-relaxed'>
                                  From custom themes to advanced feature, I design and build Shopify stories that boost sales and reflect your brand. Optimized for performance, easy management, and smooth shooping experiences.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="text-black bg-white py-16 lg:py-10 lg:px-20 sticky  lg:top-2/3">
                    <div className='grid grid-cols-1 font-heading px-3 mb:px-24 md:grid-cols-2 gap-6 md:gap-12 items-center'>
                         {/* left - side */}
                        <div className='flex gap-6'>
                            <span className='text-gray-600 text-4xl '>03</span>
                            <h3 className='text-5xl'>Creative <br/>Branding</h3>
                        </div>

                        {/* right-side */}
                        <div className="text-1xl md:text-1xl flex items-center">
                            <p className='mb:leading-relaxed'>
                                Building strong brand identities through desgin, stroytelling, and visuals that connect with your audience. Form logos to full brand systems, I help create a consistent and memorable presence.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

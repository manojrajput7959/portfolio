import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="py-12 lg:ps-40">
                <div className="flex justify-evenly max-sm:pl-5 lg:flex-row flex-col">
                    {/* logo */}
                    <div className="lg:w-[25%]">
                        <div className="">
                            <h1 className='font-heading text-7xl md:text-6xl'>M
                                <span className='inline-block w-4 h-4 lg:w-3 lg:h-3 bg-white text-white rounded-full'></span>
                                <span className='inline-block w-4 h-4 lg-0.5 ml-1 lg:ml-1 md:w-3 md:h-3 bg-white text-white rounded-full'></span>
                            </h1>
                        </div>
                    </div>

                    {/* service */}
                    <div className="lg:w-[25%] font-heading gap-3 lg:40 max-sm:pt-10 leading-7 tracking-tight flex flex-col">
                        <div className="text-3xl font-semibold">Services</div>
                        <ul className='text-1xl lg:text-1xl'>
                            <li>
                                <a href="">Web Design</a>
                            </li>
                            <li>
                                <a href="">UI / UX</a>
                            </li>
                            <li>
                                <a href="">Web Development</a>
                            </li>
                            <li>
                                <a href="">Branding</a>
                            </li>
                        </ul>
                    </div>

                    {/* Accessibility  */}
                    <div className="lg:w-[25%] max-sm:pt-10 gap-2 lg:40 lg:pb-5 leading-7 tracking-tight flex flex-col">
                        <div className="text-3xl font-heading font-semibold lg:text-3xl">Accessibility</div>
                        <ul className='lg:text-lg text-lg'>
                            <li>
                                <a href="">Mon-Fri: 9:00 - 5:00</a>
                            </li>
                            <li>
                                <a href="">24/7 WhatsApp & Email</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact  */}
                    <div className="lg:w-[25%]  gap-1.5 max-sm:pt-10 lg:40 lg:pb-5 leading-7 tracking-tight flex flex-col">
                        <div className="text-3xl font-heading font-semibold lg:text-3xl">Contact</div>
                        <ul className='text-lg'>
                            <li>
                                <a href="">Manojrajput7959@gmail.com</a>
                            </li>
                            <li>
                                <a href="">+9311795933</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='py-3 '>
                <hr className='lg:ms-15 me-3 lg:w-[90%] text-zinc-800'></hr>
            </div>

            <div className="pb-2 px-2 lg:px-15 max-sm:flex-col flex justify-between items-center ">
                {/* left */}
                <div className="flex  font-heading gap-1 text-sm lg:text-lg ">
                    <div className="flex gap-1 lg:gap-4 justify-between">
                        <i class="ri-copyright-line"></i>
                        <span>2026 M..</span>
                    </div>
                    <div className="border-r-2 h-3.5 mt-0.5 lg:h-4.5 lg:mt-1 lg:pt-2"></div>
                    <div className="text-sm lg:text-lg">
                        <span>All rights reserved</span>
                    </div>
                </div>
                {/* right */}
                <div className="flex gap-2 lg:gap-3  text-lg items-center justify-center lg:text-2xl">
                  <a href="" ><i class="ri-linkedin-fill"></i></a>
                  <a href="" ><i class="ri-instagram-fill"></i></a>
                  <a href="" ><i class="ri-facebook-box-fill"></i></a>
                </div>
            </div>

        </>
    )
}

export default Footer

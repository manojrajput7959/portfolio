import React from 'react'
import GradientBtn from './GradientBtn'

const CTA = () => {
    return (
        <>
            <div className="text-center lg:py-10 py-12">
                <div className="text-center text-2xl lg:text-4xl pb-10 lg:pb-15 lg:px-50">Freelance projects, collaborations and full-time opportunities.Let's get acquainted</div>

              <GradientBtn text = "BOOK A CALL" className="px-4.5 pb-1.5 " />
            </div>
            <div className="">
                <hr className='lg:ms-15 me-3 lg:w-[90%] text-zinc-800'></hr>
            </div>
        </>
    )
}

export default CTA

import React from 'react'

const GradientBtn = ({text,className}) => {
  return (
    <>
      <a href="" className={`Btn font-heading uppercase w-35 h-10 pt-1  md:pt-2 md:text-[1.2vw] text-center border-2 border-transparent rounded-full ${className} `}>{text}</a>
    </>
  )
}

export default GradientBtn

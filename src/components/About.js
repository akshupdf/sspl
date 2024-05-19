import React from 'react'
import logo from "../images/ss.png"

function About() {
  return (
    <div className='w-[90%] font-serif h-screen flex justify-center  m-auto p-4  ' >

  
    <div className='w-[50%] text-center '>
    <img src={logo} alt="" className=''/> 
    </div>
    <div className='w-[50%]  mt-10 text-xl'>
    <p><span className='font-bold'>Pulkit Sekhsaria</span> is the Managing Director of Satyanarayan Sekhsaria Pvt. Ltd. (SSPL). Pulkit has been actively involved in investments and wealth management across various fields. Under his astute leadership and dynamic vision SSPL has grown by leaps and bounds and is today renowned as one of the leading and most reputed trading organizations dealing in agro-commodities.</p>
    </div>
    </div>
  )
}

export default About

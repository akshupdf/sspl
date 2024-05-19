import React from 'react'
import logo from '../images/logo3.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex backdrop-blur-2xl bg w-[100%] font-serif bg-green-800 text-white'>
  <div className='flex cursor-pointer  w-[50%]'>
  <img src={logo} alt="" className='w-60 h-30  right-0'/>
  </div>
   <div className='flex cursor-pointer  w-[50%] justify-end m-auto '>
   <ul className='flex cursor-pointer  w-[50%] right-0 text-xl'>
        <li className='m-2  hover:underline'><Link to="/">Home</Link></li>
        <li className='m-2 hover:underline'><Link to="/about">About</Link></li>
        <li className='m-2 hover:underline'><Link to="/products">Products</Link></li>
        <li className='m-2 hover:underline'><Link to="/contact">Contact</Link></li>
    </ul>
   </div>
    
   
    </div>
  )
}

export default Navbar

import React from 'react'
import logo from "../images/col.jpg"

function Product() {
  return (
    <div className='h-screen w-[100%] flex p-10'>
    <div className='w-[20%]'>
    <ul className='cursor-pointer'>
        <li className='m-4'>Castor Seeds Oil</li>
        <li className='m-4'>Castor Seeds</li>
        <li className='m-4'>Cashew </li>
        <li className='m-4'>Legumes</li>
        <li className='m-4'>Guar Seeds</li>
    </ul>
    </div>
    <div className='w-[60%]'>
    <img src={logo} alt="" className='w-80 m-auto'></img>
    </div>
      
    </div>
  )
}

export default Product

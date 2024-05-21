import React from 'react'
import logo from '../images/logo3.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-[100%] lg:h-[52vh] xl:h-auto lg:flex border border-black  justify-center mt-10 text-xl bg-green-800 text-white  font-serif'>
   <div className=' lg:w-[30%] pt-10'>
    <div className=' mx-auto rounded-xl   cursor-pointer '>
    <img src={logo}  alt="" />
  
    <p>94A, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra 400021</p>
    <h1 className='font-bold'>Hours :-</h1>
    <p>Monday — Saturday :- 9am-5pm</p>
    
   
    </div>
    </div>
  
   
    <div className=' lg:w-[30%]  '>
    <div className=' m-auto p-20 text-xl rounded-xl   cursor-pointer'>
    <ul>
      <li className='hover:underline'><Link to="/">Home</Link></li>
      <li className='hover:underline'><Link to="/about">About</Link></li>
      <li className='hover:underline'><Link to="/products">Products</Link></li>
      <li className='hover:underline'><Link to="/contact">Contact Us</Link></li>
    </ul>
   
    </div>
    
    </div>
    <div className=' lg:w-[30%]  '>

    <div className=' mx-auto mt-4 rounded-xl   cursor-pointer border border-black text-center'>
    <form >
     <label>Name :- </label>
     <input type="text" name="user_name" className='m-2 border ml-6 border-black rounded-xl' /> <br></br>
     <label>Email :-</label>
     <input type="email" name="user_email"  className='m-2 border ml-8 border-black rounded-xl' /><br></br>
     <label>Message :-</label>
     <textarea name="message" className='m-2 border border-black rounded-xl'/><br></br>
     <input type="submit" value="Send" className='m-2 p-2 border border-black rounded-xl mx-auto '/>
   </form>
   
    </div>
    <div className='flex lg:pt-8 pl-8'>
    <div >
    <h1 className='font-bold'>Contact :-</h1>
    <p>022-1234567</p>
    <p>info@sspl.co</p>
    </div>
    <div className='flex cursor-pointer ml-20'>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
</svg>
    </div>
    </div>
    
    
    </div>
    
    </div>
  )
}

export default Footer

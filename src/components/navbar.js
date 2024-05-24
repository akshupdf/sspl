import React, { useState } from 'react';
import logo from '../images/logo4.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='lg:flex backdrop-blur-2xl bg w-[100%] font-serif bg-[#003662] text-white '>
    <div className='flex justify-between items-center w-full lg:w-[50%] pt-2'>
      <img src={logo} alt="Logo" className='w-60 h-30' />
      <div className='lg:hidden' onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
    <div className={`lg:flex lg:items-center lg:justify-end mr-10 lg:w-[50%] ${isOpen ? 'block' : 'hidden'}`}>
      <ul className='flex flex-col lg:flex-row items-center w-full lg:w-auto text-2xl lg:justify-end' >
        <li className='m-2 hover:underline'>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className='m-2 hover:underline'>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className='m-2 hover:underline'>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
        </li>
        <li className='m-2 hover:underline'>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar

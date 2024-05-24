import React from 'react'

import a from "../images/2.jpg";
import b from "../images/2.png";
import c from "../images/3.png";
import d from "../images/4.png";
import e from "../images/5.png";

function Product() {
  return (
    <div className="h-auto bg-gray-100 w-[100%]">
    <h1 className='w-[100%] text-center  text-4xl p-4'> PRODUCTS</h1>
    <div className="max-w-7xl mx-auto   flex flex-wrap justify-center">
      <div className="w-[50vh] h-[60vh]  flex flex-col justify-center m-4 ">
        <img src={a} alt="Guar Seeds" className="w-full h-60 object-cover rounded-lg " />
        <h2 className="text-xl font-bold mb-2">Guar Seeds</h2>
        <p className="text-gray-700 mb-4 h-60">
          The guar or cluster bean is an annual legume and the source of guar gum. It is also known as gavar, guwar or guvar bean. This legume is a valuable plant in a crop rotation cycle, as it lives in symbiosis with nitrogen-fixing bacteria. Agriculturists in semi-arid regions of Rajasthan follow crop-rotation and use guar to.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700">Inquiry</button>
      </div>

      <div className="w-[50vh] h-[60vh]  flex flex-col justify-center m-4">
        <img src={b} alt="Cashew Kernels" className="w-full h-60 object-cover rounded-lg " />
        <h2 className="text-xl font-bold mb-2">Cashew Kernels</h2>
        <p className="text-gray-700 mb-4 h-60">
          Cashew is the common name of a tropical evergreen tree Anacardium occidentale, in the family Anacardiaceae. It is native to South America and is the source of the cashew nut and the cashew apple, an accessory fruit.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700">Inquiry</button>
      </div>

      <div className="w-[50vh] h-[60vh] flex flex-col justify-center m-4">
        <img src={c} alt="Castor Seeds" className="w-full h-60 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">Castor Seeds</h2>
        <p className="text-gray-700 mb-4 h-60">
          Castor seed is a non-edible oilseed crop, with an average of 46 per cent oil recovery. It is grown in arid and semi-arid regions of the world. Castor oil is extracted from castor seed and its derivatives have an indispensable usage in many industries like cosmetics, surface coatings.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700">Inquiry</button>
      </div>

      <div className="w-[50vh] h-[60vh] flex flex-col justify-center m-4">
        <img src={d} alt="Castor Seeds Oil" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">Castor Seeds Oil</h2>
        <p className="text-gray-700 mb-4 h-60">
          Castor oil is a vegetable oil pressed from castor beans. Castor oil and its derivatives are used in the manufacturing of soaps, lubricants, hydraulic and brake fluids, paints, dyes, coatings, inks, cold resistant plastics, waxes and polishes, nylon, pharmaceuticals and perfumes. Castor oil enjoys tremendous demand world-wide.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700">Inquiry</button>
      </div>

      <div className="w-[50vh] h-[60vh] flex flex-col justify-center m-4">
        <img src={e} alt="Legumes" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">Legumes</h2>
        <p className="text-gray-700 mb-4 h-60">
          Chana is one of the major pulses cultivated and consumed in India. It is also known as Bengal gram or gram or chickpea. Chana is a major and cheap source of protein compared to animal protein. India is the major producing country for Chana, contributing for over 75% of total production in the world.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700">Inquiry</button>
      </div>
    </div>
  </div>
  )
}

export default Product

import React from 'react'

import a from "../images/11.png";
import b from "../images/22.png";
import c from "../images/33.png";
import d from "../images/44.png";
import e from "../images/55.png";
import f from "../images/cp1.png";
import g from "../images/pps1.png";
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className="h-auto bg-gray-100 w-[100%]">
    <h1 className='w-[100%] text-center  2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl '> PRODUCTS</h1>
    <div className="max-w-7xl mx-auto   flex flex-col justify-center ">
      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={a} alt="Guar Seeds" className="2xl:w-[60vh] xl:w-[100vh] object-cover rounded-lg p-8" />
        <div className='m-4  flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Guar Seeds</h2>
        <p className="text-gray-700 mb-4 text-xl">
          The guar or cluster bean is an annual legume and the source of guar gum. It is also known as gavar, guwar or guvar bean. This legume is a valuable plant in a crop rotation cycle, as it lives in symbiosis with nitrogen-fixing bacteria. Agriculturists in semi-arid regions of Rajasthan follow crop-rotation and use guar to.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/z39v4j" target="_blank">Get In Touch</Link></button>
        </div>
       
      </div>

      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={b} alt="Cashew Kernels" className=" 2xl:w-[60vh] xl:w-[100vh] object-cover rounded-lg p-10" />
        <div className='m-4  flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Cashew Kernels</h2>
        <p className="text-gray-700 mb-4 text-xl ">
          Cashew is the common name of a tropical evergreen tree Anacardium occidentale, in the family Anacardiaceae. It is native to South America and is the source of the cashew nut and the cashew apple, an accessory fruit.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/z39v4j" target="_blank">Get In Touch</Link></button>
        </div>
      </div>

      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={c} alt="Castor Seeds" className="2xl:w-[60vh] xl:w-[100vh] object-cover  p-10 " />
         <div className='m-4 flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Castor Seeds</h2>
        <p className="text-gray-700 mb-4 text-xl">
          Castor seed is a non-edible oilseed crop, with an average of 46 per cent oil recovery. Castor seeds are majorly grown in the parts of Gujarat and Telangana state. Castor oil is extracted from castor seed and its derivatives have an indispensable usage in many industries like cosmetics, surface coatings.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/hbdcu2" target="_blank">Get In Touch</Link></button>
        </div>
      </div>

      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={d} alt="Castor Seeds Oil" className="2xl:w-[60vh] xl:w-[100vh] object-cover p-10" />
          <div className='m-4  flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Castor Oil</h2>
        <p className="text-gray-700 mb-4 text-xl">
          Castor oil is a vegetable oil pressed from castor beans. Castor oil and its derivatives are used in the manufacturing of soaps, lubricants, hydraulic and brake fluids, paints, dyes, coatings, inks, cold resistant plastics, waxes and polishes, nylon, pharmaceuticals and perfumes. Castor oil enjoys tremendous demand world-wide.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/zlu2eo" target="_blank">Get In Touch</Link></button>
        </div>
      </div>

      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={e} alt="Pulses" className="2xl:w-[60vh] xl:w-[100vh] object-cover p-10" />
        <div className='m-4  flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Pulses</h2>
        <p className="text-gray-700 mb-4 text-xl">
        Legumes are plants in the family Fabaceae, or the fruit or seeds of such plants. When used as a dry grain for human consumption, the seeds are also called pulses. Legumes are grown agriculturally, primarily for human consumption; for livestock forage and silage; and as soil-enhancing green manure .
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/z39v4j" target="_blank">Get In Touch</Link></button>
        </div>
      </div>
      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={f} alt="Chick Peas" className="2xl:w-[60vh] xl:w-[100vh] object-cover p-10" />
        <div className='m-4  flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Chick Peas</h2>
        <p className="text-gray-700 mb-4 text-xl">
        The chickpea or chick pea is an annual legume of the family Fabaceae, subfamily Faboideae. Its different types are variously known as gram or Bengal gram, chhola, chhana, chana, or channa, garbanzo or garbanzo bean, or Egyptian pea.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/z39v4j" target="_blank">Get In Touch</Link></button>
        </div>
      </div>
      <div className="w-full xl:flex-row 2xl:flex sm:flex-col flex justify-center m-4 shadow-xl">
        <img src={g} alt="Pigeon Peas" className="2xl:w-[60vh] xl:w-[100vh] object-cover p-10" />
        <div className='m-4  flex flex-col justify-center'>
        <h2 className="text-2xl font-bold mb-2">Pigeon Peas</h2>
        <p className="text-gray-700 mb-4 text-xl">
        The pigeon pea is a perennial legume from the family Fabaceae native to the Eastern Hemisphere. The pigeon pea is widely cultivated in tropical and semitropical regions around the world, being commonly consumed in South Asia, Southeast Asia, Africa, Latin America and the Caribbean.
        </p>
        <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 2xl:w-[20vh] xl:w-[40vh]"><Link to="https://wa.link/z39v4j" target="_blank">Get In Touch</Link></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product

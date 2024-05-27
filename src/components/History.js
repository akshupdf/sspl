import React from 'react'
import bg from "../images/sc2.png"

function History() {
  return (
    <div className='rounded-lg bg-no-repeat bg-cover italic text-black ' style={{backgroundImage : `url(https://i.pinimg.com/736x/a2/68/84/a268840bfb36a18ec3faab3b596ff8a1.jpg)`}}>
     
      <div class="container mx-auto px-4 py-8 ">
    <div class="relative wrap overflow-auto ">
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2  "></div>
        <div class="mb-8 lg:flex justify-between items-center w-full right-timeline ">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200  w-12 h-10 ">
                <h1 class="mx-auto font-semibold text-lg text-blue-800">1970</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
                {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">Gujarat Ambuja Cement Ltd. (GACL)</h3> */}
                <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-opacity-10 p-4 rounded-lg "> Established as brokers for major corporations including the Mafatlals and the Vardhman Group.
Remains a leading exporter of raw cotton to the United Kingdom. Established for process research and
USFDA-approved API manufacturing.</p>
            </div>
        </div>
        <div class="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200  w-12 h-10">
                <h1 class="mx-auto font-semibold text-lg text-blue-800">1980</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
                {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">GACL</h3> */}
                <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg">GACL is promoted as a joint venture with the Gujarat government, which later sells its stake to the promoters.GACL starts
operations with a 0.7-million-ton capacity plant.GACL establishes Indias first private port for cement export and import operations
at Muldwarka, Gujarat.</p>
            </div>
        </div>
        <div class="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200  w-12 h-10">
                <h1 class="mx-auto font-semibold text-lg text-blue-800">1990</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
                {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">Sekhsaria Chemicals Pvt. Ltd.</h3> */}
                <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg"> GACL sets up its third port at Hazira, South Gujarat. GACL becomes the top player in Mumbais retail cement market.
Pioneers the supply of cement in paper bags in Bombay. Acquires Modi Cements’ 1.4 mtpa plant at Raipur, Madhya Pradesh.
Acquires a 51% stake in DLF Cement, becoming the #4 cement company in India.</p>
            </div>
        </div>
        
        <div class="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200 w-12 h-10">
                <h1 class="mx-auto font-semibold text-lg text-blue-800">2000</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
                {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">GACL</h3> */}
                <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg">Acquires a 51% stake in DLF Cement, becoming the #4 cement company in India. Acquires Associated Cement Companies
(ACC) from the Tatas.Sells 67% of Ambuja Cement India (ACC + Modi Cement) to Holcim.</p>
            </div>
        </div>
        <div class="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200 w-12 h-10">
                <h1 class="mx-auto font-semibold text-lg text-blue-800">2006</h1>
            </div>
            <div class="order-1  lg:w-5/12 px-6 py-4">
                {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">Sekhsaria Chemicals Pvt. Ltd.</h3> */}
                <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg"> GACL, with a 16.2 million ton capacity, is sold to Holcim, making it the world’s largest cement maker. Acquired by Watson
Pharmaceuticals Inc., the third-largest US pharma company, with over 15 DMFs on file or approved.</p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default History

import React from "react";

function History() {
  return (
    <div
      className="rounded-lg bg-no-repeat bg-cover italic text-black w-[90%] bg-fixed "
    //   style={{
    //     backgroundImage: `url(https://i.pinimg.com/736x/a2/68/84/a268840bfb36a18ec3faab3b596ff8a1.jpg)`,
    //   }} 
    
    >
      <div class="container mx-auto px-4 py-8 ">
        <div class="relative wrap overflow-auto ">
          <div class="lg:flex border-2-2 absolute border-opacity-60 border-gray-700 h-full border left-1/2  sm:hidden"></div>
          <div class="mb-8 lg:flex justify-between items-center w-full right-timeline ">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200  w-12 h-10 ">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2008</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
              {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">Gujarat Ambuja Cement Ltd. (GACL)</h3> */}
              <p class=" leading-tight text-xl backdrop-opacity-10 p-4 rounded-lg ">
                {" "}
                Engaging in the trading of various agricultural commodities taps into the dynamic agribusiness sector, promoting sustainability and ensuring the availability of essential products in different markets. These ventures highlight a commitment to excellence and innovation in both agricultural and industrial domains.
              </p>
            </div>
          </div>

          {/* <div>
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200  w-12 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">1990</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
               <h3 class="mb-3 font-bold text-gray-800 text-xl">Sekhsaria Chemicals Pvt. Ltd.</h3> 
              <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg">
                {" "}
                GACL sets up its third port at Hazira, South Gujarat. GACL
                becomes the top player in Mumbais retail cement market. Pioneers
                the supply of cement in paper bags in Bombay. Acquires Modi
                Cements’ 1.4 mtpa plant at Raipur, Madhya Pradesh. Acquires a
                51% stake in DLF Cement, becoming the #4 cement company in
                India.
              </p>
            </div>
          </div> 
          */}

         <div class="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12 "></div>
            <div class="z-20 flex items-center order-1 bg-gray-200 w-12 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2019</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
               {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">GACL</h3>  */}
              <p class=" leading-tight text-xl  backdrop-blur-sm p-4 rounded-lg">
               
Venturing into the export of FSG Castor Oil marks a significant milestone. With its applications ranging from industrial to personal care products, castor oil is a versatile and in-demand commodity. By ensuring the highest standards of quality, this initiative aims to cater to diverse industries worldwide, contributing to the international supply chain of a highly sought-after natural product.
              </p>
            </div>
          </div>

          {/*  <div class="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200 w-12 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2006</h1>
            </div>
            <div class="order-1  lg:w-5/12 px-6 py-4">
              {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">Sekhsaria Chemicals Pvt. Ltd.</h3> 
              <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg">
                {" "}
                GACL, with a 16.2 million ton capacity, is sold to Holcim,
                making it the world’s largest cement maker. Sekhsari Chemical
                Pvt Ltd was sold to Watson Pharmaceutical, the third-largest US
                pharma company, with over 15 DMFs on file or approved.
              </p>
            </div>
          </div>
          <div class="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-200 w-12 h-10">
              <h1 class="mx-auto font-semibold text-lg text-blue-800">2019</h1>
            </div>
            <div class="order-1 lg:w-5/12 px-6 py-4">
              {/* <h3 class="mb-3 font-bold text-gray-800 text-xl">GACL</h3> 
              <p class="text-white leading-tight text-xl bg-[#BA741F] backdrop-blur-sm p-4 rounded-lg">
                In 2019, SSPL became a leading global exporter of high-quality
                agricultural products, including castor seeds, castor seed oil,
                cashew kernels, guar seeds, and various legumes. With a robust
                supply chain and a focus on sustainability, SSPL is recognized
                as a trusted partner in the global agri-trading sector. We have
                been buying castor seeds directly from farmers in the Gujarat
                state to support our castor oil production, ensuring quality and
                fostering strong relationships with local agricultural
                communities.
              </p>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  );
}

export default History;

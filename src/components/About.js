import React, { useEffect } from 'react'
import bg from "../images/gd2.jpg"
import ps from "../images/ps.jpg"
import History from './History';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div className='w-[100%] font-serif h-[100%] flex flex-col justify-center  m-auto   ' >
    <div >
 
    <div className=' 2xl:h-screen xl:h-[112vh] bg-cover w-[100%] bg-no-repeat p-4 pt-0  h-screen sm:overflow-auto'   data-aos="fade-in" data-aos-duration="3000"   >

    <h1 className='w-[100%] text-center  2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl '> ABOUT US</h1>
    <div className='flex'>
    <div className='w-[50%]  text-center '>
    <img src={bg} alt="" className='p-8'/> 
    </div>
    <div className='w-[50%] sm:text-sm xl:text-xl 2xl:text-xl p-4 backdrop-blur-sm text-left'>
   
    <p className='indent-8'> <span className='font-bold'>SSPL</span> is focused on trading and supplying of a wide range of agricultural commodities like Castor Seed, Guar Seed, Castor Oil (FSG
Grade), Gaur Gum (Guar Split), Chana both in India and Internationally.
Capitalizing on Indias diverse geography, SSPL delivers superior agro products worldwide.
</p> <p className='indent-8'> As a specialized trading organization,
we build long-term customer relationships and manage all aspects of bulk agro-commodity trade, from storage to direct market
purchases and sales. </p> <p className='indent-8'>
With decades of experience, we have strong connections with farmers, brokers, manufacturers, exporters, and importers, enabling
direct deliveries from our or NCDEX accredited warehouses. We aim for exponential growth by expanding our agro-commodities
portfolio, leveraging our trading expertise and strategic alliances.</p>

      <div className='p-2 border border-black shadow-2xl mt-8 rounded-lg 2xl:w-[80%] xl:w-[100%] sm:w-full'>
      <p>SSPL holds memberships with premier institutions that promote Indias domestic and international trade, including:</p>
        <ul className='list-disc m-4'>
        <li className='ml-8'>Indian Merchants Chamber (IMC)</li>
        <li className='ml-8'>Confederation of Indian Industry (CII)</li>
        <li className='ml-8'>Federation of Indian Export Organisations (FIEO)</li>
        <li className='ml-8'>Solvent Extractors Association (SEA)</li>
        <li className='ml-8'>International Castor Oil Association (ICOA)</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    <h1 className='w-[100%] text-center  text-4xl p-4 mt-10'> HISTORY</h1>
    <div className="min-h-screen  flex items-center justify-center ">
      <History />
    </div>
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
    <h1 className='w-[100%]  text-center  text-4xl p-4'> OUR TEAM</h1>
    <div className=' w-[95%] flex flex-shrink 2xl:flex-row xl:flex-row 2xl:flex-shrink justify-center items-center  sm:flex-col'>
      <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4'>
      <img src={ps} alt="" className='object-contain ' />
      <h1 className='text-xl font-bold mt-4'>Mr. Pulkit Sekhsaria </h1>
      <p className='mt-2 underline'>Promoter</p>
      <p className='mt-6 indent-8 '>
      Pulkit Sekhsaria is the Managing Director of Satyanarayan Sekhsaria Pvt. Ltd. (SSPL). Pulkit has been actively involved in investments and wealth management across various fields. Under his astute leadership and dynamic vision SSPL has grown by leaps and bounds and is today renowned as one of the leading and most reputed trading organizations dealing in agro-commodities.
      </p>
      
      </div>
      <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4'>
      <img src="https://www.ssplindia.net/wp-content/uploads/2019/05/IMG-20180813-WA0042-768x512-1.jpg" alt="" className='object-contain'  />
      <h1 className='text-xl font-bold mt-4'>Mr. Janardhan Sekhsaria </h1>
      <p className='mt-2 underline'>Management</p>
      <p className='mt-4 indent-8'>A seasoned financial services executive with extensive experience in finance, accounting, taxation and law Mr. Janardhan Sekhsaria graduated with a B.Com from Sydenham College.   His shrewd financial acumen has been instrumental in providing SSPL with strategic financial guidance and developing all the necessary policies and procedures to ensure sound financial management and control of the businesses.</p>
      </div>
      <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4'>
      <img src="https://www.ssplindia.net/wp-content/uploads/2019/05/IMG-20180813-WA0042-768x512_2.jpg" alt="" className='object-contain'  />
      <h1 className='text-xl font-bold mt-4'>Mr. Bankatlal Gaggar </h1>
      <p className='mt-2 underline'>Management</p>
      <p className='mt-4 indent-8'>Mr. Bankatlal Gaggar is the Director and Advisor at SSPL. He has had an illustrious and prolifically successful career of over four decades of professional excellence in various capacities and roles, both as an independent consultant as well in corporate management. </p>
      <p>He was also elected as Chairman of the Institute of Company Secretaries of India (ICSI) of its Western India Regional Council.</p>
      </div>
    </div>
    </div>
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
    <h1 className='w-[100%]  text-center  text-4xl p-4'> MILESTONES</h1>
    <div className=' w-[95%] flex flex-shrink 2xl:flex-row xl:flex-row 2xl:flex-shrink justify-center items-center  sm:flex-col'>
      <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4'>
      <img src="https://www.ssplindia.net/wp-content/uploads/2019/05/chemical.png" alt="" className='object-contain xl:pl-8 xl:pr-8' />
      <h1 className='text-xl font-bold mt-8'>Pharmaceutical </h1>
      
      <p className='mt-8 indent-8'>
      1979 Set up Sekhsaria Chemicals Pvt. Ltd. wholly owned subsidiary to provide process research and undertake manufacturing
USFDA approved of active contract pharmaceutical ingredients (API) and related intermediaries.      </p>
      
      </div>
      <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4'>
      <img src="https://www.ssplindia.net/wp-content/uploads/2019/05/gujarat-ambuja-cement-ltd-ambujanagar-junagadh-cement-manufacturers-fnujlbn.jpg" alt="" className='object-contain p-4'  />
      <h1 className='text-xl font-bold mt-2'>Cement </h1>
     
      <p className='mt-2 indent-8'>1986: Gujarat Ambuja Cement Ltd. (GACL) starts with a 0.7-million-ton plant capacity, using jute bags for cement. 1993: GACL
sets up India’s first private port in Muldwarka, Gujarat, and a cement-receiving terminal in Ulve, Mumbai, for export and import.</p>
      </div>
      <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4'>
      <img src="https://www.ssplindia.net/wp-content/uploads/2019/05/cott-1.jpg" alt="" className='object-contain'  />
      <h1 className='text-xl font-bold mt-4'>Cotton </h1>
      
      <p className='mt-4 indent-8'>Since 1970s have been working as established brokers to reputed textile corporations and dealers in domestic as well as overseas
markets. Exporter of raw cotton for the past 40 years.</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About

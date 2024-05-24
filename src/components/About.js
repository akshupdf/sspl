import React from 'react'
import logo from "../images/ss.png"
import Accordion from './Accordion'

function About() {

  const historyData = [
    { year: '1986', content: '  Gujarat Ambuja Cement Ltd. (GACL) starts operating with a 0.7-million-ton plant capacity. The cement is supplied in jute bags, later changed to HDPE bags to reduce spillage. ' },
    { year: '1993', content: 'For the first time in Indian history, a private port is set up by GACL exclusively to export cement and clinker and import coal and furnace oil for the company at Muldwarka, Gujarat, 12km from the plant. ' },
    { year: '1979', content: 'Set up Sekhsaria Chemicals Pvt. Ltd. wholly owned subsidiary to provide research and undertake USFDA approved contract manufacturing of active pharmaceutical ingredients (API) and related intermediaries.' },
    { year: '2006', content: 'Sekhsaria Chemicals Pvt. Ltd. was acquired by Watson Pharmaceuticals Inc, the third-largest pharmaceuticals company in the US. At the time of sale, the Company had over 15 United States Drug Master Files (DMFs) on file or approved.' },
  ];

  return (
    <div className='w-[90%] font-serif h-[100%] flex flex-col justify-center  m-auto   ' >
    <h1 className='w-[100%] text-center  text-4xl mt-4'> ABOUT US</h1>
    <div className='flex h-screen mt-20 w-[100%] '>
    <div className='w-[50%] text-center '>
    <img src={logo} alt="" className=''/> 
    </div>
    <div className='w-[50%]  mt-10 text-xl'>
    <p><span className='font-bold'>Pulkit Sekhsaria</span> is the Managing Director of Satyanarayan Sekhsaria Pvt. Ltd. (SSPL). Pulkit has been actively involved in investments and wealth management across various fields. Under his astute leadership and dynamic vision SSPL has grown by leaps and bounds and is today renowned as one of the leading and most reputed trading organizations dealing in agro-commodities.</p>
    </div>
    </div>
    <h1 className='w-[100%] text-center  text-4xl p-4'> HISTORY</h1>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-no-repeat bg-cover bg-fixed bg-[url(https://wallpapers.com/images/hd/historical-background-1920-x-1080-8vkbhuaspq4d874u.jpg)]">
      <Accordion data={historyData} />
    </div>
    </div>
  )
}

export default About

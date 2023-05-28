import React from 'react';
import logo1 from '../assets/index.png';
import logo2 from '../assets/Battery-Logo-White.png';
import logo3 from '../assets/index.png';
import logo4 from '../assets/Zetta_Logo.png';
import logo5 from '../assets/ing-logo.png';
import logo6 from '../assets/ScaleAsia.png';
import logo7 from '../assets/Alex.png';
import logo8 from '../assets/GTM.png';
import bgImage from '../assets/waves.png';

function SecondSection() {
  const logosFirstRow = [logo1, logo2, logo3, logo4, logo5];
  const logosSecondRow = [logo6, logo7, logo8];

  return (
  <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-Regular md:text-4xl mb-24 text-center underline-animation">Trusted and Backed by</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-8">
        {logosFirstRow.map((logo, index) => (
          <button key={index} className="hover:bg-gray-100 px-8 rounded-full h-24">
            <img className="mx-auto" src={logo} alt={`logo-${index + 1}`} />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {logosSecondRow.map((logo, index) => (
          <button key={index} className="hover:bg-gray-100 px-8 rounded-full h-24 w-64">
            <img className="mx-auto" src={logo} alt={`logo-${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
    <div className="bg-cover mx-auto bg-center h-80 lg:h-64 w-4/5 mt-10 mb-10 overflow-hidden relative" style={{ backgroundImage: `url(${bgImage})`, backgroundColor: '#0C1428',  borderRadius: '4.3em'}}>
        <p className="text-white text-lg md:text-xl text-center absolute w-2/3 lg:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:py-0 py-10">You can find more information about us on
          our <span className='text-green-500'>Crunchbase page</span>, our board and advisors
          are listed on our  <span className='text-green-500'>organizational chart</span>.</p>
    </div>
    <div className="container mx-auto px-10 sm:px-6 lg:px-0 py-10 items-center justify-center w-full lg:w-1/3 h-64 mt-24">
        <h1 className="text-3xl font-Regular md:text-4xl mb-1 text-left underline-animation">We believe in open-source</h1>
        <p className="text-gray-500 text-xl text-left relative mt-9 w-full">Weaviate is open-source and available for anybody to use wherever they want. Our services are created around SaaS, Hybrid-SaaS, and industry-standard service-level agreements.</p>
    </div>
  </>
  );
}

export default SecondSection;

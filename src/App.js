import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import Navbar from './components/Navbar';
import FirstSection from './components/firstSection';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative'>
      <div className='navSet absolute w-full'>
        <Navbar />
      </div>
      <div>
        <FirstSection />
      </div>
      <div className='my-24'>
        <SecondSection />
      </div>
      <div className='md:mt-24 mt-64'>
        <Footer />
      </div>
          </div>

  );
}

export default App;

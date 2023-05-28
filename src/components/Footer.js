import React from 'react';
import FooterImage from '../assets/weaviate-home-diagram-dark.png';
import '../index.css';

const Footer = () => {
  return (
    <>
    <div className='flex flex-col-reverse sm:flex-row items-center justify-center' style={{ background: '#0C1428', borderRadius: '4.3em 4.3em 0 0' }}>
  <div className='w-90 sm:w-1/2 py-4 sm:pl-64 md:ml-0 ml-2 md:mb-0 mb-20'>
    <h1 className='text-3xl text-white font-light md:text-4xl mb-1 text-left underline-animation '>Ready to get started?</h1>
    <p className='text-white-500 text-xl font-light text-left mt-5 w-full'>Invest in us today to back the <br />AI long term memory</p>
    <div className='flex justify-start mt-5'>
      <button className='border border-green-500 hover:bg-green-500 text-white font-regular py-2 px-4 rounded-lg'>Contact Us</button>
    </div>
  </div>
  <div className='w-full sm:w-1/2 p-8 flex items-center justify-center md:mt-0 mt-10'>
    <img src={FooterImage} alt='Descriptive text' />
  </div>
</div>
<div className='mx-auto bg-black w-full'>
      <div className='ml-64 fooSect px-10 sm:px-6 lg:px-10 pt-16 flex flex-col items-center justify-center'>
        <div className='flex flex-wrap justify-center text-white w-full'>
          <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 text-left'>
            <h2 className='font-light mb-9 text-xl'>Community</h2>
            <ul className='list-none'>
              <li><a href='https://stackoverflow.com/tags/weaviate' target='_blank' rel='noopener noreferrer'>Stack Overflow</a></li>
              <li><a href='https://weaviate.io/slack' target='_blank' rel='noopener noreferrer'>Slack</a></li>
              <li><a href='https://twitter.com/weaviate_io' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
            </ul>
          </div>
          <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 text-left'>
            <h2 className='font-light mb-9 text-xl'>Meetups</h2>
            <ul className='list-none'>
              <li><a href='https://www.meetup.com/weaviate-amsterdam' target='_blank' rel='noopener noreferrer'>Amsterdam</a></li>
              <li><a href='https://www.meetup.com/weaviate-boston' target='_blank' rel='noopener noreferrer'>Boston</a></li>
              <li><a href='https://www.meetup.com/weaviate-NYC' target='_blank' rel='noopener noreferrer'>New York</a></li>
              <li><a href='https://www.meetup.com/weaviate-san-francisco' target='_blank' rel='noopener noreferrer'>San Francisco</a></li>
              <li><a href='https://www.meetup.com/weaviate-toronto' target='_blank' rel='noopener noreferrer'>Toronto</a></li>
            </ul>
          </div>
          <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 text-left'>
            <h1 className='font-light mb-9 text-xl'>More</h1>
            <ul className='list-none'>
              <li><a href='/blog'>Blog</a></li>
              <li><a href='/podcast'>Podcast</a></li>
              <li><a href='/company/playbook'>Playbook</a></li>
              <li><a href='https://github.com/weaviate/weaviate' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center mt-12 bg-black pb-10 px-4 sm:px-8'>
          <p className='text-sm sm:text-base'>Copyright © 2023 Weaviate, B.V. Built with Docusaurus.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;


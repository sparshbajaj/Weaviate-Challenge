import React from 'react';
import image1 from '../assets/Rectangle70.jpg';
import image2 from '../assets/Square71.jpg';
import image3 from '../assets/Rectangle72.jpg';
import image4 from '../assets/Square83.jpg';

function ImageGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-2/3 w-full p-4 sm:p-32">
      <div className="grid grid-cols-1 gap-4 h-full mt-12 sm:mr-4 hidden lg:grid">
        
          <img src={image1} alt="1" className="object-cover w-full h-full rounded-xl lg:rounded-3xl" />
        
          <img src={image2} alt="2" className="object-cover w-full h-full rounded-xl lg:rounded-3xl" />
        
      </div>
      <div className="grid grid-cols-1 gap-4 h-full hidden lg:grid">
        
          <img src={image4} alt="3" className="object-cover w-full h-full rounded-xl lg:rounded-3xl" />
        
          <img src={image3} alt="4" className="object-cover w-full h-full rounded-xl lg:rounded-3xl" />
        
      </div>
    </div>
  );
}

export default ImageGrid;





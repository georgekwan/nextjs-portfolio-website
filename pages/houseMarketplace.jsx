import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

import propertyImg from '@/public/assets/projects/property.png';

const houseMarketplace = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: 'cover' }}
          fill
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">House Marketplace</h2>
          <h3>React JS / Firebase</h3>
        </div>
      </div>
    </div>
  );
};

export default houseMarketplace;

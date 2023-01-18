import Image from 'next/image';
import React from 'react';

import NavLogo from '../public/assets/navLogo.png';

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px16">
        <image src="../public/assets/navLogo.png" alt="/" />
      </div>
    </div>
  );
};

export default NavBar;

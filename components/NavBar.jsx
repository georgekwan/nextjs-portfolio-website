import Home from '@/pages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import NavLogo from '../public/assets/navLogo.png';

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px16">
        <image
          src="/../public/assets/navLogo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

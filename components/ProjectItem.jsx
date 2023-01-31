import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = () => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#FF4C29] to-[#c35714fc]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={propertyImg}
        alt="/"
      />

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2x1 text-white tracking-wider text-center">
          House Marketplace
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href="/">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

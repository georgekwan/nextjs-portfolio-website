import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

import githubfinderImg from '@/public/assets/projects/github-finder.webp';

const githubFinder = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          src={githubfinderImg}
          fill
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GitHub User Lookup</h2>
          <h3>React JS / Tailwind / Daisy UI / Github REST API</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This React app allows users to search for GitHub users by username,
            using the GitHub REST API. The app is built with Tailwind CSS for
            styling and Daisy UI for user interface components.
          </p>
          <a
            href="https://github-finder-george-kwan.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/georgekwan/github-finder"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill /> React-Leaflet
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill /> Swiper
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill /> uuid
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default githubFinder;

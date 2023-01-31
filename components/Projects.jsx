import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import propertyImg from '../public/assets/projects/property.jpg';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#FF4C29]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#FF4C29] to-[#c35714fc]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={propertyImg}
              alt="/"
            />

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3>House Marketplace</h3>
              <p>React JS</p>
              <Link href="/">
                <p>More Info</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#334756]">
            LET&#39;S WORK TOGETHER TO BUILD SOMETHING
          </p>
          <h1 className="py-4 text-[#2C394B]">
            Hi, I&#39;m <span className="text-[#FF4C29]"> George</span>
          </h1>
          <h1 className="py-2 text-[#2C394B]">A Full-Stack Developer</h1>
          <p className="py-4 text-[#334756] sm:max-w-[70%] m-auto">
            Meet George, an ambitious and friendly full-stack developer with a
            background in project management. He approaches life with a "Live
            Life Like A Movie" attitude, meaning he follows his curiosity, and
            creating an interesting and fulfilling life. He is adaptable and
            ready for unexpected changes.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

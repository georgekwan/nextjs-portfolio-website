import React from 'react';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S WORK TOGETHER TO BUILD SOMETHING
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#cf3550]"> George</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Meet George, an ambitious and friendly full-stack developer with a
            background in project management. He approaches life with a "Live
            Life Like A Movie" attitude, meaning he takes risks, follows his
            curiosity, and creating an interesting and fulfilling life. He is
            adaptable and ready for unexpected changes.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

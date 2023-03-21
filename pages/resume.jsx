import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>George | Resume</title>
        <meta
          name="description"
          content="I am a full Stack Developer specializing in seamless web and mobile experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div>
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">George Kwan</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/george-kwan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/georgekwan"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;

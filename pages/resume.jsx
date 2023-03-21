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
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Mobile Development <span className="px-1">|</span> Web Development{' '}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Mobile Development</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          As a full-stack developer, I transitioned from tax and developed a
          cross-platform mobile application for Harpia Sports, making their
          hockey training program more accessible. In a team setting, I built a
          MERN stack web application providing outdoor activity suggestions
          based on weather conditions. I also developed a REST API that
          functions as a command-line interface game using Express.
        </p>
        <p>
          I excel in web development, mobile application development, and the
          MERN stack. My expertise in troubleshooting and testing software has
          enabled me to debug and improve code efficiency, achieving a
          remarkable 40% decrease in system errors and a 20% increase in
          software performance. Additionally, I integrated third-party APIs from
          external applications into web platforms.
        </p>
        <p>
          While on my career break, I pursued several online courses to enhance
          my skills in web development and programming languages. I have
          completed courses on HTML, CSS, JavaScript, and Python, and was able
          to apply these skills to develop functional projects. Additionally, I
          completed a project management professional development program and
          opportunely implemented my learnings in managing successful projects.
        </p>
        <p>
          Before my transition, I worked as a Tax Coordinator at Plains
          Midstream Canada. There, I utilized data analytics to process and
          monitor tax-related transactions, resulting in a 20% increase in
          transaction accuracy. I conducted in-depth analysis and interpretation
          of tax regulations, leading to a 15% reduction in tax-related errors
          and penalties. Furthermore, I streamlined and improved tax processes
          and procedures, resulting in a 30% increase in efficiency and saving
          10 hours per week in manual labor. I maintained open communication by
          presenting regular updates on audit status to tax auditors, resulting
          in a 25% decrease in audit duration. Finally, I prepared written
          responses or tax return amendments to resolve state and federal
          notices, resulting in a 90% success rate in resolving tax issues
          within the first attempt.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full Stack Developer
            <span className="px-2">|</span>React Native
            <span className="px-2">|</span>Expo
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Firebase
            <span className="px-2">|</span>Express
          </p>
          <p className="py-2">
            <span className="font-bold">Certifications</span>
            <span className="px-2">|</span>Certified Associate in Project
            Management (CAPM)®
            <span className="px-2">|</span>Microsoft Certified: Dynamics 365
            Fundamentals (ERP)
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;

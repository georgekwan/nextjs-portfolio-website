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
          content="I am a Software Developer specializing in seamless web and mobile experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="p-5">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-10 p-1 w-full flex justify-between items-center">
          <h2 className="text-center ml-2">George Kwan</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/george-kwan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} className="mr-2 hover:text-[#D6001C]" />
            </a>
            <a
              href="https://georgekwan.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} className="mr-2 hover:text-[#D6001C]" />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Problem-Solving Expert <span className="px-1">|</span>Open-Minded
              and Growth-Oriented<span className="px-1">|</span>Passionate about
              Technology and Innovation
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Problem-Solving Expert</p>
            <p className="py-2">Open-Minded and Growth-Oriented</p>
            <p>Passionate about Technology and Innovation</p>
          </div>
        </div>
        <p>
          As a software developer, I excel in problem-solving, meticulously
          focusing on the finer details. My commitment to continuous learning
          keeps me updated on the latest technologies. Collaborating with a team
          is my passion—I enjoy working as a team to achieve goals and support
          one another. Effective communication and coordination across different
          roles and functions ensure smooth collaboration. I thrive in dynamic
          environments, adapting quickly to new challenges. With an open
          mindset, I value feedback and enjoy learning from my peers. A fun and
          supportive work environment energizes me, while a strong work ethic
          ensures high-quality results.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>JavaScript
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>React Native
            <span className="px-2">|</span>Expo
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Firebase
          </p>
          <p className="py-2">
            <span className="font-bold">Certifications</span>
            <span className="px-2">|</span>
            <a
              href="https://www.credly.com/badges/7164e6a2-2366-491a-b5d7-c7328485ac92/"
              target="_blank"
              rel="noreferrer"
            >
              Certified Associate in Project Management (CAPM)®
            </a>
            <span className="px-2">|</span>
            <a
              href="https://www.credly.com/badges/9aefd9ce-2aa1-48bf-9c63-02b33962d265?source=linked_in_profile/"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Certified: Dynamics 365 Fundamentals (ERP)
            </a>
            <span className="px-2">|</span>
            <a
              href="https://www.credly.com/badges/ee326a5c-0df6-42c9-ae74-869164fdb6b2?source=linked_in_profile/"
              target="_blank"
              rel="noreferrer"
            >
              IBM Applied AI Professional Certificate
            </a>
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">NEW IDEA MACHINE</span>
            <span className="px-2">▫</span>Calgary, AB
          </p>
          <p className="py-1 italic">
            Mobile App Developer ▫ React Native | Expo - Internship (2023 -
            Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Collaborated with a team to develop a mobile application to help
              learners reinforce learning material by generating test questions
              using AI.
            </li>
            <li>
              Implemented user interfaces based on UX/UI designer
              specifications, resulting in immersive and engaging learning
              experiences.
            </li>
            <li>
              Integrated two third-party libraries to improve app functionality
              and user experience.
            </li>
            <li>
              Troubleshoot and resolved software issues or bugs in a timely and
              professional manner.
            </li>
            <li>
              Collaborated on daily stand-ups, code reviews, and sprint
              retrospectives using Agile methodologies.
            </li>
            <li>
              Participated in support planning stages to define requirements,
              scope, and deliverables.
            </li>
            <li>
              Understand the technical aspects of requirements and provide
              customized software solutions.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              HARPIA SPORTS(INCEPTIONU INDUSTRY PARTNER)
            </span>
            <span className="px-2">▫</span>Calgary, AB
          </p>
          <p className="py-1 italic">
            Mobile App Developer ▫ React Native | Expo | Firebase -
            Apprenticeship (2022 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created and implemented user interfaces tailored to hockey players
              that integrated multi-sensory feedback, achieving 28/30 user
              satisfaction and delivering immersive and engaging experiences
              that delighted users.
            </li>
            <li>
              Spearheaded the implementation of key product enhancements,
              including data visualization features and bug fixes, based on
              thirty user feedbacks. Resulted in a notable 20% boost in user
              retention and satisfaction metrics.
            </li>
            <li>
              Integrated APIs and two third-party libraries, such as Firebase,
              React Native Dropdown Picker and React Native Gifted Charts to
              improve app functionality and user experience.
            </li>
            <li>
              Executed a software development cycle from requirements gathering
              to deployment, delivering a mobile-based hockey training app that
              met the client’s specifications and expectations within 2 months
              of the timeline.
            </li>
            <li>
              Collaborated on daily stand-ups, code reviews, and sprint
              retrospectives using Agile methodologies.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">INCEPTIONU</span>
            <span className="px-2">▫</span>Calgary, AB
          </p>
          <p className="py-1 italic">
            Full Stack Developer ▫ MongoDB | Express | React | Node.js -
            Apprenticeship (2022 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built a MERN(MongoDB, Express, React, Node.js) stack web
              application in a team of three settings to provide outdoor
              activity suggestions based on weather conditions.
            </li>
            <li>
              Integrated third-party APIs from external applications into web
              platforms to produce accurate weather data with a 95% uptime.
            </li>
            <li>
              Reduced system errors by 40% and increased software performance by
              20% by troubleshooting, testing, and debugging software to clean
              up code and improve efficiency.
            </li>
            <li>
              Developed a REST API that functions as a command-line interface
              game using Express.
            </li>
            <li>
              Advocated project management best practices to the team; Resulting
              in a 15% reduction in project delays and a 20% increase in the
              project completion rate.
            </li>
            <li>
              Improved team communication by implementing a Gantt chart and
              Kanban board, resulting in 2 days reduction in project completion.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">PROFESSIONAL DEVELOPMENT</span>
            <span className="px-2">▫</span>Calgary, AB
          </p>
          <p className="py-1 italic">Career Break (2020 - 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Completed several online courses on web development and
              programming languages, such as HTML, CSS, JavaScript, and Python.
            </li>
            <li>
              Successfully completed project management professional development
              programs.
            </li>
            <li>
              Completed Microsoft Certified: Dynamics 365 Fundamentals (ERP).
            </li>
            <li>
              Participated as a volunteer with a non-governmental organization
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">PLAINS MIDSTREAM CANADA</span>
            <span className="px-2">▫</span>Calgary, AB
          </p>
          <p className="py-1 italic">
            Tax Coordinator ▫ Fuel Tax | Terminal Operator | Sales & Use Tax
            (2008 - 2020)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Managed and maintained the tax modules of the ERP system,
              including tax rates, tax exemption status, tax liability accounts,
              and contracts.
            </li>
            <li>
              Collaborated cross-functionally with internal stakeholders to
              capture and account for tax data in the ERP system, driving
              financial integrity and compliance.
            </li>
            <li>
              Produced flow charts to ensure 100% compliance with internal
              governance, and optimized work processes.
            </li>
            <li>
              Utilized data analytics to process and monitor tax-related
              transactions, resulting in a 20% increase in transaction accuracy.
            </li>
            <li>
              Conducted in-depth analysis and interpretation of tax regulations,
              leading to reduction of in 200 tax-related errors and $30,000USD
              of penalties.
            </li>
            <li>
              Streamlined and improved tax processes and procedures, resulting
              in a 30% increase in efficiency and saving 10 hours per week in
              manual labour.
            </li>
            <li>
              Maintained open communication by presenting regular updates on
              audit status to tax auditors, resulting in decrease of 5 days in
              audit duration.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

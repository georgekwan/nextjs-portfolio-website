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
              Strong work ethic <span className="px-1">|</span>Excellent problem
              solver<span className="px-1">|</span>Effective communicator
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Problem-Solving Expert</p>
            <p className="py-2">Open-Minded and Growth-Oriented</p>
            <p>Passionate about Technology and Innovation</p>
          </div>
        </div>
        <p className="text-center">
          Proactive collaborator devoted to understanding perspectives and
          fostering positivity to bring out excellence in teams. Skilled at
          breaking down complex issues and thinking creatively.
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
              Led a team to build an AI-based mobile app for learners, enhancing
              knowledge retention.
            </li>
            <li>
              Engineered user interfaces following UX/UI designer guidelines,
              contributing to immersive learning interfaces.
            </li>
            <li>
              Expertly shielded users from software issues and bugs due to fast
              and professional troubleshooting skills.
            </li>
            <li>
              Adhered to Agile methodologies for daily stand-ups, code reviews,
              and sprint retrospectives, enabling efficient project management.
            </li>
            <li>
              Took part in defining requirements, scope, and deliverables in
              support planning stages
            </li>
            <li>
              Empowered junior staff through personalized mentorship, fostering
              their React Native expertise, Scrum process understanding, and
              professional growth.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">PROFESSIONAL DEVELOPMENT</span>
            <span className="px-2">▫</span>Calgary, AB
          </p>
          <p className="py-1 italic">Career Break (2020 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Co-developed a mobile app for Harpia Sports, promoting access to
              their training program.
            </li>
            <li>
              Graduated from a comprehensive full-stack development program,
              acquiring expertise in MERN stack and collaboratively working in a
              software development team.
            </li>
            <li>
              Continuously upgraded knowledge in software development and
              front-end technologies via online courses.
            </li>
            <li>
              Remained current with the latest front-end development trends and
              technologies.
            </li>
            <li>
              Certified Associate in Project Management (CAPM) from the Project
              Management Institute.
            </li>
            <li>
              Familiarized with Agile software development methodologies and Git
              version control.
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
            <li>
              Coached junior staff one-on-one to develop their tax knowledge,
              fostering their growth.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

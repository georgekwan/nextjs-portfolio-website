import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center mx-2">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#334756]">
            LET&#39;S WORK TOGETHER TO BUILD SOMETHING
          </p>
          <h1 className="py-4 text-[#2C394B]">
            Hi, I&#39;m
            <TypeAnimation
              className="text-[#D6001C]"
              sequence={[
                ' George',
                2500,
                ' 佐治',
                1000,
                ' Jorge',
                1000,
                ' 喬治',
                1000,
                ' Georg',
                1000,
                ' Joris',
                1000,
                ' จอร์จ',
                1000,
                ' Georges',
                1000,
                ' Giorgio',
                1000,
              ]}
              speed={200}
              deletionSpeed={30}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <h1 className="py-2 text-[#2C394B]">A Software Developer</h1>
          <p className="py-4 text-[#334756] sm:max-w-[70%] m-auto">
            I thrive on problem solving and enjoy exploring new opportunities
            that align with my curiosity. With an adaptive mindset, I&apos;m
            always ready to tackle any challenge that comes my way. Whether
            it&apos;s coding or life in general, I approach it with curiosity
            and a desire to learn.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/george-kwan/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                style={{ backgroundColor: '#eceef3' }}
              >
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://georgekwan.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                style={{ backgroundColor: '#eceef3' }}
              >
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div
                className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                style={{ backgroundColor: '#eceef3' }}
              >
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div
                className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:drop-shadow-lg hover:scale-110 hover:text-[#D6001C] ease-in duration-300"
                style={{ backgroundColor: '#eceef3' }}
              >
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

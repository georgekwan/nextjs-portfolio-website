import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../public/fav.gif';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  // Transparent only in project page
  useEffect(() => {
    if (
      router.asPath === '/threeJSIntro' ||
      router.asPath === '/funactive' ||
      router.asPath === '/githubFinder' ||
      router.asPath === '/houseMarketplace'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, [navBg]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="60"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li
              id="home-nav"
              className="ml-10 text-sm uppercase hover:border-b hover:text-[#D6001C]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              id="about-nav"
              className="ml-10 text-sm uppercase hover:border-b hover:text-[#D6001C]"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              id="skills-nav"
              className="ml-10 text-sm uppercase hover:border-b hover:text-[#D6001C]"
            >
              <Link href="/#skills">Skills</Link>
            </li>
            <li
              id="projects-nav"
              className="ml-10 text-sm uppercase hover:border-b hover:text-[#D6001C]"
            >
              <Link href="/#projects">Projects</Link>
            </li>
            <li
              id="resume-nav"
              className="ml-10 text-sm uppercase hover:border-b hover:text-[#D6001C]"
            >
              <Link href="/resume">Resume</Link>
            </li>
            <li
              id="contact-nav"
              className="ml-10 text-sm uppercase hover:border-b hover:text-[#D6001C]"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="80" height="50" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-[#eceef3] shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something amazing together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  id="home-nav"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  id="about-nav"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  id="skills-nav"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  id="projects-nav"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li
                  id="resume-nav"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  id="contact-nav"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#D6001C]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/george-kwan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-[#eceef3] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://georgekwan.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 bg-[#eceef3] cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-[#eceef3] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-[#eceef3] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

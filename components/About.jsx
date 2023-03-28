import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex m-2 items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#D6001C]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-[#334756]">
            Hey there, I&apos;m George and I&apos;m a front-end developer with a
            passion for taking on challenges. I embrace every opportunity that
            comes my way and love to follow my curiosity wherever it leads me.
            My background in tax has helped me to develop strong analytical
            skills, a keen eye for detail, and a natural problem-solving ability
            that I bring to every project.
          </p>
          <p className="py-2 text-[#334756]">
            I&apos;m always looking for new opportunities to improve my coding
            skills and grow as a developer. Just like someone who hits the gym
            regularly to lift weights, I approach coding with the same level of
            dedication and commitment. I don&apos;t shy away from putting in
            extra effort to achieve success and tackle every task with an
            organized and efficient approach.
          </p>
          <p className="py-2 text-[#334756]">
            Outside of work, I enjoy exploring new cultures and experiences,
            whether it&apos;s travelling to a new destination or trying out a
            new adventure sport like whitewater paddleboarding or badminton. I
            believe in balancing work and play and always strive to create a
            positive and enjoyable work environment where my team members feel
            motivated and supported.
          </p>
          <p>
            I&apos;m a hardworking and sincere individual who is always on the
            lookout for ways to live life to the fullest. If you&apos;re
            interested in learning more about my skills and experience, feel
            free to reach out to me at{' '}
            <Link href="mailto:gwmkwan@gmail.com">gwmkwan@gmail.com</Link>.
            Let&apos;s connect and explore how I can make a positive impact on
            your next project!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#334756] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

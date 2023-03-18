import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#FF4C29]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-[#334756]">
            Meet George, an ambitious and friendly full-stack developer with a
            background in project management. He approaches life with a "Live
            Life Like A Movie" attitude, meaning he takes risks, follows his
            curiosity, and lives life on his own terms. He is adaptable and
            ready for unexpected changes.
          </p>
          <p className="py-2 text-[#334756]">
            George has a deep-seated love of coding, just like someone who goes
            to the gym regularly to lift weights. He has a keen eye for detail,
            strong analytical skills, and a natural problem-solving ability,
            which he developed from his background in indirect taxes. He is
            always looking for new opportunities to improve his skills and grow
            as a developer and is not afraid to put in the extra effort to
            achieve success. With an organized and efficient approach, George
            approaches tasks with purpose and precision, similar to someone who
            is dedicated to hitting their fitness goals.
          </p>
          <p className="py-2 text-[#334756]">
            In his free time, George enjoys exploring new things, experiencing
            different cultures, and having fun. He loves traveling and going on
            adventures and is skilled at whitewater paddleboarding and
            badminton. George believes in balancing work and play and creates a
            positive and enjoyable work environment. He is committed to
            motivating and supporting his team members in achieving success.
            George is a hardworking and sincere individual who always looks for
            ways to live life to the fullest. If you're interested in learning
            more about George's skills and experience, don't hesitate to reach
            out to him!
          </p>
          <p className="py-2 text-[#334756] underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
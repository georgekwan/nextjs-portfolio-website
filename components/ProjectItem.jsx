import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, technologies, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#D6001C] to-[#ff1635]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2x1 text-[#eceef3] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-[#eceef3] text-center">{technologies}</p>
        <Link href={projectUrl}>
          <p className="text-center bg-[#eceef3] py-3 rounded-lg text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

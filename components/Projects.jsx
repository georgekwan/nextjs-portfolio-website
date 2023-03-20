import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import funactiveImg from '../public/assets/projects/funactive.png';
import housemarketplaceImg from '../public/assets/projects/house-marketplace.png';
import githubfinderImg from '../public/assets/projects/github-finder.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#D6001C]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Hockey Trainer"
            backgroundImg={housemarketplaceImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Weather Based Activity App"
            backgroundImg={funactiveImg}
            projectUrl="/funactive"
          />
          <ProjectItem
            title="House Marketplace"
            backgroundImg={housemarketplaceImg}
            projectUrl="/houseMarketplace"
          />
          <ProjectItem
            title="GitHub User Lookup"
            backgroundImg={githubfinderImg}
            projectUrl="/githubFinder"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={housemarketplaceImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

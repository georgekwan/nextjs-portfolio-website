import funactiveImg from '../public/assets/projects/funactive.webp';
import githubfinderImg from '../public/assets/projects/github-finder.webp';
import housemarketplaceImg from '../public/assets/projects/house-marketplace.webp';
import threeJSIntroImg from '../public/assets/projects/threeJS-intro.webp';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full p-5 m-2">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#D6001C]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid bg-[#eceef3] md:grid-cols-2 gap-8">
          {/* <ProjectItem
            title="Hockey Trainer"
            technologies="React Native | Firebase"
            backgroundImg={hockeytrainerImg}
            projectUrl="/hockeytrainer"
          /> */}
          {/* <ProjectItem
            title="Portfolio page"
            technologies="React | Next.js"
            backgroundImg={portfolioImg}
            projectUrl="/"
          /> */}
          <ProjectItem
            title="Three JS Landing Page"
            technologies="JavaScript | Three"
            backgroundImg={threeJSIntroImg}
            projectUrl="/threeJSIntro"
          />
          <ProjectItem
            title="Weather Based Activity App"
            technologies="MongoDB | Express | React | Node.js"
            backgroundImg={funactiveImg}
            projectUrl="/funactive"
          />
          <ProjectItem
            title="House Marketplace"
            technologies="React | Firebase"
            backgroundImg={housemarketplaceImg}
            projectUrl="/houseMarketplace"
          />
          <ProjectItem
            title="GitHub User Lookup"
            technologies="React | Tailwind | Daisy UI"
            backgroundImg={githubfinderImg}
            projectUrl="/githubFinder"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

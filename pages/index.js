import { useEffect } from 'react';
import Head from 'next/head';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          George Kwan | Software Developer Specializing in Website Management,
          Mobile App Development, and SEO Optimization
        </title>
        <meta
          name="description"
          content="I am a skilled software developer with expertise in website management, mobile app development, and SEO optimization. With experience as a Website Manager at Gateway Association Alberta, I have successfully maintained nonprofit websites by ensuring smooth functionality and implementing continuous updates. As a Mobile App Developer at New Idea Machine, I have built immersive mobile interfaces using JavaScript and React Native, while also mentoring others. My proficiency in optimizing SEO and metadata, as well as my ability to collaborate cross-functionally and resolve bugs efficiently, make me a valuable asset to any software development team."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

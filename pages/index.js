import { useEffect } from 'react';
import Head from 'next/head';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import PlerdyScript from './api/PlerdyScript';

export default function Home() {
  useEffect(() => {
    PlerdyScript();
  }, []);
  return (
    <>
      <Head>
        <title>George Kwan | Software Developer</title>
        <meta
          name="description"
          content="I am a software Developer specializing in seamless web and mobile experiences."
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

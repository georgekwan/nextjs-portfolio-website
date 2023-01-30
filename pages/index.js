import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>George | Full-End Developer</title>
        <meta
          name="description"
          content="I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

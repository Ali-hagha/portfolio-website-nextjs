import Head from 'next/head';
import { Poppins } from 'next/font/google';
import NavBar from '@/components/ui/NavBar/NavBar';
import { useState } from 'react';
import Hero from '@/components/sections/Hero/Hero';
import SideDrawer from '@/components/ui/SideDrawer/SideDrawer';
import About from '@/components/sections/About/About';
import Projects from '@/components/sections/Projects/Projects';
import Footer from '@/components/sections/Footer/Footer';
import Contact from '@/components/sections/Contact/Contact';
import { GetStaticProps } from 'next';
import { Project } from '@/types/project';
import getProjects from '@/actions/getProjects';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '300', '400', '500', '600', '700'],
  style: 'normal',
});

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  const [isSideDrawerActive, setIsSideDrawerActive] = useState(false);

  return (
    <>
      <Head>
        <title>Ali Haghayegh | Freelance React developer</title>
        <meta
          name="description"
          content="Ali Haghayegh's web development portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="32x32" type="image/png" href="/icon.png" />
      </Head>
      <div className={`${poppins.variable} font-sans text-nuetral-dark `}>
        <NavBar
          isSideDrawerActive={isSideDrawerActive}
          setIsSideDrawerActive={setIsSideDrawerActive}
        />
        <main
          className={`max-w-screen-2xl  mx-auto px-6 sm:px-10 md:px-16 lg:px-32`}
        >
          <Hero />
          <About />
          <Projects projects={projects} />
          <Contact />
        </main>
        <Footer />
        <SideDrawer
          isSideDrawerActive={isSideDrawerActive}
          setIsSideDrawerActive={setIsSideDrawerActive}
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: Project[];
}> = async () => {
  const projects = await getProjects();

  return { props: { projects } };
};

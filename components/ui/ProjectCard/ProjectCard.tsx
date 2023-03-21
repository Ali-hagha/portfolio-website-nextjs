import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <div className="mb-8 md:mb-16 flex flex-col xl:flex-row rounded-2xl bg-card p-5 shadow-2xl shadow-primary/20 xl:space-x-8 max-w-6xl">
      <div className=" flex items-center justify-center rounded-xl overflow-hidden w-auto max-h-80 xl:w-[500px] shrink-0 mb-8 xl:mb-0">
        <Image
          className=" object-cover h-full w-full "
          src="https://dummyimage.com/960x600/5853e6/fff"
          alt="project image"
          width={'960'}
          height={'600'}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="mb-3 text-xl md:text-2xl font-bold">Todoist Clone</h2>
          <p className="mb-4 text-base lg:text-lg leading-relaxed tracking-wide ">
            This is a clone of todoist the popular task management app. It is a
            CRUD app i created using react for the frontend and a PostgreSQL
            database for the backend. divide your tasks into projects and add
            due dates to them.
          </p>
          <h3 className="mb-1 text-lg md:text-xl font-semibold text-nuetral-dark/90">
            Tech I used:
          </h3>

          <ul className="mb-8 text-sm lg:text-base font-light tracking-wide flex flex-row flex-wrap gap-x-8 text-nuetral-dark/90">
            <li>Typescript</li>
            <li>Tailwind</li>
            <li>React query</li>
            <li>React</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div className="flex w-full justify-end">
          <Link
            href={'#'}
            className="rounded-lg border-2 border-primary py-2 px-4 font-bold text-primary transition-all hover:shadow-[4px_4px_0px_0px_rgb(64,43,202)] hover:-translate-x-1 hover:-translate-y-1 mr-4"
          >
            Check it out
            <HiExternalLink className="inline-block text-2xl ml-2 align-top" />
          </Link>
          <Link
            href={'#'}
            className="rounded-lg border-2 border-transparent hover:border-primary py-2 px-2 font-bold text-primary transition-all hover:shadow-[4px_4px_0px_0px_rgb(64,43,202)] hover:-translate-x-1 hover:-translate-y-1"
          >
            <FiGithub className="inline-block text-2xl align-top" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

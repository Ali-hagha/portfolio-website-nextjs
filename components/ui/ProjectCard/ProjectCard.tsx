import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { fadeInFromBottomDelayVariant } from '@/animation/variants';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      variants={fadeInFromBottomDelayVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-8 md:mb-16 flex flex-col xl:flex-row rounded-2xl bg-card p-5 shadow-2xl shadow-primary/20 xl:space-x-8 max-w-6xl"
    >
      <div className=" flex items-center justify-center rounded-xl overflow-hidden w-auto max-h-80 xl:w-[500px] shrink-0 mb-8 xl:mb-0">
        <Image
          className=" object-cover h-full w-full "
          src={project.imagePath}
          alt={project.title}
          width={'960'}
          height={'600'}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="mb-3 text-xl md:text-2xl font-bold">
            {project.title}
          </h2>
          <p className="mb-4 text-base lg:text-lg leading-relaxed tracking-wide ">
            {project.description}
          </p>
          <h3 className="mb-1 text-lg md:text-xl font-semibold text-nuetral-dark/90">
            Tech I used:
          </h3>

          <ul className="mb-8 text-sm lg:text-base font-light tracking-wide flex flex-row flex-wrap gap-x-8 text-nuetral-dark/90">
            {project.techStack.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-end">
          <a
            href={project.liveUrl}
            target="_blank"
            className="rounded-lg border-2 border-primary py-2 px-4 font-bold text-primary transition-all hover:shadow-[4px_4px_0px_0px_rgb(64,43,202)] hover:-translate-x-1 hover:-translate-y-1 mr-4"
          >
            Check it out
            <HiExternalLink className="inline-block text-2xl ml-2 align-top" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            className="rounded-lg border-2 border-transparent hover:border-primary py-2 px-2 font-bold text-primary transition-all hover:shadow-[4px_4px_0px_0px_rgb(64,43,202)] hover:-translate-x-1 hover:-translate-y-1"
          >
            <FiGithub className="inline-block text-2xl align-top" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import { Project } from '@/types/project';
import ProjectCard from '../../ui/ProjectCard/ProjectCard';

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <section
      id="projects"
      className="mb-2- md:mb-32 scroll-mt-24 md:scroll-mt-32 "
    >
      <h2 className="text-3xl font-bold mb-12 max-w-6xl mx-auto">
        {"Some Things I'v Built"}
      </h2>
      <div className="grid justify-items-center gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

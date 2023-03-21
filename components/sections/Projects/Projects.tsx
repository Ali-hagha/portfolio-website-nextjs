import ProjectCard from '../../ui/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <section className="grid justify-items-center gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default Projects;

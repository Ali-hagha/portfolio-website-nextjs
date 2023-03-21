import ProjectCard from '../../ui/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <section className="">
      <h2 className="text-3xl font-bold mb-12 max-w-6xl mx-auto">
        {"Some Things I'v Built"}
      </h2>
      <div className="grid justify-items-center gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

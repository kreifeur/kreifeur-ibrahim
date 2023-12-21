import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full  ">
      <div className="mt-[10vh] py-2 sm:px-10 px-2 flex flex-col gap-2">
        <h1 className="name head_text text-secondary-600">My Projects</h1>
        <hr />
        <div className="flex flex-col gap-[10vh]   font-[200] items-center W-full  py-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;

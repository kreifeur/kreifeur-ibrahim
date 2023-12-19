import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section id="experiences" className="w-full  ">
      <div className="mt-[10vh] py-2 sm:px-10 px-2 flex flex-col gap-2">
        <h1 className="head_text ">My <span className="text-secondary-600 ">projects</span> , what did i work on ?</h1>
        <hr />
        <div className="flex flex-col gap-[10vh]   font-[200] items-center W-full  py-6">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
      </div>
    </section>
  )
}

export default Projects
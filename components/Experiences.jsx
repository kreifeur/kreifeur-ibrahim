import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="w-full  ">
      <div className="mt-[10vh] py-2 px-10 flex flex-col gap-2">
        <h1 className="head_text ">My <span className="text-secondary-600 ">experiences</span> , where did i work before ?</h1>
        <hr />
        <div className="flex flex-col gap-8   font-[200] items-center W-full  py-6">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
      </div>
    </section>
  );
};

export default Experiences;

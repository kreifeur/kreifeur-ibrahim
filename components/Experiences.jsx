import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="w-full  ">
      <div className="mt-[10vh] py-2 sm:px-10 px-2 flex flex-col gap-2">
      <h1 className="name head_text text-secondary-600">My Experience</h1>
        <hr />
        <div className="text-xl font-bold">Where did i work before ?</div>
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

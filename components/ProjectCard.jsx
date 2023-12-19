import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="w-full  flex flex-col gap-2 justify-between">
      <div className="">
        <div className=" text-2xl font-bold">Ecommerce website</div>

        <div className="">
          Frontend developement
        </div>
      </div>
      <div className="sm:p-5 p-1  flex items-center justify-center bg-secondary-600 opacity-1 ">
          <Image
            width={1000}
            height={900}
            src="/assets/images/project2.png"
          />
      </div>
      <div className="flex sm:gap-4 sm:flex-row flex-col gap-2">
      <button className="black_btn hidden sm:flex">
          2023
        </button>
        <button className="black_btn">
          React js - Django Rest Framework
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

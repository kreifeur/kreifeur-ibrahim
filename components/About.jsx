const About = () => {
  return (
    <section id="about" className="w-full  ">
      <div className="mt-[10vh] py-2 sm:px-10 px-2 flex flex-col gap-2">
        <h1 className="name head_text text-secondary-600">About Me</h1>
        <hr />
        <div className="text-xl font-bold">A brief intro, who am I?</div>
        <div className="flex gap-4 text-lg font-[200]">
          <div className="flex-1 p-2">
            I am an independent frontend developer, UI/UX designer and creator
            based in Melbourne, Australia.
            <br />
            I specialize in crafting elevated, intuitive, and minimalistic
            designs for startups and small businesses to help them stand out in
            the digital landscape with a powerful impact. 😎 When I am not
            developing or designing, I enjoy creating videos that talk about
            frontend development, productivity and design on YouTube 📸
          </div>

          <div className="flex-1 hidden sm:flex"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

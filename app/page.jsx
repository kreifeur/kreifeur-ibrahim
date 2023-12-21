import About from "@components/About";
import Contact from "@components/Contact";
import Experiences from "@components/Experiences";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import Services from "@components/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-between ">
      <Hero/>
      <About/>
      <Services/>
      <Experiences/>
      <Projects/>
      {/* <Contact/> */}
    </div>
  );
}

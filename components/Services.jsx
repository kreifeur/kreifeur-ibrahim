import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section id="services" className="w-full  ">
    <div className="mt-[10vh] py-2 px-10 flex flex-col gap-2">
      <h1 className="head_text">What can offer to you ?</h1>
      <hr />
      <div className="flex flex-col items-center gap-3">
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
    </div>
  </section>
  )
}

export default Services
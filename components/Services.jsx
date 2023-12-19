import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section id="services" className="w-full  ">
    <div className="mt-[10vh] py-2 sm:px-10 px-2 flex flex-col gap-2">
    <h1 className="name head_text text-secondary-600">My Services</h1>
        <hr />
        <div className="text-xl font-bold">What can offer to you ? </div>
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
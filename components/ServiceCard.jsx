const ServiceCard = () => {
  return (
    <div className="flex gap-10 p-5  w-[90%] flex-col sm:flex-row  ">
      <div className="flex-1">
        <div className="text-2xl font-bold mb-3">my expertises.</div>

        <div>
          I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating digital
          experience for everyone.
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 text-2xl font-bold text-secondary-500 ">
        <li>
            WEB DEVELOPEMET
        </li>
        <li>
            WEB DESIGN
        </li>
        <li>
            UI/UX DESIGN
        </li>
        <li>
            BRANDING
        </li>
        <li>
            WEB DEVELOPEMET
        </li>
        <li>
            WEB DESIGN
        </li>
        <li>
            UI/UX DESIGN
        </li>
        <li>
            BRANDING
        </li>
      </div>
    </div>
  );
};

export default ServiceCard;

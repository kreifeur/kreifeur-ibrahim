import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact" className="w-full  ">
      <div className="mt-[10vh] py-2 sm:px-10 px-2 flex flex-col gap-2 items-center  ">
        <h1 className="w-full name head_text text-secondary-600">Contact me</h1>
        <hr className="w-full" />
        <div className="flex font-[200] md:w-[90%] w-full items-center flex-col md:flex-row  md:gap-[20vh] gap-[10vh]">
          <div className="flex-[2] flex flex-col gap-6">
            <h1 className="head_text">
              Have an awesome idea? Let's bring it to life.
            </h1>
            <p className="text-xl text-secondary-500">
              I am currently not available for freelance work. I am accepting
              new projects starting from February 2023.
            </p>
            <div className="flex gap-10 flex-col md:flex-row">
              <input
                className="py-2 outline-none border-b border-b-black"
                placeholder="Your name"
                type="text"
              />
              <input
                className="py-2 outline-none border-b border-b-black"
                placeholder="Your email"
                type="text"
              />
            </div>
            <textarea
              className=" outline-none border-b border-b-black"
              placeholder="Your message ..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="black_btn h-[40px] w-[200px]">
              Send message
            </button>
          </div>
          <div className="flex-[1] w-full flex flex-col md:gap-10 gap-3 ">
            <div>
              <h1 className="text-xl font-bold my-2">My Digital Spaces</h1>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 text-gray-500  items-center ">
                  <BsFacebook className="text-lg" />
                  FACEBOOK
                </li>

                <li className="flex gap-3 text-gray-500  items-center ">
                  <BsGithub className="text-lg" />
                  GITHUB
                </li>

                <li className="flex gap-3 text-gray-500  items-center ">
                  <BsInstagram className="text-lg" />
                  INSTAGRAM
                </li>

                <li className="flex gap-3 text-gray-500  items-center ">
                  <BsYoutube className="text-lg" />
                  YOUTUBE
                </li>
              </ul>
            </div>


            <div>
              <h1 className="text-xl font-bold my-2">My Digital Spaces</h1>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 text-gray-500  items-center ">
                  <BsFacebook className="text-lg" />
                  FACEBOOK
                </li>

                <li className="flex gap-3 text-gray-500  items-center ">
                  <BsGithub className="text-lg" />
                  GITHUB
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-bold ">Location</h1>
              <div className="flex gap-3 text-gray-500  items-center">
                CHLEF , ALGERIA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import TweenMax from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect } from "react";

const Hero = () => {
  useLayoutEffect(() => {
    TweenMax.fromTo(
      ".namex",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        delay: 1,
        ease: "expo.inOut",
      }
    );

    TweenMax.to(".box", {
      opacity: 1,
      duration: 2,
      delay: 0,
      ease: "expo.In",
      scale: 0.8,
    });
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="h-[100vh]  w-full  py-2 sm:px-10 sm:px-2 flex flex-col items-center justify-center sm:gap-5 gap-10 ">
        <h1 className="opacity-0 font-black sm:text-8xl text-[35px] name namex text-center">
          HEY , I'M KREIFEUR
        </h1>
        <h1 className="opacity-0 font-black sm:text-8xl text-[35px] stroke_name namex">
          HEY , I'M KREIFEUR
        </h1>
        <h1 className="opacity-0 font-black sm:text-8xl text-[35px] name namex">
          HEY , I'M KREIFEUR
        </h1>

        <div className="absolute z-[-10] sm:w-[80%] sm:h-[80%] h-[60%] w-[100%] bg-red-200 rounded box opacity-0 ">
          <Image
            className="rounded"
            src="/assets/images/bg.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

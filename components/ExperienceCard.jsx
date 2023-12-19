'use client'
import TweenMax from 'gsap'
import { useLayoutEffect } from 'react';
const ExperienceCard = () => {
  
  return (
    <div className=" flex gap-10  justify-center  ">
      <span className="ball rounded-full bg-secondary-600  w-[30px] h-[30px] text-white hidden sm:flex "></span>
      <div className="sm:w-[50%] w-[100%]">
        <div className="font-bold text-2xl text-secondary-600">HR DATA ANALYST - BNP PARIBAS</div>
        <h2 className="text-secondary-600">21 mars 2023 - 29 juin 2023</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          sequi. Excepturi fugit dignissimos nostrum animi sequi quis facere rem
          adipisci.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;

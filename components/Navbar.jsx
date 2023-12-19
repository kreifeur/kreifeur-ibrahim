"use client";
import Image from "next/image";
import Link from "next/link";
import TweenMax from "gsap";
import { useLayoutEffect } from "react";

const Navbar = () => {
  useLayoutEffect(() => {
    TweenMax.fromTo(
      ".link",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        duration: 0.7,
        x: 0,
        delay: 3,
        ease: "expo.inOut",
      }
    );


    TweenMax.fromTo(
      ".nav",
      {
        opacity: 0,
        y: '-10vh',
      },
      {
        opacity: 1,
        duration: 0.7,
        y: 0,
        delay: 2,
        ease: "expo.inOut",
      }
    );
  }, []);
  return (
    <nav className="h-[10vh] sm:px-10 pr-4 flex items-center justify-between border-b bg-white z-30 fixed top-0 w-full nav opacity-0">
      {/* logo */}

      <Link href="/" className="opacity-0 link">
        <Image
          src="/assets/images/logo_white.jpg"
          alt="logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </Link>

      {/* menu */}
      <ul className="flex gap-6 items-center">
        <Link className="hidden sm:flex opacity-0 link " href="#about">
          about
        </Link>
        <Link className="hidden sm:flex opacity-0 link" href="#services">
          services
        </Link>
        <Link className="hidden sm:flex opacity-0 link" href="#experiences">
          experiences
        </Link>
        <Link className="hidden sm:flex opacity-0 link" href="#projects">
          projects
        </Link>
        <Link className="hidden sm:flex opacity-0 link" href="/">
          blog
        </Link>
        <Link className="link opacity-0" href="#contact">
          <button className="black_btn ">Let's talk</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

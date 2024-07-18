/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle"; // Import the Particle component
import TextEffect from "./TextEffect";
import {
  ArrowDownTrayIcon,
  GlobeAltIcon,
  LinkIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const Hero = () => {
  const handleDownloadCV = () => {
    const cvPath = "/images/Jora_cv.pdf";

    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Jora_cv.pdf";
    link.click();
  };

  const handleWatchVideo = () => {
    window.open(
      "https://www.linkedin.com/in/jora-hovsepyan-459149265/",
      "_blank"
    );
  };

  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center relative">
      <Particle />
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">JORA!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            I'm a Software developer from Gyumri, Armenia, and my journey in
            programming began in 2022. At 23 years old, I enjoy the challenges
            and creativity coding offers. I believe in self-education and am
            always seeking to develop my skills. Through online courses,
            bootcamps, and hands-on projects, I stay updated with the latest
            industry trends. Thank you for visiting my portfolio. I hope you
            enjoy exploring my work.
          </p>
          <div className="mt-[2rem] flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <button
              className="px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 hover:bg-yellow-400 transition-all duration-200"
              onClick={handleDownloadCV}
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              className="flex items-center space-x-2"
              onClick={handleWatchVideo}
            >
              <LinkIcon className="w-[4rem] h-[4rem] text-[#55e6a5] hover:text-yellow-400 transition-all duration-200" />
              <p className="text-[20px] font-semibold text-white">
                My Linkedin Page
              </p>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-[#55e6a5] rounded-full relative overflow-hidden">
            <img
              src="/images/u1.jpg"
              alt="user"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

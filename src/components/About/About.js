import React from "react";

export default function About() {
  return (
    <div className="w-full bg-slate-900 h-fit md:h-screen flex flex-col md:flex-row flex-wrap justify-center  pt-20 ">
      <div className="relative z-10 w-[50%] sm:w-[35%] mx-auto">
        <img
          src="https://res.cloudinary.com/dbymvhk8x/image/upload/v1703945042/4_6_cyf3ad.jpg"
          className="absolute rounded-xl w-[100%]  h-80 md:h-[70%] md:w-[70%] "
        />
        <div
          className=" border-cyan-500 rounded-lg  ml-10 mt-10  h-80 w-[100%] md:h-[70%] md:w-[70%] top-7 left-8 z-0 overflow-hidden"
          style={{ borderWidth: "1rem", overflow: "hidden" }}
        ></div>
      </div>
      <div className="flex flex-col md:justify-start md:items-start justify-center md:w-[50%] pt-9">
        <h1 className="text-white text-5xl font-semibold font-serif pt-11 md:text-start text-center">
          ABOUT ME
        </h1>
        <h1 className="text-gray-500 text-wrap mt-5 text-xl font-serif font-medium md:text-start text-center">
          I am a highly skilled full stack developer with a demonstrated history
          of successfully delivering scalable and high-performance web
          applications. I am deeply passionate about continuously updating my
          knowledge and expertise in the latest technologies and best practices
          within the field. In addition to my experience as a freelancer, I have
          also worked as a software engineer, further enhancing my proficiency
          in this domain.
        </h1>
        <div className="flex flex-row md:justify-start justify-center">
          <button
            type="button"
            class="font-bold text-3xl bg-gradient-to-r from-cyan-600 to-indigo-800 hover:from-pink-900 hover:to-yellow-500 md:px-9 text-white rounded-xl px-3 py-5 mt-6 transition-all duration-500"
          >
            Hire me
          </button>
          <button
            type="button"
            class="font-bold ml-4 text-3xl bg-none border-2 border-cyan-600 hover:border-cyan-800 md:px-9 text-white rounded-xl px-3 py-5 mt-6 transition-all duration-500"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

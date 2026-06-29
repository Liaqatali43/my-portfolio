"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../common/Button";
import { GrShare } from "react-icons/gr";

import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

const Home = () => {
  const windowCode = [
    {
      line: "1",
      variable: "const  ",

      name: "developer",
      equal: "=",
      bracket: "{",
    },
    {
      line: "2",
      name: "name",
      colon: ":",
      value: "Liaqat ali",
      comma: ",",
    },

    {
      line: "3",
      name: "role",
      colon: ":",
      value: "Frontend Dev",
      comma: ",",
    },
    {
      line: "4",
      name: "skills",
      colon: ":",
      bracket: "[",
    },
    {
      num: "5",
      value: '"React", "Typescript"',

      comma: ",",
    },
    {
      num: "6",
      value: '"Next.js", "Tailwindcss"',
    },

    {
      num: "7",
      bracket: "]",
    },
    {
      num: "8",
      name: "passion",
      value: '"Building UIs"',
      colon: ":",
      comma: ",",
    },
    {
      num: "9",
      name: "Available",
      value: "true",
      colon: ":",
      condition: "true",
    },
  ];

  return (
    <main id="Home">
      <section className="flex justify-between items-start">
        <div className="w-[50%] flex justify-end items-start flex-col gap-10">
          {/* Available For Work */}
          <div className="  text-gray-600 bg-gray-800 flex border-1  gap-3 justify-center items-center rounded-full px-5 py-2 ">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
            <p className="text-purpleA">Available for Work</p>
          </div>
          {/* Hi there, I am  */}
          <p className="font-mono text-start text-2xl text-grayA">
            Hi there, I'm
          </p>
          {/* my Name  */}
          <h2 className="text-[5rem] font-bold text-[#E4E4F0]">Liaqat Ali</h2>

          {/* Text Animation */}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Specialist",
              2000,
              "Next Developer",
              2000,
              "UI/UX Enthusiast",
              2000,
              "Creative Codder",
              2000,
            ]}
            repeat={Infinity}
            className="text-5xl font-bold text-blue-500 bg-gradient-to-r from-purpleA to-blueA bg-clip-text text-transparent"
          />

          {/* Description Me */}
          <p className="text-grayA text-xl leading-8 -tracking-tighter">
            I craft beautiful, performant web experiences with modern
            technologies. Passionate about turning complex problems into
            elegant, intuitive interfaces that delight users.
          </p>

          {/* Home Button */}

          <div className="flex justify-center items-center gap-5">
            <Button className=" flex justify-center items-center gap-3  px-8 py-4 text-xl hover:scale-105 transition-all duration-500">
              View My Work <GrShare className="font-bold" />
            </Button>

            <Button
              variant="secondary"
              className="text-grayA flex justify-center items-center gap-3  px-8 py-4 text-xl hover:scale-105 hover:border hover:border-purpleA transition-all duration-500"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center items-center gap-5 text-grayA text-2xl">
            <p>Find me on </p>
            <FiGithub />
            <FiLinkedin />
            <FiFacebook />
          </div>
        </div>

        {/* window screenshot */}

        <div className="w-[50%] mt-10 flex justify-start  item-start flex-col gap-3 bg-gray-900 rounded-xl border border-gray-700">
          {/* Top */}

          <div className="flex justify-between items-center w-full border border-gray-700 rounded-tl-xl">
            <div className="flex justify-start items-center gap-3 pl-5 ">
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
              <span className="w-4 h-4 bg-yellow-600 rounded-full"></span>
              <span className="w-4 h-4 bg-green-600 rounded-full"></span>
              <p className="font-mono text-grayA"> developer.ts </p>
            </div>
            <div className="flex items-start flex-col -mr-5  -mt-5 -mb-5   border border-gray-700 bg-gray-800 p-3 rounded-xl text-start">
              <span className="font-semibold text-2xl">4+</span>
              <span className="text-grayA">month Exp.</span>
            </div>
          </div>

          <div className="flex justify-start items-start gap-2 flex-col pl-6 font-mono">
            {windowCode.map((code, index) => {
              const {
                line,
                variable,
                name,
                equal,
                colon,
                value,
                comma,
                bracket,
                condition,
              } = code;
              return (
                <p key={index}>
                  <span className="text-grayA mr-10">{line}</span>
                  <span className="mr-5">{variable}</span>
                  <span className="text-blueA ">{name}</span>
                  {equal}
                  {colon}
                  {"   "}
                  <span>{condition}</span>
                  <span>{bracket}</span>
                  <span className="text-green-300">
                    {"  "}
                    {value}
                  </span>
                  {comma}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

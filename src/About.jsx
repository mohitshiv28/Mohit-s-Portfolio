import Figma from "./assets/Figma.png";
import HTML from "./assets/HTML.png";
import Tailwind from "./assets/Tailwind.png";
import JavaScript from "./assets/JavaScript.png";
import Java from "./assets/Java.png";
import React from "./assets/React.png";
import Node from "./assets/Node.png";
import MongoDB from "./assets/MongoDB.png";
import Vite from "./assets/Vite.png";
import Git from "./assets/Git.png";
import { BsArrowUpRight } from "react-icons/bs";
const About = () => {
  const boxClass =
    "about-card bg-[#1a1a1a] rounded-xl py-5 px-7 flex flex-col ";
  const tags = "cursive w-fit py-2 px-3 bg-[#0a0a0a] rounded-md text-sm";

  const skills = [
    { name: "Figma", icon: Figma },
    { name: "HTML", icon: HTML },
    { name: "JavaScript", icon: JavaScript },
    { name: "Java", icon: Java },
    { name: "React", icon: React },
    { name: "Node", icon: Node },
    { name: "MongoDB", icon: MongoDB },
    { name: "Tailwind", icon: Tailwind },
    { name: "Vite", icon: Vite },
    { name: "Git", icon: Git },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full text-white mt-15 px-5 md:px-16"
    >
      {/* Header */}
      <div className="flex justify-between border-b font-medium cursive py-3">
        <div>ABOUT</div>
        <div className="text-[#a5a5a5]">#PAGE 02</div>
      </div>

      {/* Grid */}
      <div
        className="grid gap-5 py-5
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3 md:grid-rows-6 md:h-screen"
      >
        <div
          className={`md:row-span-4 ${boxClass} md:justify-between justify-start gap-4`}
        >
          <div className="font-semibold cursive"> WHO AM I</div>
          <div className="font-medium flex flex-col gap-2 ">
            <div className={`${tags}`}>• CSE GRADUATE 2026</div>
            <div className={`${tags}`}>• UI & UX DESIGNER</div>
            <div className={`${tags}`}>• MERN STACK DEVELOPER</div>
            <div className={`${tags}`}>
              • CLEAN AND SCALABLE CODE ENTHUSIAST
            </div>
            <div className={`${tags}`}>• FRONTEND FOCUSED ENGINEER</div>
            <div className={`${tags}`}>• PROBLEM SOLVER</div>
            <div className={`${tags}`}>• CONTINUOUS LEARNER</div>
          </div>
          <div className="cursive font-semibold text-right">
            <a
              href="https://www.linkedin.com/in/mohit-shivhare-2a995628b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="underline underline-offset-5"
            >
              KNOW MORE
            </a>
          </div>
        </div>

        <div
          className={`md:row-span-2 ${boxClass} md:justify-between justify-start gap-4`}
        >
          <div className="font-semibold cursive">CONTENT CREATOR</div>
          <div className="cursive font-medium text-[#dbdbdb]">
            I grew a Instagram theme page called{" "}
            <a
              href="https://www.instagram.com/hustlevolvex?igsh=MWU3MmRqZWR6aWR5cA=="
              className="text-white underline underline-offset-2"
            >
              "hustlevolvex"
            </a>
            , currently having 22.5k followers.
          </div>
          <div className="font-semibold cursive text-right">DO SUPPORT</div>
        </div>

        <div
          className={`md:row-span-3  ${boxClass} md:justify-between justify-start gap-4`}
        >
          <div className="font-semibold cursive">MY TOOLKIT</div>

          <div className=" flex-wrap gap-5 flex justify-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="w-15 h-15 flex-center bg-[#0a0a0a] rounded-md p-3"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="cursive font-semibold text-right">
            LOVE TO ADD MORE
          </div>
        </div>

        <div
          className={`md:row-span-2 md:row-start-5 ${boxClass} md:justify-between justify-start gap-4`}
        >
          <div className="font-semibold cursive">GRADUATION</div>
          <div className="cursive text-[#dbdbdb]">
            I have done my graduation in CSE from University Institute of
            Technology, RGPV, Shivpuri.
          </div>
          <div className="font-semibold cursive text-right">2022-26</div>
        </div>

        <div
          className={`md:row-span-4 md:row-start-3 ${boxClass} md:justify-between justify-start gap-4`}
        >
          <div className="font-semibold cursive">HOBBIES</div>
          <div className="font-medium flex flex-wrap gap-2 items-center">
            <div className={`${tags}`}>• VOLLEYBALL</div>
            <div className={`${tags}`}>• CONTENT CREATION</div>
            <div className={`${tags}`}>• BADMINTON</div>
            <div className={`${tags}`}>• READING</div>
            <div className={`${tags}`}>• LEARNING SKILLS</div>
            <div className={`${tags}`}>• WATCHING MOVIES</div>
          </div>
          <div className="font-semibold cursive text-right">EXPLORING...</div>
        </div>

        <div
          className={`md:row-span-3  ${boxClass} md:row-start-4 items-center justify-center gap-5`}
        >
          <div className="text-[#dbdbdb]  text-center px-10">
            // Open to work and ready to contribute my skills to your
            organization.
          </div>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white text-black flex-center"
          >
            <BsArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

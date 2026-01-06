import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Infosys Springboard",
    duration: "Sep'25 - Nov'25",
    role: "MERN Stack Developer Intern",
    points: [
      "Built and enhanced full-stack web applications using MongoDB, Express.js, React.js, and Node.js, focusing on clean architecture and scalability.",
      "Implemented RESTful APIs, handled database operations, and integrated frontend with backend for smooth data flow.",
      "Followed industry best practices such as modular code structure, basic authentication, and performance optimization while working on real-world project scenarios.",
    ],
  },
  {
    company: "Green Graph",
    duration: "Jul'25 - Sep'25",
    role: "Web Designer Intern",
    points: [
      "Designed responsive and user-friendly website layouts with a strong focus on visual hierarchy and usability.",
      "Converted Figma designs into clean, pixel-perfect HTML and CSS implementations.",
      "Collaborated with developers to ensure design consistency and smooth user experience across devices.",
    ],
  },
  {
    company: "GGITC",
    duration: "Mar'25 - Jun'25",
    role: "Full Stack Developer Intern",
    points: [
      "Developed full-stack features including frontend UI, backend APIs, and database integration.",
      "Worked with authentication, CRUD operations, and role-based access control.",
      "Improved application performance and maintainability through reusable components and clean code practices.",
    ],
  },
];

const Experience = () => {
  const cardsRef = useRef([]);
  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // when card enters viewport
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="min-h-screen w-full text-white mt-15 px-5 md:px-16"
    >
      {/* Header */}
      <div className="flex justify-between border-b font-medium cursive py-3">
        <div>EXPERIENCE</div>
        <div className="text-[#a5a5a5]">#PAGE 03</div>
      </div>

      {/* Content */}
      <div className="py-7 flex-center flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-10 flex flex-col w-full md:w-3/4 bg-[#1a1a1a] rounded-md "
          >
            {/* Top Row */}
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="text-3xl font-medium tracking-tight">
                {exp.company}
              </div>
              <div className="italic text-[#dbdbdb]">{exp.duration}</div>
            </div>

            {/* Role */}
            <div className="md:w-fit uppercase bg-[#0a0a0a] py-2 px-3 mt-2 font-medium text-sm cursive rounded-md">
              • {exp.role}
            </div>

            {/* Description */}
            <div className="cursive mt-5">
              {exp.points.map((point, i) => (
                <div key={i} className="border-b py-5">
                  • {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

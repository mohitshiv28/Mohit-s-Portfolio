import sumz from "./assets/sumz.png";
import zentry from "./assets/zentry.png";
import campuseventhub from "./assets/campuseventhub.png";
import { BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    id: 1,
    title: "zentry clone",
    image: zentry,
    link: "https://github.com/mohitshiv28/Zentry",
  },
  {
    id: 2,
    title: "campuseventhub",
    image: campuseventhub, // replace later
    link: "https://github.com/springboardmentor1317s-hub/campus-eventhub-team4",
  },
  {
    id: 3,
    title: "sumz",
    image: sumz, // replace later
    link: "https://github.com/mohitshiv28/ai-article-summ",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full text-white mt-15 px-5 md:px-16 pb-10"
    >
      {/* Header */}
      <div className="flex justify-between border-b font-medium cursive py-3">
        <div>PROJECTS</div>
        <div className="text-[#a5a5a5]">#PAGE 03</div>
      </div>

      {/* Content */}
      <div className="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col cursor-pointer group border-b border-white/50  py-5 "
          >
            <div className="overflow-hidden ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex justify-between items-center mt-3 font-semibold">
              <div className="text-xl md:text-2xl uppercase">
                {project.title}
              </div>
              <a
                href={project.link}
                className="transition-transform duration-300 group-hover:rotate-45"
              >
                <BsArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center tracking-tight text-base md:text-xl mt-1 md:mt-5 text-[#dbdbdb] underline underline-offset-7">
        // More Coming Soon, Stay Tuned! //
      </div>
    </section>
  );
};

export default Project;

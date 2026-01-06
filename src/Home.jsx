import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import mohitpf from "./assets/mohitpf.jpeg";
import { FaLocationArrow } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
const Home = () => {
  useGSAP(() => {
    gsap.from(".ani-img", {
      x: -500,
      y: -500,
      rotation: 360,
      duration: 1.5,
      ease: "sine.out",
    });
    gsap.from(".text", {
      y: 50,
      opacity: 0,
      ease: "sine.out",
      duration: 1,
      stagger: 0.3,
      delay: 1,
    });
    gsap.from(".resumebtn", {
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2,
      ease: "sine.out",
      onComplete: () => {
        gsap.to(".resumebtn", {
          y: 5,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    });

    gsap.from(".footertext", {
      y: 10,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
      delay: 2.5,
    });
  }, []);

  {
    /* Mouse hover effect for Resume button */
  }
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    gsap.to(textRef.current, {
      x: e.clientX - left + 40,
      y: e.clientY - top - 20,
      opacity: 1,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 0.2,
    });
  };

  return (
    <section id="home" className="min-h-screen w-full text-white">
      <div className="mx-auto h-screen flex w-full flex-col items-center px-5 pt-35 md:pt-28 md:px-16">
        {/* Profile Image */}
        <div className="h-64 w-64 overflow-hidden rounded-full ani-img">
          <img
            src={mohitpf}
            alt="Mohit Shivhare profile"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Greeting */}
        <p className="mt-3 text-2xl cursive text">Hi, I’mA</p>

        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight md:text-7xl text">
          WEB DEVELOPER
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-2xl text-center text-base text-[#dbdbdb] cursive text">
          I design intuitive user experiences and build scalable full-stack web
          applications using modern technologies.
        </p>

        {/* Resume Button */}
        <a href="https://drive.google.com/file/d/10jC2ZppMnjGMDV0TKUPVWpClYFrDLtCq/view?usp=drivesdk">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="resumebtn flex-center w-15 h-15 bg-white  mt-3 rounded-[60%_70%_60%_70%_/_70%_60%_70%_60%] cursor-pointer"
          >
            <span
              ref={textRef}
              className="absolute top-0 left-0  font-medium text-white 
                   pointer-events-none opacity-0 cursive"
            >
              Resume
            </span>
            <BsArrowUpRight className="text-[#0a0a0a] text-2xl" />
          </div>
        </a>

        {/* Hero Footer Info */}
        <div className="mt-auto flex w-full py-10 md:py-7 justify-between text-sm uppercase font-medium">
          <span className="flex-center gap-2 footertext">
            <FaLocationArrow />
            IN SHIVPURI
          </span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitshivhare486@gmail.com&su=Contact%20Request&body=Hello%20Mohit"
            target="_blank"
          >
            <span className="flex-center gap-2 footertext underline underline-offset-3">
              LET'S CONNECT
              <FaHandshakeAngle />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

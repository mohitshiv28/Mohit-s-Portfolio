import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const End = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const textWidth = textRef.current.scrollWidth;

      gsap.fromTo(
        textRef.current,
        {
          x: () => window.innerWidth * 0.5,
        },
        {
          x: () => window.innerWidth - textWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${textWidth}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="h-screen w-full bgpattern flex flex-col overflow-hidden"
    >
      {/* MAIN CONTENT */}
      <div className="flex-1 flex items-center px-2">
        <div
          ref={textRef}
          className="whitespace-nowrap text-white text-6xl font-semibold px-10 tracking-tight"
        >
          That’s the end of my work showcase. Open to conversations,
          collaborations, and opportunities at&nbsp;
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitshivhare486@gmail.com&su=Contact%20Request&body=Hello%20Mohit"
            className="underline underline-offset-8"
          >
            mohitshivhare486@gmail.com
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="w-full px-5 md:px-16 py-6 border-t 
flex flex-col md:flex-row 
gap-4 md:gap-0 
justify-between items-center text-white text-sm md:text-base cursive"
      >
        <div className="text-center md:text-left">
          © 2026 Mohit Shivhare. All rights reserved.
        </div>

        <div className="flex gap-7 text-white">
          <a
            href="https://www.instagram.com/themohitshivhare?igsh=anN3bzB3Z2F5ZW1ts"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohit-shivhare-2a995628b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apps"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/mohitshiv28"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default End;

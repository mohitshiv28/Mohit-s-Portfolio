import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* scroll hide/show navbar */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setShow(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* GSAP intro animation */
  useGSAP(() => {
    gsap.from(".nav-item", {
      y: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all",
    });

    gsap.from(".logoani", {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  /* smooth scroll + close menu */
  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-white/75
      transition-transform duration-500
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center py-5 px-5 md:px-16 text-white">
        {/* Logo */}
        <div className="text-2xl font-medium tracking-tight logoani cursive">
          Mohit.
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex w-2/5 justify-between">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="nav-item cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <RiCloseFill onClick={() => setMenuOpen(false)} />
          ) : (
            <RiMenu3Fill onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#0a0a0a]
        ${menuOpen ? "max-h-[300px]" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-5 px-6 py-6 text-white">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-lg uppercase font-medium cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

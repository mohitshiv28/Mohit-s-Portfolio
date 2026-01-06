import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import End from "./End";
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <End />
    </>
  );
}

export default App;

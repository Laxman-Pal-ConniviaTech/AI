import "./App.css";
import Animation from "./Components/Animation";
import Hero from "./Sections/Hero";
import HowItWorks from "./Sections/HowItWorks";
import Navbar from "./Components/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";

function App() {

  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);



  return (
    <>
      <div className="app">
        <Animation>
          <div className="header-wrapper">
            <div className="hero-section">
              <Navbar />
              <Hero />
            </div>
          </div>
          <HowItWorks />
        </Animation>
      </div>
    </>
  );
}

export default App;

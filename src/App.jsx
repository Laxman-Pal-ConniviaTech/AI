import "./App.css";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <div className="header-wrapper">
          <div className="hero-section">
            <Navbar />
            <Hero />
            <HowItWorks/>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

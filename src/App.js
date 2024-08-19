import "./App.css";
import HomeHeader from "./components/home/HomeHeader";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Cerifications";
import Footer from "./components/footer/Footer";
//import Lenis from "@studio-freight/lenis";

function App() {
  /*const lenis = new Lenis({
    smoothWheel: true,
    duration: 1.2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);*/
  return (
    <>
      <HomeHeader />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import HomeHeader from "./components/home/HomeHeader";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Cerifications";
import Footer from "./components/footer/Footer";

function App() {
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

import logo from "./logo.svg";
import "./App.css";
import HomeHeader from "./components/home/HomeHeader";

function App() {
  return (
    <>
      <HomeHeader />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: 10,
          position: "relative",
        }}
      ></div>
    </>
  );
}

export default App;

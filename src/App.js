import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects/>
    </>
  );
}

export default App;

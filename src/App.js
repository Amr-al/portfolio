import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/eachProject/Project";

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Nav />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </>
        }
      />
      <Route
        path="/project"
        element={
          <>
            <Nav />
            <Project />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;

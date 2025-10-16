import './App.css';
import Hello from "./sections/Hello.js";
import Education from "./sections/Education.js";
import Experience from "./sections/Experience.js";
import Projects from "./sections/Projects.js";
import Skills from "./sections/Skills.js";

function App() {
  return (
    <div>
      <Hello />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;

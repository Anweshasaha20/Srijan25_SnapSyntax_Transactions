import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Portfolio</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/skills" element={<div>Projects</div>} />
          <Route path="/projects" element={<div>Skills</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

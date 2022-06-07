import "./styles.css";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Services />} />
        <Route path="" element={<Projects />} />
        <Route path="" element={<About />} />
      </Routes>
    </div>
  );
}

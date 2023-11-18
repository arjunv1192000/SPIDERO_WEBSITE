import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Consulting from "./Components/consulting/consulting";
import Expertise from "./Components/Expertise/expertise";
import Ourprocess from "./Components/Ourprocess/ourprocess";
import Custom from "./Components/Custom/custom";
import Webdevelopment from "./Components/Webdevelopment/webdevelopment";
import Webdesign from "./Components/Webdesign/webdesign";
import Mobile from "./Components/Mobile/mobile";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Careers from "./Components/Care/careers";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/ourprocess" element={<Ourprocess />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/Webdesign" element={<Webdesign />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    
     
    </BrowserRouter>
  );
}
export default App;

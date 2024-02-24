import Navbar from "../src/components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Element id="home" name="home">
        <Home />
      </Element>
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="events" name="events">
        <Events />
      </Element>
      <Element id="faq" name="faq">
        <Faq />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

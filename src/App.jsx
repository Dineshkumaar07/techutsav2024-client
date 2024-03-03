import Navbar from "../src/components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import { api } from "./api/auth";
import MainLoader from "./components/MainLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setLoading(true);
    const status = api
      .get("profile/getProfile")
      .then((res) => {
        //console.log(res);
        sessionStorage.setItem("name", res.data[0].fullName);
        sessionStorage.setItem("email", res.data[0].email);
        sessionStorage.setItem("phone", res.data[0].phoneNumber);
        sessionStorage.setItem("college", res.data[0].collegeName);
        sessionStorage.setItem("department", res.data[0].department);
        sessionStorage.setItem("paid", res.data[0].paid);
        sessionStorage.setItem(
          "transactionNumber",
          res.data[0].transactionNumber
        );
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((err) => {
        setAuthenticated(false);
        //console.log("Not Authenticated");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <MainLoader />;
  }
  return (
    <div className="font-poppins">
      <Navbar authenticated={authenticated} />
      <Element id="home" name="home">
        <Home authenticated={authenticated} />
      </Element>
      <Element id="about" name="about">
        <About authenticated={authenticated} />
      </Element>
      <Element id="events" name="events">
        <Events authenticated={authenticated} />
      </Element>
      <Element id="faq" name="faq">
        <Faq authenticated={authenticated} />
      </Element>
      <Element id="contact" name="contact">
        <Contact authenticated={authenticated} />
      </Element>

      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Location from "./Location";
import Stats from "./Stats";
import Talent from "./Talent";
import Charges from "./Charges";
import Testimonials from "./Testimonials";
import { Contact } from "lucide-react";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Location />
      <Stats />
      <Talent />
      <Charges />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

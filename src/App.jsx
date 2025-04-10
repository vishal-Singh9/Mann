import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Talent from "./components/Talent";
import Charges from "./components/Charges";
import Location from "./components/Location";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Home />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/charges" element={<Charges />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

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
import Blog from "./components/Blog";
import Resources from "./components/Resources";
import BlueCollarJobs from "./components/BlueCollorJobs";
import WhiteCollarJobs from "./components/WhiteCollorJobs";
import Provides from "./components/Provides";
import QuotesPage from "./components/Quotes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/blue-collar" element={<BlueCollarJobs />} />
          <Route path="/services/white-collar" element={<WhiteCollarJobs />} />
          <Route path="/provides" element={<Provides />} />
          <Route path="/location" element={<Location />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/quotes" element={<QuotesPage />} />
          {/* <Route path="/charges" element={<Charges />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

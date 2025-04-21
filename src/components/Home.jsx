import React from "react";
import About from "./About";
import Hero from "./Hero";
import Services from "./Services";
import Location from "./Location";
import Stats from "./Stats";
import Talent from "./Talent";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Provides from "./Provides";
import OwlCarouselComponent from "./Carousel";
import QuotesThought from "./QuotesThought";
import ResourcesPage from "./Resources";

const Home = () => {
  return (
    <div>
      <Hero />
      <OwlCarouselComponent />
      <About />
      <Services />
      <QuotesThought />
      <Provides />
      <Location />
      <Stats />
      <Talent />
      {/* <Charges /> */}
      <Blog />
      <Testimonials />

      <ResourcesPage />
    </div>
  );
};

export default Home;

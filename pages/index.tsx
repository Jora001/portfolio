import About from "@/Components/About";
import Blog from "@/Components/Blog";
import BlogPlus from "@/Components/BlogPlus";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
// import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Project from "@/Components/Project";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Testimonial from "@/Components/Testimonial";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Project />
          <Testimonial />
          <Blog />
          <BlogPlus />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

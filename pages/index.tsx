import getConfig from "next/config";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import CV from "../components/CV";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

export type Props = {};

const Index: React.FC<Props> = (props) => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

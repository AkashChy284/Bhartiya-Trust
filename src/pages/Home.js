import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Members from "../components/Members";
import Support from "../components/Support";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Mission />
      <Members />
      <Support />
      <Footer />
    </>
  );
}

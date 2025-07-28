import React from "react";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import Timeline from "./components/Timeline";
import Values from "./components/Values";
import Team from "./components/Team";
import Impact from "./components/Impact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Hero />
      <MissionVision />
      <Timeline />
      <Values />
      <Team />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
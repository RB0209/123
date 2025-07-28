import React from "react";
import { content } from "../data/content";

export default function MissionVision() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-brand">{content.mission.title}</h2>
        <p className="mt-2">{content.mission.text}</p>
      </div>
      <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-brand">{content.vision.title}</h2>
        <p className="mt-2">{content.vision.text}</p>
      </div>
    </section>
  );
}
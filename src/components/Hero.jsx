import React from "react";
import { content } from "../data/content";

export default function Hero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${content.hero.background})` }}
    >
      <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-brand">{content.hero.title}</h1>
        <p className="mt-2 text-lg">{content.hero.subtitle}</p>
      </div>
    </section>
  );
}
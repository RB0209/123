import React from "react";
import { content } from "../data/content";

export default function Impact() {
  return (
    <section className="py-12 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-brand mb-6">Our Impact</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {content.impact.stats.map((stat, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-xl shadow-md">
            <p className="text-xl font-semibold">{stat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
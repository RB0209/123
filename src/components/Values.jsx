import React from "react";
import { content } from "../data/content";

export default function Values() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-brand mb-6">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.values.map((val, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{val.title}</h3>
            <p className="mt-2">{val.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
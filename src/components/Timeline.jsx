import React, { useState } from "react";
import { content } from "../data/content";

export default function Timeline() {
  const [active, setActive] = useState(null);
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl text-center font-bold text-brand mb-6">Our Story</h2>
      <div className="flex overflow-x-auto space-x-4 px-6 snap-x">
        {content.timeline.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white/70 backdrop-blur-md rounded-xl shadow-md snap-start cursor-pointer hover:scale-105 transition"
            onClick={() => setActive(item)}
          >
            <img src={item.image} alt={item.title} className="rounded-t-xl h-40 w-full object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.year}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setActive(null)}>
          <div className="bg-white p-6 rounded-xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2">{active.year} - {active.title}</h3>
            <p>{active.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
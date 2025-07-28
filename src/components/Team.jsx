import React from "react";
import { content } from "../data/content";

export default function Team() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-brand mb-6">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.team.map((member, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover"/>
            <h3 className="mt-4 font-bold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
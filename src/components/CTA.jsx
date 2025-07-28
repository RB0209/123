import React from "react";
import { content } from "../data/content";

export default function CTA() {
  return (
    <section className="py-12 text-center max-w-3xl mx-auto px-6">
      <p className="text-2xl font-bold text-brand">{content.cta.text}</p>
    </section>
  );
}
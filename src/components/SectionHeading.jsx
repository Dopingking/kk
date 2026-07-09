import React from "react";
import Eyebrow from "./Eyebrow.jsx";

export default function SectionHeading({ eyebrow, tone, title, sub }) {
  return (
    <div className="max-w-2xl mb-10">
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-head">{title}</h2>
      {sub && <p className="mt-3 text-slate-600 leading-relaxed">{sub}</p>}
    </div>
  );
}

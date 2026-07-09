import React from "react";
import { Building2, Plane, Briefcase } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import CTA from "../components/CTA.jsx";

const CARDS = [
  {
    icon: Building2,
    tone: "blue",
    title: "Business Center",
    desc: "Professional printing, photocopying, typing, online registration, CBT and passport processing — all handled efficiently in one visit.",
    to: "/business-center",
  },
  {
    icon: Plane,
    tone: "orange",
    title: "Klaud Travels",
    desc: "Flight bookings, visa assistance, hotel reservations and travel consultations with expert, reliable support at every step.",
    to: "/travels",
  },
  {
    icon: Briefcase,
    tone: "pink",
    title: "Klaud Hub",
    desc: "Quality gadgets including smartphones, laptops and accessories at competitive prices, with authentic products and after-sales support.",
    to: null,
  },
];

const TONE_MAP = {
  blue: "bg-blue-50 text-blue-700",
  orange: "bg-orange-50 text-orange-600",
  pink: "bg-pink-50 text-pink-700",
};

export default function Services() {
  return (
    <>
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 text-center">
          <Eyebrow tone="blue">Our services</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 font-head">
            Solutions across business, travel and tech
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Explore what Klaud Koncept offers, and jump into the details whenever you're ready.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 space-y-6">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="p-7 rounded-2xl border border-slate-100 bg-white flex flex-col sm:flex-row sm:items-center gap-6 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${TONE_MAP[c.tone]}`}>
              <c.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 mb-1.5 font-head">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
            {c.to && <CTA to={c.to} variant="ghost">View details</CTA>}
          </div>
        ))}
      </section>
    </>
  );
}

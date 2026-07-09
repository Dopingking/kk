import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import CTA from "../components/CTA.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import DesignSlot from "../components/DesignSlot.jsx";

const SERVICES = [
  { title: "Flight booking", desc: "Book domestic and international flights at the best rates." },
  { title: "Visa assistance", desc: "Expert guidance and support to get your visas approved smoothly." },
  { title: "Study abroad support", desc: "We handle applications, document checks and university guidance." },
  { title: "Hotel reservations", desc: "Access top hotels worldwide at competitive prices." },
  { title: "Holiday packages", desc: "Curated trips to popular destinations with personalized itineraries." },
  { title: "Travel insurance", desc: "Protect your trip with reliable travel insurance plans." },
];

const WHY = [
  { title: "Fast & reliable", desc: "We make your travel plans smooth, quick and stress-free." },
  { title: "Transparent pricing", desc: "No hidden fees — what you see is what you pay." },
  { title: "Experienced consultants", desc: "Years of experience helping travelers succeed." },
  { title: "Dedicated support", desc: "Available to assist with your travel needs, every step." },
];

const DESTINATIONS = ["United Kingdom", "Canada", "Dubai", "United States"];

export default function Travels() {
  return (
    <>
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 relative z-10 text-center">
          <Eyebrow tone="orange">Klaud Travels</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight font-head">
            Explore the world with Klaud Travels
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Visa processing, flight booking, tours and study abroad support — all in one place.
          </p>
          <div className="mt-7">
            <CTA to="/contact">Start your journey</CTA>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 relative z-10">
          <DesignSlot
            label="Travel hero photo / campaign art"
            ratio="aspect-[21/9]"
            className="!border-orange-300 !bg-slate-800/40"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <SectionHeading eyebrow="Services" tone="orange" title="Our travel services" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-slate-100 bg-white">
              <h3 className="font-semibold text-blue-700 mb-1.5 font-head">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Why choose us" tone="pink" title="Why choose Klaud Travels?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="p-5 rounded-2xl bg-white border border-slate-100">
                <h3 className="font-semibold text-pink-700 text-sm mb-1.5 font-head">{w.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <SectionHeading eyebrow="Where to next" tone="blue" title="Popular destinations" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DESTINATIONS.map((d) => (
            <div key={d} className="p-5 rounded-xl bg-blue-50 text-center font-semibold text-blue-700 text-sm font-head">
              {d}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

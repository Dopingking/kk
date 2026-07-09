import React from "react";
import { Printer, Plane, Laptop2, Clock, BadgeCheck, ShieldCheck, Headset, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow.jsx";
import CTA from "../components/CTA.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import DesignSlot from "../components/DesignSlot.jsx";

const SERVICES = [
  { icon: Printer, title: "Business Center", desc: "Printing, typing, online registrations and passport processing.", tone: "blue", to: "/business-center" },
  { icon: Plane, title: "Klaud Travels", desc: "Flight booking, visa assistance and holiday packages.", tone: "orange", to: "/travels" },
  { icon: Laptop2, title: "Klaud Hub", desc: "Quality smartphones, laptops and accessories.", tone: "pink", to: "/services" },
];

const WHY = [
  { icon: Clock, title: "Fast turnaround", desc: "Same-day service for most business center and travel requests." },
  { icon: BadgeCheck, title: "Transparent pricing", desc: "No hidden fees — the price you're quoted is the price you pay." },
  { icon: ShieldCheck, title: "Experienced team", desc: "Years of hands-on experience across travel, admin and tech." },
  { icon: Headset, title: "Dedicated support", desc: "Real people, ready to help before, during and after your visit." },
];

const TONE_MAP = {
  blue: "bg-blue-50 text-blue-700",
  orange: "bg-orange-50 text-orange-600",
  pink: "bg-pink-50 text-pink-700",
};

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="blue">Business · Travel · Tech, one roof</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight font-head">
              One trusted partner for business, travel and tech
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Klaud Koncept handles the admin, the itinerary and the gadgets — so you can focus on what's next.
              Visit us in Egbeda or reach out online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/services">Explore services</CTA>
              <CTA to="/contact" variant="ghost" icon={false}>Contact us</CTA>
            </div>
          </div>
          <DesignSlot label="Hero visual" ratio="aspect-[5/4]" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <SectionHeading eyebrow="What we do" tone="blue" title="Three ways we make life easier" sub="Pick a lane below, or let one visit cover all three." />
        <div className="grid sm:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="text-left p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md transition-all group block"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${TONE_MAP[s.tone]}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5 font-head">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Why Klaud Koncept" tone="pink" title="Built around reliability" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="p-5 rounded-2xl bg-white border border-slate-100">
                <w.icon className="w-5 h-5 text-blue-700 mb-3" />
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5 font-head">{w.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-head">Ready to work with Klaud Koncept?</h2>
          <CTA to="/contact" variant="onDark">Get in touch</CTA>
        </div>
      </section>
    </>
  );
}

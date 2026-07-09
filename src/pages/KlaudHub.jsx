import React from "react";
import { Smartphone, Laptop, Headphones, BatteryCharging, ShieldCheck, Truck } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import CTA from "../components/CTA.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import DesignSlot from "../components/DesignSlot.jsx";

const CATEGORIES = [
  { icon: Smartphone, title: "Smartphones", desc: "New and UK-used phones across major brands, checked and verified before sale." },
  { icon: Laptop, title: "Laptops", desc: "Reliable laptops for work, school and everyday use, at competitive prices." },
  { icon: Headphones, title: "Accessories", desc: "Chargers, earpieces, cases, power banks and other everyday tech essentials." },
  { icon: BatteryCharging, title: "Repairs & swaps", desc: "Battery replacement, screen fixes and trade-in support for your existing devices." },
];

const WHY = [
  { icon: ShieldCheck, title: "Authentic products", desc: "Every device is sourced and checked for authenticity before it reaches you." },
  { icon: Truck, title: "Fast handover", desc: "Walk in and walk out — most purchases are ready same day." },
  { icon: Headphones, title: "After-sales support", desc: "Questions or issues after purchase? We're still here to help." },
];

export default function KlaudHub() {
  return (
    <>
      <section className="bg-pink-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="pink">Klaud Hub</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight font-head">
              Quality gadgets, honest prices
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Smartphones, laptops and accessories — sourced for authenticity and backed by real after-sales
              support, right here in Egbeda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/contact">Ask about stock</CTA>
              <CTA to="/services" variant="ghost" icon={false}>All services</CTA>
            </div>
          </div>
          <DesignSlot label="Product / storefront photo" ratio="aspect-[5/4]" className="!border-pink-300 !bg-pink-100/50" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <SectionHeading eyebrow="What we stock" tone="pink" title="Browse by category" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-slate-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-700 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5 font-head">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Why buy from us" tone="blue" title="Why choose Klaud Hub?" />
          <div className="grid sm:grid-cols-3 gap-6">
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

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <SectionHeading eyebrow="Featured stock" tone="pink" title="Featured devices" sub="Placeholder cards — swap in real product photos and prices once ready." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-100 bg-white overflow-hidden">
              <DesignSlot label={`Product photo ${i}`} ratio="aspect-square" className="!rounded-none !border-0 !border-b-2" />
              <div className="p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Category</p>
                <h3 className="mt-1 font-semibold text-slate-900 font-head">Device name</h3>
                <p className="mt-1 text-sm text-slate-500">Price on request</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pink-700">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-head">
            Looking for a specific device?
          </h2>
          <p className="mt-2 text-pink-100">Reach out and we'll check current stock and pricing for you.</p>
          <div className="mt-6">
            <CTA to="/contact" variant="onDark">Contact us</CTA>
          </div>
        </div>
      </section>
    </>
  );
}

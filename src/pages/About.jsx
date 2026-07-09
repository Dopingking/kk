import React from "react";
import { CheckCircle2 } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import DesignSlot from "../components/DesignSlot.jsx";

const VALUES = ["Professionalism", "Integrity", "Customer satisfaction", "Innovation"];

export default function About() {
  return (
    <>
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="blue">About us</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight font-head">
              Your trusted business and travel partner
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Klaud Koncept provides professional business center services, travel solutions and quality gadgets
              — all under one trusted brand based in Egbeda, Lagos.
            </p>
          </div>
          <DesignSlot label="Storefront / flyer image" ratio="aspect-[4/5]" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2 font-head">Our story</h2>
          <p className="text-slate-600 leading-relaxed">
            Klaud Koncept started with a simple vision: give clients seamless business support, dependable travel
            assistance and genuine gadgets, without needing to run between different vendors.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2 font-head">Our mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To provide professional, reliable and affordable solutions that meet our clients' diverse needs, every
            time they walk through our door.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 font-head">Our values</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <div key={v} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="text-sm font-medium text-slate-800">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

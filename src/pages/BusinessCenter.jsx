import React from "react";
import { Printer, FileText, Globe2, IdCard, ScanLine, Layers } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import CTA from "../components/CTA.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const SERVICES = [
  { icon: Printer, title: "Printing & photocopy", desc: "High-quality black & white and color printing with fast turnaround." },
  { icon: FileText, title: "Typing & document prep", desc: "Professional typing, CV formatting, project documentation and editing." },
  { icon: Globe2, title: "Online registrations", desc: "WAEC, JAMB, NYSC, recruitment forms and other online applications." },
  { icon: IdCard, title: "Passport processing", desc: "Guidance and support for passport applications and related documentation." },
  { icon: ScanLine, title: "CBT & exam services", desc: "Computer-based test registration and printing of confirmation slips." },
  { icon: Layers, title: "Lamination & binding", desc: "Neat binding and lamination services for projects and documents." },
];

const STEPS = [
  { n: "1", title: "Visit us", desc: "Walk into our center with your documents or request." },
  { n: "2", title: "We process", desc: "Our team handles your request professionally and efficiently." },
  { n: "3", title: "Quick delivery", desc: "Receive your completed documents quickly and accurately." },
];

export default function BusinessCenter() {
  return (
    <>
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 text-center">
          <Eyebrow tone="blue">Klaud Business Center</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 font-head">
            Professional admin services, sorted fast
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Efficient administrative support tailored to your needs — printing, documentation, and registrations
            under one roof.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <SectionHeading eyebrow="What we offer" tone="blue" title="Our business center services" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-slate-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5 font-head">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <SectionHeading eyebrow="Process" tone="pink" title="How it works" sub="Three simple steps, every time." />
          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl bg-white border border-slate-100">
                <span className="text-xs font-bold text-blue-700 font-head">Step {s.n}</span>
                <h3 className="mt-2 font-semibold text-slate-900 font-head">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-head">
            Need professional business services?
          </h2>
          <p className="mt-2 text-blue-100">Visit Klaud Business Center today for fast, reliable service.</p>
          <div className="mt-6">
            <CTA to="/contact" variant="onDark">Contact us</CTA>
          </div>
        </div>
      </section>
    </>
  );
}

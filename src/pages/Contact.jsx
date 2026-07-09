import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import CTA from "../components/CTA.jsx";

const INFO = [
  { icon: Phone, label: "Phone", value: "+234 813 562 9616" },
  { icon: Mail, label: "Email", value: "kitc.klaudkoncept@gmail.com" },
  { icon: MapPin, label: "Location", value: "Egbeda, Lagos, Nigeria" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9am – 5pm" },
];

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 text-center">
          <h1 className="text-4xl font-bold text-white font-head">Let's work together</h1>
          <p className="mt-3 text-blue-100">Have a project in mind? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-8">
        <div className="p-7 rounded-2xl bg-white border-l-4 border-blue-700 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2 font-head">Book a free consultation</h2>
          <p className="text-sm text-slate-600 mb-5">Tell us about your project and we'll respond within 24 hours.</p>
          <a
            href="mailto:kitc.klaudkoncept@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          >
            Email us directly
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {INFO.map((i) => (
            <div key={i.label} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <i.icon className="w-4 h-4 text-blue-700 mb-2" />
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{i.label}</p>
              <p className="mt-1 text-sm font-medium text-slate-900">{i.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-white font-head">Ready to start your project?</h2>
          <div className="mt-6">
            <CTA to="/services">View our services</CTA>
          </div>
        </div>
      </section>
    </>
  );
}

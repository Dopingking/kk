import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/business-center", label: "Business Center" },
  { to: "/travels", label: "Klaud Travels" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs font-head">
              KK
            </span>
            <span className="text-white font-bold font-head">Klaud Koncept</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner for business services, travel solutions, and gadgets.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm tracking-wide font-head">Quick links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm tracking-wide font-head">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> kitc.klaudkoncept@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +234 813 562 9616
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Egbeda, Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © 2026 Klaud Koncept. All rights reserved.
      </div>
    </footer>
  );
}

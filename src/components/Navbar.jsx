import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/business-center", label: "Business Center" },
  { to: "/travels", label: "Klaud Travels" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-blue-700" : "text-slate-600 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => { navigate("/"); setOpen(false); }} className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-sm font-head">
            KK
          </span>
          <span className="text-lg font-bold text-slate-900 font-head">Klaud Koncept</span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 py-3 flex flex-col gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-left py-2 text-sm font-medium ${isActive ? "text-blue-700" : "text-slate-600"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

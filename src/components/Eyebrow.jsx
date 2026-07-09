import React from "react";

const TONES = {
  blue: "bg-blue-50 text-blue-700",
  orange: "bg-orange-50 text-orange-700",
  pink: "bg-pink-50 text-pink-700",
};

export default function Eyebrow({ children, tone = "blue" }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}

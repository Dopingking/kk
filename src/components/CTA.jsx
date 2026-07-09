import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const STYLES = {
  primary: "bg-blue-700 text-white hover:bg-blue-800",
  ghost: "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50",
  onDark: "bg-white text-blue-700 hover:bg-blue-50",
};

export default function CTA({ children, to, onClick, variant = "primary", icon = true }) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${STYLES[variant]}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

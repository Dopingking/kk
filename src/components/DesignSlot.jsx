import React from "react";
import { Layers } from "lucide-react";

export default function DesignSlot({ label, className = "", ratio = "aspect-[4/3]" }) {
  return (
    <div
      className={`${ratio} w-full rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/60 flex flex-col items-center justify-center text-center px-6 ${className}`}
    >
      <Layers className="w-6 h-6 text-blue-400 mb-2" />
      <p className="text-sm font-medium text-blue-500">{label}</p>
      <p className="text-xs text-blue-400 mt-1">Client artwork drops in here</p>
    </div>
  );
}

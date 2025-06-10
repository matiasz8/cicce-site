import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useIsSectionVisible } from "@/hooks/useIsSectionVisible";

export default function ScrollToTopButton() {
  const isInicioVisible = useIsSectionVisible("inicio");
  const show = !isInicioVisible;

  return (
    <a
      href="#inicio"
      className={`fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
        show ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-0 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </a>
  );
}

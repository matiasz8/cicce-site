import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const inicio = document.getElementById("inicio");

    if (!inicio) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si estamos viendo la sección "inicio", ocultar el botón
        setShow(!entry.isIntersecting);
      },
      {
        threshold: 0.6, // visible al menos 60% del bloque
      }
    );

    observer.observe(inicio);

    return () => observer.disconnect();
  }, []);

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

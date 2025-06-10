import Link from 'next/link';
import { useState } from 'react';
import { useCurrentSectionVisible } from '@/hooks/useCurrentSectionVisible';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes somos' },
  { id: 'area', label: 'Áreas' },
  { id: 'curso', label: 'Curso' },
  { id: 'inscripcion', label: 'Inscripción' },
];

export default function ScrollSpyNavbar() {
  const current = useCurrentSectionVisible(sections.map((s) => s.id));
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md shadow-sm">
      {/* Desktop */}
      <div className="max-w-6xl mx-auto px-4 py-3 hidden md:flex justify-center space-x-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`text-sm font-medium transition-all ${
              current === section.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {section.label}
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <span className="text-blue-700 font-semibold">CICCE</span>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {open ? (
            <XMarkIcon className="h-6 w-6 text-blue-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-700" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-2 bg-white/90 backdrop-blur-sm shadow">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={closeMenu}
              className={`text-sm font-medium ${
                current === section.id
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

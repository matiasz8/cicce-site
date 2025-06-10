import React from 'react';

type SectionWrapperWithOverlayProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapperWithOverlay({
  id,
  children,
  className = '',
}: SectionWrapperWithOverlayProps) {
  return (
    <section
      id={id}
      className={`relative snap-start h-screen flex justify-center items-center px-4 ${className}`}
    >
      {/* Overlay container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-3xl w-full z-10">
        {children}
      </div>
    </section>
  );
}

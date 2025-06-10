import React from "react";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  decorations?: string[];
};


const decorationMap: Record<string, { src: string; className: string }> = {
  "blur-circle": {
    src: "/blur-circle.svg",
    className:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] opacity-50 pointer-events-none select-none",
  },
  "decor-heartbeat": {
    src: "/decor-heartbeat.svg",
    className:
      "absolute top-10 right-10 w-40 opacity-30 pointer-events-none select-none",
  },
  "cross-medical": {
    src: "/cross-medical.svg",
    className: "absolute top-12 left-10 w-24 opacity-85 pointer-events-none select-none",
  },
  "pill": {
    src: "/pill.svg",
    className: "absolute bottom-10 left-12 w-20 opacity-30 pointer-events-none select-none",
  },
  "stethoscope": {
    src: "/stethoscope.svg",
    className: "absolute bottom-6 right-10 w-28 opacity-20 pointer-events-none select-none",
  },
};


export default function SectionWrapper({
  id,
  children,
  className = "",
  decorations = [],
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative snap-start h-screen flex flex-col justify-center items-center px-4 ${className}`}
    >
      {decorations.map((name, index) => {
        const deco = decorationMap[name];
        if (!deco) return null;
        return <img key={index} src={deco.src} alt="" className={deco.className} />;
      })}

      <div className="relative z-10">{children}</div>
    </section>
  );
}

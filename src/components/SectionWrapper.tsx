import React from "react";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`snap-start h-screen flex flex-col justify-center items-center px-4 ${className}`}
    >
      {children}
    </section>
  );
}

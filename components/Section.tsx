import React, { useEffect, useRef } from "react";

export const Section = ({ title, children, className }: any) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 translate-y-10 transition-all duration-1000 ease-out mb-16 ${className}`}
    >
      <h2 className="text-3xl font-bold mb-8 text-purple-400">{title}</h2>
      {children}
    </div>
  );
};

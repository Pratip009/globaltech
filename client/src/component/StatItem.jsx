import React from "react";
import { useCountUpWhenVisible } from "../hooks/useCountUpWhenVisible"; // adjust path

const StatItem = ({ end, label }) => {
  const { count, ref } = useCountUpWhenVisible(end);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
        {count}+
      </h3>
      <p className="mt-2 text-sm md:text-base uppercase tracking-wider text-white/80">
        {label}
      </p>
    </div>
  );
};

export default StatItem;

import React from 'react';
import StatItem from '../component/StatItem'; // adjust path

const stats = [
  { end: 450, label: 'Current Candidates' },
  { end: 1620, label: 'Job Openings' },
  { end: 780, label: 'Interviews Scheduled' },
  { end: 60, label: 'Hiring Partners' },
];

const StatsSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#2354C8] to-[#0B3364FF] py-16 text-white overflow-hidden z-0">
      {/* Decorative gradient blur background */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-cyan-400 rounded-full blur-3xl opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
          We’re Growing Every Day
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} end={stat.end} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

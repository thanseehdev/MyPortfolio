import React from 'react'; // Import React
export default function SkillBadge({ label }) {
  return (
    <span className="px-3 py-1 rounded-full border border-cyan-400 text-cyan-400 text-sm">
      {label}
    </span>
  );
}

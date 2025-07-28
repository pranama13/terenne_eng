import React, { useMemo } from 'react';

const SpinningHeptagon = () => {
  const sides = 7;

  // Dynamically generate the points for a regular polygon (heptagon)
  // This makes the shape geometrically perfect.
  const clipPath = useMemo(() => {
    const angleStep = (2 * Math.PI) / sides;
    const points = [];

    for (let i = 0; i < sides; i++) {
      // Start from the top point and calculate each vertex
      const angle = angleStep * i - Math.PI / 2; 
      const x = 50 + 50 * Math.cos(angle);
      const y = 50 + 50 * Math.sin(angle);
      points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }

    return `polygon(${points.join(', ')})`;
  }, [sides]);

  return (
    <div
      // --- UPDATED POSITIONING ---
      // This positions the shape's center exactly on the left edge of the screen,
      // ensuring that only half of it is visible.
      className="absolute top-[-25vh] -left-[60vh] -translate-y-1/2 w-[160vh] h-[160vh]  z-10"
      style={{
        clipPath, // Apply the dynamically generated shape
        animation: 'spin-slowly 45s linear infinite',
      }}
    >
      {/* The visible, semi-transparent blue overlay */}
      <div className="w-full h-full bg-blue-400/50"></div>
    </div>
  );
};

export default SpinningHeptagon;
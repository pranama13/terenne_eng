import React, { useMemo } from 'react';
import Logo2 from "@/assert/Logo2.png"; // Adjust the import if needed

const LogoTriangle = () => {
  const sides = 7;

  // Dynamically generate the points for a regular heptagon shape
  const clipPath = useMemo(() => {
    const angleStep = (2 * Math.PI) / sides;
    const points = [];

    for (let i = 0; i < sides; i++) {
      const angle = angleStep * i - Math.PI / 2; // Start from the top
      const x = 50 + 50 * Math.cos(angle);
      const y = 50 + 50 * Math.sin(angle);
      points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }

    return `polygon(${points.join(', ')})`;
  }, [sides]);

  return (
    // Main container for positioning. It does not spin.
    <div style={{ position: "relative", width: 120, height: 120 }}>
      {/* This div is for the shape ONLY and it is the one that spins. */}
      <div
        className="animate-spin-slow" // Use the Tailwind class for animation
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          clipPath: clipPath,
        }}
      />
      
      {/* The logo is a sibling to the spinning shape, but positioned on top. It does not spin. */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Logo2}
          alt="Your Logo"
          style={{ maxWidth: "100%", maxHeight: 70, objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default LogoTriangle;
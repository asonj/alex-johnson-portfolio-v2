import React, { useState } from "react";
import useRandomInterval from "./hooks/useRandomInterval";
// Default color is a bright yellow
const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)";
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(10, 20),
    style: {
      // Pick a random spot in the available space
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
      // Float sparkles above sibling content
      zIndex: 2,
    },
  };
};

function Sparkle({ color, size, style }) {
  return (
    <div className="wrapperSVG" style={style}>
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className="sparkleSVG">
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Sparkles({ children }) {
  const [sparkles, setSparkles] = React.useState([]);
  useRandomInterval(
    () => {
      const now = Date.now();
      // Create a new sparkle
      const sparkle = generateSparkle();
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });
      // Include our new sparkle
      nextSparkles.push(sparkle);
      // Make it so!
      setSparkles(nextSparkles);
    },
    300,
    600
  );
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <strong style={{ position: "relative", zIndex: 1, fontWeight: "bold" }}>{children}</strong>
    </span>
  );
}

export default Sparkles;

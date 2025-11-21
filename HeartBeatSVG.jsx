import React from "react";

export default function HeartBeatSVG({ size = 150, color = "red" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className="heart-svg"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 
      4 6.5 4c1.74 0 3.41 1 4.22 2.44C11.09 5 12.76 4 14.5 4 
      17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>

      {/* CSS inline dentro do próprio SVG */}
      <style>{`
        .heart-svg {
          animation: heartbeat 1s infinite ease-in-out;
          transform-origin: center;
        }

        @keyframes heartbeat {
          0%   { transform: scale(1); }
          25%  { transform: scale(1.15); }
          40%  { transform: scale(0.9); }
          60%  { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </svg>
  );
}

export default function HeartBeat({ size = 120, color = "red" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className="heart"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.22 2.44C11.09 5 12.76 4 14.5 4c2.5 0 4.5 2 4.5 4.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />

      <style jsx>{`
        .heart {
          animation: beat 1s infinite ease-in-out;
          transform-origin: center;
        }

        @keyframes beat {
          0% { transform: scale(1); }
          25% { transform: scale(1.18); }
          40% { transform: scale(0.9); }
          60% { transform: scale(1.22); }
          100% { transform: scale(1); }
        }
      `}</style>
    </svg>
  );
}

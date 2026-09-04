type OrnamentProps = {
  className?: string;
};

/** Simple frangipani / hibiscus outline — 5 rounded petals around a core. */
export function FlowerOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="28"
          rx="11"
          ry="20"
          stroke="currentColor"
          strokeWidth="1.4"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Scallop shell outline — fan of radiating ribs under an arc. */
export function ShellOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 70" fill="none" className={className} aria-hidden>
      <path
        d="M50 66C25 66 8 50 8 50c6-24 20-42 42-42s36 18 42 42c0 0-17 16-42 16Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {[20, 32, 44, 56, 68, 80].map((x, i) => (
        <path
          key={x}
          d={`M50 64C50 64 ${x} 56 ${x - (i - 2.5) * 2} 12`}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}

/** Slender curved palm leaf. */
export function LeafOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={className} aria-hidden>
      <path
        d="M4 50C30 10 70 6 96 14C74 20 40 30 4 50Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10 46C34 22 62 14 92 16" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

/** A loose scatter of small sand-grain dots. */
export function SandScatter({ className = "" }: OrnamentProps) {
  const dots = [
    [6, 10], [18, 4], [30, 16], [44, 6], [58, 14],
    [70, 4], [82, 12], [94, 6], [12, 22], [50, 22],
  ];
  return (
    <svg viewBox="0 0 100 26" fill="currentColor" className={className} aria-hidden>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} opacity={0.5 + (i % 3) * 0.15} />
      ))}
    </svg>
  );
}

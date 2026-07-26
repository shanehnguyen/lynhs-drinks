type Doodle = {
  shape: "star" | "dot" | "squiggle";
  color: "#F2B441" | "#A8501A";
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate?: number;
};

const SHAPES: Record<Doodle["shape"], (color: string) => React.ReactNode> = {
  star: (color) => (
    <path
      d="M12 0l2.6 8.1H23l-6.9 5 2.6 8.1L12 16.3 5.3 21.2l2.6-8.1L1 8.1h8.4z"
      fill={color}
    />
  ),
  dot: (color) => <circle cx="12" cy="12" r="7" fill={color} />,
  squiggle: (color) => (
    <path
      d="M2 18c3-8 6 8 9 0s6 8 9 0"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  ),
};

export default function SectionDoodles({ items }: { items: Doodle[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((d, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={d.size}
          height={d.size}
          className="absolute hidden sm:block"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            transform: d.rotate ? `rotate(${d.rotate}deg)` : undefined,
          }}
        >
          {SHAPES[d.shape](d.color)}
        </svg>
      ))}
    </div>
  );
}

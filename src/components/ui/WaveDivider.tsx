type WaveDividerProps = {
  fill: string;
  position?: "top" | "bottom";
};

export default function WaveDivider({ fill, position = "bottom" }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 z-20 w-full overflow-hidden leading-none"
      style={{
        [position]: 0,
        transform: position === "top" ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[26px] w-full md:h-[52px]"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

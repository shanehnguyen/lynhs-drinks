type MascotProps = {
  pose?: "wave" | "cheer" | "point" | "peek" | "shrug" | "think" | "hip";
  className?: string;
  cupColor?: string;
  teaColor?: string;
  flip?: boolean;
};

export default function Mascot({
  pose = "wave",
  className = "",
  cupColor = "#F5EFE3",
  teaColor = "#F4CC7B",
  flip = false,
}: MascotProps) {
  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* legs */}
      <path d="M85 220 L75 250" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
      <path d="M115 220 L125 250" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />

      {/* arms */}
      {pose === "wave" && (
        <>
          <path d="M60 150 Q20 120 30 80" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M140 150 Q170 170 165 195" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pose === "cheer" && (
        <>
          <path d="M60 150 Q20 130 15 100" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M140 150 Q180 130 185 100" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pose === "point" && (
        <>
          <path d="M140 150 Q185 145 198 115" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 150 Q35 165 38 195" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pose === "peek" && (
        <>
          <path d="M60 150 Q45 108 72 92" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M140 150 Q155 108 128 92" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pose === "shrug" && (
        <>
          <path d="M60 150 Q20 145 8 158" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M140 150 Q180 145 192 158" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pose === "think" && (
        <>
          <path d="M140 150 Q155 115 122 98" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 150 Q45 175 50 200" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pose === "hip" && (
        <>
          <path d="M60 150 Q35 165 55 180" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
          <path d="M140 150 Q178 155 185 130" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" />
        </>
      )}

      {/* cup body */}
      <path
        d="M55 70 L145 70 L132 220 Q100 232 68 220 Z"
        fill={cupColor}
        stroke="#2E1C12"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* tea fill */}
      <path
        d="M63 130 L137 130 L132 220 Q100 232 68 220 Z"
        fill={teaColor}
        opacity="0.9"
      />

      {/* tapioca pearls */}
      <circle cx="82" cy="205" r="5" fill="#2E1C12" />
      <circle cx="100" cy="212" r="5" fill="#2E1C12" />
      <circle cx="118" cy="203" r="5" fill="#2E1C12" />
      <circle cx="92" cy="196" r="5" fill="#2E1C12" />
      <circle cx="110" cy="194" r="5" fill="#2E1C12" />

      {/* lid */}
      <rect x="50" y="58" width="100" height="14" rx="4" fill="#F5EFE3" stroke="#2E1C12" strokeWidth="6" />

      {/* straw */}
      <path d="M118 20 L100 62" stroke="#F2B441" strokeWidth="10" strokeLinecap="round" />

      {/* face */}
      <circle cx="82" cy="105" r="6" fill="#2E1C12" />
      <circle cx="118" cy="105" r="6" fill="#2E1C12" />
      <path d="M80 128 Q100 142 120 128" stroke="#2E1C12" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="68" cy="118" r="7" fill="#F2B441" />
      <circle cx="132" cy="118" r="7" fill="#F2B441" />
    </svg>
  );
}

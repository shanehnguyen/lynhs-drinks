import Image from "next/image";

type PhotoFrameProps = {
  label: string;
  className?: string;
  rotate?: number;
  tone?: string;
  src?: string;
  alt?: string;
  cutout?: boolean;
  cutoutMaxHeight?: string;
  priority?: boolean;
};

export default function PhotoFrame({
  label,
  className = "",
  rotate = 0,
  tone = "#E2793A",
  src,
  alt,
  cutout = false,
  cutoutMaxHeight = "440px",
  priority = false,
}: PhotoFrameProps) {
  if (src && cutout) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div
          className="absolute h-[65%] w-[65%] rounded-full blur-[70px] opacity-25"
          style={{ backgroundColor: tone }}
        />
        <Image
          src={src}
          alt={alt ?? label}
          width={600}
          height={800}
          priority={priority}
          className="relative h-auto w-auto object-contain drop-shadow-xl"
          style={{ transform: `rotate(${rotate}deg)`, maxHeight: cutoutMaxHeight }}
        />
      </div>
    );
  }

  if (src) {
    return (
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border-[3px] border-coffee ${className}`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center rounded-xl border-[3px] border-dashed border-coffee/40 bg-warmwhite text-center ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-ink/60">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={tone}
          strokeWidth="1.8"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.75" />
          <path d="M21 16l-5.5-5.5L7 19" />
        </svg>
        <span className="font-display text-sm uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}

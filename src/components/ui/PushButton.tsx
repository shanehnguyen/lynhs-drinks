import Link from "next/link";

type PushButtonProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  surface?: string;
  textColor?: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function PushButton({
  label,
  href,
  type,
  surface = "#F4CC7B",
  textColor = "#000000",
  className = "",
  disabled = false,
  fullWidth = false,
  onClick,
}: PushButtonProps) {
  const inner = (
    <>
      <span
        className={`push-btn__surface uppercase tracking-wider ${fullWidth ? "w-full justify-center" : ""}`}
        style={{
          backgroundColor: surface,
          color: textColor,
          boxShadow: "inset 0 0 0 3px #2E1C12",
        }}
      >
        {label}
      </span>
      <span
        aria-hidden
        className="push-btn__pop"
        style={{ backgroundColor: "#2E1C12" }}
      />
    </>
  );

  const outerClassName = `push-btn ${fullWidth ? "block w-full" : ""} ${className} ${disabled ? "opacity-60" : ""}`;

  if (type === "submit" || type === "button") {
    return (
      <button type={type} disabled={disabled} onClick={onClick} className={outerClassName}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href ?? "#"} onClick={onClick} className={outerClassName}>
      {inner}
    </Link>
  );
}

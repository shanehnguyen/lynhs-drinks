export type DoodleName =
  | "church"
  | "school"
  | "wedding"
  | "corporate"
  | "party"
  | "custom";

type IconDoodleProps = {
  name: DoodleName;
  color?: string;
  className?: string;
};

const paths: Record<DoodleName, React.ReactNode> = {
  church: (
    <>
      <path d="M24 4v6" />
      <path d="M19 7h10" />
      <path d="M24 12L10 22v18h28V22Z" />
      <path d="M20 40v-10h8v10" />
    </>
  ),
  school: (
    <>
      <path d="M4 18l20-9 20 9-20 9z" />
      <path d="M12 22v10c0 3 6 6 12 6s12-3 12-6V22" />
      <path d="M44 18v12" />
    </>
  ),
  wedding: (
    <>
      <circle cx="17" cy="26" r="10" />
      <circle cx="31" cy="26" r="10" />
    </>
  ),
  corporate: (
    <>
      <rect x="8" y="18" width="32" height="22" rx="2" />
      <path d="M18 18v-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5" />
      <path d="M8 27h32" />
    </>
  ),
  party: (
    <>
      <path d="M8 40L20 12l20 8-8 20Z" />
      <path d="M20 12l4 26" />
      <circle cx="38" cy="10" r="2" />
      <circle cx="44" cy="16" r="2" />
      <circle cx="34" cy="6" r="2" />
    </>
  ),
  custom: (
    <>
      <path d="M24 6l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
    </>
  ),
};

export default function IconDoodle({
  name,
  color = "#2B1B12",
  className = "",
}: IconDoodleProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const BASE = "#F6B93B";
const LAYER1 = "#F4CC7B";
const LAYER2 = "#F0A519";

/**
 * The hero's swirl shapes and base color (same paths, mirrored
 * left-to-right and scaled down ~10%), so this section matches the
 * hero -- the first section on the page -- instead of reading as its
 * own separate white block.
 */
export default function TestimonialBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: BASE }}
    >
      <svg
        className="h-full w-full animate-float-slow"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* bounded pale ribbon, mirrored from the hero: wide peak now
            centered, gold visible above AND below it */}
        <path
          fill={LAYER1}
          d="M 1520.0,459.0 C 1451.7,472.5 1225.0,589.5 1110.0,540.0 C 995.0,490.5 913.3,225.7 830.0,162.0
             C 746.7,98.3 675.8,102.0 610.0,157.5 C 544.2,213.0 511.7,459.7 435.0,495.0
             C 358.3,530.3 235.8,415.5 150.0,369.0 C 64.2,322.5 -80.0,186.0 -80.0,216.0
             C -80.0,246.0 64.2,465.0 150.0,549.0 C 235.8,633.0 340.0,723.0 435.0,720.0
             C 530.0,717.0 610.8,535.5 720.0,531.0 C 829.2,526.5 956.7,669.0 1090.0,693.0
             C 1223.3,717.0 1448.3,678.0 1520.0,675.0 Z"
        />

        {/* orange layer beneath, mirrored, with a consistent gold gap
            above it */}
        <path
          fill={LAYER2}
          d="M 1520.0,756.0 C 1448.3,762.0 1223.3,807.0 1090.0,792.0 C 956.7,777.0 829.2,658.5 720.0,666.0
             C 610.8,673.5 530.0,841.5 435.0,837.0 C 340.0,832.5 235.8,661.5 150.0,639.0
             C 64.2,616.5 -41.7,691.5 -80.0,702.0 L -80.0,900.0 L 1520.0,900.0 Z"
        />
      </svg>
    </div>
  );
}

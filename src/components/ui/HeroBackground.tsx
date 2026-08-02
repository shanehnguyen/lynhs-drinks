const BASE = "#F6B93B";
const LAYER1 = "#F4CC7B";
const LAYER2 = "#F0A519";

/**
 * A-b-A-c composition: gold base, one pale ribbon, gold again, one
 * orange layer. The pale ribbon is a fully bounded shape (its own top
 * AND bottom boundary) so gold reappears beneath it before the orange
 * layer starts -- nothing touches or overlaps. Only two peaks each
 * (the old first/leftmost peak is gone), each with its own distinct
 * height and slope so no two humps read the same. Colors are all the
 * same gold hue family (~38-42 deg), varying mostly in lightness, so
 * they read as shades of the base rather than separate colors.
 *
 * The pale ribbon sits higher up overall (more gold breathing room above
 * the orange layer, instead of crowding it). Its topmost peak is wide
 * (a broad plateau, not a narrow spike), and its right side climbs up
 * toward the top-right corner instead of descending.
 */
export default function HeroBackground() {
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
        {/* bounded pale ribbon: wide topmost peak (broad plateau) spanning
            roughly x=610-830, shorter narrower peak at x=1290, gold
            visible above AND below it; climbs up on the right */}
        <path
          fill={LAYER1}
          d="M -80.0,410.0 C -11.7,425.0 215.0,555.0 330.0,500.0 C 445.0,445.0 526.7,150.8 610.0,80.0
             C 693.3,9.2 764.2,13.3 830.0,75.0 C 895.8,136.7 928.3,410.8 1005.0,450.0
             C 1081.7,489.2 1204.2,361.7 1290.0,310.0 C 1375.8,258.3 1520.0,106.7 1520.0,140.0
             C 1520.0,173.3 1375.8,416.7 1290.0,510.0 C 1204.2,603.3 1100.0,703.3 1005.0,700.0
             C 910.0,696.7 829.2,495.0 720.0,490.0 C 610.8,485.0 483.3,643.3 350.0,670.0
             C 216.7,696.7 -8.3,653.3 -80.0,650.0 Z"
        />

        {/* orange layer beneath, with a consistent gold gap above it;
            its own two peaks (720, 1290) at different heights again */}
        <path
          fill={LAYER2}
          d="M -80.0,740.0 C -8.3,746.7 216.7,796.7 350.0,780.0 C 483.3,763.3 610.8,631.7 720.0,640.0
             C 829.2,648.3 910.0,835.0 1005.0,830.0 C 1100.0,825.0 1204.2,635.0 1290.0,610.0
             C 1375.8,585.0 1481.7,668.3 1520.0,680.0 L 1520.0,900 L -80.0,900 Z"
        />
      </svg>
    </div>
  );
}

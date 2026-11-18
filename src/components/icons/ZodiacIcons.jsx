export const ZODIAC = [
  { name: "Aries", d: "M24 42 V16 M24 16 C24 8 18 5 13 7 C7 10 7 19 12 23 M24 16 C24 8 30 5 35 7 C41 10 41 19 36 23" },
  { name: "Taurus", d: "M14 7 C14 15 19 18 24 18 C29 18 34 15 34 7", circle: { cx: 24, cy: 30, r: 11 } },
  { name: "Gemini", d: "M13 7 C19 11 29 11 35 7 M13 41 C19 37 29 37 35 41 M17 9 V39 M31 9 V39" },
  {
    name: "Cancer",
    d: "M21 17 C23 10 30 6 38 8 M27 31 C25 38 18 42 10 40",
    circles: [
      { cx: 15, cy: 19, r: 6 },
      { cx: 33, cy: 29, r: 6 },
    ],
  },
  { name: "Leo", d: "M24 17 C24 27 27 33 33 33 C38 33 39 28 36 25 C33 23 30 25 31 29 L28 42", circle: { cx: 18, cy: 15, r: 6 } },
  { name: "Virgo", d: "M11 41 V18 C11 11 19 11 19 18 V41 M19 25 C19 15 27 15 27 23 V41 M27 23 C27 13 36 15 36 24 C36 33 34 39 29 41" },
  { name: "Libra", d: "M11 27 C11 17 17 12 24 12 C31 12 37 17 37 27 M7 34 H41" },
  { name: "Scorpio", d: "M11 8 V26 C11 33 16 37 21 37 C26 37 30 33 30 26 V12 M24.5 17.5 L30 12 L35.5 17.5" },
  { name: "Sagittarius", d: "M11 37 L37 11 M22 11 H37 V26 M15 24 L24 33" },
  { name: "Capricorn", d: "M10 9 C10 18 13 24 19 24 C24 24 24 17 29 17 C35 17 36 24 33 30 C30 36 24 40 21 35 C19 31 22 27 26 28" },
  { name: "Aquarius", d: "M7 18 L15 10 L23 18 L31 10 L39 18 M7 30 L15 22 L23 30 L31 22 L39 30" },
  { name: "Pisces", d: "M15 7 C27 15 27 33 15 41 M33 7 C21 15 21 33 33 41 M10 24 H38" },
];

export const ZodiacGlyph = ({ name, size = 28, className = "", strokeWidth = 2 }) => {
  const sym = ZODIAC.find((z) => z.name.toLowerCase() === String(name).toLowerCase()) || ZODIAC[0];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`zodiac-glow ${className}`}
      aria-hidden="true"
    >
      <path
        d={sym.d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {sym.circle && (
        <circle cx={sym.circle.cx} cy={sym.circle.cy} r={sym.circle.r} stroke="currentColor" strokeWidth={strokeWidth} />
      )}
      {sym.circles &&
        sym.circles.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} stroke="currentColor" strokeWidth={strokeWidth} />
        ))}
    </svg>
  );
};

const PATHS = {
  vastu: ["M8 22 L24 8 L40 22 M12 20 V40 H36 V20", "M24 24 L30 30 L24 36 L18 30 Z"],
  astrology: ["M15 19 A10 10 0 1 0 33 27", "M7.5 22.5 A19 5.2 -16 1 0 40 30"],
  mobile: ["M17 6 H31 A2 2 0 0 1 33 8 V40 A2 2 0 0 1 31 42 H17 A2 2 0 0 1 15 40 V8 A2 2 0 0 1 17 6 Z", "M21 10 H27", "M24 22 V28 M21 25 H27", "M22 36 H26"],
  name: ["M24 7 A17 17 0 1 0 24 41 A17 17 0 1 0 24 7", "M17.5 31 L24 15 L30.5 31 M19.8 26 H28.2"],
  logo: ["M24 6 L39 15 V33 L24 42 L9 33 V15 Z", "M24 16 L30 24 L24 32 L18 24 Z"],
  clock: ["M24 8 A16 16 0 1 0 24 40 A16 16 0 1 0 24 8", "M24 14 V24 L31 28"],
  card: ["M9 12 H39 A2 2 0 0 1 41 14 V34 A2 2 0 0 1 39 36 H9 A2 2 0 0 1 7 34 V14 A2 2 0 0 1 9 12 Z", "M12 20 H24 M12 26 H20 M12 31 H28", "M31 20 L35 24 L31 28"],
  cowrie: [
    "M24 40 C13 40 8.5 29 10.5 20 C12.3 12 17.5 7 24 7 C30.5 7 35.7 12 37.5 20 C39.5 29 35 40 24 40 Z",
    "M24 40 C20 32 20 15 24 7",
    "M24 40 C28 32 28 15 24 7",
    "M17 37.5 C14 30 14 17 17 10.5",
    "M31 37.5 C34 30 34 17 31 10.5",
  ],
};

export const ServiceIcon = ({ name, size = 30, className = "", strokeWidth = 1.7 }) => {
  const paths = PATHS[name] || PATHS.vastu;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
};

const ELEMENTS = {
  Earth: ["M7 37 C13 26 35 26 41 37 Z", "M18 37 C21 30 27 30 30 37"],
  Water: ["M24 7 C30 17 34 23 34 29 A10 10 0 1 1 14 29 C14 23 18 17 24 7 Z"],
  Fire: ["M24 6 C27 13 33 17 33 26 A9.5 9.5 0 1 1 15 26 C15 19 21 16 24 6 Z", "M24 40 A6 6 0 0 1 19 31 C21 33 22 34 24 34 C26 34 27 33 29 31 A6 6 0 0 1 24 40 Z"],
  Air: ["M8 17 H29 A4.5 4.5 0 1 0 24.5 12.5", "M8 26 H36 A4.5 4.5 0 1 1 31.5 30.5", "M8 35 H22"],
  Space: ["M24 9 A15 15 0 1 0 24 39 A15 15 0 1 0 24 9", "M24 20 A4 4 0 1 0 24 28 A4 4 0 1 0 24 20", "M24 3 V6 M24 42 V45 M3 24 H6 M42 24 H45"],
};

export const ElementIcon = ({ name, size = 34, className = "", strokeWidth = 1.6 }) => {
  const paths = ELEMENTS[name] || [];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
};

export const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.02c-1.48 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

export const QuoteMark = ({ size = 30, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.6 6C7.9 8.4 5 12.6 5 17.9c0 4.6 2.7 7.6 6.2 7.6 3 0 5.3-2.2 5.3-5.2 0-2.9-2-5-4.8-5-.5 0-1.2.1-1.4.2.4-2.9 2.9-6 5.5-7.5L12.6 6zm13 0c-4.7 2.4-7.6 6.6-7.6 11.9 0 4.6 2.7 7.6 6.2 7.6 3 0 5.3-2.2 5.3-5.2 0-2.9-2-5-4.8-5-.5 0-1.2.1-1.4.2.4-2.9 2.9-6 5.5-7.5L25.6 6z" />
  </svg>
);

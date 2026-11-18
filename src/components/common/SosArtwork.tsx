import React from 'react';

interface RedVinylDiscProps {
  customImage?: string;
  alt?: string;
  className?: string;
  spinSpeed?: 'slow' | 'none';
}

export const RedVinylDisc: React.FC<RedVinylDiscProps> = ({
  customImage,
  alt = 'Disco vinilo rojo',
  className = '',
  spinSpeed = 'slow',
}) => {
  if (customImage) {
    return (
      <img
        src={customImage}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`object-contain select-none ${
          spinSpeed === 'slow' ? 'animate-[spin_28s_linear_infinite]' : ''
        } ${className}`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 240 240"
      aria-hidden="true"
      className={`select-none drop-shadow-[0_18px_35px_rgba(0,0,0,0.65)] ${
        spinSpeed === 'slow' ? 'animate-[spin_32s_linear_infinite]' : ''
      } ${className}`}
    >
      <defs>
        <radialGradient id="sosVinylOuter" cx="42%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#d9463e" />
          <stop offset="55%" stopColor="#b5332b" />
          <stop offset="100%" stopColor="#7d1f1a" />
        </radialGradient>
        <linearGradient id="sosVinylSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Outer disc */}
      <circle cx="120" cy="120" r="116" fill="url(#sosVinylOuter)" />

      {/* Concentric vinyl grooves */}
      {[110, 102, 94, 86, 78, 70, 62].map((r) => (
        <circle
          key={r}
          cx="120"
          cy="120"
          r={r}
          fill="none"
          stroke="#5f1511"
          strokeOpacity="0.38"
          strokeWidth="1.2"
        />
      ))}

      {/* Diagonal highlight sheen */}
      <circle cx="120" cy="120" r="116" fill="url(#sosVinylSheen)" />

      {/* Warm peach/salmon inner label ring */}
      <circle cx="120" cy="120" r="46" fill="#e59b84" />
      <circle
        cx="120"
        cy="120"
        r="43"
        fill="none"
        stroke="#c9745d"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* Spindle center hole */}
      <circle cx="120" cy="120" r="18" fill="#090d16" />
    </svg>
  );
};

interface BibleEmergencyArtProps {
  customImage?: string;
  alt?: string;
  className?: string;
}

export const BibleEmergencyArt: React.FC<BibleEmergencyArtProps> = ({
  customImage,
  alt = 'Biblia con cruz y botón de emergencia',
  className = '',
}) => {
  if (customImage) {
    return (
      <img
        src={customImage}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`object-contain select-none ${className}`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 260 240"
      aria-hidden="true"
      className={`select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.75)] ${className}`}
    >
      <defs>
        <linearGradient id="bibleCoverTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32312f" />
          <stop offset="100%" stopColor="#1b1a18" />
        </linearGradient>
        <linearGradient id="bibleGoldCross" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="60%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <radialGradient id="redBuzzerKnob" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#ff7b7b" />
          <stop offset="45%" stopColor="#ef2323" />
          <stop offset="100%" stopColor="#990d0d" />
        </radialGradient>
        <linearGradient id="chromeBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="35%" stopColor="#f1f5f9" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>

      {/* Book spine & thickness shadow */}
      <polygon
        points="24,132 138,214 236,154 236,178 138,236 22,152"
        fill="#141312"
      />

      {/* Cream pages block */}
      <polygon
        points="28,125 138,205 229,149 229,170 138,225 28,144"
        fill="#e7dfd1"
      />
      <line
        x1="34"
        y1="134"
        x2="138"
        y2="213"
        stroke="#c8bea9"
        strokeWidth="1.5"
      />
      <line
        x1="138"
        y1="213"
        x2="225"
        y2="158"
        stroke="#c8bea9"
        strokeWidth="1.5"
      />

      {/* Top Hardcover */}
      <polygon
        points="22,120 132,54 238,132 138,200"
        fill="url(#bibleCoverTop)"
        stroke="#44403c"
        strokeWidth="1.5"
      />

      {/* Spine rounded crease */}
      <path
        d="M22,120 Q16,136 24,152 L138,236 Q130,218 138,200 Z"
        fill="#121110"
      />

      {/* 3D Gold Cross on Bible cover */}
      {/* Vertical beam depth */}
      <polygon points="84,116 146,162 162,151 162,158 146,169 84,123" fill="#a16207" />
      <polygon points="103,146 154,112 154,119 103,153" fill="#a16207" />
      {/* Main Vertical Cross Bar */}
      <polygon
        points="84,116 101,105 162,151 146,162"
        fill="url(#bibleGoldCross)"
      />
      {/* Horizontal Cross Bar */}
      <polygon
        points="92,135 137,104 154,116 108,147"
        fill="url(#bibleGoldCross)"
      />

      {/* Red Emergency Push Button perched atop the cross */}
      {/* Metallic Base */}
      <ellipse cx="122" cy="108" rx="22" ry="12" fill="url(#chromeBase)" />
      <ellipse cx="122" cy="104" rx="18" ry="9" fill="#64748b" />
      {/* Plunger stem */}
      <rect x="114" y="84" width="16" height="20" rx="4" fill="#cbd5e1" />
      {/* Glossy Red Dome Button */}
      <ellipse cx="122" cy="74" rx="23" ry="18" fill="url(#redBuzzerKnob)" />
      <ellipse
        cx="114"
        cy="67"
        rx="8"
        ry="4.5"
        transform="rotate(-18 114 67)"
        fill="#ffffff"
        fillOpacity="0.48"
      />
    </svg>
  );
};

import React from 'react';
import { motion, MotionValue } from 'motion/react';

export type SocialPlatformId =
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'youtube'
  | 'x'
  | 'whatsapp';

interface SocialOrb3DProps {
  platform: SocialPlatformId;
  name: string;
  href: string;
  rotate: MotionValue<number>;
}

const SPHERE_PALETTES: Record<
  SocialPlatformId,
  {
    highlight: string;
    mid: string;
    edge: string;
    deep: string;
    rim: string;
    extraGradient?: boolean;
  }
> = {
  instagram: {
    highlight: '#FF6B9E',
    mid: '#D62976',
    edge: '#962FBF',
    deep: '#4F146E',
    rim: '#FEDA75',
    extraGradient: true,
  },
  tiktok: {
    highlight: '#3D4148',
    mid: '#181A1F',
    edge: '#0B0C0E',
    deep: '#020203',
    rim: '#6B7280',
  },
  facebook: {
    highlight: '#53A6FF',
    mid: '#1877F2',
    edge: '#0E55B8',
    deep: '#072E6E',
    rim: '#93C5FD',
  },
  youtube: {
    highlight: '#FF5252',
    mid: '#FF0000',
    edge: '#C40000',
    deep: '#6E0000',
    rim: '#FCA5A5',
  },
  x: {
    highlight: '#525760',
    mid: '#1F2227',
    edge: '#0E1013',
    deep: '#040506',
    rim: '#9CA3AF',
  },
  whatsapp: {
    highlight: '#5CF48E',
    mid: '#25D366',
    edge: '#169C46',
    deep: '#0A5E28',
    rim: '#86EFAC',
  },
};

export const SocialOrb3D: React.FC<SocialOrb3DProps> = ({
  platform,
  name,
  href,
  rotate,
}) => {
  const palette = SPHERE_PALETTES[platform];
  const gradId = `orb-bg-${platform}`;
  const instaGlowId = `orb-insta-${platform}`;
  const glassTopId = `orb-glass-top-${platform}`;
  const glassRimId = `orb-glass-rim-${platform}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={name}
      whileHover={{ scale: 1.14, y: -4 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full block cursor-pointer select-none shadow-[0_14px_24px_-6px_rgba(0,0,0,0.45),0_4px_8px_-2px_rgba(0,0,0,0.28)]"
    >
      {/* Layer 1: Realistic 3D Spherical Body Shading */}
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full rounded-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={gradId} cx="34%" cy="28%" r="72%" fx="30%" fy="24%">
            <stop offset="0%" stopColor={palette.highlight} />
            <stop offset="42%" stopColor={palette.mid} />
            <stop offset="82%" stopColor={palette.edge} />
            <stop offset="100%" stopColor={palette.deep} />
          </radialGradient>
          {palette.extraGradient && (
            <radialGradient id={instaGlowId} cx="78%" cy="82%" r="65%">
              <stop offset="0%" stopColor="#FA7E1E" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#FEDA75" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#D62976" stopOpacity="0" />
            </radialGradient>
          )}
        </defs>
        <circle cx="60" cy="60" r="60" fill={`url(#${gradId})`} />
        {palette.extraGradient && (
          <circle cx="60" cy="60" r="60" fill={`url(#${instaGlowId})`} />
        )}
        {/* Subtle bottom-right bounce light */}
        <circle
          cx="60"
          cy="60"
          r="58.5"
          fill="none"
          stroke={palette.rim}
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      </svg>

      {/* Layer 2: Scroll-Rotating Authentic Brand Emblem */}
      <motion.div
        style={{ rotate }}
        className="absolute inset-0 flex items-center justify-center p-3.5 sm:p-4 origin-center will-change-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
      >
        {platform === 'instagram' && (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <rect
              x="12"
              y="12"
              width="40"
              height="40"
              rx="12"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4.6"
            />
            <circle
              cx="32"
              cy="32"
              r="9.5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4.6"
            />
            <circle cx="43.5" cy="20.5" r="2.8" fill="#FFFFFF" />
          </svg>
        )}

        {platform === 'tiktok' && (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            {/* Cyan left offset */}
            <path
              d="M36.5 11v27.2a8.3 8.3 0 1 1-5.8-7.9v6.1a2.7 2.7 0 1 0 2 2.6V11h5.8a11.3 11.3 0 0 0 10.6 10.2v5.8a16.8 16.8 0 0 1-10.6-3.4v14.6a14.1 14.1 0 1 1-14.1-14.1c1 0 2 .1 3 .3v6a8.3 8.3 0 0 0-3-.6 8.3 8.3 0 1 0 8.3 8.3V11h3.8Z"
              transform="translate(-1.8 -1.2)"
              fill="#25F4EE"
            />
            {/* Magenta right offset */}
            <path
              d="M36.5 11v27.2a8.3 8.3 0 1 1-5.8-7.9v6.1a2.7 2.7 0 1 0 2 2.6V11h5.8a11.3 11.3 0 0 0 10.6 10.2v5.8a16.8 16.8 0 0 1-10.6-3.4v14.6a14.1 14.1 0 1 1-14.1-14.1c1 0 2 .1 3 .3v6a8.3 8.3 0 0 0-3-.6 8.3 8.3 0 1 0 8.3 8.3V11h3.8Z"
              transform="translate(1.8 1.2)"
              fill="#FE2C55"
            />
            {/* Pure White center */}
            <path
              d="M36.5 11v27.2a8.3 8.3 0 1 1-5.8-7.9v6.1a2.7 2.7 0 1 0 2 2.6V11h5.8a11.3 11.3 0 0 0 10.6 10.2v5.8a16.8 16.8 0 0 1-10.6-3.4v14.6a14.1 14.1 0 1 1-14.1-14.1c1 0 2 .1 3 .3v6a8.3 8.3 0 0 0-3-.6 8.3 8.3 0 1 0 8.3 8.3V11h3.8Z"
              fill="#FFFFFF"
            />
          </svg>
        )}

        {platform === 'facebook' && (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <path
              d="M37.5 54V34.2h6.6l1-7.7h-7.6v-4.9c0-2.2.6-3.7 3.8-3.7h4.1V11a54.8 54.8 0 0 0-6-.3c-5.9 0-10 3.6-10 10.2v5.7h-6.7v7.7h6.7V54h8.1Z"
              fill="#FFFFFF"
            />
          </svg>
        )}

        {platform === 'youtube' && (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <rect
              x="7"
              y="16"
              width="50"
              height="32"
              rx="10"
              fill="#FFFFFF"
            />
            <path d="M27.5 24.5 41.5 32l-14 7.5v-15Z" fill="#E60000" />
          </svg>
        )}

        {platform === 'x' && (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <path
              d="M46.6 13h6.4L39 29l16.5 22H42.6l-10.1-13.2L20.9 51h-6.4l15-17.1L13.7 13h13.2l9.1 12.1L46.6 13Zm-2.2 34.1h3.5L24.8 16.7h-3.8l23.4 30.4Z"
              fill="#FFFFFF"
            />
          </svg>
        )}

        {platform === 'whatsapp' && (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <path
              d="M32 10.5c-11.9 0-21.5 9.5-21.5 21.3 0 4.1 1.2 8 3.2 11.3L11.2 53l10.2-2.7a21.5 21.5 0 0 0 10.6 2.8c11.9 0 21.5-9.5 21.5-21.3S43.9 10.5 32 10.5Zm0 38.6c-3.5 0-6.8-.9-9.7-2.7l-.7-.4-6 1.6 1.6-5.8-.5-.7a17.4 17.4 0 0 1-2.8-9.3c0-9.6 7.9-17.4 17.6-17.4s17.6 7.8 17.6 17.4S41.7 49.1 32 49.1Z"
              fill="#FFFFFF"
            />
            <path
              d="M41.7 36.2c-.5-.3-3.1-1.5-3.6-1.7-.5-.2-.8-.3-1.2.3-.3.5-1.3 1.7-1.6 2-.3.4-.6.4-1.1.1-3-.1-5.8-2.6-7.6-5.7-.4-.6.4-.8.9-1.7.2-.4.1-.7-.1-1-.1-.3-1.2-2.8-1.6-3.9-.4-1-.9-.9-1.2-.9h-1c-.4 0-.9.1-1.4.7-.5.5-1.9 1.8-1.9 4.4s1.9 5.2 2.2 5.5c.3.4 3.8 5.9 9.2 8.2 3.6 1.5 5 1.7 6.8 1.4 1.1-.2 3.1-1.3 3.5-2.5.4-1.2.4-2.3.3-2.5-.1-.2-.5-.4-1-.6Z"
              fill="#FFFFFF"
            />
          </svg>
        )}
      </motion.div>

      {/* Layer 3: Stationary Glossy Glass Specular & Window-Pane Reflection */}
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={glassTopId} x1="25%" y1="5%" x2="70%" y2="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.72" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={glassRimId} cx="50%" cy="85%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft dome gloss */}
        <ellipse cx="52" cy="30" rx="38" ry="22" fill={`url(#${glassTopId})`} />

        {/* Crisp studio window-pane reflection at top-left/top */}
        <path
          d="M36 16c9-5 20-7 30-5-2 4-5 7-8 9-8-1-16 1-23 5-2-3-1-6 1-9Z"
          fill="#FFFFFF"
          fillOpacity="0.58"
        />
        <ellipse
          cx="26"
          cy="34"
          rx="5"
          ry="11"
          transform="rotate(24 26 34)"
          fill="#FFFFFF"
          fillOpacity="0.38"
        />

        {/* Lower glass caustics / bounce sheen */}
        <ellipse cx="60" cy="103" rx="34" ry="10" fill={`url(#${glassRimId})`} />

        {/* Outer crisp specular rim */}
        <circle
          cx="60"
          cy="60"
          r="59"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    </motion.a>
  );
};

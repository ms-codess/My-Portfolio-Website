'use client';

import Image from 'next/image';
import * as React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Plane } from 'lucide-react';

// ViewBox used by the overlay SVG. Keep in sync with path coordinates.
const VB_WIDTH = 800;
const VB_HEIGHT = 400;

// Approximate equirectangular-projection coordinates for Bizerte (origin) and Ottawa (destination)
// Bizerte, Tunisia  (lat 37.27, lon 9.87)  -> (x ≈ 422, y ≈ 117)
// Ottawa, Canada    (lat 45.42, lon -75.69) -> (x ≈ 232, y ≈ 99)
const ORIGIN = { x: 422, y: 117 };
const DEST = { x: 232, y: 99 };

// Smooth curved path (cubic Bezier) arcing over the Atlantic.
const FLIGHT_PATH = `M ${ORIGIN.x} ${ORIGIN.y} C 380 40, 300 40, ${DEST.x} ${DEST.y}`;

const pinPulse = {
  initial: { scale: 0.9, opacity: 0.8 },
  animate: {
    scale: [0.9, 1.15, 0.9],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

const AboutAnimation = () => {
  const progress = useMotionValue(0);
  const pathRef = React.useRef<SVGPathElement | null>(null);
  const [planeState, setPlaneState] = React.useState({ xPct: 0, yPct: 0, angle: 0 });

  React.useEffect(() => {
    // Animate the progress along the path back and forth.
    const controls = animate(progress, 1, {
      duration: 2.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 0.2,
    });

    const unsubscribe = progress.on('change', (v) => {
      const p = pathRef.current;
      if (!p) return;
      const total = p.getTotalLength();
      const len = total * v;
      const curr = p.getPointAtLength(len);
      // compute tangent for rotation
      const ahead = p.getPointAtLength(Math.min(total, len + 1));
      const angle = Math.atan2(ahead.y - curr.y, ahead.x - curr.x) * (180 / Math.PI);
      setPlaneState({ xPct: (curr.x / VB_WIDTH) * 100, yPct: (curr.y / VB_HEIGHT) * 100, angle });
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [progress]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      {/* Map with animated flight */}
      <div className="relative w-full max-w-4xl aspect-[2/1] overflow-hidden rounded-xl border bg-card">
        {/* Background map */}
        <Image
          src="/world-map.svg"
          alt="World map"
          fill
          className="object-contain opacity-70 dark:opacity-60"
          priority
        />

        {/* Flight path overlay */}
        <svg
          viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
          className="absolute inset-0"
          aria-hidden="true"
        >
          {/* Glow */}
          <motion.path
            d={FLIGHT_PATH}
            stroke="hsl(var(--accent))"
            strokeOpacity={0.35}
            strokeWidth={6}
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Main line */}
          <motion.path
            ref={pathRef}
            d={FLIGHT_PATH}
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Pins */}
          <motion.circle
            cx={ORIGIN.x}
            cy={ORIGIN.y}
            r={6}
            className="fill-red-500"
            variants={pinPulse}
            initial="initial"
            animate="animate"
          />
          <motion.circle
            cx={DEST.x}
            cy={DEST.y}
            r={6}
            className="fill-green-500"
            variants={pinPulse}
            initial="initial"
            animate="animate"
          />

          {/* defs for glow */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Plane icon following the path (percent-based for responsiveness) */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: `${planeState.xPct}%`,
            top: `${planeState.yPct}%`,
            transform: `translate(-50%, -50%) rotate(${planeState.angle}deg)`,
          }}
          aria-hidden
        >
          <Plane className="h-6 w-6 text-accent drop-shadow" />
        </div>
      </div>

      {/* Avatar with orbiting emojis */}
      <div className="relative flex flex-col items-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-border shadow-md shadow-black/10 dark:shadow-black/30">
          <AvatarImage />
        </div>

        {/* Orbit ring */}
        <div className="relative mt-6 h-56 w-56">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 text-2xl">💻</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl">🧠</span>
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 text-2xl">✈️</span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl">🍳</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">🎨</span>
          </motion.div>
        </div>

       
      </div>
    </div>
  );
};

export default AboutAnimation;

// Separate to keep state local and readable
function AvatarImage() {
  const [src, setSrc] = React.useState<string>('/meyssa-avatar.png');
  return (
    <Image
      src={src}
      alt="Meyssa Smirani avatar"
      fill
      className="object-cover"
      sizes="160px"
      onError={() => setSrc('/avatar-fallback.svg')}
    />
  );
}

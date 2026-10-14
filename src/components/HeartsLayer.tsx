import { useEffect, useRef, useState, useCallback } from 'react';

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  color: string;
  type: 'heart' | 'sparkle';
};

const HEART_COLORS = ['#d63957', '#e87aa0', '#c2185b', '#ef6f8b', '#d44d6e', '#f06292'];

let heartIdCounter = 0;

function createHeart(type: 'heart' | 'sparkle' = 'heart'): Heart {
  const id = heartIdCounter++;
  const isLarge = Math.random() < 0.08;
  return {
    id,
    left: Math.random() * 100,
    size: isLarge ? 28 + Math.random() * 20 : 10 + Math.random() * 14,
    duration: 6 + Math.random() * 8,
    delay: 0,
    drift: (Math.random() - 0.5) * 120,
    rotation: (Math.random() - 0.5) * 720,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
    type: Math.random() < 0.15 ? 'sparkle' : type,
  };
}

function HeartSVG({ size, color, rotation }: { size: number; color: string; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={color}
      />
    </svg>
  );
}

function SparkleSVG({ size, color, rotation }: { size: number; color: string; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"
        fill={color}
      />
    </svg>
  );
}

type HeartsLayerProps = {
  /** continuous falling hearts in background */
  continuous?: boolean;
  /** burst of hearts from a position */
  burst?: { x: number; y: number; count: number; key: number } | null;
  /** full-screen shower */
  shower?: { count: number; key: number } | null;
};

export default function HeartsLayer({ continuous = true, burst = null, shower = null }: HeartsLayerProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [burstHearts, setBurstHearts] = useState<{ id: number; x: number; y: number; heart: Heart }[]>([]);
  const [showerHearts, setShowerHearts] = useState<Heart[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  ).current;

  // Continuous falling hearts
  useEffect(() => {
    if (!continuous || reducedMotion) {
      if (reducedMotion) {
        // Show a few static hearts
        setHearts(Array.from({ length: 5 }, () => createHeart()));
      }
      return;
    }
    // Initial batch
    const initial = Array.from({ length: 12 }, () => {
      const h = createHeart();
      h.delay = Math.random() * 8;
      return h;
    });
    setHearts(initial);

    intervalRef.current = setInterval(() => {
      setHearts((prev) => {
        const filtered = prev.filter((h) => {
          const age = Date.now() / 1000 - (h as any)._start;
          return age < (h.duration + h.delay);
        });
        // Add 1-2 new hearts
        const newCount = Math.random() < 0.5 ? 2 : 1;
        const fresh = Array.from({ length: newCount }, () => {
          const h = createHeart();
          (h as any)._start = Date.now() / 1000;
          h.delay = 0;
          return h;
        });
        // Keep max ~25
        return [...filtered, ...fresh].slice(-25);
      });
    }, 800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [continuous, reducedMotion]);

  // Heart burst from click position
  useEffect(() => {
    if (!burst) return;
    if (reducedMotion) return;
    const newBurst = Array.from({ length: burst.count }, () => {
      const h = createHeart();
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 120;
      return {
        id: heartIdCounter++,
        x: burst.x + Math.cos(angle) * dist,
        y: burst.y + Math.sin(angle) * dist,
        heart: h,
      };
    });
    setBurstHearts((prev) => [...prev, ...newBurst]);
    const timeout = setTimeout(() => {
      setBurstHearts((prev) => prev.filter((b) => !newBurst.find((nb) => nb.id === b.id)));
    }, 2000);
    return () => clearTimeout(timeout);
  }, [burst, reducedMotion]);

  // Full-screen shower
  useEffect(() => {
    if (!shower) return;
    if (reducedMotion) return;
    const newShower = Array.from({ length: shower.count }, () => {
      const h = createHeart();
      (h as any)._start = Date.now() / 1000;
      h.delay = Math.random() * 2;
      return h;
    });
    setShowerHearts((prev) => [...prev, ...newShower]);
    const timeout = setTimeout(() => {
      setShowerHearts((prev) => prev.filter((h) => !newShower.includes(h)));
    }, 12000);
    return () => clearTimeout(timeout);
  }, [shower, reducedMotion]);

  const triggerShower = useCallback(() => {
    setShowerHearts((prev) => [
      ...prev,
      ...Array.from({ length: 40 }, () => {
        const h = createHeart();
        h.delay = Math.random() * 2;
        return h;
      }),
    ]);
  }, []);

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
        {hearts.slice(0, 5).map((h) => (
          <div
            key={h.id}
            className="absolute opacity-20"
            style={{ left: `${h.left}%`, top: `${20 + Math.random() * 60}%` }}
          >
            <HeartSVG size={h.size} color={h.color} rotation={0} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Continuous falling hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.left}%`,
            top: '-5%',
            animation: `fallHearts ${h.duration}s linear ${h.delay}s infinite`,
            ['--drift' as any]: `${h.drift}px`,
            ['--rot' as any]: `${h.rotation}deg`,
          }}
        >
          {h.type === 'sparkle' ? (
            <SparkleSVG size={h.size * 0.7} color={h.color} rotation={h.rotation} />
          ) : (
            <HeartSVG size={h.size} color={h.color} rotation={0} />
          )}
        </div>
      ))}

      {/* Burst hearts */}
      {burstHearts.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: b.x,
            top: b.y,
            animation: `heartBurst 1.2s ease-out forwards`,
            ['--rot' as any]: `${b.heart.rotation}deg`,
          }}
        >
          <HeartSVG size={b.heart.size} color={b.heart.color} rotation={0} />
        </div>
      ))}

      {/* Shower hearts */}
      {showerHearts.map((h) => (
        <div
          key={`sh-${h.id}`}
          className="absolute"
          style={{
            left: `${h.left}%`,
            top: '-5%',
            animation: `fallHearts ${h.duration}s linear ${h.delay}s forwards`,
            ['--drift' as any]: `${h.drift}px`,
            ['--rot' as any]: `${h.rotation}deg`,
          }}
        >
          {h.type === 'sparkle' ? (
            <SparkleSVG size={h.size * 0.7} color={h.color} rotation={h.rotation} />
          ) : (
            <HeartSVG size={h.size} color={h.color} rotation={0} />
          )}
        </div>
      ))}
    </div>
  );
}

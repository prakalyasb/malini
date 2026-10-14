import { useEffect, useState } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks';

type NavProps = {
  sections: { id: string; label: string }[];
  onReplay: () => void;
  onHeartBurst: () => void;
};

export default function Navigation({ sections, onHeartBurst }: NavProps) {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState('');
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowTop(window.scrollY > 400);
      // Find active section
      let current = '';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = s.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-cream-200">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(to right, #d63957, #e87aa0)',
          }}
        />
      </div>

      {/* Floating heart button */}
      <button
        onClick={onHeartBurst}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Send hearts"
        title="Send some love ♡"
      >
        <Heart size={22} fill="#d63957" color="#d63957" className="animate-pulse-soft" />
      </button>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-6 z-40 w-10 h-10 rounded-full bg-brown-600 text-cream-50 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Section nav dots - desktop */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-2 justify-end"
            aria-label={s.label}
          >
            <span className={`text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
              activeSection === s.id ? 'text-burgundy-600 font-semibold opacity-100' : 'text-brown-500'
            }`}>
              {s.label}
            </span>
            <span
              className={`progress-dot block rounded-full transition-all ${
                activeSection === s.id
                  ? 'w-3 h-3 bg-heart-red'
                  : 'w-2 h-2 bg-brown-300 opacity-50'
              }`}
              style={{ background: activeSection === s.id ? '#d63957' : undefined }}
            />
          </button>
        ))}
      </nav>
    </>
  );
}

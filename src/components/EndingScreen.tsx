import { useState, useEffect } from 'react';
import { Heart, Sparkles, RotateCcw, BookOpen } from 'lucide-react';

type EndingScreenProps = {
  heading: string;
  subheading: string;
  paragraph: string;
  onReadAgain: () => void;
  onReplay: () => void;
};

export default function EndingScreen({ heading, subheading, paragraph, onReadAgain, onReplay }: EndingScreenProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    const el = document.getElementById('ending-screen');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const decorIcons = [
    { icon: '🎂', top: '10%', left: '15%', delay: '0s' },
    { icon: '♡', top: '20%', left: '80%', delay: '0.3s' },
    { icon: '✨', top: '35%', left: '10%', delay: '0.6s' },
    { icon: '🎉', top: '60%', left: '85%', delay: '0.2s' },
    { icon: '♡', top: '75%', left: '20%', delay: '0.5s' },
    { icon: '🎀', top: '85%', left: '70%', delay: '0.8s' },
    { icon: '⭐', top: '45%', left: '90%', delay: '0.1s' },
    { icon: '♡', top: '15%', left: '50%', delay: '0.4s' },
  ];

  return (
    <div
      id="ending-screen"
      className={`relative burgundy-bg min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden transition-all duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Decorative floating icons */}
      {decorIcons.map((d, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: d.top,
            left: d.left,
            fontSize: '2rem',
            animationDelay: d.delay,
            opacity: 0.4,
            color: '#e87aa0',
          }}
        >
          {d.icon}
        </div>
      ))}

      {/* Sparkles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`sp-${i}`}
          className="absolute animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <Sparkles size={14} color="#e87aa0" />
        </div>
      ))}

      <div className="relative z-10 text-center max-w-2xl">
        {/* Decorative graphic */}
        <div className="mb-8 flex justify-center">
          <div className="text-6xl animate-float">🎂</div>
        </div>

        <h1
          className="text-4xl md:text-6xl mb-4"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#fdf2f4' }}
        >
          {heading}
        </h1>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 bg-burgundy-300 opacity-50" />
          <Heart size={16} fill="#e87aa0" color="#e87aa0" />
          <div className="h-px w-16 bg-burgundy-300 opacity-50" />
        </div>

        <h2
          className="text-2xl md:text-4xl mb-6"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#e87aa0' }}
        >
          {subheading}
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ fontFamily: "'Lora', serif", color: '#f9e0e6' }}
        >
          {paragraph}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onReadAgain} className="btn-cute text-base" style={{ background: '#e87aa0', color: '#4a0e2a' }}>
            <BookOpen size={18} />
            Read My Wishes Again ♡
          </button>
          <button onClick={onReplay} className="btn-cute text-base" style={{ background: 'transparent', color: '#e87aa0', border: '2px solid #e87aa0' }}>
            <RotateCcw size={18} />
            Replay the Magic
          </button>
        </div>

        {/* Bottom hearts */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              size={12}
              fill="#e87aa0"
              color="#e87aa0"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` } as any}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

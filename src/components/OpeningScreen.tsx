import { useState, useEffect } from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';

type OpeningScreenProps = {
  bestFriendName: string;
  onOpen: () => void;
};

export default function OpeningScreen({ bestFriendName, onOpen }: OpeningScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowButton(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setExiting(true);
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  const decorIcons = [
    { icon: '🎂', top: '8%', left: '12%', delay: '0s', size: '2rem' },
    { icon: '🎁', top: '15%', left: '80%', delay: '0.3s', size: '1.8rem' },
    { icon: '✨', top: '25%', left: '20%', delay: '0.6s', size: '1.5rem' },
    { icon: '♡', top: '60%', left: '10%', delay: '0.2s', size: '2.5rem' },
    { icon: '🎉', top: '70%', left: '85%', delay: '0.5s', size: '2rem' },
    { icon: '⭐', top: '40%', left: '88%', delay: '0.8s', size: '1.5rem' },
    { icon: '🎀', top: '80%', left: '15%', delay: '0.1s', size: '1.8rem' },
    { icon: '♡', top: '20%', left: '50%', delay: '0.4s', size: '1.8rem' },
    { icon: '🌸', top: '85%', left: '75%', delay: '0.7s', size: '1.6rem' },
    { icon: '✨', top: '50%', left: '5%', delay: '0.9s', size: '1.3rem' },
    { icon: '♡', top: '35%', left: '70%', delay: '0.15s', size: '2rem' },
    { icon: '🎈', top: '10%', left: '35%', delay: '0.55s', size: '2.2rem' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 burgundy-bg flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${
        exiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Curtain effect */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 burgundy-bg transition-transform duration-[2000ms] ease-in-out ${
          exiting ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{ zIndex: exiting ? 60 : 10, boxShadow: '4px 0 20px rgba(0,0,0,0.3)' }}
      >
        <div className="absolute right-0 top-0 h-full w-2 bg-burgundy-600 opacity-40" />
      </div>
      <div
        className={`absolute top-0 right-0 h-full w-1/2 burgundy-bg transition-transform duration-[2000ms] ease-in-out ${
          exiting ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{ zIndex: exiting ? 60 : 10, boxShadow: '-4px 0 20px rgba(0,0,0,0.3)' }}
      >
        <div className="absolute left-0 top-0 h-full w-2 bg-burgundy-600 opacity-40" />
      </div>

      {/* Decorative floating icons */}
      {decorIcons.map((d, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: d.top,
            left: d.left,
            fontSize: d.size,
            animationDelay: d.delay,
            opacity: 0.5,
            color: '#e87aa0',
          }}
        >
          {d.icon}
        </div>
      ))}

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sp-${i}`}
          className="absolute animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <Sparkles size={16 + Math.random() * 8} color="#e87aa0" />
        </div>
      ))}

      {/* Content */}
      <div className={`relative z-40 text-center px-6 transition-all duration-1000 ${exiting ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
        {/* Decorative illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-6xl mb-2 animate-float">🎂</div>
            <div className="flex gap-2 justify-center text-2xl">
              <span className="animate-float" style={{ animationDelay: '0.2s' }}>🎁</span>
              <span className="animate-float" style={{ animationDelay: '0.4s' }}>🎀</span>
              <span className="animate-float" style={{ animationDelay: '0.6s' }}>🌸</span>
            </div>
          </div>
        </div>

        <p
          className="text-2xl md:text-3xl mb-3"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#e87aa0' }}
        >
          A Little Surprise for You ♡
        </p>

        <h1
          className="text-4xl md:text-6xl mb-2"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#fdf2f4' }}
        >
          Welcome, {bestFriendName}!
        </h1>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 bg-burgundy-300 opacity-50" />
          <Heart size={16} fill="#e87aa0" color="#e87aa0" />
          <div className="h-px w-16 bg-burgundy-300 opacity-50" />
        </div>

        <p className="text-burgundy-100 text-sm md:text-base mb-10 max-w-md mx-auto" style={{ fontFamily: "'Lora', serif" }}>
          Someone who loves you very much has prepared a magical birthday gift, just for you. Are you ready?
        </p>

        {showButton && (
          <button
            onClick={handleOpen}
            className="btn-cute btn-burgundy text-lg animate-pulse-soft"
            style={{ background: '#e87aa0', color: '#4a0e2a' }}
          >
            <Mail size={20} />
            Open Your Surprise 💌
          </button>
        )}
      </div>

      {/* Pixel hearts at bottom */}
      <div className="absolute bottom-6 flex gap-2 z-40">
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            size={12}
            fill="#e87aa0"
            color="#e87aa0"
            className="animate-pulse-soft"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}

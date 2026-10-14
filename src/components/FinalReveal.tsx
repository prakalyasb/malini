import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useReveal, useCountdown } from '@/hooks';
import { HeartDivider } from './Section';

type FinalRevealProps = {
  heading: string;
  paragraphs: string[];
  birthday: Date;
  bestFriendName: string;
  onShower: () => void;
};

export default function FinalReveal({ heading, paragraphs, birthday, bestFriendName, onShower }: FinalRevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { isBirthday } = useCountdown(birthday);
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    if (visible) {
      onShower();
      const newPetals = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 5 + Math.random() * 5,
      }));
      setPetals(newPetals);
    }
  }, [visible, onShower]);

  return (
    <div
      ref={ref}
      id="final-reveal"
      className={`relative py-20 md:py-32 px-4 md:px-8 paper-texture overflow-hidden reveal ${visible ? 'is-visible' : ''}`}
    >
      {/* Falling petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            animation: `fallHearts ${p.duration}s linear ${p.delay}s infinite`,
            ['--drift' as any]: `${(Math.random() - 0.5) * 80}px`,
            ['--rot' as any]: `${Math.random() * 360}deg`,
          }}
        >
          <div className="text-2xl opacity-40">🌸</div>
        </div>
      ))}

      {/* Sparkles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`sp-${i}`}
          className="absolute animate-sparkle pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <Sparkles size={14 + Math.random() * 10} color="#d63957" className="opacity-40" />
        </div>
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Floating photos placeholder */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="polaroid w-20 h-20 md:w-28 md:h-28 animate-float"
              style={{ animationDelay: `${i * 0.5}s`, transform: `rotate(${(i - 1) * 8}deg)` }}
            >
              <div className="w-full h-full bg-cream-200 rounded-sm flex items-center justify-center text-2xl">
                ♡
              </div>
            </div>
          ))}
        </div>

        <div className="text-4xl mb-4 animate-float">🎂✨🎂</div>

        <h2 className="heading-cursive text-4xl md:text-6xl lg:text-7xl mb-6 text-brown-600">
          {heading}
        </h2>

        <HeartDivider />

        <div className="space-y-5 max-w-2xl mx-auto">
          {paragraphs.map((para, i) => (
            <p key={i} className="body-text text-base md:text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {isBirthday && (
          <div className="mt-8 paper-card p-6 animate-pulse-soft">
            <p className="heading-cursive text-3xl text-burgundy-600">
              Today is your day, {bestFriendName}! The whole world is celebrating you! 🎉
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              size={20}
              fill="#d63957"
              color="#d63957"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` } as any}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

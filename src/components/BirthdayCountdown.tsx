import { useState, useEffect, useCallback } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import Section, { HeartDivider } from './Section';
import { useCountdown } from '@/hooks';

type CountdownProps = {
  birthday: Date;
  bestFriendName: string;
  onBurst: (x: number, y: number) => void;
  onShower: () => void;
};

export default function BirthdayCountdown({ birthday, bestFriendName, onBurst, onShower }: CountdownProps) {
  const { timeLeft, isBirthday } = useCountdown(birthday);
  const [candlesOut, setCandlesOut] = useState(false);
  const [wished, setWished] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; left: number; delay: number; color: string }[]>([]);

  const makeWish = useCallback((e: React.MouseEvent) => {
    setCandlesOut(true);
    setWished(true);
    onBurst(e.clientX, e.clientY);
    onShower();

    // Confetti
    const colors = ['#d63957', '#e87aa0', '#f0c674', '#a8d8b9', '#7eb0d5', '#c7b8ea'];
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 5000);
  }, [onBurst, onShower]);

  const blowCandles = useCallback(() => {
    setCandlesOut(true);
    setWished(true);
    onShower();
    const colors = ['#d63957', '#e87aa0', '#f0c674', '#a8d8b9', '#7eb0d5', '#c7b8ea'];
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 5000);
  }, [onShower]);

  // Reset candles after a while
  useEffect(() => {
    if (candlesOut) {
      const t = setTimeout(() => {
        setCandlesOut(false);
        setWished(false);
      }, 8000);
      return () => clearTimeout(t);
    }
  }, [candlesOut]);

  const units = [
    { label: 'Day', value: timeLeft.days },
    { label: 'Hou', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <Section id="countdown" bg="cream">
      {/* Confetti overlay */}
      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute w-3 h-3"
              style={{
                left: `${c.left}%`,
                top: '-20px',
                background: c.color,
                animation: `confettiFall ${3 + Math.random() * 2}s linear ${c.delay}s forwards`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center mb-8">
        <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
          The World Is Getting Ready to Celebrate You!
        </h2>
        <HeartDivider />
      </div>

      {isBirthday ? (
        <div className="text-center paper-card p-8 md:p-12 mb-8">
          <div className="text-5xl mb-4 animate-float">🎉🎂🎉</div>
          <h3 className="heading-cursive text-4xl text-burgundy-600 mb-4">
            It's Your Birthday, {bestFriendName}!
          </h3>
          <p className="body-text text-lg text-brown-500">
            Today is all about you. The world is celebrating the incredible human that you are.
            Happy Birthday, my love! ♡
          </p>
        </div>
      ) : (
        <div className="paper-card p-6 md:p-10 mb-8">
          <p className="heading-script text-xl text-center text-brown-500 mb-6">
            Counting down to {bestFriendName}'s special day ♡
          </p>
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {units.map((u) => (
              <div key={u.label} className="text-center">
                <div className="bg-cream-100 rounded-xl py-4 md:py-6 shadow-inner border border-cream-300">
                  <p className="text-3xl md:text-5xl font-bold text-brown-600 tabular-nums" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                    {String(u.value).padStart(2, '0')}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-brown-400 mt-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {u.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cake */}
      <div className="paper-card p-8 md:p-12">
        <div className="text-center">
          {/* Cake illustration */}
          <div className="relative flex justify-center items-end mb-6">
            {/* Candles */}
            <div className="absolute -top-2 flex gap-3 z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Flame */}
                  <div
                    className={`candle-flame ${candlesOut ? 'out' : ''}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div
                      className="w-3 h-5 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 50% 70%, #fff5cc, #ff9933 50%, #ff5500)',
                        boxShadow: '0 0 8px #ff9933, 0 0 16px #ff5500',
                      }}
                    />
                  </div>
                  {/* Wick + candle body */}
                  <div className="w-0.5 h-1 bg-brown-600" />
                  <div
                    className="w-2 h-8 rounded-sm"
                    style={{
                      background: ['#e87aa0', '#a8d8b9', '#f0c674', '#7eb0d5', '#c7b8ea'][i],
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Cake body */}
            <svg width="220" height="140" viewBox="0 0 220 140" className="mt-12">
              {/* Bottom layer */}
              <rect x="20" y="70" width="180" height="60" rx="6" fill="#f5d5c8" />
              <rect x="20" y="70" width="180" height="10" fill="#e8c4b5" />
              {/* Frosting drips */}
              <path d="M20,80 Q30,95 40,80 Q50,95 60,80 Q70,95 80,80 Q90,95 100,80 Q110,95 120,80 Q130,95 140,80 Q150,95 160,80 Q170,95 180,80 Q190,95 200,80 L200,70 L20,70 Z" fill="#fff5ee" />
              {/* Top layer */}
              <rect x="50" y="40" width="120" height="35" rx="5" fill="#f0c0b0" />
              <path d="M50,50 Q60,62 70,50 Q80,62 90,50 Q100,62 110,50 Q120,62 130,50 Q140,62 150,50 Q160,62 170,50 L170,40 L50,40 Z" fill="#fff5ee" />
              {/* Decorations */}
              <circle cx="40" cy="95" r="3" fill="#d63957" />
              <circle cx="70" cy="100" r="3" fill="#e87aa0" />
              <circle cx="110" cy="95" r="3" fill="#d63957" />
              <circle cx="150" cy="100" r="3" fill="#e87aa0" />
              <circle cx="180" cy="95" r="3" fill="#d63957" />
              <circle cx="75" cy="60" r="2" fill="#d63957" />
              <circle cx="110" cy="58" r="2" fill="#e87aa0" />
              <circle cx="145" cy="60" r="2" fill="#d63957" />
            </svg>
          </div>

          {!wished ? (
            <>
              <button onClick={makeWish} className="btn-cute btn-burgundy text-lg mb-3">
                <Sparkles size={18} />
                Make a Wish, Birthday Star ♡
              </button>
              <div>
                <button onClick={blowCandles} className="btn-cute btn-cream text-sm">
                  <Heart size={16} color="#6b4423" />
                  Blow Out the Candles
                </button>
              </div>
            </>
          ) : (
            <div className="animate-pulse-soft">
              <p className="heading-cursive text-3xl text-brown-600 mb-3">
                Your wish has been made! ♡
              </p>
              <p className="body-text text-base text-brown-500 max-w-md mx-auto">
                Close your eyes and believe, {bestFriendName}. Every wish you make
                is already on its way to coming true. Happy almost-birthday!
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

import { useState } from 'react';
import { Heart } from 'lucide-react';
import Section, { HeartDivider } from './Section';

type ReasonsProps = {
  reasons: string[];
};

export default function ReasonsWhyFavourite({ reasons }: ReasonsProps) {
  const [expanded, setExpanded] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  // Generate extra reasons to reach 100 if expanded
  const baseReasons = reasons;
  const extraReasons: string[] = expanded
    ? Array.from({ length: 100 - baseReasons.length }, (_, i) =>
        `Because you make the world better just by being in it — reason #${baseReasons.length + i + 1}.`
      )
    : [];

  const allReasons = [...baseReasons, ...extraReasons];

  const toggleCard = (i: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <Section id="reasons" bg="cream-dark">
      <div className="text-center mb-10">
        <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
          A Few Reasons Why You're My Favourite Human ♡
        </h2>
        <p className="heading-script text-lg text-brown-400">
          Click each card to reveal a reason
        </p>
        <HeartDivider />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allReasons.map((reason, i) => {
          const isFlipped = flippedCards.has(i);
          return (
            <button
              key={i}
              onClick={() => toggleCard(i)}
              className="paper-card p-5 min-h-[100px] flex items-center justify-center text-center transition-all hover:scale-105"
              aria-label={`Reason ${i + 1}`}
            >
              {isFlipped ? (
                <p className="body-text text-sm leading-relaxed">{reason}</p>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <Heart size={20} fill="#d63957" color="#d63957" className="animate-pulse-soft" />
                  <p className="heading-script text-base text-brown-500">
                    Reason #{i + 1}
                  </p>
                  <p className="text-xs text-brown-400">Click to reveal ♡</p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {!expanded && (
        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded(true)}
            className="btn-cute btn-cream text-base"
          >
            Show Me 100 Reasons ♡
          </button>
        </div>
      )}

      {expanded && (
        <div className="text-center mt-8">
          <p className="heading-script text-lg text-brown-500">
            And a thousand more that words can't hold… ♡
          </p>
        </div>
      )}
    </Section>
  );
}

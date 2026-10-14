import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import Section, { HeartDivider } from './Section';
import type { HeartCard } from '@/config';

type SurprisesProps = {
  heartCards: HeartCard[];
  wishJarMessages: string[];
  secretLetter: { title: string; paragraphs: string[] };
  onHeartShower: () => void;
  onBurst: (x: number, y: number) => void;
};

export default function Surprises({
  heartCards,
  wishJarMessages,
  secretLetter,
  onHeartShower,
  onBurst,
}: SurprisesProps) {
  return (
    <Section id="surprises" bg="cream">
      <div className="text-center mb-10">
        <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
          Cute Little Surprises ♡
        </h2>
        <p className="heading-script text-lg text-brown-400">
          Click everything — every button has magic inside
        </p>
        <HeartDivider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <GiftBox onBurst={onBurst} />
        <VirtualHug onBurst={onBurst} />
        <WishJar messages={wishJarMessages} onBurst={onBurst} />
        <MillionHeartsButton onShower={onHeartShower} />
        <HappinessButton onBurst={onBurst} />
        <SecretLetter secretLetter={secretLetter} />
      </div>

      {/* Heart cards */}
      <div className="mt-12">
        <h3 className="heading-cursive text-2xl md:text-3xl text-center mb-6">
          Heart Cards — Click Each One ♡
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {heartCards.map((card, i) => (
            <HeartCardItem key={i} card={card} onBurst={onBurst} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function GiftBox({ onBurst }: { onBurst: (x: number, y: number) => void }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    if (!open) {
      setOpen(true);
      setMessage(true);
      onBurst(e.clientX, e.clientY);
    } else {
      setOpen(false);
      setMessage(false);
    }
  };

  return (
    <div className="paper-card p-6 flex flex-col items-center justify-center min-h-[200px]">
      <button onClick={handleOpen} className="relative group" aria-label="Open gift box">
        <div className="text-6xl transition-transform group-hover:scale-110">
          {open ? '🎁✨' : '🎁'}
        </div>
        {open && (
          <div className="absolute -top-2 -right-2 text-3xl animate-pulse-soft">♡</div>
        )}
      </button>
      {message && (
        <p className="heading-script text-lg text-brown-500 mt-4 text-center animate-pulse-soft">
          Surprise! You just opened a gift full of love! ♡
        </p>
      )}
      {!message && (
        <p className="heading-script text-base text-brown-400 mt-4 text-center">
          Click to open your gift!
        </p>
      )}
    </div>
  );
}

function VirtualHug({ onBurst }: { onBurst: (x: number, y: number) => void }) {
  const [hugging, setHugging] = useState(false);

  const handleHug = (e: React.MouseEvent) => {
    setHugging(true);
    onBurst(e.clientX, e.clientY);
    setTimeout(() => setHugging(false), 3000);
  };

  return (
    <div className="paper-card p-6 flex flex-col items-center justify-center min-h-[200px]">
      <button onClick={handleHug} className="text-6xl transition-transform hover:scale-110" aria-label="Send a virtual hug">
        {hugging ? '🤗' : '🫂'}
      </button>
      {hugging ? (
        <p className="heading-script text-lg text-brown-500 mt-4 text-center animate-pulse-soft">
          Sending you the biggest, warmest hug! ♡
        </p>
      ) : (
        <p className="heading-script text-base text-brown-400 mt-4 text-center">
          Need a hug? Click here ♡
        </p>
      )}
    </div>
  );
}

function WishJar({ messages, onBurst }: { messages: string[]; onBurst: (x: number, y: number) => void }) {
  const [wish, setWish] = useState<string | null>(null);

  const handleWish = (e: React.MouseEvent) => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setWish(random);
    onBurst(e.clientX, e.clientY);
  };

  return (
    <div className="paper-card p-6 flex flex-col items-center justify-center min-h-[200px]">
      <button onClick={handleWish} className="text-6xl transition-transform hover:scale-110" aria-label="Get a wish from the jar">
        🫙
      </button>
      {wish ? (
        <p className="heading-script text-base text-brown-500 mt-4 text-center px-2">
          {wish}
        </p>
      ) : (
        <p className="heading-script text-base text-brown-400 mt-4 text-center">
          Wish Jar — click for a loving message ♡
        </p>
      )}
    </div>
  );
}

function MillionHeartsButton({ onShower }: { onShower: () => void }) {
  return (
    <div className="paper-card p-6 flex flex-col items-center justify-center min-h-[200px]">
      <button
        onClick={onShower}
        className="btn-cute btn-burgundy text-base"
        aria-label="Send a million hearts"
      >
        <Heart size={18} fill="#fdf2f4" color="#fdf2f4" />
        Send You a Million Hearts ♡
      </button>
      <p className="heading-script text-sm text-brown-400 mt-4 text-center">
        Click for a shower of love!
      </p>
    </div>
  );
}

function HappinessButton({ onBurst }: { onBurst: (x: number, y: number) => void }) {
  const [messages, setMessages] = useState<string | null>(null);
  const happyMessages = [
    "You are the reason someone smiles today! ♡",
    "The world is brighter because you're in it! ✨",
    "You deserve all the happiness in the universe! 🌟",
    "Your smile could power a city! 💫",
    "You are loved more than words can say! 🤍",
  ];

  const handleClick = (e: React.MouseEvent) => {
    setMessages(happyMessages[Math.floor(Math.random() * happyMessages.length)]);
    onBurst(e.clientX, e.clientY);
  };

  return (
    <div className="paper-card p-6 flex flex-col items-center justify-center min-h-[200px]">
      <button onClick={handleClick} className="btn-cute btn-cream text-base" aria-label="Click for a little happiness">
        <Sparkles size={18} color="#6b4423" />
        Click for a Little Happiness ♡
      </button>
      {messages && (
        <p className="heading-script text-base text-brown-500 mt-4 text-center px-2">
          {messages}
        </p>
      )}
    </div>
  );
}

function SecretLetter({ secretLetter }: { secretLetter: { title: string; paragraphs: string[] } }) {
  const [found, setFound] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="paper-card p-6 flex flex-col items-center justify-center min-h-[200px] relative">
      {!found ? (
        <>
          <p className="heading-script text-base text-brown-400 text-center mb-4">
            Psst… can you find the hidden secret?
          </p>
          <button
            onClick={() => { setFound(true); setShowLetter(true); }}
            className="text-2xl hover:scale-125 transition-transform animate-pulse-soft"
            aria-label="Hidden secret — click the tiny heart"
            title="Click me… ♡"
          >
            <Heart size={16} fill="#d63957" color="#d63957" className="opacity-60" />
          </button>
        </>
      ) : (
        <>
          <p className="heading-script text-lg text-brown-500 text-center mb-2">
            You found the secret letter! ♡
          </p>
          <button
            onClick={() => setShowLetter(!showLetter)}
            className="btn-cute btn-cream text-sm"
          >
            {showLetter ? 'Close' : 'Read It'}
          </button>
        </>
      )}

      {showLetter && found && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowLetter(false)}>
          <div className="paper-card p-8 md:p-12 max-w-2xl max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="heading-cursive text-3xl text-brown-600 text-center mb-4">
              {secretLetter.title}
            </h3>
            <HeartDivider />
            <div className="space-y-4">
              {secretLetter.paragraphs.map((p, i) => (
                <p key={i} className="body-text text-base md:text-lg">{p}</p>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="heading-script text-xl text-brown-500">Forever your bestie ♡</p>
            </div>
            <div className="text-center mt-4">
              <button onClick={() => setShowLetter(false)} className="btn-cute btn-brown text-sm">
                Close ♡
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HeartCardItem({ card, onBurst }: { card: HeartCard; onBurst: (x: number, y: number) => void }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setFlipped(!flipped);
    if (!flipped) onBurst(e.clientX, e.clientY);
  };

  return (
    <button
      onClick={handleClick}
      className="paper-card p-4 min-h-[120px] flex flex-col items-center justify-center text-center transition-all hover:scale-105"
      aria-label={card.title}
    >
      <div className="text-2xl mb-1">{card.emoji}</div>
      {flipped ? (
        <p className="body-text text-xs md:text-sm leading-snug">{card.message}</p>
      ) : (
        <p className="heading-script text-sm text-brown-500">{card.title}</p>
      )}
    </button>
  );
}

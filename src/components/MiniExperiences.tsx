import { useState, useCallback } from 'react';
import { Star, Heart, Check, X, Cookie, ChevronDown } from 'lucide-react';
import Section, { HeartDivider } from './Section';
import type { QuizQuestion, StarMemory } from '@/config';

type MiniExperiencesProps = {
  quizQuestions: QuizQuestion[];
  fortuneMessages: string[];
  starMemories: StarMemory[];
  scratchMessage: { title: string; message: string };
  oneMoreThing: { title: string; message: string };
  bestFriendName: string;
  onBurst: (x: number, y: number) => void;
  onShower: () => void;
};

export default function MiniExperiences({
  quizQuestions,
  fortuneMessages,
  starMemories,
  scratchMessage,
  oneMoreThing,
  bestFriendName,
  onBurst,
  onShower,
}: MiniExperiencesProps) {
  return (
    <Section id="mini-experiences" bg="cream-dark">
      <div className="text-center mb-10">
        <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
          Cute Mini Experiences ♡
        </h2>
        <p className="heading-script text-lg text-brown-400">
          Little games and surprises just for you
        </p>
        <HeartDivider />
      </div>

      <div className="space-y-8">
        <FriendshipQuiz questions={quizQuestions} bestFriendName={bestFriendName} onBurst={onBurst} />
        <FortuneCookie messages={fortuneMessages} onBurst={onBurst} />
        <OneMoreThing oneMoreThing={oneMoreThing} onBurst={onBurst} />
        <StarMemories starMemories={starMemories} onBurst={onBurst} />
        <ScratchReveal scratchMessage={scratchMessage} onBurst={onBurst} />
        <FlyHeartsButton onShower={onShower} onBurst={onBurst} />
      </div>
    </Section>
  );
}

function FriendshipQuiz({ questions, bestFriendName, onBurst }: { questions: QuizQuestion[]; bestFriendName: string; onBurst: (x: number, y: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (i: number, e: React.MouseEvent) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === questions[current].answer) {
      setScore(score + 1);
      onBurst(e.clientX, e.clientY);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="paper-card p-8 text-center">
        <div className="text-4xl mb-4">🎯</div>
        <h3 className="heading-cursive text-3xl text-brown-600 mb-4">
          Quiz Complete!
        </h3>
        <p className="body-text text-lg text-brown-500 mb-2">
          You got {score} out of {questions.length} right!
        </p>
        <p className="heading-script text-xl text-brown-500 mb-4">
          Every answer was about love, {bestFriendName} ♡
        </p>
        <button onClick={handleRestart} className="btn-cute btn-cream text-sm">
          Play Again ♡
        </button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="paper-card p-6 md:p-8">
      <h3 className="heading-cursive text-2xl md:text-3xl text-center text-brown-600 mb-2">
        Friendship Quiz ♡
      </h3>
      <p className="text-center text-sm text-brown-400 mb-6">
        Question {current + 1} of {questions.length}
      </p>
      <p className="body-text text-lg text-center mb-6">
        {q.question}
      </p>
      <div className="grid gap-3">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.answer;
          const isSelected = i === selected;
          return (
            <button
              key={i}
              onClick={(e) => handleSelect(i, e)}
              disabled={answered}
              className={`flex items-center justify-between px-5 py-3 rounded-xl border transition-all text-left ${
                answered
                  ? isCorrect
                    ? 'bg-green-100 border-green-300'
                    : isSelected
                      ? 'bg-red-100 border-red-300'
                      : 'bg-cream-100 border-cream-300 opacity-60'
                  : 'bg-cream-100 border-cream-300 hover:bg-cream-200 hover:border-brown-300'
              }`}
            >
              <span className="body-text text-sm md:text-base">{opt}</span>
              {answered && isCorrect && <Check size={18} color="#2d7a4a" />}
              {answered && isSelected && !isCorrect && <X size={18} color="#a33030" />}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-4 text-center">
          <p className="body-text text-sm text-brown-500 mb-3 italic">
            {q.explanation}
          </p>
          <button onClick={handleNext} className="btn-cute btn-brown text-sm">
            {current < questions.length - 1 ? 'Next Question ♡' : 'See Results ♡'}
          </button>
        </div>
      )}
    </div>
  );
}

function FortuneCookie({ messages, onBurst }: { messages: string[]; onBurst: (x: number, y: number) => void }) {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpen = (e: React.MouseEvent) => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setOpened(true);
    onBurst(e.clientX, e.clientY);
  };

  const handleReset = () => {
    setOpened(false);
    setMessage('');
  };

  return (
    <div className="paper-card p-6 md:p-8 text-center">
      <h3 className="heading-cursive text-2xl md:text-3xl text-brown-600 mb-4">
        Fortune Cookie ♡
      </h3>
      {!opened ? (
        <>
          <button onClick={handleOpen} className="text-6xl hover:scale-110 transition-transform" aria-label="Open fortune cookie">
            🥠
          </button>
          <p className="heading-script text-base text-brown-400 mt-4">
            Crack it open for a sweet message ♡
          </p>
        </>
      ) : (
        <>
          <div className="text-4xl mb-4">✨</div>
          <p className="body-text text-lg text-brown-500 mb-4 italic">
            "{message}"
          </p>
          <button onClick={handleReset} className="btn-cute btn-cream text-sm">
            <Cookie size={16} color="#6b4423" />
            Open Another ♡
          </button>
        </>
      )}
    </div>
  );
}

function OneMoreThing({ oneMoreThing, onBurst }: { oneMoreThing: { title: string; message: string }; onBurst: (x: number, y: number) => void }) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = (e: React.MouseEvent) => {
    setRevealed(true);
    onBurst(e.clientX, e.clientY);
  };

  return (
    <div className="paper-card p-6 md:p-8 text-center">
      <h3 className="heading-cursive text-2xl md:text-3xl text-brown-600 mb-4">
        {oneMoreThing.title}
      </h3>
      {!revealed ? (
        <>
          <p className="heading-script text-base text-brown-400 mb-4">
            There's something else I need to tell you…
          </p>
          <button onClick={handleReveal} className="btn-cute btn-burgundy text-base">
            <Heart size={18} fill="#fdf2f4" color="#fdf2f4" />
            Reveal It ♡
          </button>
        </>
      ) : (
        <p className="body-text text-base md:text-lg text-brown-500 animate-pulse-soft">
          {oneMoreThing.message}
        </p>
      )}
    </div>
  );
}

function StarMemories({ starMemories, onBurst }: { starMemories: StarMemory[]; onBurst: (x: number, y: number) => void }) {
  const [activeStar, setActiveStar] = useState<number | null>(null);

  const handleClick = (i: number, e: React.MouseEvent) => {
    setActiveStar(activeStar === i ? null : i);
    onBurst(e.clientX, e.clientY);
  };

  return (
    <div className="paper-card p-6 md:p-8 text-center">
      <h3 className="heading-cursive text-2xl md:text-3xl text-brown-600 mb-2">
        Click the Stars for Memories ♡
      </h3>
      <p className="heading-script text-base text-brown-400 mb-6">
        Each star holds a little memory
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {starMemories.map((sm, i) => (
          <button
            key={i}
            onClick={(e) => handleClick(i, e)}
            className="transition-transform hover:scale-125"
            aria-label={sm.title}
          >
            <Star
              size={32}
              fill={activeStar === i ? '#f0c674' : '#c9a87c'}
              color={activeStar === i ? '#f0c674' : '#c9a87c'}
              className="animate-pulse-soft"
            />
          </button>
        ))}
      </div>
      {activeStar !== null && (
        <div className="mt-4 animate-pulse-soft">
          <p className="heading-script text-lg text-brown-600 mb-2">
            {starMemories[activeStar].title}
          </p>
          <p className="body-text text-sm md:text-base text-brown-500">
            {starMemories[activeStar].message}
          </p>
        </div>
      )}
    </div>
  );
}

function ScratchReveal({ scratchMessage, onBurst }: { scratchMessage: { title: string; message: string }; onBurst: (x: number, y: number) => void }) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = (e: React.MouseEvent) => {
    setRevealed(true);
    onBurst(e.clientX, e.clientY);
  };

  const handleReset = () => setRevealed(false);

  return (
    <div className="paper-card p-6 md:p-8 text-center relative overflow-hidden">
      <h3 className="heading-cursive text-2xl md:text-3xl text-brown-600 mb-4">
        {scratchMessage.title}
      </h3>
      <div className="relative min-h-[120px] flex items-center justify-center">
        {revealed ? (
          <p className="body-text text-base md:text-lg text-brown-500 px-4">
            {scratchMessage.message}
          </p>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer scratch-overlay"
            style={{
              background: 'linear-gradient(135deg, #c9a87c, #a6795a, #c9a87c)',
              borderRadius: '8px',
            }}
            onClick={handleReveal}
          >
            <p className="text-cream-100 heading-script text-lg">
              Click to reveal your surprise ♡
            </p>
          </div>
        )}
      </div>
      {revealed && (
        <button onClick={handleReset} className="btn-cute btn-cream text-sm mt-4">
          Cover It Again ♡
        </button>
      )}
    </div>
  );
}

function FlyHeartsButton({ onShower, onBurst }: { onShower: () => void; onBurst: (x: number, y: number) => void }) {
  return (
    <div className="paper-card p-6 md:p-8 text-center">
      <h3 className="heading-cursive text-2xl md:text-3xl text-brown-600 mb-4">
        Send Hearts Flying! ♡
      </h3>
      <button
        onClick={(e) => { onShower(); onBurst(e.clientX, e.clientY); }}
        className="btn-cute btn-burgundy text-lg"
      >
        <Heart size={20} fill="#fdf2f4" color="#fdf2f4" />
        Let Hearts Fly Across the Screen!
      </button>
      <p className="heading-script text-sm text-brown-400 mt-3">
        Click for a sky full of love ♡
      </p>
    </div>
  );
}

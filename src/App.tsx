import { useState, useCallback } from 'react';
import { config } from '@/config';
import HeartsLayer from '@/components/HeartsLayer';
import OpeningScreen from '@/components/OpeningScreen';
import Navigation from '@/components/Navigation';
import { MainGreeting, LetterSection } from '@/components/Letters';
import Envelopes from '@/components/Envelopes';
import Surprises from '@/components/Surprises';
import ReasonsWhyFavourite from '@/components/ReasonsWhyFavourite';
import BirthdayCountdown from '@/components/BirthdayCountdown';
import MiniExperiences from '@/components/MiniExperiences';
import FinalReveal from '@/components/FinalReveal';
import EndingScreen from '@/components/EndingScreen';

function App() {
  const [started, setStarted] = useState(false);
  const [shower, setShower] = useState<{ count: number; key: number } | null>(null);
  const [burst, setBurst] = useState<{ x: number; y: number; count: number; key: number } | null>(null);

  const triggerShower = useCallback((count = 50) => {
    setShower({ count, key: Date.now() });
  }, []);

  const triggerBurst = useCallback((x: number, y: number, count = 15) => {
    setBurst({ x, y, count, key: Date.now() });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOpen = () => {
    setStarted(true);
    triggerShower(60);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setStarted(false);
      triggerShower(40);
    }, 800);
  };

  const handleReadAgain = () => {
    scrollTo('greeting');
  };

  const navSections = [
    { id: 'greeting', label: 'Welcome' },
    { id: 'first-letter', label: 'First Letter' },
    { id: 'open-when', label: 'Open When…' },
    { id: 'surprises', label: 'Surprises' },
    { id: 'reasons', label: 'Reasons' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'mini-experiences', label: 'Mini Fun' },
    { id: 'final-reveal', label: 'Birthday!' },
    { id: 'ending-screen', label: 'Thank You' },
  ];

  // Replace ${name} in wish jar messages
  const wishJarMessages = config.wishJarMessages.map((m) =>
    m.replace(/\$\{name\}/g, config.bestFriendName)
  );

  // Replace ${name} in quiz explanations
  const quizQuestions = config.quizQuestions.map((q) => ({
    ...q,
    explanation: q.explanation.replace(/\$\{name\}/g, config.bestFriendName),
  }));

  if (!started) {
    return (
      <>
        <HeartsLayer continuous={false} shower={shower} burst={burst} />
        <OpeningScreen bestFriendName={config.bestFriendName} onOpen={handleOpen} />
      </>
    );
  }

  return (
    <>
      <HeartsLayer continuous shower={shower} burst={burst} />
      <Navigation sections={navSections} onReplay={handleReplay} onHeartBurst={() => triggerShower(30)} />

      {/* Main content */}
      <main className="paper-texture min-h-screen">
        <MainGreeting
          heading={config.mainGreeting.heading}
          intro={config.mainGreeting.intro}
          onScrollToLetter={() => scrollTo('first-letter')}
        />

        {config.letterSections.map((section, i) => (
          <LetterSection key={section.id} section={section} index={i} />
        ))}

        <Envelopes envelopes={config.envelopes} />

        <Surprises
          heartCards={config.heartCards}
          wishJarMessages={wishJarMessages}
          secretLetter={config.secretLetter}
          onHeartShower={() => triggerShower(40)}
          onBurst={(x, y) => triggerBurst(x, y)}
        />

        <ReasonsWhyFavourite reasons={config.reasonsWhyFavourite} />

        <BirthdayCountdown
          birthday={config.birthday}
          bestFriendName={config.bestFriendName}
          onBurst={(x, y) => triggerBurst(x, y, 20)}
          onShower={() => triggerShower(50)}
        />

        <MiniExperiences
          quizQuestions={quizQuestions}
          fortuneMessages={config.fortuneMessages}
          starMemories={config.starMemories}
          scratchMessage={config.scratchSurprise}
          oneMoreThing={config.oneMoreThing}
          bestFriendName={config.bestFriendName}
          onBurst={(x, y) => triggerBurst(x, y)}
          onShower={() => triggerShower(35)}
        />

        <FinalReveal
          heading={config.finalReveal.heading}
          paragraphs={config.finalReveal.paragraphs}
          birthday={config.birthday}
          bestFriendName={config.bestFriendName}
          onShower={() => triggerShower(60)}
        />
      </main>

      <EndingScreen
        heading={config.endingScreen.heading}
        subheading={config.endingScreen.subheading}
        paragraph={config.endingScreen.paragraph}
        onReadAgain={handleReadAgain}
        onReplay={handleReplay}
      />
    </>
  );
}

export default App;

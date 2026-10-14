import { Heart, Mail, Cake, Gift, Flower2 } from 'lucide-react';
import Section, { HeartDivider, StickerRow } from './Section';
import type { LetterSection as LetterSectionType } from '@/config';

type MainGreetingProps = {
  heading: string;
  intro: string;
  onScrollToLetter: () => void;
};

export function MainGreeting({ heading, intro, onScrollToLetter }: MainGreetingProps) {
  return (
    <Section id="greeting" bg="cream">
      <div className="text-center">
        <StickerRow stickers={['🎂', '🌸', '🎁', '♡', '🎀', '✨']} />
        <h1 className="heading-cursive text-4xl md:text-6xl lg:text-7xl mb-6">
          {heading}
        </h1>
        <HeartDivider />
        <p className="body-text text-lg md:text-xl text-brown-500 max-w-2xl mx-auto">
          {intro}
        </p>
        <div className="mt-10">
          <button onClick={onScrollToLetter} className="btn-cute btn-brown text-lg">
            <Mail size={20} />
            Read Your Birthday Letter ♡
          </button>
        </div>
        <StickerRow stickers={['♡', '⭐', '🌸', '♡']} />
      </div>
    </Section>
  );
}

type LetterProps = {
  section: LetterSectionType;
  index: number;
};

export function LetterSection({ section, index }: LetterProps) {
  const accentEmoji = ['💌', '🤍', '🌸', '✨', '🌟', '💫', '🎀', '🎂', '🌷', '⭐', '🤗', '♡'];
  const emoji = accentEmoji[index % accentEmoji.length];

  return (
    <Section id={section.id} bg={index % 2 === 0 ? 'cream' : 'cream-dark'}>
      <div className="paper-card p-8 md:p-12">
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">{emoji}</div>
          <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="heading-script text-lg text-brown-400">{section.subtitle}</p>
          )}
          <HeartDivider />
        </div>

        <div className="space-y-5">
          {section.paragraphs.map((para, i) => (
            <div key={i}>
              <p className="body-text text-base md:text-lg leading-relaxed">
                {para}
              </p>
              {i < section.paragraphs.length - 1 && (
                <div className="flex justify-center my-4">
                  <Heart size={12} fill="#d63957" color="#d63957" className="opacity-50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <HeartDivider />
          <p
            className="text-2xl text-brown-500"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
          >
            Forever your bestie ♡
          </p>
        </div>
      </div>
    </Section>
  );
}

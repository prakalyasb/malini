import { type ReactNode } from 'react';
import { useReveal } from '@/hooks';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  bg?: 'cream' | 'cream-dark' | 'transparent';
};

export default function Section({ id, children, className = '', bg = 'cream' }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const bgClass = bg === 'cream-dark' ? 'bg-cream-200' : bg === 'transparent' ? '' : '';
  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-16 md:py-24 px-4 md:px-8 ${bgClass} ${className}`}
    >
      <div className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto`}>
        {children}
      </div>
    </section>
  );
}

export function HeartDivider() {
  return (
    <div className="heart-divider">
      <span className="heart-divider-icon">♡</span>
    </div>
  );
}

export function StickerRow({ stickers }: { stickers: string[] }) {
  return (
    <div className="flex justify-center gap-3 text-2xl my-4">
      {stickers.map((s, i) => (
        <span
          key={i}
          className="animate-float"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

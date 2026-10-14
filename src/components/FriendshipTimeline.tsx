import { Heart, Star, Flower2 } from 'lucide-react';
import Section, { HeartDivider } from './Section';
import type { TimelineMilestone } from '@/config';

type TimelineProps = {
  milestones: TimelineMilestone[];
};

export default function FriendshipTimeline({ milestones }: TimelineProps) {
  return (
    <Section id="friendship-story" bg="cream">
      <div className="text-center mb-12">
        <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
          Our Friendship Story ♡
        </h2>
        <p className="heading-script text-lg text-brown-400">
          Every chapter of us
        </p>
        <HeartDivider />
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brown-300 to-transparent md:-translate-x-1/2" />

        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={m.id}
              className={`relative flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Heart marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-cream-50 border-2 border-brown-300 flex items-center justify-center shadow-md">
                  <Heart size={16} fill="#d63957" color="#d63957" />
                </div>
              </div>

              {/* Content card */}
              <div className={`pl-14 md:pl-0 w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="paper-card p-6 relative">
                  {/* Decorative stars */}
                  <Star
                    size={12}
                    className="absolute top-2 right-2 text-brown-300 opacity-50"
                    fill="#c9a87c"
                    color="#c9a87c"
                  />
                  <Flower2
                    size={12}
                    className="absolute bottom-2 left-2 text-burgundy-300 opacity-40"
                    color="#e08aa8"
                  />

                  <p className="heading-script text-base text-burgundy-500 text-center mb-1">
                    {m.date}
                  </p>
                  <h3 className="heading-cursive text-2xl text-brown-600 text-center mb-3">
                    {m.title}
                  </h3>
                  <p className="body-text text-sm md:text-base leading-relaxed">
                    {m.paragraph}
                  </p>
                </div>
              </div>

              {/* Spacer for other half on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <div className="inline-block paper-card px-6 py-3">
          <p className="heading-script text-xl text-brown-500">
            And many more chapters to come… ♡
          </p>
        </div>
      </div>
    </Section>
  );
}

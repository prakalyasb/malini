import { useState } from 'react';
import { Heart, X } from 'lucide-react';
import Section, { HeartDivider } from './Section';
import type { Envelope as EnvelopeType } from '@/config';

type EnvelopesProps = {
  envelopes: EnvelopeType[];
};

export default function Envelopes({ envelopes }: EnvelopesProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openedEnvelopes, setOpenedEnvelopes] = useState<Set<string>>(new Set());

  const handleOpen = (env: EnvelopeType) => {
    if (openId === env.id) {
      setOpenId(null);
    } else {
      setOpenId(env.id);
      setOpenedEnvelopes((prev) => new Set(prev).add(env.id));
    }
  };

  return (
    <Section id="open-when" bg="cream-dark">
      <div className="text-center mb-10">
        <h2 className="heading-cursive text-3xl md:text-5xl mb-2">
          Open When… ♡
        </h2>
        <p className="heading-script text-lg text-brown-400">
          Little letters for when you need them most
        </p>
        <HeartDivider />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {envelopes.map((env) => {
          const isOpen = openId === env.id;
          const wasOpened = openedEnvelopes.has(env.id);
          return (
            <div key={env.id} className="flex flex-col items-center">
              {/* Envelope */}
              <button
                onClick={() => handleOpen(env)}
                className="relative w-full max-w-xs group"
                aria-label={env.label}
                aria-expanded={isOpen}
              >
                {/* Envelope body */}
                <div
                  className={`envelope-body relative h-36 rounded-lg overflow-hidden transition-all ${
                    isOpen ? 'shadow-lg' : 'shadow-md hover:shadow-lg'
                  }`}
                  style={{
                    background: isOpen ? '#f5e6d3' : '#fefcf9',
                    border: '1px solid #e0d0bc',
                  }}
                >
                  {/* Envelope flap */}
                  <div
                    className={`envelope-flap absolute top-0 left-0 right-0 z-20 ${
                      isOpen ? 'open' : ''
                    }`}
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '50%',
                      borderStyle: 'solid',
                      borderColor: isOpen ? '#e0d0bc transparent transparent transparent' : '#f0e5d8 transparent transparent transparent',
                      borderTopWidth: '70px',
                      borderLeftWidth: '50%',
                      borderRightWidth: '50%',
                    }}
                  />

                  {/* Heart seal */}
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 z-30 transition-opacity"
                    style={{ opacity: isOpen ? 0 : 1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-burgundy-600 flex items-center justify-center shadow-md">
                      <Heart size={14} fill="#fdf2f4" color="#fdf2f4" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                    <p className="heading-script text-base text-brown-600 px-2">
                      {env.label}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-2 right-3 text-2xl z-10 opacity-50">
                    {env.icon}
                  </div>
                </div>
              </button>

              {/* Opened indicator */}
              {wasOpened && !isOpen && (
                <p className="text-xs text-brown-400 mt-2 flex items-center gap-1">
                  <Heart size={10} fill="#d63957" color="#d63957" />
                  Read ♡ Click to reopen
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for opened envelope */}
      {openId && (
        <EnvelopeModal
          envelope={envelopes.find((e) => e.id === openId)!}
          onClose={() => setOpenId(null)}
        />
      )}
    </Section>
  );
}

function EnvelopeModal({ envelope, onClose }: { envelope: EnvelopeType; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="paper-card p-8 md:p-12 max-w-2xl max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brown-400 hover:text-brown-600 transition-colors"
          aria-label="Close letter"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="text-3xl mb-2">{envelope.icon}</div>
          <h3 className="heading-cursive text-3xl text-brown-600">
            {envelope.label}
          </h3>
          <HeartDivider />
        </div>

        <div className="space-y-4">
          {envelope.message.map((para, i) => (
            <p key={i} className="body-text text-base md:text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="heading-script text-xl text-brown-500">
            Forever your bestie ♡
          </p>
        </div>
      </div>
    </div>
  );
}

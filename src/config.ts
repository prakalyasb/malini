// ===================================================================
//  EDITABLE CONFIGURATION — Birthday Website for [BEST FRIEND'S NAME]
// ===================================================================
//
//  ★ HOW TO PERSONALIZE ★
//
//  1. BEST FRIEND'S NAME & BIRTHDAY
//     → Replace "Kutty Maluu" below with your best friend's name.
//     → Replace the birthday date (year, month-index-0, day).
//       Month is 0-indexed: Jan=0, Feb=1, … Dec=11.
//       Example: December 25 = (2025, 11, 25)
//
//  2. YOUR NAME (signature)
//     → Replace "Your Bestie" with your name. It appears in letter
//       signatures and the ending screen.
//
//  3. LETTER CONTENT
//     → Every letter section below has a `title` and `paragraphs`
//       array. Edit the text freely. Add or remove paragraphs.
//
//  4. PHOTOS & CAPTIONS
//     → Scroll to the PHOTO GALLERIES and TIMELINE sections.
//     → Put your image files in:  public/photos/
//     → Then set `src: "/photos/your-filename.jpg"` for each.
//     → Edit captions to match.
//
//  5. MUSIC
//     → Put your audio file at:  public/music/song.mp3
//     → Set `musicSrc` below. If you leave it empty ("") the music
//       player shows gracefully and the site works perfectly.
//
//  6. REASONS / QUIZ / OPEN-WHEN / FORTUNE / HEART-CARDS
//     → All arrays are editable. Add/remove items freely.
//
// =============================================================

// ──────────────  CORE  ──────────────

const bestFriendName: string = "Kutty Maluu";
const yourName: string = "Your Bestie";
// Birthday: December 30, 2025 → year 2025, month 11 (Dec), day 30
const birthday: Date = new Date(2025, 11, 30, 0, 0, 0);

// ──────────────  MAIN GREETING  ──────────────

const mainGreeting = {
  heading: `Advance Happy Birthday, ${bestFriendName} ♡`,
  intro: `Your special day hasn't arrived yet, but I couldn't wait to remind you how special you are to me. This whole little world is my gift to you — every letter, every falling heart — made with so much love, just for you.`,
};

// ──────────────  LETTER SECTIONS  ──────────────
// Each section: { id, title, subtitle, paragraphs[], stickers[] }

type LetterSection = {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
};

const letterSections: LetterSection[] = [
  {
    id: "first-letter",
    title: "A Little Letter for You ♡",
    subtitle: "From my heart to yours",
    paragraphs: [
      `My dearest ${bestFriendName}, where do I even begin? There are a million things I want to say to you, and somehow I know that even a million words won't be enough to capture what you mean to me. But I'm going to try, because you deserve to hear every single one of them.`,
      `Do you know how rare it is to find someone who just gets you? Someone who doesn't need explanations, who reads your silence, who laughs at your terrible jokes, and who stays when the rest of the world walks away? I found that someone in you, and I thank my stars every single day for it.`,
      `You are the person I think of first when something good happens. You are the person I want to tell when the sky looks pretty, when a song hits just right, when I burn my toast, when I'm so happy I could burst. You are my first call, my first text, my first thought — always.`,
      `This birthday, I don't just want to wish you a happy day. I want to wish you a happy life. I want you to wake up every morning and feel the warmth I feel when I think of you. I want you to know — truly, deeply know — that you are loved beyond measure, beyond words, beyond distance, beyond time. So here's my advance birthday wish, wrapped in all the love I have: may you laugh louder, dream bigger, love deeper, and shine brighter than ever before. And may I always, always be right beside you when it happens.`,
    ],
  },
  {
    id: "favourite-person",
    title: "To My Favourite Person",
    subtitle: "Yes, that's you",
    paragraphs: [
      `There's something I've never told you properly. Out of all the people in this entire world — all seven billion of them — you are my favourite. Not because you're perfect (though let's be honest, you're pretty close), but because you're perfectly you.`,
      `You have this way of walking into a room and making it warmer. You have this laugh that's contagious, this smile that could end wars, this heart so big I sometimes wonder how it fits inside one person. You make ordinary days feel like adventures and boring stories feel like legends.`,
      `I want you to remember this, ${bestFriendName}: you are not "too much." You are not "not enough." You are exactly the right amount of everything — the right amount of wild, the right amount of gentle, the right amount of ridiculous, the right amount of beautiful. Don't ever let anyone make you feel like you need to shrink yourself to fit their world.`,
      `If I had to describe what home feels like, I wouldn't describe a place. I'd describe you. Your voice on a bad day. Your texts at 2 AM. Your ridiculous voice notes. The way you say my name. You are my home, and I am so grateful I found you.`,
    ],
  },
  {
    id: "thank-you",
    title: "Thank You for Being Here",
    subtitle: "For everything, always",
    paragraphs: [
      `Thank you. Two small words that carry the weight of a thousand lifetimes. Thank you for staying. For the days when I was easy to love, and especially for the days when I wasn't. Thank you for choosing me, again and again, without ever making me feel like a burden.`,
      `Thank you for the late-night conversations that turned into early-morning confessions. Thank you for the times you listened to the same story three times because I needed to talk about it. Thank you for the hugs I didn't ask for but desperately needed. Thank you for seeing me — really seeing me — and loving what you saw.`,
      `Thank you for believing in me when I forgot how to believe in myself. Thank you for reminding me of my worth when the world made me feel small. Thank you for being my mirror, reflecting back a version of myself that I sometimes can't see on my own.`,
      `I know I don't say it enough, so let me say it now: I am thankful for you. Not just today, not just on your birthday, but every single breath of every single day. You are one of the best things that has ever happened to me, and I will never stop being grateful.`,
    ],
  },
  {
    id: "wishes-for-you",
    title: "Things I Wish for You",
    subtitle: "Every wish I've whispered to the stars",
    paragraphs: [
      `I wish you a life so beautiful it makes your heart ache. I wish you mornings that start with sunshine and evenings that end with peace. I wish you a career that lights you up and people who see your brilliance. I wish you adventures that become stories and stories that become legends.`,
      `I wish you love — the real kind, the kind that's patient and kind and honest. The kind that doesn't make you question, the kind that holds you gently and lets you fly freely. I wish you someone who looks at you the way I know you deserve to be looked at: like you hung every star in the sky.`,
      `I wish you health, strength, and resilience. I wish you the courage to chase your dreams even when they scare you. I wish you the wisdom to know your limits and the bravery to push past them anyway. I wish you the freedom to rest when you need to and the fire to rise when you're ready.`,
      `But most of all, ${bestFriendName}, I wish you happiness. Not the loud, showy kind — the quiet, deep, content kind. The kind that lives in your bones, the kind that doesn't depend on circumstances, the kind that comes from knowing who you are and being at peace with it. You deserve that kind of happiness. You deserve all of it.`,
    ],
  },
  {
    id: "universe",
    title: "You Deserve the Whole Universe",
    subtitle: "And I'd give it to you if I could",
    paragraphs: [
      `Here's the thing about you, ${bestFriendName}: you give so much to everyone around you that sometimes I worry you forget to save something for yourself. You pour love into people like it's an infinite resource, and maybe for you it is — but you deserve to receive just as much as you give.`,
      `If I could, I'd hand you the universe on a silver platter. I'd wrap it in ribbon, add a little card that says "For ${bestFriendName}, because you deserve everything," and watch your eyes light up the way they do when something wonderful happens. I'd give you every star, every sunset, every wish ever made on a shooting star.`,
      `But since I can't do that, I'll do the next best thing: I'll be your person. I'll be the one who reminds you of your worth when you forget. I'll be the one who celebrates your wins like they're my own (because they feel like they are). I'll be the one who holds space for your sadness, your fears, your doubts — and loves you through every single one of them.`,
      `You deserve the whole universe, my love. But until I figure out how to get it for you, I hope my love is enough. Because it's all of it — every piece, every ounce, every beat of my heart — and it's yours, always.`,
    ],
  },
  {
    id: "never-forget",
    title: "Things I Never Want You to Forget",
    subtitle: "Pin this to your heart",
    paragraphs: [
      `I never want you to forget how much you matter. In a world that constantly tries to make us feel small, I need you to remember that your existence changes things. Your presence makes rooms warmer, days brighter, lives better. You are not invisible. You are not forgettable. You are essential.`,
      `I never want you to forget that you are strong. You've been through things people don't know about, and you're still here, still standing, still beautiful. That's not weakness, ${bestFriendName} — that's warrior energy. That's the kind of strength that moves mountains and parts seas.`,
      `I never want you to forget that it's okay to not be okay. You don't have to have it all together. You don't have to be the strong one all the time. You are allowed to fall apart, to cry, to rest, to say "I can't today." And when that happens, I'll be right here — no judgment, no expectations, just love.`,
      `And I never, ever want you to forget this: you are loved. Not because of what you do, but because of who you are. Not because you earned it, but because you are worthy of it. Not conditionally, not partially, not sometimes — completely, endlessly, unconditionally. You are loved, and you always will be.`,
    ],
  },
  {
    id: "friendship-everything",
    title: "Our Friendship Means Everything",
    subtitle: "And I mean it — everything",
    paragraphs: [
      `People talk about friendship like it's a nice addition to life, a bonus feature, a side dish. But you and I both know that what we have isn't a side dish — it's the main course. It's the thing I'd choose first, the thing I'd protect with everything I have, the thing that makes all the other things worth it.`,
      `Our friendship isn't just about the good times (though there have been so many incredible ones). It's about the 3 AM calls when the world feels heavy. It's about the "I'm here" texts that arrive at exactly the right moment. It's about the way you show up — consistently, reliably, beautifully — without ever asking for anything in return.`,
      `Do you know how rare it is to find someone who knows all your flaws and stays anyway? Someone who has seen you at your worst and still thinks you're the best? Someone who fights for you, not with you? That's what you are to me. That's what I hope I am to you.`,
      `I want you to know that this friendship — our friendship — is one of my life's greatest treasures. I will guard it, nurture it, and fight for it. I will choose you, today and every day after, because choosing you is the easiest and best decision I've ever made.`,
    ],
  },
  {
    id: "thousand-reasons",
    title: "A Thousand Reasons to Smile",
    subtitle: "Let me remind you of a few",
    paragraphs: [
      `When the world feels heavy and smiling feels impossible, I want you to remember this letter. Because there are a thousand reasons to smile, ${bestFriendName}, and most of them have your name written all over them.`,
      `There's the way you laugh at your own jokes before you even finish telling them. There's the way you get excited about little things like they're big things. There's the way you text in all caps when you're happy and in heart emojis when you're soft. There's the way you love people — openly, fearlessly, with your whole chest.`,
      `There's the future waiting for you — all the places you'll go, the people you'll meet, the things you'll achieve. There's the version of you that hasn't even been born yet, the one who's going to look back at this moment and say "I made it." There's every sunrise you haven't seen yet and every song that hasn't been your favourite yet.`,
      `And there's me. Always me. A text away, a call away, a heart-beat away. If you ever need a reason to smile and can't find one, just remember: somewhere in this world, there's a person who thinks the sun rises and sets with you. And that person will never stop.`,
    ],
  },
  {
    id: "no-matter-what",
    title: "No Matter What Happens",
    subtitle: "A promise I'll never break",
    paragraphs: [
      `No matter what happens — in life, in love, in the messy beautiful chaos of it all — I need you to know something. I'm not going anywhere. Not today, not tomorrow, not on the hard days, not on the impossible days. I am here, and I am yours, and that is permanent.`,
      `No matter what happens, if you fail, I'll be the one clapping the loudest because you tried. If you fall, I'll be the cushion. If you lose everything, I'll be the thing you still have. If the world turns its back on you, I'll be standing right in front of you, facing you, holding your hands, reminding you who you are.`,
      `No matter what happens, if you need to disappear for a while and find yourself, I'll keep your spot warm. If you come back different, I'll learn the new you and love them just as much. If you never come back at all, I'll love you from wherever I am and send my heart to find you wherever you are.`,
      `This isn't a fair-weather promise, ${bestFriendName}. This is a through-every-storm promise. This is a "no matter what" promise. And if there's one thing you take from this entire website, let it be this: you are never, ever, ever alone. Not as long as I exist.`,
    ],
  },
  {
    id: "new-chapter",
    title: "My Wishes for Your New Chapter",
    subtitle: "For the year ahead and always",
    paragraphs: [
      `A new year of your life is about to begin, and I want to send you into it with all the blessings I can gather. This is your new chapter, ${bestFriendName}, and I already know it's going to be beautiful — because you're the one writing it.`,
      `I wish you courage. The kind that makes you say yes to things that scare you. The kind that makes you walk into rooms like you belong there (because you do). The kind that lets you be yourself, unapologetically, even when it's not the popular thing to be.`,
      `I wish you growth. Not the painful, tearing kind — the blooming kind. The kind where you wake up one day and realize you've become someone you're proud of. The kind where old wounds have healed into wisdom and old fears have turned into fuel.`,
      `I wish you love — for yourself most of all. I wish you the kind of self-love that sets boundaries, that says no without guilt, that treats yourself with the same tenderness you show everyone else. You give so much love to the world; this year, I want you to keep some for yourself. And I wish you adventures — big ones, small ones, unexpected ones that make you feel alive. Happy almost-birthday, my love. This is your year. Go make it extraordinary.`,
    ],
  },
  {
    id: "bad-day",
    title: "If You Ever Have a Bad Day, Read This",
    subtitle: "Save this for when you need it",
    paragraphs: [
      `Hey. If you're reading this, something's wrong. Maybe it's a small something, maybe it's a big something. Maybe you're just tired. Whatever it is, I want you to stop for a second, take a breath, and let me talk to you the way I would if I were right there beside you.`,
      `First: it's going to be okay. Not "okay" in the toxic-positivity way that dismisses your pain. Okay in the real way — the way that means this moment doesn't get to be the end of your story. You have survived every bad day you've ever had. You are 100% at surviving bad days. This one is no different.`,
      `Second: you are not your bad day. You are not your mistakes, your failures, your rejections, your heartbreaks. You are the person who keeps getting up, keeps trying, keeps going. That person is incredible. That person is you. Don't let a hard day convince you otherwise.`,
      `Third: I'm here. Right now, in this moment, I am here. Even if I'm not physically next to you, my love is. Wrap yourself in it like a blanket. Let it hold you up. And when you're ready — not before, only when you're ready — reach out. I'll answer. I always will. Now get some rest, drink some water, be gentle with yourself, and remember: tomorrow is a new page. You get to write it however you want. And I'll be right here, cheering you on, loving you through every single word.`,
    ],
  },
  {
    id: "last-thing",
    title: "One Last Thing I Need to Tell You",
    subtitle: "The most important one",
    paragraphs: [
      `I've said a lot in these letters. I've told you you're loved, you're strong, you're worthy, you're beautiful, you're my favourite person in the world. I've told you I'll be here through everything. I've told you I believe in you. I've told you all the things I want you to remember.`,
      `But there's one more thing. One last thing. The most important thing of all. And it's this: you changed my life, ${bestFriendName}. Before you, I didn't know what it felt like to have a best friend who loved me without conditions. I didn't know friendship could be this deep, this safe, this life-altering. You taught me what real friendship looks like, and you made my life infinitely better just by being in it.`,
      `So thank you. Thank you for being my person. Thank you for every laugh, every tear, every conversation, every silence, every moment. Thank you for being exactly who you are. The world is better because you're in it. My world is better because you're in it. And I am better — kinder, braver, softer, stronger — because I know you.`,
      `Happy advance birthday, my forever favourite person. I love you to the moon, to the stars, to the edge of the universe and back — and then a little bit more. Always and all ways. Forever your bestie ♡`,
    ],
  },
];

// ──────────────  FRIENDSHIP TIMELINE  ──────────────

type TimelineMilestone = {
  id: string;
  date: string;
  title: string;
  paragraph: string;
};

const timelineMilestones: TimelineMilestone[] = [
  {
    id: "how-we-met",
    date: "The Beginning",
    title: "How We Met",
    paragraph:
      "Replace this with the story of how you first met. Was it at school? At a party? Online? Write it in detail — the first impression, the first conversation, the moment you knew this person was going to be special.",
  },
  {
    id: "funniest-moment",
    date: "The Day We Couldn't Stop Laughing",
    title: "Our Funniest Moment",
    paragraph:
      "Write about the time you both laughed so hard you couldn't breathe. The inside joke that was born that day. The kind of laughter that makes your stomach hurt and your cheeks ache.",
  },
  {
    id: "favourite-adventure",
    date: "Our Greatest Adventure",
    title: "Our Favourite Adventure",
    paragraph:
      "Describe the best trip, day out, or adventure you had together. Where did you go? What made it special? What memory from that day still makes you smile?",
  },
  {
    id: "special-conversation",
    date: "The Conversation That Changed Everything",
    title: "A Special Conversation",
    paragraph:
      "Write about a conversation that deepened your bond. Maybe it was late at night. Maybe it was unexpected. Maybe it was the moment you realized this friendship was different from all the rest.",
  },
  {
    id: "inside-jokes",
    date: "The Birth of Our Inside Jokes",
    title: "Our Inside Jokes",
    paragraph:
      "List your inside jokes here. The ones only the two of you understand. The ones that make you laugh in public and confuse everyone around you. The ones that will never stop being funny.",
  },
  {
    id: "unforgettable-day",
    date: "A Day I'll Never Forget",
    title: "An Unforgettable Day",
    paragraph:
      "Write about a specific day that stands out in your memory. What happened? Why does it matter? What about that day made it unforgettable?",
  },
  {
    id: "meaningful-memory",
    date: "The Moment I Knew",
    title: "When I Knew You Were My Forever Friend",
    paragraph:
      "Describe the moment you realized this friendship was for life. Maybe it was something they did for you. Maybe it was a feeling. Maybe it was a thousand small moments that added up to one big certainty.",
  },
];

// ──────────────  OPEN WHEN ENVELOPES  ──────────────

type Envelope = {
  id: string;
  label: string;
  icon: string;
  message: string[];
};

const envelopes: Envelope[] = [
  {
    id: "miss-me",
    label: "Open when you miss me",
    icon: "💌",
    message: [
      `Hey you. If you're opening this, you're missing me, and I want you to know — I miss you too. Always.`,
      `Even when we're apart, you're with me. In every song that reminds me of you, in every joke that only you would get, in every moment that would be better if you were here. You live in my thoughts rent-free, and I never want you to leave.`,
      `Close your eyes and imagine me giving you the biggest hug right now. That's what I'm doing from wherever I am. The distance is temporary, but us? We're permanent. I love you, I miss you, and I'll see you soon. ♡`,
    ],
  },
  {
    id: "feel-sad",
    label: "Open when you feel sad",
    icon: "🫂",
    message: [
      `Oh, ${bestFriendName}. I'm so sorry you're feeling sad. Let me sit with you for a minute, even if it's through this screen.`,
      `Your sadness is valid. Your tears are valid. You don't have to push them away or pretend they're not there. Feel what you need to feel. But while you're feeling, remember this: sadness is a wave, not the ocean. It will pass. It always does. And when it does, I'll be right here, ready to see you smile again.`,
      `You are not alone in this. I am a text, a call, a heartbeat away. Reach out if you need to. Or just sit with this letter and know that somewhere, someone is holding you in their heart. That someone is me. Always. ♡`,
    ],
  },
  {
    id: "need-smile",
    label: "Open when you need to smile",
    icon: "🌈",
    message: [
      `Okay, ${bestFriendName}, I need you to smile. Right now. Even if it's a tiny one. Even if it's forced. Do it for me.`,
      `Think about the time we laughed so hard we couldn't breathe. Think about that ridiculous thing you did that I will never let you live down. Think about the fact that someone in this world loves you so much they built an entire website just to make you smile. (Spoiler: it's me. I did that.)`,
      `You have a smile that could light up the darkest room. Don't waste it. The world needs it. I need it. So smile, my love. The world is better when you do. ♡`,
    ],
  },
  {
    id: "need-hug",
    label: "Open when you need a hug",
    icon: "🤍",
    message: [
      `Consider this letter a hug. A big, warm, tight, "I've got you" hug — the kind that makes everything feel a little more manageable.`,
      `I'm wrapping my arms around you right now. I'm holding you until your breathing slows and your shoulders relax. I'm not letting go until you feel safe. You are safe, ${bestFriendName}. You are held. You are loved.`,
      `Hugs from me are always available, 24/7, no appointment needed. Just open this letter whenever you need one. I'll always be here to hold you. ♡`,
    ],
  },
  {
    id: "doubt-yourself",
    label: "Open when you doubt yourself",
    icon: "⭐",
    message: [
      `Stop. Whatever negative thought is running through your mind right now, I need you to stop it. Because it's wrong.`,
      `You are not inadequate. You are not failing. You are not behind. You are not "not enough." You are ${bestFriendName} — and that is more than enough. That has always been more than enough.`,
      `I know self-doubt is loud sometimes. But my voice is louder. And my voice is telling you this: you are capable, you are brilliant, you are worthy, and you are going to do incredible things. I believe in you so much it's unreasonable. Let my belief carry you when your own falters. ♡`,
    ],
  },
  {
    id: "remember-us",
    label: "Open when you want to remember us",
    icon: "✨",
    message: [
      `Do you remember the first time we met? I do. I remember thinking, "I think this person is going to be important." And I was so, so right.`,
      `Do you remember our first inside joke? Our first adventure? The first time we stayed up talking until the sun came up? The first time we cried together? The first time we said "I love you" and meant it with our whole souls?`,
      `We've built something beautiful, you and I. A friendship that most people only dream of. And I want you to know — I remember every moment. I carry them all. And I will spend the rest of my life making more. ♡`,
    ],
  },
  {
    id: "how-special",
    label: "Open when you need to know how special you are",
    icon: "👑",
    message: [
      `Let me tell you something, ${bestFriendName}. You are special. Not in the "everyone is special" way (though that's also true). In the real way. The specific way. The "I know you and I'm still in awe of you" way.`,
      `You are special because you love without conditions. You are special because you show up even when it's hard. You are special because you make people feel seen and heard and valued. You are special because your heart is the size of a galaxy and you share it freely.`,
      `Don't ever let anyone — including yourself — make you feel ordinary. You are extraordinary. You are one in a million. You are my favourite human being on this entire planet. And I will spend the rest of my life reminding you of that if I have to. ♡`,
    ],
  },
];

// ──────────────  REASONS WHY YOU'RE MY FAVOURITE  ──────────────

const reasonsWhyFavourite: string[] = [
  "Because you make me laugh even when I don't want to.",
  "Because you remember the little things I forget I even said.",
  "Because your hugs feel like home.",
  "Because you never judge me — not even a little.",
  "Because you celebrate my wins like they're your own.",
  "Because you text me at the exact right moment, every time.",
  "Because your laugh is the best sound in the world.",
  "Because you're kind to everyone, even people who don't deserve it.",
  "Because you make ordinary days feel like adventures.",
  "Because you know my coffee order, my mood swings, and my heart.",
  "Because you're the bravest person I know.",
  "Because you dream big and chase those dreams.",
  "Because you have the biggest heart of anyone I've ever met.",
  "Because you're hilarious without even trying.",
  "Because you make me a better person just by being around.",
  "Because you stay — through everything, you stay.",
  "Because you listen, really listen, when I talk.",
  "Because you make me feel understood in a way no one else does.",
  "Because you're beautiful inside and out.",
  "Because you're fiercely loyal to the people you love.",
  "Because you're not afraid to be yourself, always.",
  "Because you forgive quickly and love deeply.",
  "Because you make everyone around you feel important.",
  "Because you handle hard things with so much grace.",
  "Because you're my favourite person to do nothing with.",
  "Because you turn my bad days into okay ones.",
  "Because you believe in me even when I don't believe in myself.",
  "Because you're the best storyteller I know.",
  "Because you make me feel safe enough to be vulnerable.",
  "Because you're my person — the one I'd choose every single time.",
];

// ──────────────  HEART CARDS (compliments/wishes/reminders)  ──────────────

type HeartCard = {
  title: string;
  message: string;
  emoji: string;
};

const heartCards: HeartCard[] = [
  { title: "You Are Loved", message: "More than you know, more than I say, more than words can hold.", emoji: "💖" },
  { title: "You Are Enough", message: "Exactly as you are. No changes needed.", emoji: "🌸" },
  { title: "You Are Strong", message: "You've survived 100% of your bad days. That's a perfect record.", emoji: "💪" },
  { title: "You Are Beautiful", message: "Inside and out, in every way that matters.", emoji: "🌷" },
  { title: "You Are Brave", message: "It takes courage to be yourself. You do it every day.", emoji: "⭐" },
  { title: "You Are Kind", message: "Your kindness changes the world, one person at a time.", emoji: "🤍" },
  { title: "You Matter", message: "Your existence makes the world better. That's a fact.", emoji: "✨" },
  { title: "You Are Inspiring", message: "You make me want to be better just by being you.", emoji: "🌟" },
  { title: "You Are Worthy", message: "Of every good thing. Don't ever doubt that.", emoji: "💫" },
  { title: "You Are Irreplaceable", message: "There is no other you. And I'm so grateful.", emoji: "👑" },
  { title: "You Are Home", message: "To me, you are what home feels like.", emoji: "🏡" },
  { title: "You Are Magic", message: "The way you touch lives is nothing short of magical.", emoji: "🪄" },
];

// ──────────────  WISH JAR  ──────────────

const wishJarMessages: string[] = [
  "I wish you a lifetime of happiness, ${name}.",
  "May every sunrise bring you hope and every sunset bring you peace.",
  "I wish you love that feels like coming home.",
  "May your dreams be bigger than your fears.",
  "I wish you the courage to chase everything you want.",
  "May your heart always be full and your cup always overflow.",
  "I wish you adventures that become your best stories.",
  "May you always know how deeply you are loved.",
  "I wish you a life so beautiful it makes you cry happy tears.",
  "May you never lose your spark, your smile, or your sense of wonder.",
  "I wish you success that feels meaningful and joy that feels endless.",
  "May you always find your way back to yourself, no matter how far you wander.",
];

// ──────────────  FORTUNE COOKIE  ──────────────

const fortuneMessages: string[] = [
  "A beautiful surprise is waiting for you just around the corner.",
  "Your kindness will return to you in the most unexpected ways.",
  "Someone is thinking of you right now and smiling.",
  "The best chapter of your life is about to begin.",
  "Your smile will change someone's world today.",
  "Great things are coming — be ready to receive them.",
  "You are closer to your dreams than you think.",
  "The love you give is coming back to you, multiplied.",
  "Something wonderful is about to happen. Trust it.",
  "You are exactly where you need to be right now.",
];

// ──────────────  FRIENDSHIP QUIZ  ──────────────

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "What do I value most in our friendship?",
    options: ["The memories", "The honesty", "The laughter", "All of the above and more"],
    answer: 3,
    explanation: "Every single part of our friendship is precious to me. I couldn't choose just one!",
  },
  {
    question: "What's the one thing I'd never change about you?",
    options: ["Your sense of humor", "Your kindness", "Your heart", "Everything — you're perfect as you are"],
    answer: 3,
    explanation: "I wouldn't change a single thing about you. You are exactly who you're meant to be.",
  },
  {
    question: "When am I happiest?",
    options: ["When I'm with you", "When I'm sleeping", "When I'm eating", "When I'm traveling"],
    answer: 0,
    explanation: "The moments I spend with you are my favourite moments of all.",
  },
  {
    question: "What do I admire most about you?",
    options: ["Your strength", "Your compassion", "Your courage", "All of it — everything"],
    answer: 3,
    explanation: "Your strength, your compassion, your courage — I admire all of you, always.",
  },
  {
    question: "How long will I love you?",
    options: ["A really long time", "Until the end of the year", "Forever and always", "Until tomorrow"],
    answer: 2,
    explanation: "Forever and always. There's no expiration date on this love, ${name}.",
  },
];

// ──────────────  SECRET HIDDEN LETTER  ──────────────

const secretLetter = {
  title: "You Found the Secret Letter! ♡",
  paragraphs: [
    `You found it. You clicked the tiny heart, and now you're reading the letter I hid inside this website — the one I wasn't sure you'd find, but hoped you would.`,
    `Here's my secret, ${bestFriendName}: sometimes, when I'm having a hard day, I think about you. I think about your laugh, your kindness, the way you make everything better just by existing. And suddenly, the day doesn't feel so hard anymore.`,
    `You are my secret weapon against sadness, my hidden source of joy, my quiet reminder that the world is good. And I wanted you to know that — not on a banner or a headline, but in a hidden letter, found only by someone curious and wonderful enough to click a tiny heart.`,
    `That's you. That's always you. ♡`,
  ],
};

// ──────────────  ONE MORE THING  ──────────────

const oneMoreThing = {
  title: "One More Thing…",
  message:
    "I was going to keep this a secret, but I can't. Here it is: you are, without question, the best thing that ever happened to me. And I will spend the rest of my life making sure you know it. Happy almost-birthday, my love. ♡",
};

// ──────────────  STAR MEMORIES  ──────────────

type StarMemory = {
  title: string;
  message: string;
};

const starMemories: StarMemory[] = [
  { title: "The First Hello", message: "I'll never forget the first time we met. Who knew it would lead to this?" },
  { title: "The Best Day", message: "That one perfect day that I replay in my mind over and over." },
  { title: "The Longest Talk", message: "The conversation that lasted until sunrise and changed everything." },
  { title: "The Loudest Laugh", message: "The moment we laughed so hard we couldn't breathe." },
  { title: "The Quiet Moment", message: "A moment of comfortable silence that said more than words ever could." },
  { title: "The Promise", message: "The day we promised to always be there for each other. I'm keeping that promise." },
];

// ──────────────  SCRATCH SURPRISE  ──────────────

const scratchSurprise = {
  title: "Scratch to Reveal Your Surprise!",
  message:
    "Surprise! Here's your hidden message: You are the most precious person in my life, and this entire website is proof of that. Every letter, every heart, every animation — it's all for you. Because you deserve to feel this loved, every single day. ♡",
};

// ──────────────  FINAL BIRTHDAY REVEAL  ──────────────

const finalReveal = {
  heading: `Happy Early Birthday, My Forever Favourite Person! ♡`,
  paragraphs: [
    `And here we are. The end of this little gift — or rather, the beginning of your birthday celebration. Because even though the day hasn't arrived yet, in my heart, every day is your birthday, ${bestFriendName}. Every day is a celebration of you.`,
    `I made this for you because words on a card didn't feel like enough. I wanted to build something — something you could scroll through, something that would surprise you, something that would hold all the love I have for you in one place. I wanted to give you a world, even if it's a small digital one.`,
    `If you've read every letter, opened every envelope, clicked every button, and smiled at every falling heart, then you've experienced a fraction of what I feel for you. The real thing is bigger, deeper, and more infinite than any website could hold. But I tried. I tried my best to wrap my love in code and creativity and send it to you.`,
    `So here's my final birthday wish, the one that matters most: I wish you a life as beautiful as you are. I wish you a heart as full as the one you've given me. I wish you joy that never ends, love that never fades, and a friendship — our friendship — that never, ever breaks. You deserve every beautiful thing this world has to offer.`,
  ],
};

// ──────────────  ENDING SCREEN  ──────────────

const endingScreen = {
  heading: `Thank You for Being Here! ♡`,
  subheading: `You Are Truly One in a Million!`,
  paragraph:
    `Thank you for walking through this little world I built for you. Thank you for being the kind of person who deserves an entire website of love. Thank you for being my best friend, my favourite human, my forever person. This birthday, and every birthday after it, I want you to remember: you are loved beyond measure, and I will always, always be here. Happy advance birthday, ${bestFriendName}. Here's to a lifetime more of laughter, love, and beautiful moments together.`,
};

// ──────────────  EXPORT  ──────────────

export const config = {
  bestFriendName,
  yourName,
  birthday,
  mainGreeting,
  letterSections,
  timelineMilestones,
  envelopes,
  reasonsWhyFavourite,
  heartCards,
  wishJarMessages,
  fortuneMessages,
  quizQuestions,
  secretLetter,
  oneMoreThing,
  starMemories,
  scratchSurprise,
  finalReveal,
  endingScreen,
};

export type { LetterSection, TimelineMilestone, Envelope, HeartCard, QuizQuestion, StarMemory };
